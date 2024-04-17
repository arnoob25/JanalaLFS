import { ButtonSecondarySm } from "@/global_ui_components/ui/button";
import { Label } from "@/global_ui_components/ui/label";
import { Slider } from "@/global_ui_components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/global_ui_components/ui/tabs';

// for displaying specific media selector
export const MEDIA_SWITCH_TYPE = {
    TAB: 'tab',
    CAROUSEL: 'carousel',
}

export async function dynamicallyImport(uri) {
    const module = await import(uri);
    console.log(module.default);
    return module.default;
}

export const selectMediaSwitcherComponent = (selectionMethod) => {
    switch (selectionMethod) {
        case MEDIA_SWITCH_TYPE.TAB:
            return (
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">

                    </TabsContent>
                    <TabsContent value="password">
                        <BaseJsSandbox
                            simCode={games[1]}
                        />
                    </TabsContent>
                </Tabs>
            )
        default:
            return null;
    }
}


// for displaying the required media controls
export const CONTROL_TYPES = {
    BUTTON: "button",
    SLIDER: "slider",
};

export const selectMediaControllerComponent = (providedControl) => {
    switch (providedControl.type) {
        case CONTROL_TYPES.BUTTON:
            return (
                <ButtonSecondarySm
                    key={providedControl.label}
                    label={providedControl.label}
                    onClick={providedControl.onClick}
                />
            );
        case CONTROL_TYPES.SLIDER:
            return (
                <div
                    key={providedControl.label}
                    className="flex items-center gap-2 flex-1 w-100%"
                >
                    <Label>{providedControl.label}:</Label>
                    <Slider
                        defaultValue={[providedControl.defaultValue]}
                        max={providedControl.max}
                        step={providedControl.step}
                        onChange={providedControl.onChange}
                    />
                </div>
            );
        default:
            return null;
    }
};


// for displaying provided messages
export const MESSAGE_TYPES = {
    CAPTION: "caption",
    TRACKED_INFO: "tracked_info",
    GREETING: "greeting",
    ALERT: "alert",
    ERROR: 'error',
    SUCCESS: 'success',
    FAREWELL: 'farewell',
};

export const displayMessage = (providedMessage) => {
    switch (providedMessage.type) {
        case MESSAGE_TYPES.CAPTION:
            return { caption: providedMessage.text }
        default:
            return null;
    }
};