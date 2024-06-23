import { useFieldArray } from 'react-hook-form';
import { Button } from '@/global_ui_components/ui/button';
import { Plus } from 'lucide-react';
//import { inquiryDetailsFormDefaultValues } from '../../DesignInquiries';
import { Label } from '@/global_ui_components/ui/label';
import MediaUploadField from './MediaUploadField';
import { ComboboxField } from '@/global_ui_components/form/Combobox';
import { FormSectionContainer } from '@/global_ui_components/containers/FormContainer';
import FieldArrayAddButton from '@/global_ui_components/form/FieldArrayAddButton';

// TODO: replace with a proper enum
const methods = [
    { value: 'tab', label: 'Tab' },
    { value: 'carousel', label: 'Carousel' },
]

const MediaUploads = () => {
    const defaultValue = {} //inquiryDetailsFormDefaultValues.media[0]

    const { fields, append } = useFieldArray({ name: 'media.mediaItems' });

    return (
        <FormSectionContainer label='Media'>
            {fields?.map((field, index) => (
                <MediaUploadField
                    key={field.id}
                    label={fields.length > 1 ? `Media ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
                    comboboxName={`media.mediaItems.${index}.mediaType`}
                    uploaderName={`media.mediaItems.${index}.file`}
                />
            ))}
            <FieldArrayAddButton label='Add Media' onClick={() => append(defaultValue)} />

            {fields?.length > 1
                ? <ComboboxField
                    fieldName='media.mediaSwitcherMethod'
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