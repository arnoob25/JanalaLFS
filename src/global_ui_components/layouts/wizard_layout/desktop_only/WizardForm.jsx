import { FormContainer } from "@/global_ui_components/containers/FormContainer";
import { AddIcon, Button } from "@/global_ui_components/ui/button";
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area";
import { Separator } from "@/global_ui_components/ui/separator";
import { TypographyH2, TypographyH4, TypographyMuted, TypographyP } from "@/global_ui_components/ui/typography";
import { createContext, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import FallbackText from "@/global_ui_components/fallbacks/FallbackText";
import { WizardFocusAreaContext } from "./WizardBody";

// displays the list of items created with the form
export const ItemList = ({ heading, children }) => {

    const { append, setSelectedItemId, fieldItemDefaultValues } = useContext(WizardFocusAreaContext)
    const { formState: { isValid } } = useFormContext()

    // TODO: allow updating and deleting steps

    const addNewField = () => {
        // doesn't append when previous fields aren't filled out
        if (!isValid) return

        fieldItemDefaultValues.itemId = uuidv4()

        // sets the new feild as the selected item
        //setSelectedItemId(prevId => prevId === fieldItemDefaultValues.itemId ? null : fieldItemDefaultValues.itemId)
        append(fieldItemDefaultValues)
    }

    return (
        <div className="min-w-64 max-h-full overflow-hidden flex flex-col pt-5 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
            <div className="flex flex-row justify-between mb-3.5 mx-5">
                <TypographyH2 text={heading} />
                <AddIcon onClick={addNewField} />
            </div>
            <Separator />
            <ScrollArea>
                <div className="max-h-full flex flex-col-1 my-5 ml-4 mr-7 overflow-hidden">
                    {children}
                    <ScrollBar />
                </div>
            </ScrollArea>
        </div>
    );
}

// previews the item created in the form
export const ItemPreview = ({ heading, children }) => {
    return (
        <div className="min-w-96 overflow-y-scroll flex flex-col pt-3 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
            <div className="mb-3.5 mx-5">
                <TypographyH4 text={`Preview: ${heading}`} />
            </div>
            <Separator />
            <ScrollArea>
                <div className="max-h-full flex flex-col-1 mt-5 mx-7 overflow-hidden">
                    {children}
                    <ScrollBar />
                </div>
            </ScrollArea>
        </div>
    );
}

// context
export const ItemDetailContext = createContext(null);

// displays the fields that define the item
export const ItemDetailFields = ({ heading, children }) => {

    const { fields, fieldArrayName, selectedItemId } = useContext(WizardFocusAreaContext)

    return (<div className='flex flex-col min-w-72 h-full relative overflow-hidden gap-4 p-5 pr-0 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md'>
        {heading ? <TypographyMuted text={heading} /> : null}

        {fields && fields.length > 0
            ? <ScrollArea>
                <FormContainer scroll>{fields?.map((field, index) => {
                    const fieldItemNamePrefix = `${fieldArrayName}.${index}`

                    return (
                        <ItemDetailContext.Provider
                            key={field.id}
                            value={{ field, fieldItemNamePrefix, selectedItemId }}
                        >
                            {children}
                        </ItemDetailContext.Provider>
                    )
                })}</FormContainer>
                <ScrollBar />
            </ScrollArea>

            : <FallbackText text='Add a new item to get started' />}

        {/**TODO: review the controls */}
        <div className="flex flex-grow justify-end items-end mr-7">
            {/**controls 
             * 
             * instead of the save button, allow the delete button
             * 
                <Button
                    variant='secondary'
                    size='sm'
                    type='submit'
                    onClick={() => console.log('Save')}
                >
                    Save
                </Button>
            
             * 
             * 
            */}
        </div>
    </div>)
}