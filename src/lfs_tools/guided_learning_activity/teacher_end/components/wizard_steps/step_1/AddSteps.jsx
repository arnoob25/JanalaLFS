import {
    WizardBody,
    WizardFocusArea,
    WizardControl,
    WizardSidebar,
} from "@/global_ui_components/layouts/wizard/body/Containers"
import StepList from "./StepList"
import GlaDetailFields from "./GlaDetailFields"
import StepDetailFields from "./StepDetailFields"
import { ItemDetails, ItemList } from "@/global_ui_components/layouts/wizard/body/ItemCreationAndDisplayComponents"
import { AddStepsDefaultValues, AddStepsSchema, StepDefaultValues } from "../../../helpers/WizardStepFormSchemas"

const handleFormSubmission = data => console.log(data)

const AddSteps = ({ gla }) => {

    return (
        <WizardBody
            schema={AddStepsSchema}
            defaultValues={AddStepsDefaultValues}
            onSubmit={handleFormSubmission}
        >
            <WizardSidebar heading='Gla Details' renderForm={GlaDetailFields} />

            <WizardFocusArea
                fieldArrayName='steps'
                fallbackItemName='step'
                fieldItemDefaultValues={StepDefaultValues}
                requireSidebarFormForAddingItems
            >
                <ItemList
                    heading='Steps'
                    renderList={StepList}
                />

                <ItemDetails
                    heading='Step Details'
                    renderDetailFields={StepDetailFields}
                />
            </WizardFocusArea>

            <WizardControl />
        </WizardBody>
    )
}

export default AddSteps