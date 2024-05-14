import { WizardBody, WizardForm, WizardItemDetail, WizardItemPreview, WizardSidebar } from "@/global_ui_components/layouts/wizard_layout/WizardBody"
import { Button } from "@/global_ui_components/ui/button"
import GlaInquiryList from "../../components/wizard/design_inquiries/GlaInquiryList"
import GlaPage from "@/lfs_tools/guided_learning_activity/student_end/pages/GlaPage"
import InquiryDetailForm from "../../components/wizard/design_inquiries/InquiryDetailForm"

const smData = [
    { id: 1, header: 'Inquiry 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Inquiry 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const inquiry = [
    {
        id: 2, created_at: '2024-05-05T00:59:46.046501+00:00',
        order: 1,
        context: 'Consider applying force to an object on a smooth s…nt of force at two separate points on the object.',
        prompt: 'Predict (describe) the motion of the object in these two cases.',
        require_explanation: true,
        require_repetition: true,
        response_type: "text",
        step: null
    }
]

const DesignInquiries = () => {
    return (
        <WizardBody
            content={<>
                <WizardSidebar heading='Inquiries'><GlaInquiryList /></WizardSidebar>
                <WizardForm>
                    <WizardItemPreview heading={'Inquiry 1'}>
                        <GlaPage gla={{ id: 1 }} previewInquiry />
                    </WizardItemPreview>
                    <WizardItemDetail heading='Inquiry Details'>
                        <InquiryDetailForm />
                    </WizardItemDetail>
                </WizardForm>
            </>}

            action={
                <div className="flex justify-end gap-5">
                    <Button variant='secondary' disabled>Preview the Step</Button>
                    <Button>Next</Button>
                </div>
            }
        />
    )
}

export default DesignInquiries