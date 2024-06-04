import { useFieldArray } from "react-hook-form";
import { TextInput } from "@/global_ui_components/form/TextInput";
import { CheckboxFieldSecondary } from "@/global_ui_components/form/Checkbox";
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton";
import { BranchDefaultValues } from "../ListInquiries";

const BranchFields = ({ fieldArrayName }) => {
  const defaultValue = BranchDefaultValues;

  const { fields, append } = useFieldArray({
    name: fieldArrayName,
  });

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <div key={field.id}>
          <TextInput secondary
            {...field}
            fieldName={`${fieldArrayName}.${index}.branchTitle`}
            label={`Branch ${index <= 9 ? `0${index + 1}` : `${index + 1}`}`}
            placeholder="Title of the branch"
          />
          <CheckboxFieldSecondary
            {...field}
            fieldName={`${fieldArrayName}.${index}.shouldAttemptBranch`}
            label="Should attempt"
          />
        </div>
      ))}
      <FieldArrayAddButton
        label="Branch"
        onClick={() => append(defaultValue)}
      />
    </div>
  );
};

export default BranchFields;