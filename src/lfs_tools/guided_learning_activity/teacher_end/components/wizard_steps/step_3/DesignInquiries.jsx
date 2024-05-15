import { WizardBody, WizardContext, WizardForm, ItemDetail, ItemPreview, WizardAction } from "@/global_ui_components/layouts/wizard_layout/WizardBody"
import { Button } from "@/global_ui_components/ui/button"
import InquiryList from "./InquiryList"
import GlaPage from "@/lfs_tools/guided_learning_activity/student_end/pages/GlaPage"
import InquiryDetailForm from "./InquiryDetailForm"

const DesignInquiries = () => {
    return (
        <WizardBody>
            <WizardContext heading='Inquiries'>
                <InquiryList />
            </WizardContext>
            <WizardForm>
                <ItemPreview heading={'Inquiry 1'}>
                    <GlaPage gla={{ id: 1 }} previewInquiry />
                </ItemPreview>
                <ItemDetail heading='Inquiry Details'>
                    <InquiryDetailForm />
                </ItemDetail>
            </WizardForm>
            <WizardAction>
                <Button variant='secondary' disabled>Preview the Step</Button>
                <Button>Next</Button>
            </WizardAction>
        </WizardBody>
    )
}

export default DesignInquiries