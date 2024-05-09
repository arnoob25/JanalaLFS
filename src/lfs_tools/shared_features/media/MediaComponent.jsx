import MediaContainerCard from '@/global_ui_components/cards/MediaContainerCard';
import renderMediaWithSwitcherComponent from './helpers/mediaRenderHelpers';
import { fetchAllMedia } from "@/lfs_tools/guided_learning_activity/student_end/helpers/queryHelpers";
import { useQuery } from "@tanstack/react-query";


const MediaComponent = ({ inquiry }) => {

  const { data: allMedia } = useQuery({
    queryKey: ['allMedia', inquiry.id],
    queryFn: () => fetchAllMedia(inquiry.id)
  })
  const switchMethod = inquiry.media_switch_method


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