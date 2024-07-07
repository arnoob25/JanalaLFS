import { WizardBodyContext } from "@/global_ui_components/layouts/wizard/body/Containers"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { Collapsible, CollapsibleContent } from "@/global_ui_components/ui/collapsible"
import { TypographyLarge, TypographyMuted, TypographyP, TypographySmall } from "@/global_ui_components/ui/typography"
import { ListVideo } from "lucide-react"
import { useContext } from "react"


const InquiryList = (steps, items) => {
    const { selectedStepId, selectedItemId } = useContext(WizardBodyContext)

    return (
        <div className="flex flex-col gap-3">{steps.map(step => {
            return (
                <Collapsible key={step.stepId} open={step.stepId === selectedStepId}>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex-grow cursor-default"><TypographyP text={step.label} muted /></div>
                        <ListVideo size={12} className="text-muted-foreground ml-1 mt-1" />
                    </div>

                    <CollapsibleContent>
                        <Accordion type="single" value={selectedItemId} className='w-full' collapsible>
                            <div className="flex flex-col space-y-1.5 mb-2">{items?.filter(item => item.step === step.stepId)
                                .map(item => {
                                    return (
                                        <AccordionItem key={item.itemId} value={item.itemId}>
                                            <div className="rounded-xl pb-1.5">
                                                <div className="flex flex-row justify-between items-center">
                                                    <TypographyLarge text={item.header} />
                                                    <AccordionTrigger iconSize={18} className='cursor-default opacity-50' />
                                                </div>

                                                <AccordionContent className='flex flex-col mt-3 mx-1 rounded-xl gap-4'>
                                                    <div className="flex flex-col gap-2">
                                                        <TypographySmall text='Goal:' weight="normal"></TypographySmall>
                                                        <TypographyMuted text={item.goal} />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <TypographySmall text='Narrative:' weight="normal"></TypographySmall>
                                                        <TypographyMuted text={item.description} />
                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </AccordionItem>
                                    )
                                })}</div>
                        </Accordion>
                    </CollapsibleContent>
                </Collapsible>
            )
        })}</div>
    )
}

export default InquiryList