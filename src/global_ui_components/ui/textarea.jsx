import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label";

const Textarea = React.forwardRef(({ className, height = '80', ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `flex min-h-[${height}px] max-h-[300px] w-full rounded-md border border-input bg-[var(--card)] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }


// derived textareas



export function TextareaWithLabel({ label = '', compact = false, placeholder = '', onInputChange = input => { } }) {
  return (
    <div className="grid w-full gap-1.5" >
      <Label htmlFor="message">{label}</Label>
      <Textarea placeholder={placeholder} className={`${compact ? 'h-[80px] max-h-[120px] min-h-[40px]' : 'min-h-[160px]'}`} id="message" onChange={event => onInputChange(event.target.value)} />
    </div>
  )
}