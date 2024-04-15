
export function TypographyP({ text }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>
    )
}

export function TypographyLead({ text }) {
    return (
        <p className="text-xl text-muted-foreground">{text}</p>
    )
}

export function TypographyLarge({ text }) {
    return <div className="text-lg font-semibold">
        {text}
    </div>
}

export function TypographySmall({ text }) {
    return (
        <small className="text-sm font-medium leading-none">{text}</small>
    )
}

export function TypographyMuted({ text }) {
    return (
        <p className="text-sm text-muted-foreground">{text}</p>
    )
}

