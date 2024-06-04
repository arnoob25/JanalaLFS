import { useFormContext } from "react-hook-form";
import { CheckboxBase } from "../ui/checkbox";
import { TypographyP } from "../ui/typography";
import { FormControl, FormField } from "./form";

// TODO: one variant should be secondary, another primary

// TODO: make it uncontrolled by default
export const CheckboxFieldSecondary = ({ fieldName, label }) => {
  const { control } = useFormContext();

  return (
    <FormField controlledForm
      name={fieldName}
      control={control}
      render={({ field }) => (
        <label className="flex justify-start mt-[3px] ml-0.5 items-center gap-2 cursor-pointer select-none">
          <FormControl>
            <CheckboxBase
              {...field}
              checked={field.value}
              onCheckedChange={field.onChange}
              className='opacity-50 data-[state=checked]:opacity-80'
            />
          </FormControl>
          <TypographyP text={label} small muted />
        </label>
      )}
    />
  );
};