import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/global_ui_components/ui/collapsible"
import { TypographyP } from "@/global_ui_components/ui/typography"
import { ChevronsUpDown, Plus } from "lucide-react"
import { BranchInquiryList } from "./BranchInquiryList"
import { ButtonGhost, ButtonSecondarySm } from "@/global_ui_components/ui/button"

const branches = [
    { id: 1, label: 'Branch 1' },
    { id: 2, label: 'Branch 2' },
]

const inquiries = [
    { id: 1, branch: 1, header: 'Branch Inquiry 1', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 2, branch: 1, header: 'Branch Inquiry 2', isBranching: true, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 3, branch: 2, header: 'Branch Inquiry 1', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 4, branch: 2, header: 'Branch Inquiry 2', isBranching: true, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 5, branch: 2, header: 'Branch Inquiry 3', isBranching: false, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    { id: 6, branch: 2, header: 'Branch Inquiry 4', isBranching: true, goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
]

const BranchList = () => {
    return (
        <div className="flex flex-col border-l-2 pl-5 gap-1">
            {branches.map(branch => {
                return (
                    <div key={branch.id}>
                        <Collapsible>
                            <CollapsibleTrigger className="flex flex-row w-full py-2 justify-between items-center">
                                    <TypographyP text={branch.label} muted />
                                    <ChevronsUpDown size={15} className="text-muted-foreground ml-auto" />
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                {inquiries.filter(item => item.branch === branch.id).length > 0
                                    ? <BranchInquiryList
                                        data={inquiries.filter(item => item.branch === branch.id)}
                                    />
                                    : null}

                                <ButtonSecondarySm className='w-full items-center gap-1'>
                                    <Plus size={18} />
                                    Add Inquiry
                                </ButtonSecondarySm>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                )
            })}
        </div>
    )
}

export default BranchList