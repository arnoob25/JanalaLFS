/**
 * A React component that renders a video player with customizable controls.
 *
 * @param {string} videoSrc - The URL or path to the video file.
 * @param {boolean} [loop=false] - Whether the video should loop after it finishes playing.
 * @param {Object} [controls] - An object specifying which controls should be displayed.
 * @param {boolean} [controls.play=true] - Display the play/pause control.
 * @param {boolean} [controls.reset=true] - Display the reset control.
 * @param {boolean} [controls.speed=true] - Display the speed control.
 * @param {Object} [buttonLabels] - An object specifying custom labels for control buttons.
 * @param {string} [buttonLabels.play='Play'] - Custom label for the play/pause button.
 * @param {string} [buttonLabels.reset='Reset'] - Custom label for the reset button.
 * @param {string} [buttonLabels.speed='Adjust Speed'] - Custom label for the speed control.
 * @param {Object} [sliderControls] - An object specifying settings for the speed control slider.
 * @param {number} [sliderControls.defaultValue=0] - Default value for the speed control slider.
 * @param {number} [sliderControls.min=0] - Minimum value for the speed control slider.
 * @param {number} [sliderControls.max=100] - Maximum value for the speed control slider.
 * @param {number} [sliderControls.step=1] - Step size for the speed control slider.
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

const defaultButtonLabels = { play: 'Play', reset: 'Reset', speed: 'Adjust Speed' };
const defaultSliderControls = { defaultValue: 0, min: 0, max: 100, step: 1 };

const VideoPlayer = ({
  videoSrc,
  loop = false,
  controls = { play: true, reset: true, speed: true },
  buttonLabels = {},
  sliderControls = {},
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

  const handlePlay = () => {videoRef.current.play()};

  const handlePause = () => {videoRef.current.pause()};

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
      {!hideControls && (
        <MediaControls>
          {controls.play && (
            <ButtonSecondarySm
              label={buttonLabels.play || defaultButtonLabels.play}
              onClick={handlePlay}
            />
          )}
          {controls.reset && (
            <ButtonSecondarySm
              label={buttonLabels.reset || defaultButtonLabels.reset}
              onClick={handleReset}
            />
          )}
          {controls.speed && (
            <div className={responsiveSliderContainer}>
              <Label>{buttonLabels.speed || defaultButtonLabels.speed}</Label>
              <Slider
                defaultValue={[
                  sliderControls.defaultValue || defaultSliderControls.defaultValue
                ]}
                min={sliderControls.min || defaultSliderControls.min}
                max={sliderControls.max || defaultSliderControls.max}
                step={sliderControls.step || defaultSliderControls.step}
                onValueChange={handleSpeedChange}
              />
            </div>
          )}
        </MediaControls>
      )}
    </RoundedCornerFrame>
  );
};

export default VideoPlayer;