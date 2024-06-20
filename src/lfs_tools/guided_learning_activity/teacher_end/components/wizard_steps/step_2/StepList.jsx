import { WizardBodyContext } from "@/global_ui_components/layouts/wizard/body/Containers"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/global_ui_components/ui/accordion"
import {
    TypographyLarge,
    TypographyMuted,
    TypographySmall
} from "@/global_ui_components/ui/typography"
import { useContext, useEffect, useMemo } from "react"

const StepList = () => {
    // #region logic

    // TODO: replace with a query
    const stepListData = useMemo(() => [
        { id: '1', header: 'Step 1', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
        { id: '2', header: 'Step 2', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
        { id: '3', header: 'Step 3', goal: 'Enable Lift Mode to automatically "lift" smaller components from a block template for copy and paste.', description: 'Blocks are ready-made components that you can use to build your apps. They are fully responsive, accessible, and composable, meaning they are built using the same principles as the rest of the components in shadcn/ui.' },
    ], [])

    const { selectedStepId, setSelectedStepId, getValues } = useContext(WizardBodyContext)

    // TODO: maybe we can replace the effect with a custom hook
    useEffect(() => {
        setSelectedStepId(stepListData[1].id)
    }, [setSelectedStepId, stepListData])

    const handleStepSelection = (currentStepId) => {
        setSelectedStepId(
            prevStepId => prevStepId === currentStepId ? null : currentStepId
        );
    };

    // TODO: guard clause should cause the next button to advance to the next phase of the wizard
    
    // UNCOMMENT THE FOLLOWING LINE
    /* const isLastStepSelected = (stepListData
        .findIndex(step => step.id === selectedStepId) === stepListData.length - 1)

    if (isLastStepSelected) console.log('last step reached'); */ // TODO: logic to advance to next phase of the gla


    /**TODO: check if the currently selected step (not the last one) has at least one inquiry
     * if so, enable the next button that selects the next step
     */

    // UNCOMMENT THE FOLLOWING LINE
    /* const allInquiries = getValues('inquiries')
    const inquiriesInSelectedStep = allInquiries.filter(inquiry => inquiry.glaStepId === selectedStepId)
    const shouldAdvanceToNextStep = inquiriesInSelectedStep.length > 0

    if (shouldAdvanceToNextStep) console.log('advance to next step'); */// TODO: logic to advance to next step

    // #endregion

        return (
            <Accordion type="single" value={selectedStepId} className='w-full' collapsible>
                <div className="flex flex-col space-y-1.5">{stepListData?.map(step => {
                    const shouldDisableAccordionTrigger = selectedStepId !== step.id
                    return (
                        <AccordionItem key={step.id} value={step.id}>
                            <div className="rounded-xl pb-1.5">
                                <div className={`flex flex-row justify-between items-center ${shouldDisableAccordionTrigger ? 'opacity-50' : ''}`}>
                                    <TypographyLarge text={step.header} />
                                    <AccordionTrigger
                                        value={step.id}
                                        iconSize={18}
                                        disabled // selected steps are managed by the wizard
                                        onClick={() => handleStepSelection(step.id)}
                                    />
                                </div>

                                <AccordionContent className='flex flex-col mt-3 mx-1 rounded-xl gap-4'>
                                    <div className="flex flex-col gap-2">
                                        <TypographySmall text='Goal:' weight="normal"></TypographySmall>
                                        <TypographyMuted text={step.goal} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <TypographySmall text='Narrative:' weight="normal"></TypographySmall>
                                        <TypographyMuted text={step.description} />
                                    </div>
                                </AccordionContent>
                            </div>
                        </AccordionItem>
                    )
                })}</div>
            </Accordion>
        )
}

export default StepList