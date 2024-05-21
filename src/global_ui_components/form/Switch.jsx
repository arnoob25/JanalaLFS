import { useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";

export const SwitchWithLabel = ({ fieldName, label, secondary = false }) => {
    const { control } = useFormContext();

    return (
        <FormField
            name={fieldName}
            control={control}
            render={({ field }) => (
                <FormItem>
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
                </FormItem >
            )}
        />
    );
};
