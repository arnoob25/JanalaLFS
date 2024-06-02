import { cn } from "@/lib/utils"
import { TypographyP } from "../ui/typography"

const FallbackText = ({ text, compact = false, small = true }) => {
    return (
        <div className={cn(
            'flex min-w-full min-h-full justify-center items-center',
            compact ? 'min-h-fit max-h-20 justify-start' : '',
        )}>
            <TypographyP small={small} muted text={text} />
        </div>
    )
}

export default FallbackText