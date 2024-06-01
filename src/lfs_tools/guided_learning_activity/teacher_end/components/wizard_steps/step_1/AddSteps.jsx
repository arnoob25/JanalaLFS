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
import { Button } from "@/global_ui_components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ItemDetailFields, ItemList } from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardForm"

//#region form setup

const formSchema = z.object({
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

const formDefaultValues = {
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

//#endregion

const AddSteps = ({ gla }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: formDefaultValues // TODO: conditionally use queried steps when available
    })

    const { isValid } = form.formState

    const handleFormSubmission = data => {
        const submissionData = data
        console.log(submissionData)
    };

    return (
        <WizardBody form={form} onSubmit={handleFormSubmission}>
            <WizardSidebar heading='Gla Details'>
                <GlaDetailFields />
            </WizardSidebar>

            <WizardFocusArea fieldArrayName='steps' fieldItemDefaultValues={StepDefaultValues}>
                <ItemList heading='Steps'>
                    <StepList />
                </ItemList>

                <ItemDetailFields heading='Step Details'>
                    <StepDetailFields />
                </ItemDetailFields>
            </WizardFocusArea>

            <WizardControl>
                <Button disabled={!isValid}>Next</Button>
            </WizardControl>
        </WizardBody>
    )
}

export default AddSteps