import { FormSubSectionContainer } from "@/global_ui_components/containers/FormContainer"
import { useFieldArray } from "react-hook-form"
import ChoiceField from "./ChoiceField"
import { SwitchWithLabel } from "@/global_ui_components/form/Switch"
import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton"
import { choiceDefaultValue } from "../../DesignInquiries"

const Choices = () => {
  const defaultValue = choiceDefaultValue

  const { fields, append } = useFieldArray({ name: 'responseOptions.choices' })

  return (
    <CollapsibleFormSection collapseControlFieldName='responseType' enumValueToMatch='choice'>
      <FormSubSectionContainer>
        {fields.map((field, index) => (
          <ChoiceField
            key={field.id}
            label={fields.length > 1 ? `Choice ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
            textInputName={`responseOptions.choices.${index}.label`}
            checkBoxName={`responseOptions.choices.${index}.isCorrect`}
          />
        ))}
        <FieldArrayAddButton label='Add Choice' onClick={() => append(choiceDefaultValue)} />
        <SwitchWithLabel secondary fieldName='responseOptions.isAmbigious' label='Ambigious choices' />
        <SwitchWithLabel
          fieldName='responseOptions.shouldRequireExplanation'
          label='Require Explanation'
          secondary
        />
        <SwitchWithLabel
          fieldName='responseOptions.shouldRequireRepetition'
          label='Require Repetition'
          secondary
        />
      </FormSubSectionContainer>
    </CollapsibleFormSection>
  )
}

export default Choices