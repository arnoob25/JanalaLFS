import { z } from "zod"
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
import { useRef } from "react"

//#region form setup

// TODO : skip creating steps
/**
 *  when gla details are in order, the next button is enabled
 *  when clicked on the next button without creating any steps
 *      an alert dialog would ask if the user wants to continue without creating steps
 *      the user can proceed without creating any. 
 *      We'll create a placeholder step in the background.
 *  when clicked on the next button with only 1 step created
 *      the alert dialog will ask for confirmation whether to continue with a single step, or not.
 */

// TODO: replace with query
const smData = [
    { id: 1, header: 'Step 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Step 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Step 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

// form schemas 
const GlaDetailFormSchema = z.object({
    glaTitle: z.string().min(5, 'Please provide a meaningful Title'),
    primaryIlo: z.string().min(1, 'Please select an ILO'),
    secondaryIlo: z.string().min(1, 'Please select an ILO'),
    glaNarrative: z.string()
})

const StepDetailFormSchema = z.object({
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

// form submission handlers

const handleGlaDetailFormSubmission = data => console.log(data);

const handleStepDetailFormSubmission = data => console.log(data);


//#endregion

const AddSteps = ({ gla }) => {

    // for using the next button to submit the form
    const glaDetailFormRef = useRef(null);

    /**
     * manage step list in state 
        query the db for steps
        save step details in a state
        pass the state data into step list
     */

    /**
     * activate next button when 
        form validation for gla details approves of progression
        we have at least one inquiry
     */

    return (
        <WizardBody>
            <WizardContext heading={'Gla Details'}>
                <ItemForm
                    wizardContex
                    schema={GlaDetailFormSchema}
                    onSubmit={handleGlaDetailFormSubmission}
                    defaultValues={GlaDetailFormDefaultValues}
                    ref={glaDetailFormRef}
                    save={false}
                >
                    <GlaDetailForm />
                </ItemForm>
            </WizardContext>
            <WizardFocusArea>
                <ItemList heading={'Steps'}>
                    <StepList data={smData} />
                </ItemList>
                <ItemForm
                    heading={'Step Details'}
                    schema={StepDetailFormSchema}
                    onSubmit={handleStepDetailFormSubmission}
                    defaultValues={StepDetailDefaultValues}
                >
                    <StepDetailForm />
                </ItemForm>
            </WizardFocusArea>
            <WizardControl>
                <Button onClick={() => glaDetailFormRef.current?.handleSubmit(handleGlaDetailFormSubmission)()}>
                    Next
                </Button>
            </WizardControl>
        </WizardBody >
    )
}

export default AddSteps