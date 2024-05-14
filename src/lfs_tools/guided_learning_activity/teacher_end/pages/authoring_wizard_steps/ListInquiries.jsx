import { WizardBody, WizardForm, WizardItemDetail, WizardItemList, WizardSidebar } from "@/global_ui_components/layouts/wizard_layout/WizardBody"
import { Button } from "@/global_ui_components/ui/button"
import GlaStepList from "../../components/wizard/list_inquiries/GlaStepList"
import GlaInquiryList from "../../components/wizard/list_inquiries/GlaInquiryList"
import GlaInquiryDetailForm from "../../components/wizard/list_inquiries/GlaInquiryDetailForm"

const smData = [
    { id: 1, header: 'Inquiry 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Inquiry 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const ListInquiries = () => {
    return (
        <WizardBody
            content={<>
                <WizardSidebar heading='Steps'>
                    <GlaStepList />
                </WizardSidebar>
                <WizardForm>
                    <WizardItemList heading='Inquiries'>
                        <GlaInquiryList />
                    </WizardItemList>
                    <WizardItemDetail heading='Inquiry Details'>
                        <GlaInquiryDetailForm />
                    </WizardItemDetail>
                </WizardForm>
            </>}

            action={<Button>Next</Button>}
        />
    )
}

export default ListInquiries