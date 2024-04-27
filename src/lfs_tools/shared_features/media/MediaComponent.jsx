import useMedia from './helpers/hooks/useMediaHook';
import MediaContainerCard from '@/global_ui_components/cards/MediaContainerCard';
import renderMediaWithSwitcherComponent from './helpers/mediaRenderHelpers';


const MediaComponent = ({ inquiry }) => {

  const [allMedia, switchMethod] = useMedia(inquiry)

  return (

    <>
      {allMedia && allMedia.length > 0
        ? <MediaContainerCard>
          {renderMediaWithSwitcherComponent(allMedia, switchMethod)}
        </MediaContainerCard>
        : null}
    </>

  );
};

export default MediaComponent;