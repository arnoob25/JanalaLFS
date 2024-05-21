import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import Combobox from "../ui/combobox"
import { useFormContext } from "react-hook-form"


export function ComboboxField({ fieldName, label, selectionType, options, description, secondary = false }) {
    const { control, setValue, trigger } = useFormContext()

    const handleSelection = (field, item) => {
        setValue(fieldName, field.value === item.value ? '' : item.value)
        trigger(fieldName)
    }

    return (
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    {label ? <FormLabel secondary={secondary}>{label}</FormLabel> : null}
                    <FormControl>
                        <Combobox field={field} selectionType={selectionType} options={options} onSelect={handleSelection} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>)}
        />
    )
}