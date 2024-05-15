import { Input } from "@/global_ui_components/ui/input"
import { Label } from "@/global_ui_components/ui/label"
import { TextareaWithLabel } from "@/global_ui_components/ui/textarea"


const StepDetailForm = () => {
    return (
        <>
            <div>
                <Label htmlFor={'goal'}>Goal</Label>
                <Input type='text' id='goal' placeholder='goal of the step' />
            </div>
            <div>
                <TextareaWithLabel label="Narrative" placeholder="Describe how the narrative will unfold in the step" />
            </div>
        </>
    )
}

export default StepDetailForm