import { FormComposedFieldContainer } from "@/global_ui_components/containers/FormContainer"
import { CheckboxSecondary } from "@/global_ui_components/form/Checkbox"
import { TextInput } from "@/global_ui_components/form/TextInput"
import { FormLabel } from "@/global_ui_components/ui/form"

// used to craete both the choices and branches
const ChoiceField = ({ label, textInputName, placeholder = '', checkBoxName, checkboxLabel = '' }) => {

    return (
        <FormComposedFieldContainer>
            {label ? <FormLabel secondary>{label}</FormLabel> : null}
            <TextInput
                secondary
                fieldName={textInputName}
                placeholder={placeholder ? placeholder : 'Label of the Choice'}
            />
            <CheckboxSecondary
                fieldName={checkBoxName}
                label={checkboxLabel ? checkboxLabel : 'Correct choice'}
            />
        </FormComposedFieldContainer>
    )
}

export default ChoiceField