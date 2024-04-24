/**
 * facilitates all the features of the gla - for the student to experience
 */

import { useState } from "react"
import useProgression from "../helpers/hooks/useProgressionHook";
import InquiryComponent from "../../shared_components/InquiryComponent"
import { Button } from "@/global_ui_components/ui/button";
import { INQUIRIES } from '../../../../test_data/test_db'


const GlaPage = () => {

    const [allMainInquiries] = useState(INQUIRIES.filter(inquiry => inquiry.branch == null))

    const manageGlaEnd = () => {
        console.log('This is the end of the gla'); // TODO: go to the summary page
    }

    const [
        selectedInquiry,
        shouldAllowProgression,
        handleAllowingProgression,
        handleProgressionRequest,
        handleBranchInitialization,
    ] = useProgression(allMainInquiries, manageGlaEnd)


    return (
        <div className="min-h-screen md:h-screen">
            <div className="h-full grid grid-cols-1">
                <div className="flex-grow mt-5">
                    <InquiryComponent
                        key={selectedInquiry.id}
                        inquiry={selectedInquiry}
                        onBranchingRequest={selectedBranch => handleBranchInitialization(selectedBranch)} 
                        onProgressionRequest={result => handleAllowingProgression(result)}
                    />
                </div>
                <div className="mt-5 sm:mt-auto ml-auto  mb-5">
                    <Button
                        onClick={handleProgressionRequest}
                        disabled={!shouldAllowProgression}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );

}

export default GlaPage