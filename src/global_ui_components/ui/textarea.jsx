import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }


// derived textareas



export function TextareaWithLabel({ label = '', placeholder = '', onInputChange = input => { } }) {  
  return (
    <div className="grid w-full gap-1.5" >
      <Label htmlFor="message">{label}</Label>
      <Textarea placeholder={placeholder} id="message" onChange={event => onInputChange(event.target.value)} />
    </div>
  )
}