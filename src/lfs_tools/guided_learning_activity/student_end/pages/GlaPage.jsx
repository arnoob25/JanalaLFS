/**
 * facilitates all the features of the gle - for the student to experience
 */
import { useEffect, useState } from "react"
import InquiryComponent from "../../shared_components/InquiryComponent"

import { Button } from "@/global_ui_components/ui/button";

import { BRANCHES, INQUIRIES } from '../../test_data/test_db'


const GlaPage = () => {

    // statesfor displaying inquiries 
    const [allMainInquiries] = useState(INQUIRIES.filter(inquiry => inquiry.branch == null)) // main set of inquiries
    const [selectedInquiry, setSelectedInquiry] = useState('')

    // controls progression
    const [shouldAllowProgression, setShouldAllowProgression] = useState(false) // set by the inquiry component

    // states for enabling branching progression
    const [shouldEnterBranch, setShouldEnterBranch] = useState(false)
    const [selectedBranch, setSelectedBranch] = useState('') // current branch
    const [branchParentInquiry, setBranchParentInquiry] = useState('') // inquiry that originated the selected branch
    const [allBranchInquiries, setAllBranchInquiries] = useState([]) // stores all the inquiries in the active branch
    const [shouldExitBranch, setShouldExitBranch] = useState(false) // dictates if we should return to the main set of inquiries


    // for initializing the GLA
    const selectFirstInquiry = () => {
        const sortedInquiries = allMainInquiries
            .filter(inquiry => inquiry.branch === null)
            .sort((a, b) => a.order - b.order);

        setSelectedInquiry(sortedInquiries[0])
    }

    useEffect(() => {
        if (!selectedInquiry) {
            selectFirstInquiry()
        }
    }, [])




    // for enabling progression in general

    // given a list of inquiries, can set the next inquiry as the selected inquiry. Returns false if next inquiry doesn't exist.
    const selectNextInquiry = (listOfInquiries, indexOfCurrentInquiry = null) => {
        if (!indexOfCurrentInquiry) {
            indexOfCurrentInquiry = listOfInquiries.indexOf(selectedInquiry)
        }

        const nextInquiry = listOfInquiries[indexOfCurrentInquiry + 1]

        if (nextInquiry) {
            setSelectedInquiry(nextInquiry)
            return true
        }

        else { return false }
    }

    const manageProgression = () => {
        // branching progression
        if (selectedBranch) {
            if (shouldExitBranch) {
                const isLastInquiryInTheBranch = allBranchInquiries.indexOf(selectedInquiry) == allBranchInquiries.length - 1

                // exits the branch, and resumes the main set of inquiries
                if (isLastInquiryInTheBranch) {
                    const indexOfCurrentInquiry = allMainInquiries.indexOf(branchParentInquiry)
                    const hasNextInquiry = selectNextInquiry(allMainInquiries, indexOfCurrentInquiry)

                    if (!hasNextInquiry) {
                        manageGlaEnd()
                    }
                    resetBranch()
                }
            }
            // continues with the next inquiry in the branch
            else {
                const hasNextInquiry = selectNextInquiry(allBranchInquiries)

                if (!hasNextInquiry) {
                    manageBranchRepetition()
                }
            }
        }
        // linear progression
        else {
            const hasNextInquiry = selectNextInquiry(allMainInquiries)

            if (!hasNextInquiry) {
                manageGlaEnd()
            }
        }
    }

    const handleProgressionRequest = () => {
        if (shouldAllowProgression) {
            if (shouldEnterBranch) {
                enterBranch()
            }
            else {
                manageProgression()
            }
        }
        else {
            console.log("respond correctly to proceed");
        }

        setShouldAllowProgression(false)
    }

    const manageGlaEnd = () => {
        console.log('This is the end of the gla'); // TODO: go to the summary page
    }





    // for enabling branching progression

    // TODO: replace this with a query
    const getBranchInquiries = selectedBranch => {
        selectedBranch // TODO: fetch the inquiries using the selected branch (map using the choice made by the user)
        return INQUIRIES.filter(inquiry => inquiry.branch == 2)
    }

    const handleBranchInitialization = selectedBranch => {

        if (selectedBranch.length > 0) { // only initialize when a branch has been selected

            setShouldAllowProgression(true)

            setShouldEnterBranch(true)

            setSelectedBranch(BRANCHES[1])

            setBranchParentInquiry(selectedInquiry) // current inquiry is the selected branch's inquiry

            const filteredInquiries = getBranchInquiries(selectedBranch)

            setAllBranchInquiries(filteredInquiries)
        }
    }

    const enterBranch = () => {
        setSelectedInquiry(allBranchInquiries[0])
        setShouldEnterBranch(false)
    }

    const manageBranchRepetition = () => {
        setSelectedInquiry(branchParentInquiry)
    }

    const resetBranch = () => {
        setShouldAllowProgression(false)
        setShouldEnterBranch(false)
        selectedBranch('')
        setBranchParentInquiry('')
        setAllBranchInquiries([])
        setShouldExitBranch(false)
    }


    return (
        <>
            <div className="min-h-screen md:h-screen">
                <div className="h-full grid grid-cols-1">
                    <div className="flex-grow mt-5">
                        <InquiryComponent
                            key={selectedInquiry.id}
                            //inquiry={selectedInquiry}
                            onBranchingRequest={(selectedBranch) =>
                                handleBranchInitialization(selectedBranch)
                            }
                            onProgressionRequest={(result) => setShouldAllowProgression(result)}
                        />
                    </div>
                    <div className="mt-auto ml-auto  mb-5">
                        <Button
                            onClick={handleProgressionRequest}
                            disabled={!shouldAllowProgression}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default GlaPage