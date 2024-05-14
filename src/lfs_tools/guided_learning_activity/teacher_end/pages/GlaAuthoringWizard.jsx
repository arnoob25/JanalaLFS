import { WizardHeader } from "@/global_ui_components/layouts/wizard_layout/WizardHeader"
import AddSteps from "./authoring_wizard_steps/AddSteps"
import BasicPageContainer from "@/global_ui_components/layouts/page_layout/BasicPageContainer"
import ListInquiries from "./authoring_wizard_steps/ListInquiries"
import DesignInquiries from "./authoring_wizard_steps/DesignInquiries"

//<AddSteps />

const GlaAuthoringWizard = () => {
    return (
        <BasicPageContainer desktopOnly>
            <WizardHeader
                title={'Guided Learning Activity'}
                steps={[
                    { label: 'Add Steps', route: '/page1' },
                    { label: 'List Inquiries', route: '/page2' },
                    { label: 'Design Inquiries', route: '/page3' }
                ]}
                page={'/page3'}
                onClose={()=>console.log('Close wizard')}
            />
            <DesignInquiries />
        </BasicPageContainer>
    )
}

export default GlaAuthoringWizard