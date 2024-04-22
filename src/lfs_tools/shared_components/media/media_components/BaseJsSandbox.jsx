import { useRef } from 'react';
import useSimulation from '../helpers/hooks/useSimulationHook';
import { selectMediaControllerComponent } from '../helpers/utils/mediaControls';
import MediaControl from '../MediaControl';
import RoundedCornerFrame from '@/global_ui_components/frames/RoundedCornerFrame';


const BaseJsSandbox = ({ simCode }) => {
  const canvasRef = useRef(null);
  const [isRunning, exposedControls, exposedMessages] = useSimulation(simCode, canvasRef);

  const simControls = exposedControls.map(
    exposedControl => selectMediaControllerComponent(exposedControl)
  );

  return (
    <RoundedCornerFrame>
      <canvas ref={canvasRef} className="w-full h-full p-2" />

      {simControls.length > 0
        ? <MediaControl>{simControls}</MediaControl>
        : null
      }
    </RoundedCornerFrame>
  );
};

export default BaseJsSandbox;