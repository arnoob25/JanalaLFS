import { useRef } from 'react';
import useSimulation from '../helpers/useSimulationHook';
import { selectMediaControllerComponent } from '../helpers/mediaUtilities';
import MediaControl from '../MediaControl';


const BaseJsSandbox = ({ simCode }) => {
  const canvasRef = useRef(null);
  const [isRunning, exposedControls, exposedMessages] = useSimulation(simCode, canvasRef);

  const simControls = exposedControls.map(
    exposedControl => selectMediaControllerComponent(exposedControl)
  );

  return (
    <div className='p-2'>
      <canvas ref={canvasRef} className="w-full h-full p-2" />

      {simControls.length > 0
        ? <MediaControl controls={simControls} />
        : null
      }
    </div>
  );
};

export default BaseJsSandbox;