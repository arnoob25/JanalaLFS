import MediaContainerCard from '@/global_ui_components/cards/MediaContainerCard';
import VideoPlayer from './media_components/VideoPlayer';
import DataGrid from './media_components/DataGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/global_ui_components/ui/tabs';
import { MEDIA, MEDIA_TYPES } from '@/lfs_tools/guided_learning_activity/test_data/test_db';
import { useEffect, useState } from 'react';

const MediaContainer = ({ inquiry }) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(undefined);
  const [mediaType, setMediaType] = useState(undefined)

  useEffect(() => {
    let mediaIndex = undefined;
    MEDIA.forEach((item, index) => {
      if (item.inquiry === inquiry.id) {
        mediaIndex = index;
      }
    });
    if (mediaIndex !== undefined) {
      setSelectedMediaIndex(mediaIndex);
    }

    let type = undefined

    switch (inquiry.media_type) {
      case MEDIA_TYPES.VIDEO:
        type = 'sims'
        break
      case MEDIA_TYPES.DATA_TABLE:
        type = 'data'
        break
      default:
        break
    }

    setMediaType(type)

  }, [inquiry]);

  const media = selectedMediaIndex !== undefined ? MEDIA[selectedMediaIndex][mediaType] : [];

  const RenderMedia = (mediaItem) => {
    switch (inquiry.media_type) {
      case MEDIA_TYPES.VIDEO:
        return (
          <VideoPlayer
            videoSrc={mediaItem.src}
            loop={mediaItem.loop ? mediaItem.loop : undefined}
            autoplay={mediaItem.autoplay ? mediaItem.autoplay : undefined}
            controls={mediaItem.controls ? mediaItem.controls : undefined}
            hideControls={mediaItem.hideControls ? mediaItem.hideControls : undefined}
          />
        );
      case MEDIA_TYPES.DATA_TABLE:
        return <DataGrid columns={mediaItem.columns} data={mediaItem.data} />;
      default:
        return null;
    }
  };

  return (
    <MediaContainerCard>
      <Tabs defaultValue={0} className="w-full">
        <TabsList>
          {media.map((mediaItem, index) => (
            <TabsTrigger key={index} value={index}>
              {mediaItem.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {media.map((mediaItem, index) => (
          <TabsContent key={index} value={index}>
            {RenderMedia(mediaItem)}
          </TabsContent>
        ))}
      </Tabs>
    </MediaContainerCard>
  );
};

export default MediaContainer;