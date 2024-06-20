import { useFormContext } from "react-hook-form"
import { FormField } from "./form"

const HiddenField = ({ fieldName, value }) => {

    const { register } = useFormContext()

    return (
        <FormField name={fieldName} className='hidden'>
            <input
                type='hidden'
                {...register(fieldName)}
                value={value}
            />
        </FormField >
    )
}
export default HiddenField