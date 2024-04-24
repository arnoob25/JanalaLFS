import useMedia from './helpers/hooks/useMediaHook';
import MediaContainerCard from '@/global_ui_components/cards/MediaContainerCard';
import renderMediaWithSwitcherComponent from './helpers/mediaRenderHelpers';


const MediaContainer = ({ inquiry }) => {

  const [allMedia, switchMethod] = useMedia(inquiry)

  return (
    <MediaContainerCard>
      {allMedia && allMedia.length > 0
        ? renderMediaWithSwitcherComponent(allMedia, switchMethod)
        : null}
    </MediaContainerCard>
  );
};

export default MediaContainer;