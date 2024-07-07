import { Form } from "@/global_ui_components/form/form"
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area"
import { TypographyMuted } from "@/global_ui_components/ui/typography"
import { useFieldArray, useFormContext } from "react-hook-form"
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "@/global_ui_components/ui/button";

// TODO: move the contexts and providers into a separate file
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
export const WizardFocusAreaContext = createContext(null)

// TODO: this context will provide form isValid and stuff... so that it reaches the control as well allowing us to enable/ disable next button
const WizardBodyContextProvider = ({
    listOfSteps,
    listOfItems,
    children,
    value,
}) => {
    const { getValues, formState: { errors, isDirty } } = useFormContext();
    const isFormValid = Object.keys(errors).length === 0;

    const [selectedStepId, setSelectedStepId] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedSecondaryItemId, setSelectedSecondaryItemId] = useState(null);

    useEffect(() => {
        if (listOfSteps?.length > 0) {
            setSelectedStepId(prevStepId => prevStepId ? prevStepId : listOfSteps[0].stepId);
        }
    }, [listOfSteps]);

    const filteredListOfItems = useMemo(() =>
        listOfItems?.filter(item => item.step === selectedStepId),
        [listOfItems, selectedStepId]
    );

    useEffect(() => {
        if (filteredListOfItems?.length > 0) {
            setSelectedItemId(prevItemId => {
                const itemStillExists = filteredListOfItems.some(item => item.itemId === prevItemId);
                return itemStillExists ? prevItemId : filteredListOfItems[0].itemId;
            });
        }
    }, [filteredListOfItems]);

    const nextStepIndex = listOfSteps ? listOfSteps.findIndex(step => step.stepId === selectedStepId) + 1 : null;
    const nextItemIndex = filteredListOfItems ? filteredListOfItems.findIndex(item => item.itemId === selectedItemId) + 1 : null;

    const isFinalStep = nextStepIndex >= listOfSteps?.length;
    const isFinalItem = nextItemIndex >= filteredListOfItems?.length;

    const selectNextStep = () => {
        if (isFinalStep) return;
        setSelectedStepId(listOfSteps ? listOfSteps[nextStepIndex]?.stepId : null);
        setSelectedItemId(prevItemId => null)
    };

    const selectNextItem = (itemIndex) => {
        if (isFinalItem) return;
        setSelectedItemId(filteredListOfItems[itemIndex !== undefined ? itemIndex : nextItemIndex]?.itemId);
    };

    const handleGroupItemTraversal = () => {
        if (isFinalItem) selectNextStep();
        selectNextItem();
    };

    return (
        <WizardBodyContext.Provider value={{
            listOfSteps,
            listOfItems,
            filteredListOfItems,
            selectedStepId,
            selectedItemId,
            selectedSecondaryItemId,
            setSelectedStepId,
            setSelectedItemId,
            setSelectedSecondaryItemId,
            selectNextStep,
            selectNextItem,
            handleGroupItemTraversal,
            isFinalStep,
            isFinalItem,
            getValues,
            isFormValid,
            isDirty,
            ...value
        }}>
            {children}
        </WizardBodyContext.Provider>
    );
};

/**creates the field array,
 * and propagates the fields array, and fieldArray methods to item list, item preview, and item detail
 */
const WizardFocusAreaContextProvider = ({ fieldArrayName, fieldItemDefaultValues, value = {}, children }) => {
    const { listOfItems } = useContext(WizardBodyContext)

    const { fields, append } = useFieldArray({
        name: fieldArrayName,
        defaultValues: listOfItems
    });

    return (
        <WizardFocusAreaContext.Provider value={{
            fieldArrayName,
            fieldItemDefaultValues,
            fields,
            append,
            ...value
        }}>
            {children}
        </WizardFocusAreaContext.Provider >
    )
}

// #endregion


// composes the sidebar, focus area, and control sections.
export const WizardBody = ({
    schema,
    defaultValues,
    onSubmit,
    listOfSteps,
    listOfItems,
    children,
}) => {

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} className="flex flex-col h-screen overflow-hidden gap-5">
            <WizardBodyContextProvider
                listOfSteps={listOfSteps}
                listOfItems={listOfItems}
            >
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
export const WizardSidebar = ({ heading, children, renderForm, renderTree }) => {

    const { listOfSteps, listOfItems } = useContext(WizardBodyContext)

    return (
        <div className="min-w-64 max-w-96 h-full relative flex flex-col py-5 rounded-2xl gap-4 overflow-hidden ">
            {heading ? <TypographyMuted text={heading} /> : null}
            <ScrollArea>
                <div className="mb-5 mr-7">
                    {renderForm
                        ? renderForm()
                        : listOfSteps?.length > 0
                            ? renderTree(listOfSteps, listOfItems)
                            : renderTree(listOfItems)}
                </div>
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
    requireSidebarFormForAddingItems = false,
    fallbackItemName,
    fieldArrayName,
    fieldItemDefaultValues,
}) => {

    return (<div className="w-full max-h-full grid grid-cols-[3fr,2fr] gap-1 overflow-hidden">
        {/* already provides the fields array, field methods, and fieldArrayName. Additional values are passed in from here. */}
        <WizardFocusAreaContextProvider
            fieldArrayName={fieldArrayName}
            fieldItemDefaultValues={fieldItemDefaultValues}
            value={{ requireSidebarFormForAddingItems, fallbackItemName }} // default values for each item
        >
            {children}
        </WizardFocusAreaContextProvider>
    </div>)
}

// primary buttons for submission, and navigation to the next phase of the wizard
export const WizardControl = ({ mode = 'step', renderCustomNextButton, renderAdditionalButton, children }) => {

    // TODO: primary buttons allow moving on to the next phase of the wizard
    // TODO: secondary buttons allow creating items for the next step
    const {
        selectedStepId,
        selectedItemId,
        setSelectedItemId,
        selectNextStep,
        selectNextItem,
        handleGroupItemTraversal,
        isFinalStep,
        isFinalItem,
    } = useContext(WizardBodyContext)

    const handleButtonClick = () => {
        switch (mode) {
            case 'step':
                selectNextStep();
                break;

            case 'item':
                handleGroupItemTraversal();
                break;

            default:
                break;
        }
    }

    return (
        <div className="flex justify-end gap-3">
            {renderCustomNextButton
                ? renderCustomNextButton()
                : <Button
                    type='submit'
                    onClick={handleButtonClick}
                >
                    Next
                </Button>
            }
        </div>
    )
}


// display names - for placing components appropriately in the WizardBody
WizardSidebar.displayName = 'WizardSidebar'
WizardFocusArea.displayName = 'WizardFocusArea'
WizardControl.displayName = 'WizardControl'