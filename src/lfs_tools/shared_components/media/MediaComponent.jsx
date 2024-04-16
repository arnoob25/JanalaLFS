// MediaComponent.js
import snakeGame from '@/lfs_tools/guided_learning_activity/test_data/snakeGame';
import MinimalJsSandbox from './sandboxes/MinimalJsSandbox';

const MediaComponent = ({ inquiry }) => {

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
    <div className="border-2 border-var(--border) rounded-xl">
      <MinimalJsSandbox
        simCode={snakeGame}
      />
    </div>
  );
};

export default MediaComponent;
