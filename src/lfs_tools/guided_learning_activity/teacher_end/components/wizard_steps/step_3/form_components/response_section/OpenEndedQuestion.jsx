import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import { TextInput } from "@/global_ui_components/form/TextInput"

const OpenEndedQuestion = () => {
  return (
    <CollapsibleFormSection collapseControlFieldName='responseType' enumValueToMatch='text'>
      <TextInput
        fieldName='responseOptions.text'
        label='Question'
        placeholder='Type your question here'
        secondary compact textArea
      />
    </CollapsibleFormSection>
  )
}

export default OpenEndedQuestion