import InquiryList from "./InquiryList"
import GlaPage from "@/lfs_tools/guided_learning_activity/student_end/pages/GlaPage"
import InquiryDetailForm from "./form_components/InquiryDetailForm"
import { WizardBody, WizardControl, WizardFocusArea, WizardSidebar } from "@/global_ui_components/layouts/wizard/body/Containers"
import { ItemDetails, ItemPreview } from "@/global_ui_components/layouts/wizard/body/ItemCreationAndDisplayComponents"
import { inquiryDetailsFormDefaultValues, inquiryDetailsFormSchema } from "../../../helpers/WizardStepFormSchemas"

// #region form setup
const groups = [
    { stepId: 1, label: 'Step 1' },
    { stepId: 2, label: 'Step 2' },
    { stepId: 3, label: 'Step 3' },
    { stepId: 4, label: 'Step 4' },
    { stepId: 5, label: 'Step 5' },
    { stepId: 6, label: 'Step 6' },
]

const smData = [
    { itemId: 1, header: 'Inquiry 1', step: 1, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 2, header: 'Inquiry 2', step: 1, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 3, header: 'Inquiry 3', step: 2, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 4, header: 'Inquiry 4', step: 2, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 5, header: 'Inquiry 5', step: 2, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 6, header: 'Inquiry 6', step: 3, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 7, header: 'Inquiry 7', step: 3, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 8, header: 'Inquiry 8', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 9, header: 'Inquiry 9', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 10, header: 'Inquiry 10', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 11, header: 'Inquiry 11', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 12, header: 'Inquiry 12', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 13, header: 'Inquiry 13', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 14, header: 'Inquiry 14', step: 5, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 15, header: 'Inquiry 15', step: 5, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 16, header: 'Inquiry 16', step: 5, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 17, header: 'Inquiry 17', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 18, header: 'Inquiry 18', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 19, header: 'Inquiry 19', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { itemId: 20, header: 'Inquiry 20', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },

]
// #endregion


const handleInquiryDetailFormSubmission = (data) => console.log(data);

const DesignInquiries = () => {
    return (
        <WizardBody
            templateMode
            schema={inquiryDetailsFormSchema}
            defaultValues={{ inquiries: smData }}
            fieldArrayName='inquiries'
            fieldItemDefaultValues={inquiryDetailsFormDefaultValues}
            listOfSteps={groups}
            listOfItems={smData}
            onSubmit={handleInquiryDetailFormSubmission}
        >
            <WizardSidebar heading='Inquiries' renderTree={InquiryList} />

            <WizardFocusArea>
                <ItemPreview
                    heading={'Inquiry 1'}
                    renderPage={GlaPage}
                    renderPageProp='gla' // why do we need this?
                    otherProps={{ previewInquiry: true }}
                />

                <ItemDetails
                    heading='Inquiry Details'
                    renderDetailFields={InquiryDetailForm}
                />
            </WizardFocusArea>

            <WizardControl mode="item" />
        </WizardBody>
    )
}

export default DesignInquiries