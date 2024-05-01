/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */

import ContextComponent from "./ContextComponent";
import PromptComponent from "./PromptComponent";
import selectGlaResponseComponent, { RESPONSE_TYPES, ResponseHandlingActions, } from "../helpers/glaResponseHelpers";
import MediaComponent from "@/lfs_tools/shared_features/media/MediaComponent";
import { DialogFooter, DialogHeader, ResponsiveModal } from "@/global_ui_components/ui/dialog";
import { useRef, useState } from "react";
import { Button, ButtonSecondarySm } from "@/global_ui_components/ui/button";

// positions the context and prompt sections side by side in desktop, but vertically stacked in mobile
const responsiveLayoutStyle = "grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-10 md:h-full"
// vertically stacks the components within the context and prompt sections
const columnSectionStyle = "flex flex-col gap-5"


const InquiryComponent = ({
    inquiry,
    onLastBranchInquiry,
    onCompletion = () => { },
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const shouldExitBranch = useRef(null)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    // TODO: track and manage scaffoldings

    /**
     * TODO: trigger the modal conditionally (i.e. without specific preference, only trigger when first attempt is incorrect)
     * TODO: allow exiting branch only when the current branch is the only correct one, or the user attempted the minimum amount of 
     *      corrent branches specified by the author
     */
    const handleResponse = (response) => {
        const action = new ResponseHandlingActions

        if ((response.type === RESPONSE_TYPES.CHOICE) && response.isCorrect) {
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
        if (onLastBranchInquiry) {
            console.log(shouldExitBranch.current);
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

    return (
        <>
            <div className={responsiveLayoutStyle}>
                <div className={columnSectionStyle}>
                    {inquiry.context.length > 0
                        ? <div><ContextComponent inquiry={inquiry} /></div>
                        : null}

                    {inquiry.media_type !== null
                        ? <div><MediaComponent inquiry={inquiry} /></div>
                        : null}
                </div>

                <div className={columnSectionStyle}>
                    {inquiry.prompt.length > 0
                        ? <div><PromptComponent inquiry={inquiry} /></div>
                        : null}

                    {/** renders the appropriate response component */}
                    {inquiry !== undefined
                        ? <div className="flex-grow">{selectGlaResponseComponent({
                            inquiry,
                            handleResponse,
                        })}
                        </div>
                        : null}
                </div>
            </div >
            <ResponsiveModal isOpen={isModalOpen} onClose={toggleModal}>
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