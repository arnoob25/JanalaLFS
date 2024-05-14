/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */

import ContextComponent from "./ContextComponent";
import PromptComponent from "./PromptComponent";
import { RESPONSE_TYPES, ResponseHandlingActions, } from "../helpers/glaResponseHelpers";
import MediaComponent from "@/lfs_tools/shared_features/media/components/MediaComponent";
import { DialogFooter, DialogHeader, ResponsiveModal } from "@/global_ui_components/ui/dialog";
import { useRef, useState } from "react";
import { Button, ButtonSecondarySm } from "@/global_ui_components/ui/button";
import ResponseComponent from "./ResponseComponent";

// TODO: track and manage scaffoldings

/**
 * TODO: trigger the modal conditionally (i.e. without specific preference, only trigger when first attempt is incorrect)
 * TODO: allow exiting branch only when the current branch is the only correct one, or the user attempted the minimum amount of 
 *      corrent branches specified by the author
 */

const InquiryComponent = ({
    inquiry,
    shouldPreview = [],
    isFinalBranchInquiry,
    onCompletion = () => { },
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const shouldExitBranch = useRef(null)

    // for previewing inquiries in the authoring wizard
    const [previewInquiry, previewStep] = shouldPreview

    function handleInquiryCompletion(response) {
        // suggest actions to the parent in response to user interactions
        const action = new ResponseHandlingActions

        if (response.type === RESPONSE_TYPES.CHOICE && response.isCorrect) {
            // we assigned type = choice for ambigious choices as well.
            action.proceedToNextInquiry = true
        }
        else if (response.type === RESPONSE_TYPES.TEXT && response.isMeaningful) {
            action.proceedToNextInquiry = true
        }
        else if (response.type === RESPONSE_TYPES.CHOICE_BRANCH && response.selectedBranch) {
            if (response.shouldInitializeBranch) {
                action.shouldInitializeBranch = true
                action.selectedBranch = response.selectedBranch

            }
            else if (response.shouldEnterBranch) {
                action.shouldInitializeBranch = false
                action.shouldEnterBranch = true
                action.selectedBranch = response.selectedBranch
            }
        }

        // decide how to proceed when on the last branch
        if (isFinalBranchInquiry) {
            // when we specify whether to exit the branch or not
            if (shouldExitBranch.current === true || shouldExitBranch.current === false) {
                action.shouldExitBranch = shouldExitBranch.current
                // safety net - prevents re entering the branch
                action.selectedBranch = null
                action.shouldInitializeBranch = false
                action.shouldEnterBranch = false
                onCompletion(action)
                shouldExitBranch.current = false // resetting the defaults
            } else {
                setIsModalOpen(true)
            }
        } else {
            onCompletion(action)
        }
    }

    // TODO: instead of scrolling, make the choices scroll in desktop when the choices overflow
    
    return (
        <>
            <div className={`${!(previewInquiry || previewStep) ? 'md:grid-cols-2' : ''} grid grid-cols-1 md:h-full gap-8 lg:gap-10`}>
                <div className='flex flex-col gap-5'>
                    <div><ContextComponent inquiry={inquiry} /></div>

                    <div><MediaComponent inquiry={inquiry} /></div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div><PromptComponent inquiry={inquiry} /></div>

                    <div className="flex-grow">
                        <ResponseComponent inquiry={inquiry} onResponse={handleInquiryCompletion} shouldDisable={previewInquiry && !previewStep} />
                    </div>
                </div>
            </div >

            <ResponsiveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
                <DialogHeader>
                    {`Now that you've completed the branch, how do you want to proceed?`}
                </DialogHeader>
                <DialogFooter>
                    <ButtonSecondarySm onClick={() => shouldExitBranch.current = false}>Repeat Branch</ButtonSecondarySm>
                    <Button onClick={() => shouldExitBranch.current = true}>Exit Branch</Button>
                </DialogFooter>
            </ResponsiveModal>
        </>
    );

};

export default InquiryComponent;