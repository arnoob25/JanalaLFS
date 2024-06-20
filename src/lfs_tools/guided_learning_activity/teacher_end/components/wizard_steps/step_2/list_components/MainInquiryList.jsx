import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { Badge } from "@/global_ui_components/ui/badge"
import { TypographyLarge, TypographyP, } from "@/global_ui_components/ui/typography"
import BranchList from "./BranchList"
import * as s from "../../../AccordionStyles";


const MainInquiryList = (
    append,
    data,
    selectedItemId,
    handleItemSelection,
    selectedSecondaryItemId,
    setSelectedSecondaryItemId,
    shouldDisableAccordionTrigger
) => {
    const mainInquiries = data.filter(inquiry => inquiry.isBranchInquiry === false)

    return (
        <Accordion type="single" value={selectedItemId} collapsible className={`${s.AccordionParentContainerStyle}`}>
            {mainInquiries?.map((inquiry, index) => {
                // #region styling logic
                const isGoalDefined = !!inquiry.inquiryGoal
                const isSelectedInquiry = inquiry.itemId === selectedItemId

                const shouldDisplayDestructiveText = !isGoalDefined && !isSelectedInquiry

                const inquiryTitle = `Inquiry ${index < 9 ? `0${index + 1}` : index + 1}`
                // #endregion

                return (
                    <AccordionItem key={inquiry.itemId} value={inquiry.itemId} className={`${s.AccordionItemContainerStyle}`}>
                        {/* Item Header */}
                        <div className={`${s.AccordionItemHeaderContainerStyle}`}>
                            <span className="flex flex-row justify-start items-baseline gap-2">
                                <TypographyLarge text={inquiryTitle} />
                                {inquiry.shouldOriginateBranch
                                    ? <Badge variant="secondary">Branch</Badge>
                                    : null}
                            </span>
                            <AccordionTrigger
                                value={inquiry.itemId}
                                iconSize={22}
                                disabled={shouldDisableAccordionTrigger}
                                onClick={() => handleItemSelection(inquiry.itemId)}
                            />
                        </div>

                        {/* Item Body */}
                        <TypographyP
                            text={isGoalDefined ? `Goal: ${inquiry.inquiryGoal}` : 'Goal not defined'}
                            muted={!isGoalDefined}
                            destructive={shouldDisplayDestructiveText}
                            className={`${s.AccordionItemBodyTextStyle}`}
                        />

                        {/* Item Additional Info */}
                        <AccordionContent className={`${s.AccordionCollapsedContainerStyle}`}>
                            <TypographyP small muted
                                text={inquiry.inquiryNarrative ? `Narrative: ${inquiry.inquiryNarrative}` : 'Narrative not defined'}
                            />

                            {inquiry.shouldOriginateBranch
                                ? BranchList(data,
                                    inquiry.branches,
                                    selectedSecondaryItemId,
                                    setSelectedSecondaryItemId,
                                    append,
                                    shouldDisableAccordionTrigger)
                                : null}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion >
    )
}

export default MainInquiryList