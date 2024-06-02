import { FormContainer } from "@/global_ui_components/containers/FormContainer";
import { AddIcon } from "@/global_ui_components/ui/button";
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area";
import { Separator } from "@/global_ui_components/ui/separator";
import { TypographyH2, TypographyH4, TypographyMuted } from "@/global_ui_components/ui/typography";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { WizardFocusAreaContext } from "./WizardBody";

// displays the list of items created with the form
export const ItemList = ({ heading, children }) => {

    const { append, setSelectedItemId, fieldItemDefaultValues } = useContext(WizardFocusAreaContext)
    //const { formState: { isValid } } = useFormContext()

    // TODO: allow updating and deleting steps

    const addNewField = () => {
        // doesn't append when previous fields aren't filled out
        //if (!isValid) return

        // TODO: see if we can use the field.id instead of itemId
        fieldItemDefaultValues.itemId = uuidv4()

        // sets the new feild as the selected item
        setSelectedItemId(prevId => prevId === fieldItemDefaultValues.itemId ? null : fieldItemDefaultValues.itemId)
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

// displays the fields that define the item
export const ItemDetailFields = ({ heading, children }) => {

    return (<div className='flex flex-col min-w-72 h-full relative overflow-hidden gap-4 p-5 pr-0 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md'>
        {heading ? <TypographyMuted text={heading} /> : null}

        <ScrollArea>
            <FormContainer scroll>
                {children}
            </FormContainer>
            <ScrollBar />
        </ScrollArea>
    </div>)
}