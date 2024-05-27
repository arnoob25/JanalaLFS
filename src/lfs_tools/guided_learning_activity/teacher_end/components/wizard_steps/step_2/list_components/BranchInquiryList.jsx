import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/global_ui_components/ui/accordion"
import { TypographyLarge, TypographyP } from "@/global_ui_components/ui/typography"

export const BranchInquiryList = ({ data }) => {
    return (
        <div className="border-l-2 mb-4 pl-5 hover:border-muted-foreground">
            <Accordion type="single" className='w-full' collapsible>
                <div className="flex flex-col gap-3">{data?.map(item => {
                    return (
                        <AccordionItem key={item.id} value={item.id}>
                            <div className="pb-6 rounded-xl">
                                <div className="flex flex-row justify-between items-center mb-3">
                                    <TypographyLarge text={item.header} />
                                    <AccordionTrigger iconSize={22} />
                                </div>

                                <TypographyP text={`Goal: ${item.goal}`} />

                                <AccordionContent className='flex flex-col pt-2.5 pb-0.5 gap-1.5'>
                                    <TypographyP text={`Narrative: ${item.description}`} muted />
                                </AccordionContent>
                            </div>
                        </AccordionItem>
                    )
                })}</div>
            </Accordion>
        </div>
    )
}