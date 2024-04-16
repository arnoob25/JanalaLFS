import { useRef } from 'react';
import useSimulation from './useSimulationHook';
import { selectControlComponent } from '../controls/mediaControls';
import { Separator } from '@/global_ui_components/ui/separator';


const MinimalJsSandbox = ({ simCode }) => {
  const canvasRef = useRef(null);
  const [isRunning, exposedControls, exposedMessages] = useSimulation(simCode, canvasRef);

  const simControls = exposedControls.map((exposedControl) => {
    return selectControlComponent(exposedControl);
  });

  return (
    <div className='p-2'>
      <canvas ref={canvasRef} className="w-full h-full" />

      <div className="mt-2 flex flex-wrap flex-auto mr-auto gap-1 md:gap-2 items-center">
        <Separator />
        {simControls}
      </div>
    </div>
  );
};

export default MinimalJsSandbox;