import { useFieldArray } from 'react-hook-form';
import { Button } from '@/global_ui_components/ui/button';
import { Plus } from 'lucide-react';
import { inquiryDetailsFormDefaultValues } from '../../DesignInquiries';
import { Label } from '@/global_ui_components/ui/label';
import MediaUploadField from './MediaUploadField';
import { ComboboxField } from '@/global_ui_components/form/Combobox';
import { FormSectionContainer } from '@/global_ui_components/containers/FormContainer';

// TODO: replace with a proper enum
const methods = [
    { value: 'tab', label: 'Tab' },
    { value: 'carousel', label: 'Carousel' },
]

const MediaUploads = () => {
    const defaultValue = inquiryDetailsFormDefaultValues.media[0]

    const { fields, append } = useFieldArray({ name: 'media' });

    return (
        <FormSectionContainer>
            <Label>Media</Label>
            {fields?.map((field, index) => (
                <MediaUploadField
                    key={field.id}
                    label={fields.length > 1 ? `Media ${index < 9 ? `0${index + 1}` : `${index + 1}`}` : null}
                    comboboxName={`media.${index}.mediaType`}
                    uploaderName={`media.${index}.file`}
                />
            ))}
            <Button variant='ghost' onClick={() => append(defaultValue)} className='w-full mt-2.5 items-center gap-1'>
                <Plus size={18} />
                Add Media
            </Button>
            {fields?.length > 1
                ? <ComboboxField
                    fieldName='mediaSwitcherMethod'
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