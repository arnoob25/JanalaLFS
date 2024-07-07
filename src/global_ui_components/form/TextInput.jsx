import { useFormContext } from "react-hook-form";
import { FormDescription, FormField, FormLabel, FormMessage } from "../form/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const TextInput = ({
    fieldName,
    label,
    placeholder,
    description,
    secondary = false,
    textArea = false,
    validate = true,
    compact = true
}) => {
    const { register, trigger } = useFormContext()

    return (
        <FormField name={fieldName}>
            {label && <FormLabel secondary={secondary}>{label}</FormLabel>}

            {!textArea
                ? <Input
                    type='text'
                    placeholder={placeholder}
                    onBlur={() => { if (validate) trigger(fieldName) }}
                    {...register(fieldName)}
                />
                : <Textarea
                    compact={compact}
                    placeholder={placeholder}
                    onBlur={() => { if (validate) trigger(fieldName) }}
                    {...register(fieldName)}
                />}

            {description ? <FormDescription>{description}</FormDescription> : null}
            <FormMessage />
        </FormField>
    )
}
