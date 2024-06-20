import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/global_ui_components/ui/accordion"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"
import * as s from "../../../AccordionStyles";

export const BranchInquiryList = (data, selectedSecondaryItemId, handleInquirySelection, shouldDisableAccordionTrigger) => {

    return (
        <Accordion type="single" value={selectedSecondaryItemId} collapsible className={`${s.AccordionParentContainerStyle}`}>
            {data?.map((inquiry, index) => {
                // #region styling logic
                const isGoalDefined = !!inquiry.inquiryGoal
                const isSelectedInquiry = inquiry.itemId === selectedSecondaryItemId

                const shouldDisplayDestructiveText = !isGoalDefined && !isSelectedInquiry

                const inquiryTitle = `Inquiry ${index < 9 ? `0${index + 1}` : index + 1}`
                // #endregion

                return (
                    <AccordionItem key={inquiry.itemId} value={inquiry.itemId} className={`${s.AccordionItemContainerStyle}`}>
                        {/* Item Header */}
                        <div className={`${s.AccordionItemHeaderContainerStyle}`}>
                            <span className="flex flex-row justify-start items-baseline gap-2">
                                <TypographyLarge text={inquiryTitle} />
                            </span>
                            <AccordionTrigger
                                value={inquiry.itemId}
                                iconSize={22}
                                disabled={shouldDisableAccordionTrigger}
                                onClick={() => handleInquirySelection(inquiry.itemId)}
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
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion >
    )
}