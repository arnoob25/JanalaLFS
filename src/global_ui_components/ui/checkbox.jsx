import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { TypographyP } from "./typography"

const CheckboxBase = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
CheckboxBase.displayName = CheckboxPrimitive.Root.displayName

export { CheckboxBase }


// derived checkboxes

const Choice = ({id, label, checked, onCheckedChange }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-top bg-[var(--card)] space-x-2 p-6 rounded-lg cursor-pointer"
    >
      <CheckboxBase
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className='mt-1.5 mr-1'
      />
      <span><TypographyP text={label} /></span>
    </label>
  )
}

export default Choice