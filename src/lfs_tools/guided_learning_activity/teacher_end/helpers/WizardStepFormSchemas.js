import { z } from "zod";

// #region schema for step one - Add Steps 
export const AddStepsSchema = z.object({
    glaTitle: z.string().min(5, 'Please provide a meaningful Title'),
    primaryIlo: z.string().min(1, 'Please select an ILO'),
    secondaryIlo: z.string().min(1, 'Please select an ILO'),
    glaNarrative: z.string(),
    steps: z.array(
        z.object({
            stepGoal: z.string().min(10, 'Please define a meaningful goal'),
            stepNarrative: z.string()
        })
    )
})

export const AddStepsDefaultValues = {
    glaTitle: '',
    primaryIlo: '',
    secondaryIlo: '',
    glaNarrative: '',
    steps: []
}

export const StepDefaultValues = {
    stepGoal: '',
    stepNarrative: ''
}
// #endregion


// #region schema for step two - List Inquiries
export const MainInquiryDefaultValues = {
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

export const ListInquiriesSchema = z.object({
    inquiries: z.array(InquirySchema).default([]),
});
// #endregion

// TODO: provide field value requirement criteria and messages in the schemas
// #region schema for step three - Design Inquiries
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

export const inquiryDetailsFormSchema = z.object({
    inquiries: z.array(
        z.object({
            context: z.string().optional(),
            prompt: z.string().optional(),
            media: mediaSchema.optional(),
            responseType: responseTypes,
            responseOptions: z.union([
                choiceSchema,
                branchSchema,
                textSchema
            ])
        })
    )
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
    inquiries: [{
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
    }]
};
// #endregion