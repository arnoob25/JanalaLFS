export default function snakeGame(canvasRef) {
    // Get the canvas element and its 2D context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Game constants
    const GRID_SIZE = 20;
    const CELL_SIZE = canvas.width / GRID_SIZE;
    const SNAKE_SPEED = 200; // Milliseconds between snake movements

    // Snake state
    let snake = [{ x: 5, y: 5 }];
    let direction = { x: 1, y: 0 };
    let food = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
    let lastMoveTime = Date.now();

    // Game loop
    function gameLoop() {
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
    }

    // Start the game loop
    gameLoop();

    return []
}