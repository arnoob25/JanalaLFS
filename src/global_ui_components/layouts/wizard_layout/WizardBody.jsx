import { AddIcon } from "@/global_ui_components/ui/button"
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area"
import { Separator } from "@/global_ui_components/ui/separator"
import { TypographyH2, TypographyH4, TypographyMuted } from "@/global_ui_components/ui/typography"

export const WizardBody = ({ content, action }) => {
    return (
        <div className="flex flex-col h-full max-h-full overflow-hidden gap-5">
            <div className="h-full grid grid-cols-[1.2fr,3.5fr] gap-5 justify-stretch overflow-hidden">
                {content}
            </div>
            <div className="ml-auto">
                {action}
            </div>
        </div>
    )
}

export const WizardSidebar = ({ heading, children }) => {
    return (
        <div className="min-w-64 max-w-96 max-h-full relative flex flex-col py-5 rounded-2xl gap-4 overflow-hidden ">
            {heading
                ? <TypographyMuted text={heading} />
                : null}
            <ScrollArea>
                <div className="mb-5 mr-7">{children}</div>
                <ScrollBar />
            </ScrollArea>
        </div>
    )
}

export const WizardForm = ({ children }) => {
    return (
        <div className="w-full max-h-full grid grid-cols-[3fr,2fr] gap-1 overflow-hidden">
            {children}
        </div>
    )
}

export const WizardItemList = ({ heading, children }) => {
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

export const WizardItemPreview = ({ heading, children }) => {
    return (
        <div className="min-w-64 overflow-y-scroll flex flex-col pt-3 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
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

export const WizardItemDetail = ({ heading, children }) => {
    return (
        <div className="min-w-64 max-h-full flex flex-col relative p-5 pr-0 gap-4 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md overflow-hidden">
            <TypographyMuted text={heading} />
            <ScrollArea>
                <div className="flex flex-col mb-5 mr-5 gap-8">{children}</div>
                <ScrollBar />
            </ScrollArea>
        </div>
    )
}