import {
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage,
} from "./form"
import Combobox from "../ui/combobox"
import { useFormContext } from "react-hook-form"

// TODO: make the combobox uncontrolled by default
export function ComboboxField({ fieldName, label, selectionType, options, description, secondary = false }) {
    const { control, setValue, trigger } = useFormContext()

    const handleSelection = (field, item) => {
        setValue(fieldName, field.value === item.value ? '' : item.value)
        trigger(fieldName)
    }

    return (
        <FormField controlledForm
            name={fieldName}
            control={control}
            render={({ field }) => (
                <div>
                    {label ? <FormLabel secondary={secondary}>{label}</FormLabel> : null}

                    <FormControl>
                        <Combobox
                            field={field}
                            selectionType={selectionType}
                            options={options}
                            onSelect={handleSelection}
                        />
                    </FormControl>

                    {description ? <FormDescription>{description}</FormDescription> : null}
                    <FormMessage />
                </div>
            )}
        />
    )
}