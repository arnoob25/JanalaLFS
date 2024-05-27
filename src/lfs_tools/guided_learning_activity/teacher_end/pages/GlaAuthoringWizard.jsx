import BasicPageContainer from "@/global_ui_components/layouts/page_layout/BasicPageContainer"
import { WizardHeader } from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardHeader"
import AddSteps from "../components/wizard_steps/step_1/AddSteps"
import ListInquiries from "../components/wizard_steps/step_2/ListInquiries"
import DesignInquiries from "../components/wizard_steps/step_3/DesignInquiries"

const gla = { id: 1 }

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
                page={'/page1'}
                onClose={() => console.log('Close wizard')}
            />
            <AddSteps />
        </BasicPageContainer>
    )
}

export default GlaAuthoringWizard