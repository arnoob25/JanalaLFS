import { cn } from "@/lib/utils"
import { Label } from "../ui/label"

// a different name than sidebar
export const FormContainer = ({ children, scroll = false, sidebar = false }) => {
    return (<div className={cn('flex flex-col gap-7 mb-5',
        scroll ? 'mr-7' : '',
        sidebar ? 'w-64 xl:w-72' : ''
    )}>
        {children}
    </div>)
}

export const FormSectionContainer = ({ children, label }) => {
    return (<div className="gap-0">
        {label ? <Label>{label}</Label> : null}
        <div className='flex flex-col gap-5'>{children}</div>
    </div>)
}

export const FormSubSectionContainer = ({ children, label }) => {
    return (<div className="gap-0">
        {label ? <Label secondary>{label}</Label> : null}
        <div className="flex flex-col gap-4">{children}</div>
    </div>)
}

export const FormComposedFieldContainer = ({ children, label }) => {
    return (<div className="gap-0">
        {label ? <Label secondary>{label}</Label> : null}
        <div className="flex flex-col gap-1">{children}</div>
    </div>)
}