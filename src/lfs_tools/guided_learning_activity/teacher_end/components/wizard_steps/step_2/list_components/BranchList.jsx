import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/global_ui_components/ui/collapsible"
import { TypographyP } from "@/global_ui_components/ui/typography"
import { Check, ChevronsUpDown } from "lucide-react"
import { BranchInquiryList } from "./BranchInquiryList"
import FieldArrayAddButton from "@/global_ui_components/form/FieldArrayAddButton"
import { BranchInquiryDefaultValues } from "../ListInquiries"
import { v4 as uuidv4 } from "uuid"

const BranchList = (allInquiries, branches, selectedSecondaryItemId, setSelectedSecondaryItemId, append, shouldDisableAccordionTrigger) => {

    const allBranchInquiries = allInquiries.filter(item => item.isBranchInquiry === true)

    const addNewBranchInquiry = branchId => {
        BranchInquiryDefaultValues.itemId = uuidv4();

        setSelectedSecondaryItemId(prevItemId =>
            prevItemId === BranchInquiryDefaultValues.itemId
                ? null
                : BranchInquiryDefaultValues.itemId
        )

        BranchInquiryDefaultValues.branchId = branchId

        append(BranchInquiryDefaultValues)
    }

    const handleInquirySelection = (currentItemId) => {
        if (!shouldDisableAccordionTrigger) {
            setSelectedSecondaryItemId((prevItemId) =>
                prevItemId === currentItemId ? null : currentItemId
            );
        }
    };

    return (<div className="flex flex-col border-l-2 pl-5 gap-1">{branches?.map((branch, index) => {
        const currentBranchInquiries = allBranchInquiries.filter(
            inquiry => inquiry.branchId === branch.branchId
        )

        return (
            <Collapsible key={index}> {/* TODO: replace with branch.id */}
                <CollapsibleTrigger className="flex flex-row w-full py-2 justify-between items-center" disabled={shouldDisableAccordionTrigger}>
                    <TypographyP text={branch.branchTitle ? branch.branchTitle : 'Title of the branch'} muted /> {/* TODO: here, we should also indicate whether this branch is correct or not */}
                    <Check size={14} className={branch.shouldAttemptBranch ? 'text-muted-foreground ml-2' : 'hidden'} />
                    <ChevronsUpDown size={15} className={`text-muted-foreground ml-auto ${shouldDisableAccordionTrigger ? 'opacity-60' : ''}`} />
                </CollapsibleTrigger>

                <CollapsibleContent>
                    {currentBranchInquiries?.length > 0
                        ? BranchInquiryList(currentBranchInquiries, selectedSecondaryItemId, handleInquirySelection, shouldDisableAccordionTrigger)
                        : null}

                    <FieldArrayAddButton label='Inquiry' onClick={() => addNewBranchInquiry(branch.branchId)} />
                </CollapsibleContent>
            </Collapsible>
        )
    })}</div>)
}

export default BranchList