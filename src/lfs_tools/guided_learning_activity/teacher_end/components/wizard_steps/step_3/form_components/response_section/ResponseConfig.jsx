import { FormSectionContainer } from "@/global_ui_components/containers/FormContainer"
import { ComboboxField } from "@/global_ui_components/form/Combobox"
import { Label } from "@/global_ui_components/ui/label"
import Choices from "./Choices"
import Branches from "./Branches"
import OpenEndedQuestion from "./OpenEndedQuestion"
import CollapsibleFormSection from "@/global_ui_components/form/Collapsible"

const responseTypes = [
    { value: 'choice', label: 'Choice' },
    { value: 'branch', label: 'Branch' },
    { value: 'text', label: 'Open Ended Question' },
]

const ResponseConfig = () => {
    return (
        <FormSectionContainer label='Response'>
            <ComboboxField
                fieldName='responseType'
                selectionType='Response Type'
                options={responseTypes}
                secondary
            />
            <Choices />
            <Branches />
            <OpenEndedQuestion />
        </FormSectionContainer>
    )
}

export default ResponseConfig