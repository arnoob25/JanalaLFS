import { useState } from 'react'
import { TextareaWithLabel } from '@/global_ui_components/ui/textarea'
import GlaButton from '../GlaButton'
import { RESPONSE_TYPES, ResponseTemplate } from '../../helpers/glaResponseHelpers'
import { useQuery } from '@tanstack/react-query'
import { fetchQuestionLabelForInquiry } from '../../helpers/queryHelpers'

const GlaTextResponseComponent = ({ inquiry, onMeaningfulResponse, isDisabled = false }) => {

    const [inputValue, setInputValue] = useState('')

    const { data: textArea, error } = useQuery({
        queryKey: ['textArea', inquiry.id],
        queryFn: () => fetchQuestionLabelForInquiry(inquiry.id)
    })

    // TODO: save input
    const handleResponse = () => {
        const response = new ResponseTemplate()
        response.type = RESPONSE_TYPES.TEXT
        response.isMeaningful = true // TODO: check if its meaningful
        onMeaningfulResponse(response)
    }

    return (
        <>
            {textArea
                ? <TextareaWithLabel
                    key={textArea.id}
                    label={textArea.label}
                    placeholder={textArea.placeholder !== undefined ? textArea.placeholder : 'Type your response here'}
                    onInputChange={input => setInputValue(input)}
                />
                : null}
            <GlaButton label={'Next'} onClick={handleResponse} disabled={!inputValue.length > 0 || isDisabled} isSecondary={isDisabled} />
        </>
    )
}

export default GlaTextResponseComponent