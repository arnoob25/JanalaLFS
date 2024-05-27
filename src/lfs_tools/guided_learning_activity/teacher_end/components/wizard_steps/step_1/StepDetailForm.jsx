import { TextInput } from "@/global_ui_components/form/TextInput"
import { TypographyP } from "@/global_ui_components/ui/typography"


const StepDetailForm = ({ step }) => {
    return (
        <>{step
            ? <>
                <TextInput fieldName='stepGoal' label='Goal' placeholder='Goal of the step' />
                <TextInput textArea fieldName='stepNarrative' label='Narrative' placeholder='Describe how the narrative will unfold in the step' />
            </>
            : <TypographyP muted text='Add a new step, or select a step to modify.' />
        }</>
    )
}

export default StepDetailForm