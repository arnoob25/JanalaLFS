import { FormSubSectionContainer } from "@/global_ui_components/containers/FormContainer"
import { useFieldArray } from "react-hook-form"
import ChoiceField from "./ChoiceField"
import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton"
import { inquiryDetailsFormDefaultValues } from "../../DesignInquiries"

const Branches = () => {
    const defaultValue = inquiryDetailsFormDefaultValues.branches

    const { fields, append } = useFieldArray({ name: 'branches' })

    return (
        <CollapsibleFormSection triggerField='responseType' match matchWith='branch'>
            <FormSubSectionContainer>
                {fields.map((field, index) => (
                    <ChoiceField
                        key={field.id}
                        label={fields.length > 1 ? `Branch ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
                        textInputName={`branches.${index}.label`}
                        placeholder='Title of the branch'
                        checkBoxName={`branches.${index}.shouldAttempt`}
                        checkboxLabel='Should attempt'
                    />
                ))}
                <FieldArrayAddButton label='Branch' onClick={() => append(defaultValue[0])} />
            </FormSubSectionContainer>
        </CollapsibleFormSection>
    )
}

export default Branches