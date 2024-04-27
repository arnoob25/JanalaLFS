import { useEffect, useState } from 'react'
import { TEXT_LABELS } from '../../../../assets/test_data/test_db'
import { TextareaWithLabel } from '@/global_ui_components/ui/textarea'
import GlaButton from './GlaButton'
import GlaResponseContainer from './GlaResponseContainer'
import { RESPONSE_TYPES, ResponseTemplate } from '../helpers/glaResponseHelpers'

const GlaTextResponseComponent = ({ inquiry, onMeaningfulResponse }) => {

    // we'll only display a single textarea
    const [textArea, setTextArea] = useState(undefined)
    const [inputValue, setInputValue] = useState('')

    // TODO: replace with a proper query
    useEffect(() => {
        const items = TEXT_LABELS.filter(item => item.inquiry === inquiry.id)
        setTextArea(items[0])
    }, [inquiry])

    const handleResponse = () => {
        // TODO: save input
        const response = new ResponseTemplate()
        response.type = RESPONSE_TYPES.TEXT
        response.isMeaningful = true // TODO: check if its meaningful
        onMeaningfulResponse(response)
    }

    return (
        <GlaResponseContainer>
            {textArea !== undefined
                ? <TextareaWithLabel
                    key={textArea.id}
                    label={textArea.label}
                    placeholder={textArea.placeholder !== undefined ? textArea.placeholder : 'Type your response here'}
                    onInputChange={input => setInputValue(input)}
                />
                : null
            }
            <GlaButton label={'Next'} onClick={handleResponse} disabled={!inputValue.length > 0} />
        </GlaResponseContainer>
    )
}

export default GlaTextResponseComponent