import {
    WizardBody,
    WizardForm,
    WizardItemDetail,
    WizardItemList,
    WizardSidebar
} from "@/global_ui_components/layouts/wizard_layout/WizardBody"
import GlaDetailForm from "../../components/wizard/add_steps/GlaDetailForm"
import GlaStepList from "../../components/wizard/add_steps/GlaStepList"
import { Button } from "@/global_ui_components/ui/button"
import GlaStepDetailForm from "../../components/wizard/add_steps/GlaStepDetailForm"

// TODO: remove them
const smData = [
    { id: 1, header: 'Step 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Step 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Step 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const data = [
    { id: 1, header: 'Step 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Step 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Step 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 4, header: 'Step 4', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 5, header: 'Step 4', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const AddSteps = () => {
    return (
        <WizardBody
            content={<>
                <WizardSidebar heading={'Gla Details'}>
                    <GlaDetailForm />
                </WizardSidebar>
                <WizardForm>
                    <WizardItemList heading={'Steps'}>
                        <GlaStepList data={smData} />
                    </WizardItemList>
                    <WizardItemDetail heading={'Step Details'}>
                        <GlaStepDetailForm />
                    </WizardItemDetail>
                </WizardForm>
            </>}

            action={<Button>Next</Button>}
        />
    )
}

export default AddSteps