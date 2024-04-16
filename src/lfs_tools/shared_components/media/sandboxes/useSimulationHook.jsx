import { useState, useEffect } from 'react';


function useSimulation(simCode, canvasRef) {
    const [controls, setControls] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (simCode && canvasRef.current) {
            const [simulationControls, simulationMessages] = simCode(canvasRef);
            setControls(simulationControls);
            setMessages(simulationMessages);
        }
    }, [simCode, canvasRef]);

    return [controls, messages];
}

export default useSimulation;