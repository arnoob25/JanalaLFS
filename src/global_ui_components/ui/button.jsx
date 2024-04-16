import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }



// derived buttons

export function ButtonPrimary({ label, onClick }) {
  return <Button onClick={onClick}>{label}</Button>
}

export function ButtonSecondary({ label, onClick }) {
  return <Button variant='secondary' onClick={onClick}>{label}</Button>
}

export function ButtonSecondarySm({ label, onClick }) {
  return <Button variant='secondary' size='sm' onClick={onClick}>{label}</Button>
}

export function ButtonDestructive({ label, onClick }) {
  return <Button variant='destructive' onClick={onClick}>{label}</Button>
}

export function ButtonOutline({ label, onClick }) {
  return <Button variant='outline' onClick={onClick}>{label}</Button>
}

export function ButtonGhost({ label, onClick }) {
  return <Button variant='ghost' onClick={onClick}>{label}</Button>
}

export function ButtonLink({ label, onClick }) {
  return <Button variant='Link' onClick={onClick}>{label}</Button>
}

export function ButtonIcon({ children, onClick }) {
  return (
    <Button variant='outline' size='icon' onClick={onClick}>
      {children}
    </Button>
  )
}

export function ButtonWithIcon({ children, label, onClick }) {
  return (
    <Button onClick={onClick}>
      {children} {label}
    </Button>
  )
}
