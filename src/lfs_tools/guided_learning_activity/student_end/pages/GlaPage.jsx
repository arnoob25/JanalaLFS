/**
 * facilitates all the features of the gla - for the student to experience
 */

import { useState } from "react"
import useProgression from "../helpers/hooks/useProgressionHook";
import InquiryComponent from "../components/InquiryComponent"
import { INQUIRIES } from '../../../../assets/test_data/test_db'
import { ResponseHandlingActions } from "../helpers/glaResponseHelpers";


const GlaPage = () => {

    const [allMainInquiries] = useState(INQUIRIES.filter(inquiry => inquiry.branch == null).sort((a, b) => a.order - b.order))

    const handleInquiryCompletion = result => {
        const action = new ResponseHandlingActions(result)

        if (action.shouldExitBranch) {
            p.handleProgressionRequest(true, true)
        }
        else {
            if (action.proceedToNextInquiry) {
                p.handleProgressionRequest(true)
            }
            else if (action.selectedBranch) {
                if (action.shouldInitializeBranch) {
                    p.handleBranchInitialization(action.selectedBranch)
                }
                else if (action.shouldEnterBranch) {
                    p.handleProgressionRequest(true)
                }
            }
        }
    }

    const manageGlaEnd = () => {
        console.log('This is the end of the gla'); // TODO: navigate to the summary page
    }

    const p = useProgression(allMainInquiries, manageGlaEnd)

    return (
        <div className="min-h-screen grid grid-cols-1">
            <div className="mt-5">
                <InquiryComponent
                    key={p.selectedInquiry.id}
                    inquiry={p.selectedInquiry}
                    onLastBranchInquiry={p.isLastBranchInquiry.current}
                    onCompletion={result => handleInquiryCompletion(result)}
                />
            </div>
        </div>
    );

}

export default GlaPage