import { TypographyP, TypographySmall } from "@/global_ui_components/ui/typography"

const TextContainerCard = ({ text, label }) => {
    return (
        <>
            <TypographySmall text={label} />
            <div className="flex flex-col space-y-3 rounded-lg p-5" style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}>
                <TypographyP text={text} />
            </div>
        </>
    )
}

export default TextContainerCard
