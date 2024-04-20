import MediaContainerCard from '@/global_ui_components/cards/MediaContainerCard';
import VideoPlayer from './media_components/VideoPlayer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/global_ui_components/ui/tabs';
import { MEDIA } from '@/lfs_tools/guided_learning_activity/test_data/test_db';
import { useEffect, useState } from 'react';

const MediaContainer = ({ inquiry }) => {

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(undefined)

  useEffect(() => {
    let mediaIndex = undefined
    MEDIA.forEach((item, index) => {
      if (item.inquiry === inquiry.id) {
        mediaIndex = index
      }
    })

    if (mediaIndex !== undefined) {
      setSelectedMediaIndex(mediaIndex)
    }
  }, [inquiry])

  const videos = selectedMediaIndex !== undefined ? MEDIA[selectedMediaIndex]['sims'] : []

  return (
    <MediaContainerCard>
      <Tabs defaultValue={0} className="w-full">
        <TabsList>
          {videos.map((video, index) => (
            <TabsTrigger key={index} value={index}>
              {video.Label}
            </TabsTrigger>
          ))}
        </TabsList>
        {videos.map((video, index) => (
          <TabsContent key={index} value={index}>
            <VideoPlayer
              videoSrc={video.src}
              loop={video.loop ? video.loop : undefined}
              autoplay={video.autoplay ? video.autoplay : undefined}
              hideControls={video.hideControls ? video.hideControls : undefined}
            />
          </TabsContent>
        ))}
      </Tabs>
    </MediaContainerCard>
  );
};

export default MediaContainer;