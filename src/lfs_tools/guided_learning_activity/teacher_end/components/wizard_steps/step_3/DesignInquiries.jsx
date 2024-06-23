import { z } from "zod"
import InquiryList from "./InquiryList"
import GlaPage from "@/lfs_tools/guided_learning_activity/student_end/pages/GlaPage"
import InquiryDetailForm from "./form_components/InquiryDetailForm"
import { WizardBody, WizardControl, WizardFocusArea, WizardSidebar } from "@/global_ui_components/layouts/wizard/body/Containers"
import { ItemDetails, ItemPreview } from "@/global_ui_components/layouts/wizard/body/ItemCreationAndDisplayComponents"
<<<<<<< HEAD
=======

// TODO: provide field value requirement criteria and messages in the schemas
>>>>>>> 834a6049ada4ae2b3cd1322bb157eb16f7a2d439

// TODO: provide field value requirement criteria and messages in the schemas
// #region form setup
const mediaType = z.enum([
    'video',
    'audio',
    'code',
    'image',
    'data_table',
]);

const switcherMethod = z.enum([
    'tab',
    'carousel'
]);

const responseTypes = z.enum([
    'choice',
    'branch',
    'text'
]);

const mediaSchema = z.object({
    mediaItems: z.array(z.object({
        mediaType: mediaType,
    })).default([{}]),
    mediaSwitcherMethod: switcherMethod.optional(),
});
export const mediaItemDefaultValue = { mediaType: '' };

const choiceSchema = z.object({
    choices: z.array(
        z.object({
            label: z.string(),
            isCorrect: z.boolean(),
        })
    ),
    isAmbigious: z.boolean(),
    shouldRequireExplanation: z.boolean(),
    shouldRequireRepetition: z.boolean(),
});
export const choiceDefaultValue = { label: '', isCorrect: false };

const branchSchema = z.object({
    branches: z.array(
        z.object({
            label: z.string(),
            shouldAttempt: z.boolean()
        })
    )
});
export const branchDefaultValue = { label: '', shouldAttempt: false };

const textSchema = z.object({
    text: z.string().optional()
});

const inquiryDetailsFormSchema = z.object({
    context: z.string().optional(),
    prompt: z.string().optional(),
<<<<<<< HEAD
    media: mediaSchema.optional(),
=======
    /* media: mediaSchema.optional(),
>>>>>>> 834a6049ada4ae2b3cd1322bb157eb16f7a2d439
    responseType: responseTypes,
    responseOptions: z.union([
        choiceSchema,
        branchSchema,
        textSchema
<<<<<<< HEAD
    ])
=======
    ]) */
>>>>>>> 834a6049ada4ae2b3cd1322bb157eb16f7a2d439
}).refine(
    (data) => {
        switch (data.responseType) {
            case 'choice':
                return choiceSchema.safeParse(data.responseOptions).success;
            case 'branch':
                return branchSchema.safeParse(data.responseOptions).success;
            case 'text':
                return textSchema.safeParse(data.responseOptions).success;
            default:
                return false;
        }
    },
    {
        message: "Response options must match the selected response type",
        path: ['responseOptions']
    }
);

export const inquiryDetailsFormDefaultValues = {
    context: '',
    prompt: '',
    media: {
        mediaItems: [mediaItemDefaultValue]
    },
    responseType: '',
    responseOptions: {
        // default values for the choice schema
        choices: [choiceDefaultValue, choiceDefaultValue],
        isAmbigious: false,
        shouldRequireExplanation: true,
        shouldRequireRepetition: true,

        // default values for the branch schema
        branches: [branchDefaultValue, branchDefaultValue],

        // default values for the textSchema
        text: ''
    },
};
// #endregion


const handleInquiryDetailFormSubmission = (data) => console.log(data);

const DesignInquiries = () => {
    return (
        <WizardBody schema={inquiryDetailsFormSchema}
            defaultValues={inquiryDetailsFormDefaultValues}
            onSubmit={handleInquiryDetailFormSubmission}
        >
            <WizardSidebar heading='Inquiries'><InquiryList /></WizardSidebar>

            <WizardFocusArea>
                <ItemPreview
                    heading={'Inquiry 1'}
                    renderPage={GlaPage}
                    renderPageProp='gla'
                    otherProps={{ previewInquiry: true }}
                />

                <ItemDetails heading='Inquiry Details' renderDetailFields={InquiryDetailForm} />
            </WizardFocusArea>

            <WizardControl />
        </WizardBody>
    )
}

export default DesignInquiries