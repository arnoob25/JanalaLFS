import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"


const StepList = (data, selectedItemId, setSelectedItemId) => {

    //const { formState: { isValid } } = useFormContext()

    const selectCurrentStep = currentId => {
        setSelectedItemId(prevId => prevId === currentId ? null : currentId); // TODO: implement -  if (isValid) 
    }

    return (
        <Accordion type="single" value={selectedItemId} collapsible className='w-full'>
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
    )
}

export default StepList