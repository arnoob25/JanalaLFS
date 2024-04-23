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
import MediaControls from '../MediaControls';
import { ButtonSecondarySm } from '@/global_ui_components/ui/button';
import { Slider } from '@/global_ui_components/ui/slider';
import { Label } from '@/global_ui_components/ui/label';
import RoundedCornerFrame from '@/global_ui_components/frames/RoundedCornerFrame';
import { responsiveSliderContainer } from '../helpers/mediaControlHelpers';

const VideoPlayer = ({
  videoSrc,
  loop = false,
  controls = { play: true, reset: true, speed: true },
  buttonLabels = { play: 'Play', reset: 'Reset', speed: 'Adjust Speed' },
  sliderControls = { defaultValue: 0, min: 0, max: 100, step: 1 },
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
    <RoundedCornerFrame>
      <video
        ref={videoRef}
        src={videoSrc}
        controls={false}
        className="w-full rounded-lg overflow-hidden"
        muted
        playsInline
        disablePictureInPicture
      />

      {!hideControls ? (
        <MediaControls>
          {controls.play ? <ButtonSecondarySm label={buttonLabels.play} onClick={handlePlay} /> : null}
          {controls.reset ? <ButtonSecondarySm label={buttonLabels.reset} onClick={handleReset} /> : null}
          {controls.speed
            ? <div className={responsiveSliderContainer}>
              <Label>{buttonLabels.speed}</Label>
              <Slider
                defaultValue={[sliderControls.defaultValue]}
                min={sliderControls.min}
                max={sliderControls.max}
                step={sliderControls.step}
                onValueChange={handleSpeedChange}
              />
            </div>
            : null}
        </MediaControls>
      ) : null}
    </RoundedCornerFrame>
  );
};

export default VideoPlayer;