import { TypographyP, TypographySmall } from "@/global_ui_components/ui/typography"

const TextContainerCard = ({ text, label }) => {
    return (
        <>
            <TypographySmall text={label} />
            <div className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col space-y-3 rounded-xl p-5" >
                <TypographyP text={text} />
            </div>
        </>
    )
}

export default TextContainerCard
