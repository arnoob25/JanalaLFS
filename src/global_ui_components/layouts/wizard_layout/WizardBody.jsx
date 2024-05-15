import { AddIcon } from "@/global_ui_components/ui/button"
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area"
import { Separator } from "@/global_ui_components/ui/separator"
import { TypographyH2, TypographyH4, TypographyMuted } from "@/global_ui_components/ui/typography"

// parent component that composes context, form, and action to create the wizard body.
export const WizardBody = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-hidden gap-5">
            <div className="h-full grid grid-cols-[1.2fr,3.5fr] gap-5 justify-stretch overflow-hidden">
                {children.filter(
                    child => child.type.displayName === 'WizardContext' || child.type.displayName === 'WizardForm')
                }
            </div>
            <div className="ml-auto">
                {children.find(child => child.type.displayName === 'WizardAction')}
            </div>
        </div>
    )
}
WizardBody.displayName = 'WizardBody'

// a sidebar used to provide context, and even navigate and receive form input.
export const WizardContext = ({ heading, children }) => {
    return (
        <div className="min-w-64 max-w-96 max-h-full relative flex flex-col py-5 rounded-2xl gap-4 overflow-hidden ">
            {heading ? <TypographyMuted text={heading} /> : null}
            <ScrollArea>
                <div className="mb-5 mr-7">{children}</div>
                <ScrollBar />
            </ScrollArea>
        </div>
    )
}
WizardContext.displayName = 'WizardContext'

// for creating and defining items.
export const WizardForm = ({ children }) => {
    return (
        <div className="w-full max-h-full grid grid-cols-[3fr,2fr] gap-1 overflow-hidden">
            {children}
        </div>
    )
}
WizardForm.displayName = 'WizardForm'

// primary buttons for submission, and navigation to the next step
export const WizardAction = ({ children }) => {
    return (
        <div className="flex justify-end gap-3">
            {children}
        </div>
    )
}
WizardAction.displayName = 'WizardAction'

// for composing inside the form

// displays the list of items created with the form
export const ItemList = ({ heading, children }) => {
    // TODO: replace index with uuid
    return (
        <div className="min-w-64 max-h-full overflow-hidden flex flex-col pt-5 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
            <div className="flex flex-row justify-between mb-3.5 mx-5">
                <TypographyH2 text={heading} />
                <AddIcon />
            </div>
            <Separator />
            <ScrollArea>
                <div className="max-h-full flex flex-col-1 my-5 mx-7 overflow-hidden">
                    {children}
                    <ScrollBar />
                </div>
            </ScrollArea>
        </div>
    );
};
ItemList.displayName = 'ItemList'

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
ItemPreview.displayName = 'ItemPreview'

// provides the form fields
export const ItemDetail = ({ heading, children }) => {
    return (
        <div className="min-w-72 max-h-full flex flex-col relative p-5 pr-0 gap-4 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md overflow-hidden">
            <TypographyMuted text={heading} />
            <ScrollArea>
                <div className="flex flex-col mb-5 mr-5 gap-8">{children}</div>
                <ScrollBar />
            </ScrollArea>
        </div>
    )
}
ItemDetail.displayName = 'ItemDetail'
