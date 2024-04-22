/**
 * A React component that renders a video player with customizable controls.
 *
 * @param {string} videoSrc - The URL or path to the video file.
 * @param {boolean} [loop=false] - Whether the video should loop after it finishes playing.
 * @param {Object} [controls] - An object specifying which controls should be displayed.
 * @param {boolean} [controls.play=true] - Whether to display the play/pause control.
 * @param {boolean} [controls.reset=true] - Whether to display the reset control.
 * @param {boolean} [controls.speed=true] - Whether to display the speed control.
 * @param {boolean} [hideControls=false] - Whether to hide all controls.
 * @param {boolean} [autoplay=false] - Whether the video should start playing automatically.
 * @returns {JSX.Element} The rendered VideoPlayer component.
 */

import { useRef, useEffect } from 'react';
import MediaControl from '../MediaControl';
import { ButtonSecondarySm } from '@/global_ui_components/ui/button';
import { Slider } from '@/global_ui_components/ui/slider';
import { Label } from '@/global_ui_components/ui/label';

const VideoPlayer = ({
  videoSrc,
  loop = false,
  controls = { play: true, reset: true, speed: true },
  hideControls = false,
  autoplay = false
}) => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.loop = loop;

    if (autoplay) {
      video.play();
    }
  }, [loop, autoplay]);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleReset = () => {
    videoRef.current.currentTime = 0;
    handlePause();
  };

  const handleSpeedChange = (value) => {
    const playbackRate = value[0] / 10;
    videoRef.current.playbackRate = playbackRate;
  };

  return (
    <div className='rounded-xl'>
      <video
        ref={videoRef}
        src={videoSrc}
        controls={false} // hides player settings
        className='w-full'
        muted playsInline disablePictureInPicture // so that the browser allows autoplay
      />

      {
        /**
         *  TODO: enable configuring the slider. For example, specifying the max, min and steps.
         */
      }
      {!hideControls ? (
        <MediaControl>
          {controls.play ? <ButtonSecondarySm label={'Simulate'} onClick={handlePlay} /> : null}
          {controls.reset ? <ButtonSecondarySm label={'Reset'} onClick={handleReset} /> : null}
          {controls.speed
            ? <div className="flex items-center gap-2 flex-1 w-full">
                <Label>Speed:</Label>
                <Slider defaultValue={[10]} min={0} max={100} step={1} onValueChange={handleSpeedChange} />
              </div>
            : null}
        </MediaControl>
      ) : null}
    </div>
  );
};

export default VideoPlayer;