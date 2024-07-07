import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"
import { Check, ChevronsUpDown } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList
} from "./command"
import { cn } from "@/lib/utils"

// TODO: the combobox should not exceed the width of the container component
const Combobox = ({ field, selectionType, options, onSelect }) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-full justify-between font-normal bg-[var(--card)] ${!field.value ? "text-muted-foreground" : ''}`}
                >
                    <p className="truncate">
                        {field.value
                            ? options.find(item => item.value === field.value)?.label
                            : `Select ${selectionType}`}
                    </p>

                    <ChevronsUpDown className="min-h-5 min-w-5 ml-2" size={20} strokeWidth={1.25} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0 w-[var(--radix-popover-trigger-width)]' align='start'>
                <Command className='p-2 gap-2'>
                    <CommandInput placeholder={`Search ${selectionType}...`} />
                    <CommandEmpty>No {selectionType} found.</CommandEmpty>
                    <CommandList>{options && options.length > 0
                        ? options.map(item => (
                            <CommandItem
                                key={item.value}
                                value={item.value}
                                onSelect={() => {
                                    onSelect(field, item)
                                    setOpen(false)
                                }}
                                className='flex justify-start items-center'
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 min-w-4 max-w-4",
                                        field.value === item.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                <p className="truncate">{item.label}</p>
                            </CommandItem>))
                        : null}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover >
    )
}

export default Combobox