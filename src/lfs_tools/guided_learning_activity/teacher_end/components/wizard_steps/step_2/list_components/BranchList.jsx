import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/global_ui_components/ui/collapsible"
import { TypographyP } from "@/global_ui_components/ui/typography"
import { ChevronsUpDown, Plus } from "lucide-react"
import { BranchInquiryList } from "./BranchInquiryList"
import { ButtonSecondarySm } from "@/global_ui_components/ui/button"

const BranchList = (branches) => {
    return (<div className="flex flex-col border-l-2 pl-5 gap-1">{branches.map(branch => {
        return (
            <Collapsible key={branch.id}>
                <CollapsibleTrigger className="flex flex-row w-full py-2 justify-between items-center">
                    <TypographyP text={branch.label} muted />
                    <ChevronsUpDown size={15} className="text-muted-foreground ml-auto" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                    {branch.branchInquiries.length > 0
                        ? <BranchInquiryList data={branch.branchInquiries} />
                        : null}

                    <ButtonSecondarySm className='w-full items-center gap-1'>
                        <Plus size={18} />
                        Add Inquiry
                    </ButtonSecondarySm>
                </CollapsibleContent>
            </Collapsible>
        )
    })}</div>)
}

export default BranchList