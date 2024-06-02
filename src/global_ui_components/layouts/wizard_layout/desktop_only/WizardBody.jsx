import { Form } from "@/global_ui_components/form/form"
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area"
import { TypographyMuted } from "@/global_ui_components/ui/typography"
import { useFieldArray } from "react-hook-form"
import { createContext, useState } from "react";

// Note: in this file, "items" refer to stuff that are created using the wizard. i.e. an inquiry.

// composes the sidebar, focus area, and control sections.
export const WizardBody = ({ schema, children, onSubmit }) => {
    return (
        <Form schema={schema} onSubmit={onSubmit} className="flex flex-col h-screen overflow-hidden gap-5">
            <div className="h-full grid grid-cols-[1.2fr,3.5fr] gap-5 justify-stretch overflow-hidden">
                {children.filter(
                    child => child.type.displayName === 'WizardSidebar'
                        || child.type.displayName === 'WizardFocusArea')
                }
            </div>
            <div className="ml-auto">
                {children.find(child => child.type.displayName === 'WizardControl')}
            </div>
        </Form>
    )
}

// a sidebar for displaying secondary forms or list of items.
export const WizardSidebar = ({ heading, children }) => {
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

// context 
export const WizardFocusAreaContext = createContext(null)

/* propagates the fields array, and fieldArray methods to item list, item preview, and item detail
also propagates selectedItemId and setSelectedItemId to for selecting items */
export const WizardFocusAreaContextProvider = ({ children, value = {} }) => {
    // managing the state in the provider reduces the number of re renders
    const [selectedItemId, setSelectedItemId] = useState(null)

    return (
        <WizardFocusAreaContext.Provider value={{ ...value, selectedItemId, setSelectedItemId }}>
            {children}
        </WizardFocusAreaContext.Provider >
    )
}

// creates a fieldArray to enable multiple item creation.
// And composes item detail fields with either item list or item preview.
export const WizardFocusArea = ({ children, fieldArrayName, fieldItemDefaultValues }) => {
    const { fields, append } = useFieldArray({
        name: fieldArrayName
    })

    return (
        <div className="w-full max-h-full grid grid-cols-[3fr,2fr] gap-1 overflow-hidden">
            <WizardFocusAreaContextProvider
                // already provides selectedItem and setSelectedItem
                value={{
                    fieldArrayName,
                    fieldItemDefaultValues, // default values for each item
                    fields,
                    append
                }}
            >
                {children}
            </WizardFocusAreaContextProvider>
        </div>
    )
}

// primary buttons for submission, and navigation to the next phase of the wizard
export const WizardControl = ({ children }) => {
    return (
        <div className="flex justify-end gap-3">
            {children}
        </div>
    )
}


// display names 
WizardSidebar.displayName = 'WizardSidebar'
WizardFocusArea.displayName = 'WizardFocusArea'
WizardControl.displayName = 'WizardControl'