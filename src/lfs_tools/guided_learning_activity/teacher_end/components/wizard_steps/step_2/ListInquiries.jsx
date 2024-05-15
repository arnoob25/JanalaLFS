import { WizardAction, WizardBody, WizardContext, WizardForm, ItemDetail, ItemList } from "@/global_ui_components/layouts/wizard_layout/WizardBody"
import { Button } from "@/global_ui_components/ui/button"
import StepList from "./StepList"
import InquiryList from "./InquiryList"
import InquiryDetailForm from "./InquiryDetailForm"

const smData = [
    { id: 1, header: 'Inquiry 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Inquiry 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const ListInquiries = () => {
    return (
        <WizardBody>
            <WizardContext heading='Steps'>
                <StepList />
            </WizardContext>
            <WizardForm>
                <ItemList heading='Inquiries'>
                    <InquiryList />
                </ItemList>
                <ItemDetail heading='Inquiry Details'>
                    <InquiryDetailForm />
                </ItemDetail>
            </WizardForm>
            <WizardAction>
                <Button>Next</Button>
            </WizardAction>
        </WizardBody>
    )
}

export default ListInquiries