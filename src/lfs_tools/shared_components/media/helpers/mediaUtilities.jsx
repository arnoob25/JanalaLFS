import { ButtonSecondarySm } from "@/global_ui_components/ui/button";
import { Label } from "@/global_ui_components/ui/label";
import { Slider } from "@/global_ui_components/ui/slider";


// for displaying specific media selector
export const SELECTOR_TYPES = {
    TAB: 'tab',
    CAROUSEL: 'carousel',
}

export const selectSelectionMethod = (selectionMethod) => {
    switch (selectionMethod) {
        case SELECTOR_TYPES.TAB:
            break;
        default:
            return null;
    }
}


// for displaying the required media controls
export const CONTROL_TYPES = {
    BUTTON: "button",
    SLIDER: "slider",
};

export const selectControlMethod = (providedControl) => {
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