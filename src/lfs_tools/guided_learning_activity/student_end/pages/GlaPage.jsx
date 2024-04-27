/**
 * facilitates all the features of the gla - for the student to experience
 */

import { useState } from "react"
import useProgression from "../helpers/hooks/useProgressionHook";
import InquiryComponent from "../components/InquiryComponent"
import { INQUIRIES } from '../../../../assets/test_data/test_db'
import { ResponseHandlingCommand } from "../helpers/glaResponseHelpers";


const GlaPage = () => {

    const [allMainInquiries] = useState(INQUIRIES.filter(inquiry => inquiry.branch == null).sort((a, b) => a.order - b.order))

    const handleInquiryCompletion = result => {
        const command = new ResponseHandlingCommand(result)

        if (command.proceedToNextInquiry) {
            handleProgressionRequest(true)
        }
        else if (command.selectedBranch) {
            if (command.shouldInitializeBranch) {
                handleBranchInitialization(command.selectedBranch)
            }
            else if (command.shouldEnterBranch) {
                handleProgressionRequest(true)
            }

        }
    }

    const manageGlaEnd = () => {
        console.log('This is the end of the gla'); // TODO: navigate to the summary page
    }

    const [
        selectedInquiry,
        handleProgressionRequest,
        handleBranchInitialization,
    ] = useProgression(allMainInquiries, manageGlaEnd)


    return (
        <div className="min-h-screen grid grid-cols-1">
            <div className="mt-5">
                <InquiryComponent
                    key={selectedInquiry.id}
                    inquiry={selectedInquiry}
                    onCompletion={result => handleInquiryCompletion(result)}
                />
            </div>
        </div>
    );

}

export default GlaPage