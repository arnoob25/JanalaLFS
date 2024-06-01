import {
    WizardBody,
} from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardBody"
import { Button } from "@/global_ui_components/ui/button"
import StepList from "./StepList"
import InquiryList from "./list_components/InquiryList"
import InquiryDetailForm from "./form_components/InquiryDetailForm"
import { z } from "zod"

const smData = [
    { id: 1, header: 'Inquiry 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Inquiry 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

// #region form setup

const InquiryDetailFormSchema = z.object({
    inquiryGoal: z.string().min(10, 'Specify a meaningful goal'),
    inquiryNarrative: z.string(),
    shouldOriginateBranch: z.boolean(),
    branches: z.array(
        z.object({
            title: z.string().min(1, 'Branch title is required'),
            shouldAttempt: z.boolean()
        })
    ),
});

export const InquiryDetailFormDefaultValues = {
    inquiryGoal: '',
    inquiryNarrative: '',
    shouldOriginateBranch: false,
    branches: [
        { title: '', shouldAttempt: false },
        { title: '', shouldAttempt: false },
    ],
};

const handleInquiryDetailFormSubmission = data => {
    console.log(data);
}

// #endregion

const ListInquiries = () => {

    return (
        <WizardBody>
            <WizardContext heading='Steps'>
                <StepList />
            </WizardContext>
            <WizardFocusArea>
                <ItemList heading='Inquiries'>
                    <InquiryList />
                </ItemList>
                <ItemForm
                    heading='Inquiry Details'
                    schema={InquiryDetailFormSchema}
                    defaultValues={InquiryDetailFormDefaultValues}
                    onSubmit={handleInquiryDetailFormSubmission}
                >
                    <InquiryDetailForm />
                </ItemForm>
            </WizardFocusArea>
            <WizardControl>
                <Button>Next</Button>
            </WizardControl>
        </WizardBody>
    )
}

export default ListInquiries