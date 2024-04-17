export default function snakeGame(canvasRef) {
    // Get the canvas element and its 2D context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Game constants
    const GRID_SIZE = 20;
    const CELL_SIZE = canvas.width / GRID_SIZE;
    let SNAKE_SPEED = 200; // Milliseconds between snake movements

    // Snake state
    let snake = [{ x: 5, y: 5 }];
    let direction = { x: 1, y: 0 };
    let food = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
    let lastMoveTime = Date.now();
    let isPlaying = false;
    let score = 0;

    // Game loop function
    function gameLoop() {
        if (!isPlaying) return;

        const currentTime = Date.now();
        if (currentTime - lastMoveTime >= SNAKE_SPEED) {
            lastMoveTime = currentTime;
            moveSnake();
            checkCollisions();
            drawGame();
        }

        requestAnimationFrame(gameLoop);
    }

    // Handle keyboard input
    document.addEventListener('keydown', (event) => {
        if (!isPlaying) return;
        switch (event.key) {
            case 'ArrowUp':
                if (direction.y !== 1) direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (direction.y !== -1) direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (direction.x !== 1) direction = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x !== -1) direction = { x: 1, y: 0 };
                break;
        }
    });

    // Snake movement and collision detection
    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score++;
            food = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
        } else {
            snake.pop();
        }
    }

    function checkCollisions() {
        const head = snake[0];
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            resetGame();
        }
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                resetGame();
            }
        }
    }

    function resetGame() {
        snake = [{ x: 5, y: 5 }];
        direction = { x: 1, y: 0 };
        food = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
        lastMoveTime = Date.now();
        isPlaying = false;
        score = 0;
    }

    function drawGame() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the snake
        ctx.fillStyle = 'green';
        snake.forEach((segment) => {
            ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        });

        // Draw the food
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        // Draw the score
        ctx.font = '16px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`Score: ${score}`, 10, 20);
    }

    function drawThumbnail() {
        const img = new Image();
        img.src = 'https://i.imgur.com/PEsbFiq.jpeg';
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }

    const controls = [
        {
            type: 'button',
            label: isPlaying ? 'Pause' : 'Play',
            onClick: () => {
                isPlaying = !isPlaying;
                if (isPlaying) {
                    gameLoop();
                }
            }
        },
        {
            type: 'button',
            label: 'Retry',
            onClick: () => {
                resetGame();
                gameLoop();
            }
        },
        {
            type: 'slider',
            label: 'Speed',
            defaultValue: 10,
            max: 100,
            step: 1,
            onChange: (newSpeed) => {
                SNAKE_SPEED = 200 - (newSpeed * 2);
            }
        }
    ];

    const messages = [
        { type: 'caption', text: 'Snake Game' },
        { type: 'score', text: `Score: ${score}` },
        { type: 'finalMessage', text: isPlaying ? '' : 'Game Over' },
    ];

    // Draw the thumbnail if the game is not playing

    return [controls, messages, isPlaying];
}