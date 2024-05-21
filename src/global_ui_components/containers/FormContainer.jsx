import { cn } from "@/lib/utils"

export const FormContainer = ({ children, scroll = false }) => {
    return (
        <div className={cn('flex flex-col gap-8 mb-5',
            scroll ? 'mr-7' : ''
        )}>
            {children}
        </div>
    )
}

export const FormSectionContainer = ({ children }) => {
    return (
        <div className='flex flex-col gap-6'>{children}</div>
    )
}

export const FormSubSectionContainer = ({ children }) => {
    return (
        <div className="flex flex-col gap-4">{children}</div>
    )
}

export const FormComposedFieldContainer = ({ children }) => {
    return (
        <div className="flex flex-col gap-1">{children}</div>
    )
}