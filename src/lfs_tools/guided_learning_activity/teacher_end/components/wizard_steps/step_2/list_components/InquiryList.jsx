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


const InquiryList = (data, selectedItemId, handleItemSelection, shouldDisableAccordionTrigger) => {

    return (
        <Accordion type="single" value={selectedItemId} collapsible className={`${s.AccordionParentContainerStyle}`}>
            {data?.map((item, index) => {
                // #region styling logic
                const isGoalDefined = !!item.inquiryGoal
                const isSelectedInquiry = item.itemId === selectedItemId

                const shouldDisplayDestructiveText = !isGoalDefined && !isSelectedInquiry

                const inquiryTitle = `Inquiry ${index < 9 ? `0${index + 1}` : index + 1}`
                // #endregion

                return (
                    <AccordionItem key={item.itemId} value={item.itemId} className={`${s.AccordionItemContainerStyle}`}>
                        {/* Item Header */}
                        <div className={`${s.AccordionItemHeaderContainerStyle}`}>
                            <span className="flex flex-row justify-start items-baseline gap-2">
                                <TypographyLarge text={inquiryTitle} />
                                {item.isBranching
                                    ? <Badge variant="secondary">Branch</Badge>
                                    : null}
                            </span>
                            <AccordionTrigger
                                value={item.itemId}
                                iconSize={22}
                                disabled={shouldDisableAccordionTrigger}
                                onClick={() => handleItemSelection(item.itemId)}
                            />
                        </div>

                        {/* Item Body */}
                        <TypographyP
                            text={isGoalDefined ? `Goal: ${item.inquiryGoal}` : 'Goal not defined'}
                            muted={!isGoalDefined}
                            destructive={shouldDisplayDestructiveText}
                            className={`${s.AccordionItemBodyTextStyle}`}
                        />

                        {/* Item Additional Info */}
                        <AccordionContent className={`${s.AccordionCollapsedContainerStyle}`}>
                            <TypographyP small muted
                                text={item.inquiryNarrative ? `Narrative: ${item.inquiryNarrative}` : 'Narrative not defined'}
                            />

                            {/* {item.isBranching
                                ? BranchList(item.branches)
                                : null} */}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion >
    )
}

export default InquiryList