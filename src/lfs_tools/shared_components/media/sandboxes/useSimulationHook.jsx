import { useState, useEffect } from 'react';

function useSimulation(simCode, canvasRef) {
    const [controls, setControls] = useState([]);
    const [messages, setMessages] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (simCode && canvasRef.current) {
            const [simulationControls, simulationMessages, simulationIsRunning] = simCode(canvasRef);
            setControls(simulationControls);
            setMessages(simulationMessages);
            setIsRunning(simulationIsRunning);
        }
    }, [simCode, canvasRef]);

    return [isRunning, controls, messages];
}

export default useSimulation;