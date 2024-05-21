import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";


export const FileUpload = ({
    fieldName,
    label,
    description,
    secondary = false,
}) => {
    const { control, trigger } = useFormContext()

    return (
        <FormField control={control} name={fieldName}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel secondary={secondary}>{label}</FormLabel>}
                    <FormControl>
                        <Input
                            {...field}
                            type='file'
                            // onChange={() => trigger(fieldName)} TODO: apply when validation is available
                        />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FileUpload