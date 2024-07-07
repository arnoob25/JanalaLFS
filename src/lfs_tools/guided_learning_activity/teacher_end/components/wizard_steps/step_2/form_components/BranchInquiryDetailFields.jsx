import { TextInput } from "@/global_ui_components/form/TextInput";
import HiddenField from "@/global_ui_components/form/HiddenField";

const BranchInquiryDetailFields = (fieldItemNamePrefix) => {

  return (<>
    {/*** TODO: the hidden field sets the branch id for the inquiry */}
    <HiddenField fieldName={`${fieldItemNamePrefix}.branchId`} value={'TODO'} />
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
    />
  </>);
};

export default BranchInquiryDetailFields;