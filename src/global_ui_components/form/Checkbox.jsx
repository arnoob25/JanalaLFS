import { useFormContext } from "react-hook-form";
import { CheckboxBase } from "../ui/checkbox";
import { TypographyP } from "../ui/typography";
import { FormField } from "./form";

// TODO: one variant should be secondary, another primary


export const CheckboxFieldSecondary = ({ fieldName, label }) => {
  const { register, setValue } = useFormContext();
  return (
    <FormField name={fieldName}>
      <label className="flex justify-start mt-[3px] ml-0.5 items-center gap-2 cursor-pointer select-none">
        <CheckboxBase
          {...register(fieldName)}
          className='opacity-50 data-[state=checked]:opacity-80'
        />
        <TypographyP text={label} small muted />
      </label>
    </FormField>
  );
};
