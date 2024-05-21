import { useFieldArray } from 'react-hook-form';
import { Button } from '../../../../../../../global_ui_components/ui/button';
import { Plus } from 'lucide-react';
import { TextInput } from '@/global_ui_components/form/TextInput';
import { CheckboxSecondary } from '@/global_ui_components/form/Checkbox';
import { Children, cloneElement } from 'react';

// TODO: see if we can make a reusable component that'll make arrays of fields

const BranchFields = ({ defaultValue, arrayName, children, addBtnLabel }) => {

    const { fields, append } = useFieldArray({
        name: arrayName,
    });

    return (
        <div className='flex flex-col gap-4'>
            {fields.map((field, index) => (
                <div key={field.id}>
                    {Children.map(children, (child) =>
                        cloneElement(child, {
                            ...field,
                            key: `${child.type.name}-${field.id}-${index}`,
                            fieldNamePrefix: `branches.${index}.`
                        })
                    )}
                    <TextInput secondary
                        {...field}
                        fieldName={`branches.${index}.title`}
                        label={`Branch ${index <= 9 ? `0${index + 1}` : `${index + 1}`}`}
                        placeholder='Title of the branch'
                    />
                    <CheckboxSecondary
                        {...field}
                        fieldName={`branches.${index}.shouldAttempt`}
                        label='Should attempt'
                    />
                </div>
            ))}
            <Button variant='ghost' onClick={() => append(defaultValue)} className='w-full mt-2.5 items-center gap-1'>
                <Plus size={18} />
                Add {addBtnLabel}
            </Button>
        </div>
    );
};

export default BranchFields;