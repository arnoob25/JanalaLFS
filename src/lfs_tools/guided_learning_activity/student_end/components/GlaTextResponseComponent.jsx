import { useEffect, useState } from 'react'
import { TEXT_LABELS } from '../../../../test_data/test_db'
import LongTextInputComponent from '@/lfs_tools/shared_components/user_response/LongTextInputComponent'

const GlaTextResponseComponent = ({ inquiry }) => {

    const [textAreas, setTextAreas] = useState([])

    // TODO: replace with a proper query
    useEffect(() => {
        const items = TEXT_LABELS.filter(item => item.inquiry === inquiry.id)
        setTextAreas(items)
    }, [inquiry])


    return (
        <div className='mb-5 flex flex-col gap-5'>
            {textAreas.map(item => {
                return (
                    <LongTextInputComponent
                        key={item.id}
                        prompt={item}
                    />
                )
            })}
        </div>
    )
}

export default GlaTextResponseComponent