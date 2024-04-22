import { useRef } from 'react';
import useSimulation from '../helpers/hooks/useSimulationHook';
import MediaControl from '../MediaControl';
import { selectMediaControllerComponent } from '../helpers/utils/mediaControls';


const BaseJsSandbox = ({ simCode }) => {
  const canvasRef = useRef(null);
  const [isRunning, exposedControls, exposedMessages] = useSimulation(simCode, canvasRef);

  const simControls = exposedControls.map(
    exposedControl => selectMediaControllerComponent(exposedControl)
  );

  return (
    <div className='rounded-xl'>
      <canvas ref={canvasRef} className="w-full h-full p-2" />

      {simControls.length > 0
        ? <MediaControl>{simControls}</MediaControl>
        : null}
    </div>
  );
};

export default BaseJsSandbox;