import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({ className, destructive = false, secondary = false, applySpacing = false, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), destructive ? 'text-destructive' : '', secondary ? 'text-sm text-muted-foreground' : '', 'min-w-fit', className, applySpacing ? 'leading-7' : '')} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
