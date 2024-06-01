import FallbackText from "@/global_ui_components/fallbacks/FallbackText"
import { WizardFocusAreaContext } from "@/global_ui_components/layouts/wizard_layout/desktop_only/WizardContext"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { IconButton } from "@/global_ui_components/ui/button"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"
import { SquarePen } from "lucide-react"
import { useContext, useState } from "react"
import { useFormContext, useWatch } from "react-hook-form"


const StepList = () => {

    const data = useWatch({ name: 'steps' })

    const { selectedItemId, setSelectedItemId } = useContext(WizardFocusAreaContext)
    const { formState: { isValid } } = useFormContext()

    const selectCurrentStep = currentId => {
        if (isValid) setSelectedItemId(prevId => prevId === currentId ? null : currentId);
    }

    return (
        <>{data && data.length > 0
            ? <Accordion type="single" value={selectedItemId} collapsible className='w-full'>
                <div className="flex flex-col gap-2 mx-0">{data?.map((item, index) => {

                    const isGoalDefined = !!item.stepGoal
                    const isSelectedStep = item.itemId === selectedItemId

                    const shouldDisplayDestructiveText = !isGoalDefined && !isSelectedStep

                    const stepTitle = `Step ${index < 9 ? `0${index + 1}` : index + 1}`

                    return (
                        <AccordionItem
                            key={item.itemId}
                            value={item.itemId}
                            className={`px-3 pb-6`}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <TypographyLarge text={stepTitle} />
                                <AccordionTrigger
                                    value={item.itemId}
                                    iconSize={22}
                                    onClick={() => selectCurrentStep(item.itemId)}
                                />
                            </div>

                            <TypographyP
                                text={isGoalDefined ? `Goal: ${item.stepGoal}` : 'Goal not defined'}
                                muted={!isGoalDefined}
                                destructive={shouldDisplayDestructiveText}
                                className='mt-3'
                            />

                            <AccordionContent className='pt-2.5 pb-0.5'>
                                <TypographyP
                                    text={item.stepNarrative ? `Narrative: ${item.stepNarrative}` : 'Narrative not defined'}
                                    small muted
                                />
                            </AccordionContent>
                        </AccordionItem>
                    )
                }
                )}</div>
            </Accordion>

            : <FallbackText compact text="You haven't created any steps yet" />}</>
    )
}

export default StepList