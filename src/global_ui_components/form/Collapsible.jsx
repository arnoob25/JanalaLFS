import { useFormContext, useWatch } from "react-hook-form"


const CollapsibleFormSection = ({ triggerField, match = false, matchWith, children }) => {
    const { control } = useFormContext()

    const triggerBoolValue = useWatch({ // field is a boolean
        control: control,
        name: triggerField,
        disabled: match // disabled when match is true
    })

    const triggerEnumValue = useWatch({
        control: control,
        name: triggerField,
        disabled: !match // disabled when match is false
    })

    const shouldExpand = match ? triggerEnumValue === matchWith : triggerBoolValue

    return (
        <div className={!shouldExpand ? 'invisible hidden' : ''}>
            {children}
        </div>
    )
}

export default CollapsibleFormSection