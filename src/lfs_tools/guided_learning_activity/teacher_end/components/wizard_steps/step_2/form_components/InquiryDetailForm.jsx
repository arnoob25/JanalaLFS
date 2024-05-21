import BranchFields from "@/lfs_tools/guided_learning_activity/teacher_end/components/wizard_steps/step_2/form_components/BranchFields"
import { TextInput } from "@/global_ui_components/form/TextInput"
import CollapsibleSection from "@/global_ui_components/form/Collapsible"
import { SwitchWithLabel } from "@/global_ui_components/form/Switch"


const InquiryDetailForm = () => {
  return (
    <>
      <TextInput fieldName='inquiryGoal' label='Goal' placeholder='Goal of the inquiry' />
      <TextInput textArea fieldName='inquiryNarrative' label='Narrative' placeholder='Describe how the narrative will unfold in the inquiry' />
      <SwitchWithLabel fieldName='shouldOriginateBranch' label='Originate Branches' />
      <CollapsibleSection trigger='shouldOriginateBranch'>
        <BranchFields />
      </CollapsibleSection>
    </>
  )
}

export default InquiryDetailForm