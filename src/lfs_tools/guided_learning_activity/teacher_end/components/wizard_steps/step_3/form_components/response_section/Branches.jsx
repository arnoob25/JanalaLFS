import { FormSubSectionContainer } from "@/global_ui_components/containers/FormContainer"
import { useFieldArray } from "react-hook-form"
import ChoiceField from "./ChoiceField"
import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton"
import { branchDefaultValue } from "../../DesignInquiries"
//import { inquiryDetailsFormDefaultValues } from "../../DesignInquiries"

const Branches = () => {
    const defaultValue =  {}//inquiryDetailsFormDefaultValues.branches

    const { fields, append } = useFieldArray({ name: 'responseOptions.branches' })

    return (
        <CollapsibleFormSection collapseControlFieldName='responseType' enumValueToMatch='branch'>
            <FormSubSectionContainer>
                {fields.map((field, index) => (
                    <ChoiceField
                        key={field.id}
                        label={fields.length > 1 ? `Branch ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
                        textInputName={`responseOptions.branches.${index}.label`}
                        placeholder='Title of the branch'
                        checkBoxName={`responseOptions.branches.${index}.shouldAttempt`}
                        checkboxLabel='Should attempt'
                    />
                ))}
                <FieldArrayAddButton label='Branch' onClick={() => append(branchDefaultValue)} />
            </FormSubSectionContainer>
        </CollapsibleFormSection>
    )
}

export default Branches