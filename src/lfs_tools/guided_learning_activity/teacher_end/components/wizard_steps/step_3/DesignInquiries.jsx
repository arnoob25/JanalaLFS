import {
    WizardBody,
} from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardBody"
import { Button } from "@/global_ui_components/ui/button"
import InquiryList from "./InquiryList"
import GlaPage from "@/lfs_tools/guided_learning_activity/student_end/pages/GlaPage"
import InquiryDetailForm from "./form_components/InquiryDetailForm"
import { z } from "zod"

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
        <WizardBody>
            <WizardContext heading='Inquiries'>
                <InquiryList />
            </WizardContext>
            <WizardFocusArea>
                <ItemPreview heading={'Inquiry 1'}>
                    <GlaPage gla={{ id: 1 }} previewInquiry />
                </ItemPreview>
                <ItemForm
                    heading='Inquiry Details'
                    schema={inquiryDetailsFormSchema}
                    defaultValues={inquiryDetailsFormDefaultValues}
                    onSubmit={handleInquiryDetailFormSubmission}
                >
                    <InquiryDetailForm />
                </ItemForm>
            </WizardFocusArea>
            <WizardControl>
                <Button variant='secondary' disabled>Preview the Step</Button>
                <Button>Next</Button>
            </WizardControl>
        </WizardBody>
    )
}

export default DesignInquiries