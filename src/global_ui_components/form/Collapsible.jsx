import { useFormContext, useWatch } from "react-hook-form"

// TODO: use getValues instead of useWatch
const CollapsibleFormSection = ({ collapseControlFieldName, enumValueToMatch, children }) => {
    const { control } = useFormContext()

    const isEnumComparison = enumValueToMatch?.length > 0

    const booleanFieldValue = useWatch({
        control: control,
        name: collapseControlFieldName,
        disabled: isEnumComparison
    })

    const enumFieldValue = useWatch({
        control: control,
        name: collapseControlFieldName,
        disabled: !isEnumComparison
    })

    const shouldExpand = isEnumComparison
        ? enumFieldValue === enumValueToMatch
        : booleanFieldValue

    
    return (
        //note: when collapse is used, the invisible element still takes up space in the display
        <div className={!shouldExpand ? 'invisible hidden ' : ''}>
            {children}
        </div>
    )
}

export default CollapsibleFormSection