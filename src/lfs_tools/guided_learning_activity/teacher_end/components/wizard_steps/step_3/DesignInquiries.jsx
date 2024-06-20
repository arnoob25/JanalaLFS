import { z } from "zod"
import InquiryList from "./InquiryList"
import GlaPage from "@/lfs_tools/guided_learning_activity/student_end/pages/GlaPage"
import InquiryDetailForm from "./form_components/InquiryDetailForm"
import { WizardBody, WizardControl, WizardFocusArea, WizardSidebar } from "@/global_ui_components/layouts/wizard/body/Containers"
import { ItemDetails, ItemPreview } from "@/global_ui_components/layouts/wizard/body/ItemCreationAndDisplayComponents"
    

// #region form setup

const mediaType = z.enum([
    'video',
    'audio',
    'code',
    'image',
    'data_table',
])

const switcherMethod = z.enum([
    'tab',
    'carousel'
])

const responseTypes = z.enum([
    'choice',
    'branch',
    'text'
])

const inquiryDetailsFormSchema = z.object({
    context: z.string(),
    prompt: z.string(),
    media: z.array(
        z.object({
            mediaType: mediaType,
            file: z.string().optional() // TODO: validate file uploads
        })
    ),
    mediaSwitcherMethod: switcherMethod,
    responseType: responseTypes,
    isAmbigious: z.boolean(),
    choices: z.array(
        z.object({
            label: z.string(),
            isCorrect: z.boolean()
        })
    ),
    branches: z.array(
        z.object({
            label: z.string(),
            shouldAttempt: z.boolean()
        })
    ),
    text: z.string(),
    shouldRequireExplanation: z.boolean(),
    shouldRequireRepetition: z.boolean()
})

export const inquiryDetailsFormDefaultValues = {
    context: '',
    prompt: '',
    media: [
        { mediaType: '', file: '' }
    ],
    mediaSwitcherMethod: '',
    responseType: '',
    isAmbigious: false,
    choices: [
        { label: '', isCorrect: false },
        { label: '', isCorrect: false },
    ],
    branches: [
        { label: '', shouldAttempt: false },
        { label: '', shouldAttempt: false },
    ],
    shouldRequireExplanation: true,
    shouldRequireRepetition: true,
}

const handleInquiryDetailFormSubmission = (data) => console.log(data);

// #endregion

const DesignInquiries = () => {
    return (
        <WizardBody schema={inquiryDetailsFormSchema}
            defaultValues={inquiryDetailsFormDefaultValues}
            onSubmit={handleInquiryDetailFormSubmission}
        >
            <WizardSidebar heading='Inquiries'>
                <InquiryList />
            </WizardSidebar>

            <WizardFocusArea>
                <ItemPreview heading={'Inquiry 1'} renderPage={GlaPage} renderPageProp='gla' otherProps={{ previewInquiry: true }} />

                <ItemDetails heading='Inquiry Details' renderField={InquiryDetailForm} />
            </WizardFocusArea>

            <WizardControl />
        </WizardBody>
    )
}

export default DesignInquiries