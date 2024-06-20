import BranchFields from "@/lfs_tools/guided_learning_activity/teacher_end/components/wizard_steps/step_2/form_components/BranchFields";
import { TextInput } from "@/global_ui_components/form/TextInput";
import CollapsibleSection from "@/global_ui_components/form/Collapsible";
import { SwitchWithLabel } from "@/global_ui_components/form/Switch";
import HiddenField from "@/global_ui_components/form/HiddenField";

const MainInquiryDetailFields = (fieldItemNamePrefix, selectedStepId) => {

  return (<>
    {/* TODO: the hidden field sets the step for the inquiry */}
    <HiddenField fieldName={`${fieldItemNamePrefix}.glaStepId`} value={selectedStepId} />
    <TextInput
      fieldName={`${fieldItemNamePrefix}.inquiryGoal`}
      label="Goal"
      placeholder="Goal of the inquiry"
    />
    <TextInput
      textArea
      fieldName={`${fieldItemNamePrefix}.inquiryNarrative`}
      label="Narrative"
      placeholder="Describe how the narrative will unfold in the inquiry"
    /><SwitchWithLabel
      fieldName={`${fieldItemNamePrefix}.shouldOriginateBranch`}
      label="Originate Branches"
    />
    <CollapsibleSection triggerFieldName={`${fieldItemNamePrefix}.shouldOriginateBranch`}>
      {/* TODO: add a field called branches where we can display errors 
        when for example when user didn't select any of the branches as shouldAttempt or, 
        created just one branch or too many */}
      <BranchFields fieldArrayName={`${fieldItemNamePrefix}.branches`} />
    </CollapsibleSection>
  </>);
};

export default MainInquiryDetailFields;