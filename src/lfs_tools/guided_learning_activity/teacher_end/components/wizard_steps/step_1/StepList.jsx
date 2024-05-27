import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { IconButton } from "@/global_ui_components/ui/button"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"
import { SquarePen } from "lucide-react"
import { useState } from "react"


const StepList = ({ data, selectedItemId, onItemSelect }) => {
    const [selectedStepId, setSelectedStepId] = useState(selectedItemId)

    // this determines when we're adding a new step and disables selecting any other step
    const addingNewStep = !!selectedItemId && !data.find(item => item.id === selectedItemId)?.stepGoal

    const toggleAccordion = (currentId) => {
        setSelectedStepId(prevId => prevId === currentId ? null : currentId);
    };

    const toggleSelectedStep = (currentId) => {
        onItemSelect(prevId => prevId === currentId ? null : currentId);
    }

    return (
        <Accordion type="single" value={selectedItemId ? selectedItemId : selectedStepId} className='w-full' collapsible>
            <div className="flex flex-col gap-2 mx-0">{data?.map((item, index) => {
                return (
                    <AccordionItem key={item.id} value={item.id}>
                        <div className="pb-6 rounded-xl">
                            <div className="flex flex-row justify-between items-center">
                                <TypographyLarge text={`Step ${index < 9 ? `0${index + 1}` : index + 1}`} />
                                <span className="flex justify-end items-center gap-3">
                                    {/** replace with a icon button*/}
                                    <IconButton
                                        onClick={() => toggleSelectedStep(item.id)}
                                        disabled={!item.stepGoal || addingNewStep}>
                                        <SquarePen
                                            size={14} strokeWidth={2.5}
                                            className="text-muted-foreground hover:cursor-pointer hover:text-foreground" />
                                    </IconButton>
                                    <AccordionTrigger iconSize={22} onClick={() => toggleAccordion(item.id)} disabled={!item.stepNarrative || addingNewStep} />
                                </span>
                            </div>

                            <TypographyP text={`Goal: ${item.stepGoal ? item.stepGoal : 'Undefined'}`} muted={!item.stepGoal} className='mt-3' />

                            <AccordionContent className='pt-2.5 pb-0.5'>
                                <TypographyP text={`Narrative: ${item.stepNarrative ? item.stepNarrative : 'Undefined'}`} small muted />
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                )
            })}</div>
        </Accordion>
    )
}

export default StepList