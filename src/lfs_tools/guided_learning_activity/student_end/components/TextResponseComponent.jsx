import { TextareaWithLabel } from '@/global_ui_components/ui/textarea'
import React, { useEffect, useState } from 'react'
import { TEXT_LABELS } from '../../test_data/test_db'

const TextResponseComponent = ({ inquiry }) => {

    const [label, setLabel] = useState('')

    useEffect(() => {
        const label = TEXT_LABELS.filter(item => item.inquiry === inquiry.id)
        const responseComponent = label[0]

        setLabel(responseComponent !== undefined ? responseComponent.label : '')
    }, [inquiry])



    return (
        <div className='mb-5'>
            <TextareaWithLabel
                label={label}
                placeholder='Type your response here'
            />
        </div>
    )
}

export default TextResponseComponent