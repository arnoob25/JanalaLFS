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

/**
 * places sliders vertically if they don't fit in the row
 * used in other places for consistent styling
 */
export const responsiveSliderContainer = "w-full flex flex-1 gap-2 items-center" 

export default function selectMediaControllerComponent(providedControl) {
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
                    className={responsiveSliderContainer}
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
}