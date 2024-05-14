import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"


const GlaStepList = ({ data }) => {
    return (
        <Accordion type="single" collapsible>
            <div className="flex flex-col gap-2">{data?.map(item => {
                return (
                    <AccordionItem key={item.id} value={item.id}>
                        <div className="pb-6 rounded-xl">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <TypographyLarge text={item.header} />
                                <AccordionTrigger iconSize={22} />
                            </div>

                            <TypographyP text={`Goal: ${item.goal}`} />

                            <AccordionContent className='pt-2.5 pb-0.5'>
                                <TypographyP text={`Narrative: ${item.description}`} small muted />
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                )
            })}</div>
        </Accordion>
    )
}

export default GlaStepList