import { TextareaWithLabel } from '@/global_ui_components/ui/textarea'
import React, { useEffect, useState } from 'react'
import { TEXT_LABELS } from '../../test_data/test_db'

const TextResponseComponent = ({ inquiry }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const items = TEXT_LABELS.filter(item => item.inquiry === inquiry.id)
        setItems(items)
    }, [inquiry])

    const textAreas = items.map(item => {
        return (
            <TextareaWithLabel
                key={item.id}
                label={item.label}
                placeholder='Type your response here'
            />
        )
    })

    return (
        <div className='mb-5 flex flex-col gap-5'>
            {textAreas}
        </div>
    )
}

export default TextResponseComponent