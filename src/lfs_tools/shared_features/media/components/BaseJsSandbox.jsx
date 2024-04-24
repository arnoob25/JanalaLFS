import { useRef } from 'react';
import useSimulation from '../helpers/hooks/useSimulationHook';
import selectMediaControllerComponent from '../helpers/mediaControlHelpers';
import MediaControls from './MediaControls';
import RoundedCornerFrame from '@/global_ui_components/frames/RoundedCornerFrame';


const BaseJsSandbox = ({ simCode }) => {
  const canvasRef = useRef(null);
  const [isRunning, exposedControls, exposedMessages] = useSimulation(simCode, canvasRef);

  const simControls = exposedControls.map(
    exposedControl => selectMediaControllerComponent(exposedControl)
  );

  return (
    <RoundedCornerFrame>
      <canvas ref={canvasRef} className="w-full h-full" />

      {simControls.length > 0
        ? <MediaControls>{simControls}</MediaControls>
        : null}
    </RoundedCornerFrame>
  );
};

export default BaseJsSandbox;