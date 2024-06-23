import { useFormContext } from "react-hook-form";
import { FormDescription, FormField, FormLabel, FormMessage } from "./form";
import { Input } from "../ui/input";


export const FileUpload = ({
    fieldName,
    label,
    description,
    secondary = false,
}) => {
    const { register, trigger } = useFormContext()

    return (
        <FormField name={fieldName}>
            {label ? <FormLabel secondary={secondary}>{label}</FormLabel> : null}

            <Input
                {...register(fieldName)}
                type='file'
            // onChange={() => trigger(fieldName)} TODO: apply when validation is available
            />

            {description ? <FormDescription>{description}</FormDescription> : null}
            <FormMessage />
        </FormField>
    )
}

export default FileUpload