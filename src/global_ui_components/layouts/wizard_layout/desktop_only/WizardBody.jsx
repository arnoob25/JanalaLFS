import { FormContainer } from "@/global_ui_components/containers/FormContainer"
import { AddIcon, Button } from "@/global_ui_components/ui/button"
import { Form } from "@/global_ui_components/ui/form"
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area"
import { Separator } from "@/global_ui_components/ui/separator"
import { TypographyH2, TypographyH4, TypographyMuted } from "@/global_ui_components/ui/typography"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { forwardRef, useEffect, useImperativeHandle } from "react"
import { useForm } from "react-hook-form"

// parent component that composes context, form, and action to create the wizard body.
export const WizardBody = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-hidden gap-5">
            <div className="h-full grid grid-cols-[1.2fr,3.5fr] gap-5 justify-stretch overflow-hidden">
                {children.filter(
                    child => child.type.displayName === 'WizardFocusArea' || child.type.displayName === 'WizardContext')
                }
            </div>
            <div className="ml-auto">
                {children.find(child => child.type.displayName === 'WizardControl')}
            </div>
        </div>
    )
}
WizardBody.displayName = 'WizardBody'

// a sidebar used to provide context.
export const WizardContext = ({ heading, children, form = false }) => {
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
WizardContext.displayName = 'WizardContext'

// for creating and defining items.
export const WizardFocusArea = ({ children }) => {
    return (
        <div className="w-full max-h-full grid grid-cols-[3fr,2fr] gap-1 overflow-hidden">
            {children}
        </div>
    )
}
WizardFocusArea.displayName = 'WizardFocusArea'

// primary buttons for submission, and navigation to the next step
export const WizardControl = ({ children }) => {
    return (
        <div className="flex justify-end gap-3">
            {children}
        </div>
    )
}
WizardControl.displayName = 'WizardControl'

// for composing inside the form

// displays the list of items created with the form
export const ItemList = ({ heading, children, selectedItemId, onItemAdd }) => {
    // TODO: replace index with uuid
    return (
        <div className="min-w-64 max-h-full overflow-hidden flex flex-col pt-5 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
            <div className="flex flex-row justify-between mb-3.5 mx-5">
                <TypographyH2 text={heading} />
                <AddIcon onClick={onItemAdd} disabled={selectedItemId ? true : false} />
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


// the primary form. The secondary form is placed inside the sidebar.
// TODO: decide whether to add an option to select whether we reset the form upon submission or not. 
// Alternatively, the option can be to optimistically update the form. 
// this can be the option, since we'll generally move on the form page once updated, and won't need to display new values.
export const ItemForm = forwardRef(({
    heading,
    schema,
    defaultValues = {},
    existingValues,
    onSubmit,
    children,
    wizardContext = false,
    save = true
}, ref) => {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues
    })

    const { isSubmitSuccessful } = form.formState

    // Exposes the handleSubmit function to the parent component
    useImperativeHandle(ref, () => ({
        handleSubmit: () => form.handleSubmit(onSubmit),
    }));

    // prefill the form with existing values
    useEffect(() => {
        if (existingValues) {
            form.reset(existingValues)
        }
    }, [form, existingValues])

    // resets the form after successful submit
    useEffect(() => {
        if (isSubmitSuccessful) {
            form.reset()
        }
    }, [form, isSubmitSuccessful])

    return (
        <div
            className={cn("flex flex-col relative overflow-hidden gap-4",
                !wizardContext
                    ? 'min-w-72 h-full p-5 pr-0 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md '
                    : ''
            )}>

            {heading ? <TypographyMuted text={heading} /> : null}

            <ScrollArea>
                <Form {...form}><form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormContainer scroll sidebar={wizardContext}>{children}</FormContainer>
                </form></Form>
                <ScrollBar />
            </ScrollArea>

            {save
                ? <div className="flex flex-grow justify-end items-end mr-7">
                    <Button
                        variant='secondary'
                        size='sm'
                        type='submit'
                        onClick={() => form.handleSubmit(onSubmit)()}>
                        Save
                    </Button>
                </div>
                : null}
        </div>
    )
})

ItemForm.displayName = 'ItemForm'