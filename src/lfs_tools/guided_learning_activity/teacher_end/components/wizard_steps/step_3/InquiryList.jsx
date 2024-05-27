import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/global_ui_components/ui/collapsible"
import { Label } from "@/global_ui_components/ui/label"
import { TypographyLarge, TypographyMuted, TypographyP, TypographySmall } from "@/global_ui_components/ui/typography"
import { ChevronsUpDown, ListVideo } from "lucide-react"

const groups = [
    { id: 1, label: 'Step 1' },
    { id: 2, label: 'Step 2' },
    { id: 3, label: 'Step 3' },
    { id: 4, label: 'Step 4' },
    { id: 5, label: 'Step 5' },
    { id: 6, label: 'Step 6' },
]

const smData = [
    { id: 1, header: 'Inquiry 1', step: 1, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', step: 1, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Inquiry 3', step: 2, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 4, header: 'Inquiry 4', step: 2, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 5, header: 'Inquiry 5', step: 2, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 6, header: 'Inquiry 6', step: 3, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 7, header: 'Inquiry 7', step: 3, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 8, header: 'Inquiry 8', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 9, header: 'Inquiry 9', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 10, header: 'Inquiry 10', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 11, header: 'Inquiry 11', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 12, header: 'Inquiry 12', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 13, header: 'Inquiry 13', step: 4, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 14, header: 'Inquiry 14', step: 5, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 15, header: 'Inquiry 15', step: 5, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 16, header: 'Inquiry 16', step: 5, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 17, header: 'Inquiry 17', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 18, header: 'Inquiry 18', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 19, header: 'Inquiry 19', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 20, header: 'Inquiry 20', step: 6, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },

]

// TODO: use badges to indicate inquiries that originate a branch, and those that are branches of an inquiry

const InquiryList = ({ steps = groups, data = smData }) => {
    return (
        <div className="flex flex-col gap-3">{groups.map(group => {
            return (
                <Collapsible key={group.id}>
                    <div className="flex flex-row justify-between items-center">
                        <CollapsibleTrigger className="flex-grow"><TypographyP text={group.label} muted /></CollapsibleTrigger>
                        <ListVideo size={12} className="text-muted-foreground ml-1 mt-1" />
                    </div>

                    <CollapsibleContent>
                        <Accordion type="single" className='w-full' collapsible>
                            <div className="flex flex-col space-y-1.5 mb-2">{data?.filter(item => item.step === group.id).map(item => {
                                return (
                                    <AccordionItem key={item.id} value={item.id}>
                                        <div className="rounded-xl pb-1.5">
                                            <div className="flex flex-row justify-between items-center">
                                                <TypographyLarge text={item.header} />
                                                <AccordionTrigger iconSize={18} />
                                            </div>

                                            <AccordionContent className='flex flex-col mt-3 mx-1 rounded-xl gap-4'>
                                                <div className="flex flex-col gap-2">
                                                    <TypographySmall text='Goal:' weight="normal"></TypographySmall>
                                                    <TypographyMuted text={item.goal} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <TypographySmall text='Narrative:' weight="normal"></TypographySmall>
                                                    <TypographyMuted text={item.description} />
                                                </div>
                                            </AccordionContent>
                                        </div>
                                    </AccordionItem>
                                )
                            })}</div>
                        </Accordion>
                    </CollapsibleContent>
                </Collapsible>
            )
        })}</div>
    )
}

export default InquiryList