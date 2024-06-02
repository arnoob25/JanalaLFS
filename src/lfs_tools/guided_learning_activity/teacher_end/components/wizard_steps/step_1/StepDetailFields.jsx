import FallbackText from "@/global_ui_components/fallbacks/FallbackText"
import { TextInput } from "@/global_ui_components/form/TextInput"
import { WizardFocusAreaContext } from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardBody"
import { useContext } from "react"


const StepDetailFields = () => {
    const { fields, fieldArrayName, selectedItemId } = useContext(WizardFocusAreaContext)

    return (<>
        {fields?.length > 0
            ? <>{selectedItemId
                ? <>{fields?.map((field, index) => {
                    if (field.itemId !== selectedItemId) return null

                    const fieldItemNamePrefix = `${fieldArrayName}.${index}`

                    return (
                        <div key={field.id}>
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
                        </div>
                    )
                })}</>

                : <FallbackText compact text='Expand an item to modify it' />}</>

            : <FallbackText text='Add a new item to get started' />}

    </>)
}

export default StepDetailFields



