import StepList from "./StepList";
import InquiryList from "./list_components/InquiryList";
import InquiryDetailFields from "./form_components/InquiryDetailFields";
import { z } from "zod";
import {
	WizardBody,
	WizardControl,
	WizardFocusArea,
	WizardSidebar,
} from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardBody";
import {
	ItemDetails,
	ItemList,
} from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardForm";

// #region form setup
// default values
const ListInquiriesDefaultValues = {
	inquiries: [],
};

export const BranchDefaultValues = {
	branchTitle: '',
	shouldAttemptBranch: false,
};

const InquiryDefaultValues = {
	inquiryGoal: "",
	inquiryNarrative: "",
	branches: [],
};

// schemas
const BranchSchema = z.object({
	branchTitle: z.string().min(1, "Branch title is required"),
	shouldAttemptBranch: z.boolean().default(false),
});

const BranchInquirySchema = z.object({
	inquiryGoal: z.string().min(10, "Specify a meaningful goal"),
	inquiryNarrative: z.string(),
});

const BaseInquirySchema = BranchInquirySchema.extend({
	shouldOriginateBranch: z.boolean().default(false).optional(),
	branches: z.array(BranchSchema).default((val) =>
		val.shouldOriginateBranch ? [BranchDefaultValues, BranchDefaultValues] : []
	),
});

const MainInquirySchema = BaseInquirySchema.refine(
	(data) =>
		data.shouldOriginateBranch
			? BaseInquirySchema.extend({
				branches: z.array(BranchSchema).min(2, "At least one branch is required"),
			}).safeParse(data).success
			: true,
	{
		message: "Invalid schema for the given shouldOriginateBranch value",
		path: [], // The root path
	}
);

const ListInquiriesSchema = z.object({
	inquiries: z.array(MainInquirySchema),
});

const handleFormSubmission = (data) => console.log(data);

// #endregion

const ListInquiries = () => {
	return (
		<WizardBody
			schema={ListInquiriesSchema}
			defaultValues={ListInquiriesDefaultValues}
			onSubmit={handleFormSubmission}
		>
			<WizardSidebar heading="Steps">
				<StepList />
			</WizardSidebar>

			<WizardFocusArea
				fieldArrayName="inquiries"
				fieldItemDefaultValues={InquiryDefaultValues}
			>
				<ItemList heading="Inquiries" renderList={InquiryList} />
				<ItemDetails
					heading="Inquiry Details"
					renderField={InquiryDetailFields}
				/>
			</WizardFocusArea>

			<WizardControl />
		</WizardBody>
	);
};

export default ListInquiries;
