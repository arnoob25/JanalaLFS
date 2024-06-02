import { useFormContext, } from "react-hook-form";
//import { FormItem, FormControl, FormLabel, FormField } from "@/global_ui_components/form/form-old";
import { Input } from "@/global_ui_components/ui/input";
import Combobox from "@/global_ui_components/ui/combobox";
import { FormComposedFieldContainer } from "@/global_ui_components/containers/FormContainer";

// TODO: replace with proper enum
const mediaTypes = [
    { value: 'video', label: 'Video' },
    { value: 'data_table', label: 'Table' },
    { value: 'js_module', label: 'JS Module' },
    { value: 'svg_html', label: 'SVG' },
]

const MediaUploadField = ({ label, comboboxName, uploaderName }) => {
    const { control, setValue, trigger } = useFormContext();

    const handleMediaTypeSelection = (field, item) => {
        setValue(comboboxName, field.value === item.value ? '' : item.value)
        trigger(comboboxName)
    }

    // TODO: apply when validation is available
    const handleMediaFileUpload = () => {
        trigger(uploaderName)
    }

    return (
        <FormComposedFieldContainer>
            {label ? <FormLabel secondary>{label}</FormLabel> : null}
            <FormField
                name={comboboxName}
                control={control}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Combobox
                                field={field}
                                selectionType='Media Type'
                                options={mediaTypes}
                                onSelect={handleMediaTypeSelection}
                            />
                        </FormControl>
                    </FormItem >
                )}
            />
            <FormField
                name={uploaderName}
                control={control}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                                {...field}
                                type='file'
                                onChange={handleMediaFileUpload}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </FormComposedFieldContainer>
    );
};

export default MediaUploadField;
