import { FormSubSectionContainer } from "@/global_ui_components/containers/FormContainer"
import { useFieldArray } from "react-hook-form"
import ChoiceField from "./ChoiceField"
import { SwitchWithLabel } from "@/global_ui_components/form/Switch"
import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton"
import { inquiryDetailsFormDefaultValues } from "../../DesignInquiries"

const Choices = () => {
  const defaultValue = inquiryDetailsFormDefaultValues.choices

  const { fields, append } = useFieldArray({ name: 'choices' })

  return (
    <CollapsibleFormSection triggerField='responseType' match matchWith='choice'>
      <FormSubSectionContainer>
        <SwitchWithLabel secondary fieldName='isAmbigious' label='Ambigious choices' />
        {fields.map((field, index) => (
          <ChoiceField
            key={field.id}
            label={fields.length > 1 ? `Choice ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
            textInputName={`choices.${index}.label`}
            checkBoxName={`choices.${index}.isCorrect`}
          />
        ))}
        <FieldArrayAddButton label='Choice' onClick={() => append(defaultValue[0])} />
        <SwitchWithLabel
          fieldName='shouldRequireExplanation'
          label='Require Explanation'
          secondary
        />
        <SwitchWithLabel
          fieldName='shouldRequireRepetition'
          label='Require Repetition'
          secondary
        />
      </FormSubSectionContainer>
    </CollapsibleFormSection>
  )
}

export default Choices