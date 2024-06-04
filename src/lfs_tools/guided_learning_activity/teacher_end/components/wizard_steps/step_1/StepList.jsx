import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"
import * as s from "../../AccordionStyles";


const StepList = (data, selectedItemId, handleItemSelection, shouldDisableAccordionTrigger) => {

    return (
        <Accordion type="single" value={selectedItemId} collapsible className={`${s.AccordionParentContainerStyle}`}>
            {data?.map((item, index) => {
                // #region styling logic
                const isGoalDefined = !!item.stepGoal
                const isSelectedStep = item.itemId === selectedItemId

                const shouldDisplayDestructiveText = !isGoalDefined && !isSelectedStep

                const stepTitle = `Step ${index < 9 ? `0${index + 1}` : index + 1}`
                // #endregion

                return (
                    <AccordionItem key={item.itemId} value={item.itemId} className={`${s.AccordionItemContainerStyle}`}>
                        {/* Item Header */}
                        <div className={`${s.AccordionItemHeaderContainerStyle}`}>
                            <TypographyLarge text={stepTitle} />
                            <AccordionTrigger
                                value={item.itemId}
                                iconSize={22}
                                disabled={shouldDisableAccordionTrigger}
                                onClick={() => handleItemSelection(item.itemId)}
                            />
                        </div>

                        {/* Item Body */}
                        <TypographyP
                            text={isGoalDefined ? `Goal: ${item.stepGoal}` : 'Goal not defined'}
                            muted={!isGoalDefined}
                            destructive={shouldDisplayDestructiveText}
                            className={`${s.AccordionItemBodyTextStyle}`}
                        />

                        {/* Item Additional Info */}
                        <AccordionContent className={`${s.AccordionCollapsedContainerStyle}`}>
                            <TypographyP small muted
                                text={item.stepNarrative ? `Narrative: ${item.stepNarrative}` : 'Narrative not defined'}
                            />
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion >
    )
}

export default StepList