import { TextareaWithLabel } from '@/global_ui_components/ui/textarea'

const LongTextInputComponent = ({ prompt }) => {
    return (
        <>
            <TextareaWithLabel
                label={prompt.label}
                placeholder={prompt.placeholder !== undefined ? prompt.placeholder : 'Type your response here'}
            />
        </>
    )
}

export default LongTextInputComponent