import DataGrid from "../components/media_types/DataGrid";
import VideoPlayer from "../components/media_types/VideoPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/global_ui_components/ui/tabs';
import { TypographySmall } from "@/global_ui_components/ui/typography";


export const MEDIA_TYPES = {
    SIMULATION: 'simulation',
    VIDEO: 'video',
    DATA_TABLE: 'data_table',
}

export const MEDIA_SWITCH_METHODS = {
    TAB: 'tab',
    CAROUSEL: 'carousel',
}

export function selectMediaRenderComponent(mediaItem) {
    // specified configurations for rendering the media properly
    const mediaConf = mediaItem.metadata || {} // prevents passing undefined when 'conf' is missing

    switch (mediaItem.media_type) {
        case MEDIA_TYPES.VIDEO:
            return (
                <VideoPlayer
                    videoSrc={mediaItem.media_path}
                    loop={mediaConf.loop ? mediaConf.loop : undefined}
                    autoplay={mediaConf.autoplay ? mediaConf.autoplay : undefined}
                    controls={mediaConf.controls ? mediaConf.controls : undefined}
                    buttonLabels={mediaConf.buttonLabels ? mediaConf.buttonLabels : undefined}
                    sliderControls={mediaConf.sliderControls ? mediaConf.sliderControls : undefined}
                    hideControls={mediaConf.hideControls ? mediaConf.hideControls : undefined}
                />
            );
        case MEDIA_TYPES.DATA_TABLE:
            return <DataGrid table={mediaItem.table} />;
        default:
            return null; // TODO: see if we need to inform the user about the error
    }
}


export default function renderMediaWithSwitcherComponent(allMedia, switchMethod = undefined) {
    // no switcher required
    if (allMedia.length === 1) {
        const mediaItem = allMedia[0]
        return (
            <>
                <TypographySmall text={mediaItem.label} />
                {selectMediaRenderComponent(mediaItem)}
            </>
        );
    }
    // select specific switcher
    else switch (switchMethod) {

        case MEDIA_SWITCH_METHODS.TAB:
            /**
             * TODO: the tabs need to be contained within a div that can scroll horizontally
             * in mobile, sometimes the tab names overflow
             */
            return (
                <Tabs defaultValue={0} className="w-full">
                    <TabsList>
                        {allMedia.map((mediaItem, index) => (
                            <TabsTrigger key={mediaItem.id} value={index} className='bg-transparent'>
                                {mediaItem.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {allMedia.map((mediaItem, index) => (
                        <TabsContent key={mediaItem.id} value={index}>
                            {selectMediaRenderComponent(mediaItem)}
                        </TabsContent>
                    ))}
                </Tabs>
            )
        default:
            return null // TODO: see if we need to inform the user about the error
    }
}