import StepList from "./StepList";
import MainInquiryList from "./list_components/MainInquiryList";
import MainInquiryDetailFields from "./form_components/MainInquiryDetailFields";
import { z } from "zod";
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

// #region form setup
const MainInquiryDefaultValues = {
	inquiryGoal: "",
	inquiryNarrative: "",
	isBranchInquiry: false,
	shouldOriginateBranch: false,
	branches: [],
};

export const BranchInquiryDefaultValues = {
	inquiryGoal: "",
	inquiryNarrative: "",
	isBranchInquiry: true,
};

export const BranchDefaultValues = {
	branchTitle: '',
	shouldAttemptBranch: false,
	branchInquiries: []
};

// schemas
const BranchSchema = z.object({
	branchId: z.string(),
	branchTitle: z.string().min(1, "Branch title is required"),
	shouldAttemptBranch: z.boolean().default(false),
});

const BaseInquirySchema = z.object({
	isBranchInquiry: z.boolean(),
	inquiryGoal: z.string().min(10, "Specify a meaningful goal"),
	inquiryNarrative: z.string(),
});

const BranchInquirySchema = BaseInquirySchema.extend({
	isBranchInquiry: z.literal(true),
	branchId: z.string(),
});

const MainInquirySchema = BaseInquirySchema.extend({
	isBranchInquiry: z.literal(false),
	glaStepId: z.string(),
	shouldOriginateBranch: z.boolean().default(false),
	branches: z.array(BranchSchema).default([]),
}).refine(
	data =>
		data.shouldOriginateBranch
			? data.branches.length > 0
			: true,
	{
		message: "At least one branch is required if shouldOriginateBranch is true",
		path: ["branches"],
	}
);

const InquirySchema = z.union([MainInquirySchema, BranchInquirySchema]);

const ListInquiriesSchema = z.object({
	inquiries: z.array(InquirySchema).default([]),
});
// #endregion


const handleFormSubmission = (data) => console.log(data);

const ListInquiries = () => {
	return (
		<WizardBody
			schema={ListInquiriesSchema}
			onSubmit={handleFormSubmission}
		>
			<WizardSidebar heading="Steps"><StepList /></WizardSidebar>

			<WizardFocusArea
				fieldArrayName="inquiries"
				fieldItemDefaultValues={MainInquiryDefaultValues} /* TODO: the name should be fieldArrayItemDefaultValues */
				fallbackItemName='inquiry'
			>
				<ItemList enableSecondaryItems
					heading="Inquiries"
					renderList={MainInquiryList} />
				<ItemDetails
					heading="Inquiry Details"
					renderDetailFields={MainInquiryDetailFields}
					renderSecondaryDetailFields={BranchInquiryDetailFields}
				/>
			</WizardFocusArea>

			<WizardControl />
		</WizardBody>
	);
};

export default ListInquiries;