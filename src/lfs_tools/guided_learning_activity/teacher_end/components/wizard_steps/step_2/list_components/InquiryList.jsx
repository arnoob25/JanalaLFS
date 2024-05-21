import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { Badge } from "@/global_ui_components/ui/badge"
import { TypographyLarge, TypographyP, } from "@/global_ui_components/ui/typography"
import BranchList from "./BranchList"

const smInquiries = [
    { id: 1, header: 'Inquiry 1', isBranching: true, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const Inquiries = [
    { id: 1, header: 'Inquiry 1', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, header: 'Inquiry 2', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, header: 'Inquiry 3', isBranching: true, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 4, header: 'Inquiry 4', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 5, header: 'Inquiry 5', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const InquiryList = ({ data = smInquiries }) => {
    return (
        <Accordion type="single" collapsible>
            <div className="flex flex-col gap-2 mb-3">{data?.map(item => {
                return (
                    <AccordionItem key={item.id} value={item.id}>
                        <div className="pb-6 rounded-xl">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <span className="flex flex-row justify-start items-baseline gap-2">
                                    <TypographyLarge text={item.header} />
                                    {item.isBranching
                                        ? <Badge variant="secondary">Branch</Badge>
                                        : null}
                                </span>
                                <AccordionTrigger iconSize={22} />
                            </div>

                            <TypographyP text={`Goal: ${item.goal}`} />

                            <AccordionContent className='flex flex-col pt-2.5 pb-0.5 gap-2.5'>
                                <div className="flex flex-nowrap items-start">
                                    <TypographyP text={`Narrative: ${item.description}`} muted singleLine={item.isBranching} />
                                </div>
                                {item.isBranching
                                    ? <BranchList />
                                    : null}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                )
            })}</div>
        </Accordion>
    )
}

export default InquiryList