import { TextInput } from "@/global_ui_components/form/TextInput"
import { ItemDetailContext } from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardForm"
import { useContext } from "react"


const StepDetailFields = () => {
    const { field, fieldItemNamePrefix, selectedItemId } = useContext(ItemDetailContext)

    if (field.itemId !== selectedItemId) return null

    return (<>
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