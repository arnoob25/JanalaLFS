import { useFieldArray } from "react-hook-form";
import { TextInput } from "@/global_ui_components/form/TextInput";
import { CheckboxFieldSecondary } from "@/global_ui_components/form/Checkbox";
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton";
import { BranchDefaultValues } from "../ListInquiries";
import { v4 as uuidv4 } from "uuid"

const BranchFields = ({ fieldArrayName }) => {

  const { fields, append } = useFieldArray({
    name: fieldArrayName,
  });

  const addNewBranch = () => {
    const newBranch = BranchDefaultValues;
    newBranch.branchId = uuidv4()

    append(newBranch)
  }

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
        onClick={addNewBranch}
      />
    </div>
  );
};

export default BranchFields;