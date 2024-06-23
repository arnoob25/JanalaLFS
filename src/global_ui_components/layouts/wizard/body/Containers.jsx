import { Form } from "@/global_ui_components/form/form"
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area"
import { TypographyMuted } from "@/global_ui_components/ui/typography"
import { useFieldArray, useFormContext } from "react-hook-form"
import { createContext, useState } from "react";
import { Button } from "@/global_ui_components/ui/button";

// TODO: describe what 'steps' refer to in the context of the wizard. Its not the same as a gla step.
// NOTE: in this file, "items" refer to stuff that are created using the wizard. i.e. an inquiry.

/** NOTE: Wizard components' responsibilities are limited to 
 *  creating the form, and maintaining the visual structure, 
 *  
 *  context providers manage the states for the selected step and selected item 
 *  and creates the FieldArray to manage creating items in the wizard 
 * 
 *  writing additional logic is strongly discouraged */

// #region contexts

// TODO: consider creating multiple contexts for the following values that serve various concerns
export const WizardBodyContext = createContext(null)
// TODO: rename it to something like: itemFieldArrayContext
export const WizardFocusAreaContext = createContext(null)

// TODO: this context will provide form isValid and stuff... so that it reaches the control as well allowing us to enable/ disable next button
const WizardBodyContextProvider = ({ children, value }) => {
    /**The context provider will provide the knobs and levers to build complex functionalities
     * but should not contain the logic for enabling those functionalities.
     */
    const { getValues, formState: { errors, isDirty } } = useFormContext()

    const [selectedStepId, setSelectedStepId] = useState(null)
    const [selectedItemId, setSelectedItemId] = useState(1)
    const [selectedSecondaryItemId, setSelectedSecondaryItemId] = useState(null)

    // TODO: try using isValid from the formState
    const isFormValid = Object.keys(errors).length === 0

    return (
        <WizardBodyContext.Provider value={{
            selectedStepId,
            setSelectedStepId,
            selectedItemId,
            setSelectedItemId,
            selectedSecondaryItemId,
            setSelectedSecondaryItemId,
            getValues,
            isFormValid,
            isDirty,
            ...value
        }}>
            {children}
        </WizardBodyContext.Provider>
    )
}

// TODO: rename to WizardFieldArrayContextProvider or something that indicates that this enables creating items
/**creates the field array,
 * and propagates the fields array, and fieldArray methods to item list, item preview, and item detail
 */
const WizardFocusAreaContextProvider = ({ fieldArrayName, value = {}, children }) => {
    const { fields, append } = useFieldArray({ name: fieldArrayName });

    return (
        <WizardFocusAreaContext.Provider
            value={{
                fieldArrayName,
                fields,
                append,
                ...value,
            }}>
            {children}
        </WizardFocusAreaContext.Provider >
    )
}

// #endregion


// composes the sidebar, focus area, and control sections.
export const WizardBody = ({ schema, defaultValues, onSubmit, children }) => {
    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} className="flex flex-col h-screen overflow-hidden gap-5">
            <WizardBodyContextProvider>
                <div className="h-full grid grid-cols-[1.2fr,3.5fr] gap-5 justify-stretch overflow-hidden">
                    {children.filter(
                        child => child.type.displayName === 'WizardSidebar'
                            || child.type.displayName === 'WizardFocusArea')
                    }
                </div>
                <div className="ml-auto">
                    {children.find(child => child.type.displayName === 'WizardControl')}
                </div>
            </WizardBodyContextProvider>
        </Form>
    )
}

// a sidebar for displaying secondary forms or list of items.
export const WizardSidebar = ({ heading, children, renderTree }) => {

    return (
        <div className="min-w-64 max-w-96 h-full relative flex flex-col py-5 rounded-2xl gap-4 overflow-hidden ">
            {heading ? <TypographyMuted text={heading} /> : null}
            <ScrollArea>
                <div className="mb-5 mr-7">{children}</div>
                <ScrollBar />
            </ScrollArea>
        </div>
    )
}

/**creates a fieldArray to enable multiple item creation
 * and composes item detail fields with either item list or item preview.
 */
export const WizardFocusArea = ({
    children,
    fieldArrayName,
    fieldItemDefaultValues,
    requireSidebarFormToAddItems = false,
    fallbackItemName
}) => {

    return (<div className="w-full max-h-full grid grid-cols-[3fr,2fr] gap-1 overflow-hidden">
        {/* already provides the fields array, field methods, and fieldArrayName. Additional values are passed in from here. */}
        <WizardFocusAreaContextProvider
            fieldArrayName={fieldArrayName}
            value={{ fieldItemDefaultValues, requireSidebarFormToAddItems, fallbackItemName }} // default values for each item
        >
            {children}
        </WizardFocusAreaContextProvider>
    </div>)
}

// primary buttons for submission, and navigation to the next phase of the wizard
export const WizardControl = ({ children, next = true, previous = false, renderCustomButton }) => {

    // TODO: primary buttons allow moving on to the next phase of the wizard
    // TODO: secondary buttons allow creating items for the next step

    return (
        <div className="flex justify-end gap-3">
            {next ? <Button>Next</Button> : null}
            {previous ? <Button>Previous</Button> : null}
            {renderCustomButton ? renderCustomButton() : null}
        </div>
    )
}


// display names - for placing components appropriately in the WizardBody
WizardSidebar.displayName = 'WizardSidebar'
WizardFocusArea.displayName = 'WizardFocusArea'
WizardControl.displayName = 'WizardControl'