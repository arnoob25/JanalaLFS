import { useFieldArray } from 'react-hook-form';
import MediaUploadField from './MediaUploadField';
import { ComboboxField } from '@/global_ui_components/form/Combobox';
import { FormSectionContainer } from '@/global_ui_components/containers/FormContainer';
import FieldArrayAddButton from '@/global_ui_components/form/FieldArrayAddButton';

// TODO: replace with a proper enum
const methods = [
    { value: 'tab', label: 'Tab' },
    { value: 'carousel', label: 'Carousel' },
]

const MediaUploads = ({ fieldNamePrefix }) => {
    const defaultValue = {} //inquiryDetailsFormDefaultValues.media[0]

    const { fields, append } = useFieldArray({ name: `${fieldNamePrefix}.media.mediaItems` });

    return (
        <FormSectionContainer label='Media'>
            {fields?.map((field, index) => (
                <MediaUploadField
                    key={field.id}
                    label={fields.length > 1 ? `Media ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
                    comboboxName={`${fieldNamePrefix}.media.mediaItems.${index}.mediaType`}
                    uploaderName={`${fieldNamePrefix}.media.mediaItems.${index}.file`}
                />
            ))}
            <FieldArrayAddButton label='Add Media' onClick={() => append(defaultValue)} />

            {fields?.length > 1
                ? <ComboboxField
                    fieldName={`${fieldNamePrefix}.media.mediaSwitcherMethod`}
                    label='Media Switcher Method'
                    selectionType='Method'
                    options={methods}
                    secondary
                />
                : null}
        </FormSectionContainer>
    );
};

export default MediaUploads;