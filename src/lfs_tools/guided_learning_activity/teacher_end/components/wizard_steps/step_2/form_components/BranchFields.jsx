import { useFieldArray } from 'react-hook-form';
import { TextInput } from '@/global_ui_components/form/TextInput';
import { InquiryDetailFormDefaultValues } from '../ListInquiries';
import { CheckboxFieldSecondary } from '@/global_ui_components/form/Checkbox';
import FieldArrayAddButton from '@/global_ui_components/form/FieldArrayAddButton';


const BranchFields = () => {
    const defaultValue = InquiryDetailFormDefaultValues.branches[0]

    const { fields, append } = useFieldArray({
        name: 'branches',
    });

    return (
        <div className='flex flex-col gap-4'>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <TextInput secondary
                        {...field}
                        fieldName={`branches.${index}.title`}
                        label={`Branch ${index <= 9 ? `0${index + 1}` : `${index + 1}`}`}
                        placeholder='Title of the branch'
                    />
                    <CheckboxFieldSecondary
                        {...field}
                        fieldName={`branches.${index}.shouldAttempt`}
                        label='Should attempt'
                    />
                </div>
            ))}
            <FieldArrayAddButton label='Branch' onClick={() => append(defaultValue)} />
        </div>
    );
};

export default BranchFields;