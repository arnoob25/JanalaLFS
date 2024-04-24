import { useState, useEffect } from 'react';

function useSimulation(simCode, canvasRef) {
    const [controls, setControls] = useState([]);
    const [messages, setMessages] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (typeof simCode === 'function' && canvasRef.current) {
            const simulationResult = simCode(canvasRef);
            setControls(simulationResult.controls);
            setMessages(simulationResult.messages);
            setIsRunning(simulationResult.isRunning);
        }
    }, [simCode, canvasRef]);

    return [isRunning, controls, messages];
}

export default useSimulation;