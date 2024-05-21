import { TextInput } from "@/global_ui_components/form/TextInput"


const StepDetailForm = () => {
    return (
        <>
            <TextInput fieldName='stepGoal' label='Goal' placeholder='Goal of the step' />
            <TextInput textArea fieldName='stepNarrative' label='Narrative' placeholder='Describe how the narrative will unfold in the step' />
        </>
    )
}

export default StepDetailForm