import { TextInput } from "@/global_ui_components/form/TextInput"


const StepDetailFields = (fieldItemNamePrefix) => {

    return (
        <>
            <TextInput
                fieldName={`${fieldItemNamePrefix}.stepGoal`}
                label='Goal'
                placeholder='Goal of the step'
            />
            <TextInput textArea
                fieldName={`${fieldItemNamePrefix}.stepNarrative`}
                label='Narrative'
                placeholder='Describe how the narrative will unfold in the step'
            />
        </>)
}

export default StepDetailFields



