import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
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
    compact = true,
}) => {
    const { control, trigger } = useFormContext()

    return (
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel secondary={secondary}>{label}</FormLabel>}
                    <FormControl>{!textArea
                        ? <Input
                            {...field}
                            placeholder={placeholder}
                            onBlur={() => { if (validate) trigger(fieldName) }}
                        />
                        : <Textarea
                            {...field}
                            compact={compact}
                            placeholder={placeholder}
                            onBlur={() => { if (validate) trigger(fieldName) }}
                        />}
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}