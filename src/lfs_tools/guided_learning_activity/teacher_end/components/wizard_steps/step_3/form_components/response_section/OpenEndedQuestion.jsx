import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"
import { TextInput } from "@/global_ui_components/form/TextInput"

const OpenEndedQuestion = () => {
  return (
    <CollapsibleFormSection triggerField='responseType' match matchWith='text'>
        <TextInput
            fieldName='text'
            label='Question'
            placeholder='Type your question here'
            secondary compact textArea 
        />
    </CollapsibleFormSection>
  )
}

export default OpenEndedQuestion