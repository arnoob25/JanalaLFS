import { z } from "zod"
import {
    WizardBody,
    WizardFocusArea,
    WizardControl,
    WizardSidebar,
} from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardBody"
import StepList from "./StepList"
import GlaDetailFields from "./GlaDetailFields"
import StepDetailFields from "./StepDetailFields"
import { ItemDetails, ItemList } from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardForm"

//#region form setup

const AddStepsSchema = z.object({
    glaTitle: z.string().min(5, 'Please provide a meaningful Title'),
    primaryIlo: z.string().min(1, 'Please select an ILO'),
    secondaryIlo: z.string().min(1, 'Please select an ILO'),
    glaNarrative: z.string(),
    steps: z.array(
        z.object({
            stepGoal: z.string().min(10, 'Please define a meaningful goal'),
            stepNarrative: z.string()
        })
    )
})

const AddStepsDefaultValues = {
    glaTitle: '',
    primaryIlo: '',
    secondaryIlo: '',
    glaNarrative: '',
    steps: []
}

const StepDefaultValues = {
    stepGoal: '',
    stepNarrative: ''
}

const handleFormSubmission = data => {
    console.log(data)
};

//#endregion

const AddSteps = ({ gla }) => {

    return (
        <WizardBody schema={AddStepsSchema} defaultValues={AddStepsDefaultValues} onSubmit={handleFormSubmission}>
            <WizardSidebar heading='Gla Details'>
                <GlaDetailFields />
            </WizardSidebar>

            <WizardFocusArea fieldArrayName='steps' fieldItemDefaultValues={StepDefaultValues}>
                <ItemList heading='Steps' renderList={StepList} />
                <ItemDetails heading='Step Details' renderField={StepDetailFields} />
            </WizardFocusArea>

            <WizardControl />
        </WizardBody>
    )
}

export default AddSteps