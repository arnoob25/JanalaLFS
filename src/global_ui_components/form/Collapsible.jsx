import { useFormContext, useWatch } from "react-hook-form"


const CollapsibleFormSection = ({ triggerFieldName, shouldMatch = false, matchWithValue, children }) => {
    const { control } = useFormContext()

    const triggerBoolValue = useWatch({ // field is a boolean
        control: control,
        name: triggerFieldName,
        disabled: shouldMatch // disabled when match is true
    })

    const triggerEnumValue = useWatch({
        control: control,
        name: triggerFieldName,
        disabled: !shouldMatch // disabled when match is false
    })

    const shouldExpand = shouldMatch ? triggerEnumValue === matchWithValue : triggerBoolValue

    return (
        <div className={!shouldExpand ? 'invisible hidden' : ''}>
            {children}
        </div>
    )
}

export default CollapsibleFormSection