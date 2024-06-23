import { useFormContext, } from "react-hook-form";
//import { FormItem, FormControl, FormLabel, FormField } from "@/global_ui_components/form/form-old";
import { Input } from "@/global_ui_components/ui/input";
import { FormComposedFieldContainer } from "@/global_ui_components/containers/FormContainer";
import { FormControl, FormField, FormLabel } from "@/global_ui_components/form/form";
import { ComboboxField } from "@/global_ui_components/form/Combobox";
import FileUpload from "@/global_ui_components/form/FileUpload";

// TODO: replace with proper enum
const mediaTypes = [
    { value: 'video', label: 'Video' },
    { value: 'data_table', label: 'Table' },
    { value: 'js_module', label: 'JS Module' },
    { value: 'svg_html', label: 'SVG' },
]

const MediaUploadField = ({ label, comboboxName, uploaderName }) => {

    return (
        <FormComposedFieldContainer label={label}>
            <ComboboxField
                fieldName={comboboxName}
                selectionType='Media Type'
                options={mediaTypes}
            />

            <FileUpload
                fieldName={uploaderName}
            />
        </FormComposedFieldContainer>
    );
};

export default MediaUploadField;