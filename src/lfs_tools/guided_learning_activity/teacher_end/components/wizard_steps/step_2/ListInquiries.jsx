import StepList from "./StepList";
import MainInquiryList from "./list_components/MainInquiryList";
import MainInquiryDetailFields from "./form_components/MainInquiryDetailFields";
import {
	WizardBody,
	WizardControl,
	WizardFocusArea,
	WizardSidebar,
} from "@/global_ui_components/layouts/wizard/body/Containers";
import {
	ItemDetails,
	ItemList,
} from "@/global_ui_components/layouts/wizard/body/ItemCreationAndDisplayComponents";
import BranchInquiryDetailFields from "./form_components/BranchInquiryDetailFields";
import { ListInquiriesSchema, MainInquiryDefaultValues } from "../../../helpers/WizardStepFormSchemas";

const stepListData = [
	{ stepId: '1', header: 'Step 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
	{ stepId: '2', header: 'Step 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
	{ stepId: '3', header: 'Step 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const handleFormSubmission = (data) => console.log(data);

const ListInquiries = () => {
	return (
		<WizardBody
			schema={ListInquiriesSchema}
			listOfSteps={stepListData}
			onSubmit={handleFormSubmission}
		>
			<WizardSidebar heading="Steps" renderTree={StepList} />

			<WizardFocusArea
				fieldArrayName="inquiries"
				fallbackItemName='inquiry'
				fieldItemDefaultValues={MainInquiryDefaultValues}
			>
				<ItemList
					heading="Inquiries"
					filterMode='step'
					propertyToFilterBy='glaStepId'
					shouldEnableSecondaryItems
					renderList={MainInquiryList}
				/>

				<ItemDetails
					heading="Inquiry Details"
					renderDetailFields={MainInquiryDetailFields}
					renderSecondaryDetailFields={BranchInquiryDetailFields}
				/>
			</WizardFocusArea>

			<WizardControl mode='step' />
		</WizardBody>
	);
};

export default ListInquiries;