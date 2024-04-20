import React, { useRef, useEffect } from 'react';
import MediaControl from '../MediaControl';
import { ButtonSecondarySm } from '@/global_ui_components/ui/button';
import { Slider } from '@/global_ui_components/ui/slider';
import { Label } from '@/global_ui_components/ui/label';

const VideoPlayer = ({ videoSrc, loop = false, hideControls = false, autoplay = false }) => {
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
    <div className='p-2'>
      <video
        ref={videoRef}
        src={videoSrc}
        controls={false}
        style={{ width: '100%', maxWidth: '800px' }}
        muted playsInline disablePictureInPicture
      />
      {!hideControls ? (
        <MediaControl>
          <ButtonSecondarySm label={'Play'} onClick={handlePlay} />
          <ButtonSecondarySm label={'Reset'} onClick={handleReset} />
          <div className="flex items-center gap-2 flex-1 w-100%">
            <Label>Speed:</Label>
            <Slider defaultValue={[10]} min={2} max={100} step={2} onValueChange={handleSpeedChange} />
          </div>
        </MediaControl>
      ) : null}
    </div>
  );
};

export default VideoPlayer;