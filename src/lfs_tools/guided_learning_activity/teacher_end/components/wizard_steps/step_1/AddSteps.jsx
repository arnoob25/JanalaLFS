import { z } from "zod"
import { v4 as uuidv4 } from 'uuid'
import {
    WizardControl,
    WizardBody,
    WizardFocusArea,
    ItemForm,
    ItemList,
    WizardContext,
} from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardBody"
import StepList from "./StepList"
import GlaDetailForm from "./GlaDetailForm"
import StepDetailForm from "./StepDetailForm"
import { Button } from "@/global_ui_components/ui/button"
import { useRef, useState } from "react"

//#region form setup

/** TODO : skip creating steps
 *  when gla details are in order, the next button is enabled
 *  when clicked on the next button without creating any steps
 *      an alert dialog would ask if the user wants to continue without creating steps
 *      the user can proceed without creating any. 
 *      We'll create a placeholder step in the background.
 *  when clicked on the next button with only 1 step created
 *      the alert dialog will ask for confirmation whether to continue with a single step, or not.
 */

// form schemas 
const GlaDetailFormSchema = z.object({
    glaTitle: z.string().min(5, 'Please provide a meaningful Title'),
    primaryIlo: z.string().min(1, 'Please select an ILO'),
    secondaryIlo: z.string().min(1, 'Please select an ILO'),
    glaNarrative: z.string()
})

const StepDetailFormSchema = z.object({
    id: z.string().optional(),
    stepGoal: z.string().min(10, 'Please define a meaningful goal'),
    stepNarrative: z.string()
})

// default values for the form fields
const GlaDetailFormDefaultValues = {
    glaTitle: '',
    primaryIlo: '',
    secondaryIlo: '',
    glaNarrative: ''
}

const StepDetailDefaultValues = {
    stepGoal: '',
    stepNarrative: ''
}
//#endregion

const AddSteps = ({ gla }) => {

    // #region logic
    const [steps, setSteps] = useState([])
    const [selectedStepId, setSelectedStepId] = useState(null)
    const currentStepIndex = steps.findIndex(step => step.id === selectedStepId)
    //const currentStep = steps[currentStepIndex]
    // for using the next button to submit the form
    const glaDetailFormRef = useRef(null);

    /**
     * manage step list in state 
        query the db for steps
        save step details in a state
        pass the state data into step list
     */

    /**
     * 
     * activate next button when 
        form validation for gla details approves of progression
        we have at least one inquiry
     */

    // TODO: updating and deleting steps
    const handleFormSubmission = data => {
        const submissionData = data
        submissionData.steps = steps
        console.log(submissionData)
    };

    const handleStepDetailFormSubmission = data => {
        setSteps(prevSteps => {
            const stepIndex = prevSteps.findIndex(step => step.id === selectedStepId);

            if (stepIndex !== -1) {
                // Create a new array with the updated step
                const updatedSteps = prevSteps.map((step, index) =>
                    index === stepIndex ? { ...step, ...data } : step
                );
                return updatedSteps;
            }

            // This should not happen in your context, but if it does, add a new step
            return [...prevSteps, { ...data, id: selectedStepId }];
        });

        // Clear the selected step
        setSelectedStepId(null);
    };

    const handleAddNewStep = () => {
        const newStep = { ...StepDetailDefaultValues, id: uuidv4() }
        setSteps(prevSteps => [...prevSteps, newStep])
        setSelectedStepId(newStep.id)
    }

    // #endregion

    return (
        <WizardBody>
            <WizardContext heading={'Gla Details'}>
                <ItemForm
                    wizardContext
                    schema={GlaDetailFormSchema}
                    defaultValues={GlaDetailFormDefaultValues}
                    onSubmit={handleFormSubmission}
                    ref={glaDetailFormRef}
                    save={false}
                >
                    <GlaDetailForm />
                </ItemForm>
            </WizardContext>
            <WizardFocusArea>
                <ItemList heading={'Steps'} onItemAdd={handleAddNewStep} selectedItemId={selectedStepId}>
                    <StepList data={steps} selectedItemId={selectedStepId} onItemSelect={setSelectedStepId} />
                </ItemList>

                <ItemForm
                    heading={`Step Details${selectedStepId ? `: Step ${currentStepIndex < 9 ? `0${currentStepIndex + 1}` : currentStepIndex + 1}` : ''}`}
                    schema={StepDetailFormSchema}
                    onSubmit={handleStepDetailFormSubmission}
                    defaultValues={StepDetailDefaultValues}
                    existingValues={steps[steps.findIndex(step => step.id === selectedStepId)]}
                    save={!!selectedStepId}
                >
                    <StepDetailForm step={selectedStepId} />
                </ItemForm>
            </WizardFocusArea>
            <WizardControl>
                <Button
                    onClick={() => glaDetailFormRef.current?.handleSubmit(handleFormSubmission)()}
                >
                    Next
                </Button>
            </WizardControl>
        </WizardBody >
    )
}

export default AddSteps