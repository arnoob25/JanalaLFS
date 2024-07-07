import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import { TextInput } from "@/global_ui_components/form/TextInput"

const OpenEndedQuestion = ({ fieldNamePrefix }) => {
  return (
    <CollapsibleFormSection collapseControlFieldName={`${fieldNamePrefix}.responseType`} enumValueToMatch='text'>
      <TextInput
        fieldName={`${fieldNamePrefix}.responseOptions.text`}
        label='Question'
        placeholder='Type your question here'
        secondary compact textArea
      />
    </CollapsibleFormSection>
  )
}

export default OpenEndedQuestion