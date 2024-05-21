import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label";

const Textarea = React.forwardRef(({ className, compact = false, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `flex max-h-[300px] w-full rounded-md border border-input bg-[var(--card)] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
        `${compact ? 'h-[80px] max-h-[120px] min-h-[40px]' : 'min-h-[160px]'}`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }