import { cn } from "@/lib/utils"
import { TypographyP } from "../ui/typography"

const FallbackText = ({ text, compact = false, comfortable = false, smallFont = true }) => {
    return (
        <div className={cn(
            'flex min-w-full min-h-full justify-center items-center',
            compact ? 'min-h-fit max-h-20 justify-start' : '',
            comfortable ? 'min-h-24 max-h-lg justify-center' : '',
        )}>
            <TypographyP small={smallFont && !comfortable} muted text={text} />
        </div>
    )
}

export default FallbackText