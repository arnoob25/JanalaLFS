import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

const FieldArrayAddButton = ({ onClick, label }) => {
    return (
        <Button variant='ghost' onClick={onClick} className='w-full mt-2.5 items-center gap-1'>
            <Plus size={18} />
            Add {label}
        </Button>
    )
}

export default FieldArrayAddButton