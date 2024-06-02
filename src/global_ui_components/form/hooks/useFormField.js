import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { FormFieldContext } from "../form"

const useFormField = () => {
    const fieldContext = useContext(FormFieldContext)
    const { getFieldState, formState } = useFormContext()

    const fieldState = getFieldState(fieldContext.name, formState)

    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>")
    }

    const id = fieldContext.id

    return {
        id,
        name: fieldContext.name,
        formFieldId: `${id}-form-field`,
        formDescriptionId: `${id}-form-field-description`,
        formMessageId: `${id}-form-field-message`,
        ...fieldState,
    }
}

export default useFormField