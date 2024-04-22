/**
 * for displaying the required media controls
 * 
 */

import { ButtonSecondarySm } from "@/global_ui_components/ui/button";
import { Label } from "@/global_ui_components/ui/label";
import { Slider } from "@/global_ui_components/ui/slider";


export const MEDIA_CONTROL_TYPES = {
    BUTTON: "button",
    SLIDER: "slider",
};

export const selectMediaControllerComponent = (providedControl) => {
    switch (providedControl.type) {
        case MEDIA_CONTROL_TYPES.BUTTON:
            return (
                <ButtonSecondarySm
                    key={providedControl.label}
                    label={providedControl.label}
                    onClick={providedControl.onClick}
                />
            );
        case MEDIA_CONTROL_TYPES.SLIDER:
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