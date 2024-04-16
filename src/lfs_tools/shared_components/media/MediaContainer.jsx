// MediaComponent.js
import snakeGame from '@/lfs_tools/guided_learning_activity/test_data/snakeGame';
import BaseJsSandbox from './media_components/BaseJsSandbox';
import MediaContainerCard from '@/global_ui_components/cards/MediaContainerCard';

const MediaContainer = ({ inquiry }) => {



  /**
   * TODO: fetch the media.
   * if more than one exists, 
   *    check the metadata and render appropriate media selectors 
   *        (tabs/ carousel/ side-by-side)
   */

  /**
   * check media type for each type of media and 
   *    select appropriate component to display them
   */



  return (
    <MediaContainerCard>
      <BaseJsSandbox
        simCode={snakeGame}
      />
    </MediaContainerCard>
  );
};

export default MediaContainer;
