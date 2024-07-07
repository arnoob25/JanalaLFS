import { useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";
import { FormControl, FormField, FormLabel } from "./form";


// TODO: make it uncontrolled by default
export const SwitchWithLabel = ({ fieldName, label, secondary = false }) => {
    const { control } = useFormContext();

    return (
        <FormField controlledForm
            name={fieldName}
            control={control}
            render={({ field }) => (
                <div className="flex justify-between items-center">
                    <FormLabel secondary={secondary}>{label}</FormLabel>
                    <FormControl>
                        <Switch
                            {...field}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            small
                        />
                    </FormControl>
                </div>
            )}

        />
    );
};
