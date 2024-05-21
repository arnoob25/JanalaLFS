import { useFormContext } from "react-hook-form";
import { CheckboxBase } from "../ui/checkbox";
import { TypographyP } from "../ui/typography";
import { FormControl, FormField, FormItem } from "../ui/form";

// one variant should be secondary, another primary

export const CheckboxSecondary = ({ fieldName, label }) => {
  const { control } = useFormContext();
  return (
    <FormField
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <label className="flex justify-start mt-[3px] ml-0.5 items-center gap-2 cursor-pointer select-none">
              <CheckboxBase
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
                className='opacity-50 data-[state=checked]:opacity-80'
              />
              <TypographyP text={label} small muted />
            </label>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
