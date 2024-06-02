import { useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";
//import { FormControl, FormField, FormItem, FormLabel } from "./form-old";

export const SwitchWithLabel = ({ fieldName, label, secondary = false }) => {
    const { register } = useFormContext();

    return (
        <FormField name={fieldName}>
            <div className="flex justify-between items-center">
                <FormLabel secondary={secondary}>{label}</FormLabel>
                <Switch
                    {...field}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    small
                />
            </div>
        </FormField>
    );
};
