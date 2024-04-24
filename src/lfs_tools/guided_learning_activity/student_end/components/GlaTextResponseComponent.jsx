import { useEffect, useState } from 'react'
import { TEXT_LABELS } from '../../../../assets/test_data/test_db'
import { TextareaWithLabel } from '@/global_ui_components/ui/textarea'

const GlaTextResponseComponent = ({ inquiry, onMeaningfulInput }) => {

    // we'll only display a single textarea
    const [textArea, setTextArea] = useState(undefined)

    // TODO: replace with a proper query
    useEffect(() => {
        const items = TEXT_LABELS.filter(item => item.inquiry === inquiry.id)
        setTextArea(items[0])
    }, [inquiry])

    // TODO: save input, and process if its a meaningful response and then allow progression
    const handleInputChange = input => {
        onMeaningfulInput(input && input.length > 0)
    }

    return (
        <>
            {textArea !== undefined
                ? <TextareaWithLabel
                    key={textArea.id}
                    label={textArea.label}
                    placeholder={textArea.placeholder !== undefined ? textArea.placeholder : 'Type your response here'}
                    onInputChange={input => handleInputChange(input)}
                />
                : null
            }
        </>
    )
}

export default GlaTextResponseComponent