import DataGrid from "../media_components/DataGrid";
import VideoPlayer from "../media_components/VideoPlayer";
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
    const mediaConf = mediaItem.conf || {} // prevents passing undefined when 'conf' is missing

    switch (mediaItem.type) {
        case MEDIA_TYPES.VIDEO:
            return (
                <VideoPlayer
                    videoSrc={mediaItem.src}
                    loop={mediaConf.loop ? mediaConf.loop : undefined}
                    autoplay={mediaConf.autoplay ? mediaConf.autoplay : undefined}
                    controls={mediaConf.controls ? mediaConf.controls : undefined}
                    buttonLabels={mediaConf.buttonLabels ? mediaConf.buttonLabels : undefined}
                    sliderControls={mediaConf.sliderControls ? mediaConf.sliderControls : undefined}
                    hideControls={mediaConf.hideControls ? mediaConf.hideControls : undefined}
                />
            );
        case MEDIA_TYPES.DATA_TABLE:
            return <DataGrid columns={mediaItem.columns} data={mediaItem.data} />;
        default:
            return null; // TODO: see if we need to inform the user about the error
    }
}


export default function renderMediaWithSwitcherComponent(allMedia, switchMethod = undefined) {
    if (allMedia.length === 1) {
        const mediaItem = allMedia[0]
        return (
            <>
                <TypographySmall text={mediaItem.label} />
                {selectMediaRenderComponent(mediaItem)}
            </>
        );
    }
    switch (switchMethod) {
        /**
          * TODO: the tabs need to be contained within a div that can scroll horizontally
          * in mobile, sometimes the tab names overflow
          */
        case MEDIA_SWITCH_METHODS.TAB:
            return (
                <Tabs defaultValue={0} className="w-full">
                    <TabsList>
                        {allMedia.map((mediaItem, index) => (
                            <TabsTrigger key={index} value={index} className='bg-transparent'>
                                {mediaItem.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {allMedia.map((mediaItem, index) => (
                        <TabsContent key={index} value={index}>
                            {selectMediaRenderComponent(mediaItem)}
                        </TabsContent>
                    ))}
                </Tabs>
            )
        default:
            return null // TODO: see if we need to inform the user about the error
    }
}