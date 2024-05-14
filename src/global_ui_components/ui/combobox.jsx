import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
} from "./command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"
import { CommandList } from "./command"
import { TypographyP } from "./typography"



export function Combobox({ selectionType, data }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between font-normal bg-[var(--card)]"
                >
                    <p className="truncate max-w-[200px]">
                        {value
                            ? data.find(item => item.value === value)?.label
                            : `Select ${selectionType}`}
                    </p>
                    <ChevronsUpDown className="min-h-5 min-w-5 ml-2" size={20} strokeWidth={1.25} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0' align='start'>
                <Command className='p-2 gap-2 min-w-[var(--radix-popover-trigger-width)] max-w-[600px]]'>
                    <CommandInput placeholder={`Search ${selectionType}...`} />
                    <CommandEmpty>No {selectionType} found.</CommandEmpty>
                    {data && data.length > 0
                        ? <CommandList>
                            {data.map(item => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={currentValue => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <p className="truncate max-w-[500px]">{item.label}</p>
                                </CommandItem>
                            ))}
                        </CommandList>
                        : null}
                </Command>
            </PopoverContent>
        </Popover >
    )
}
