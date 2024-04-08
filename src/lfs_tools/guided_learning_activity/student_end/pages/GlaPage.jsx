/**
 * facilitates all the features of the gle - for the student to experience
 */
import { useEffect, useState } from "react"
import InquiryComponent from "../../shared_components/InquiryComponent"

import { INQUIRIES } from '../test_db'


const GlaPage = () => {
    // states for displaying inquiries and managing basic progression
    const [allInquiries] = useState(INQUIRIES.filter(inquiry => inquiry.branch == null)) // main set of inquiries
    const [selectedInquiry, setSelectedInquiry] = useState('')
    const [shouldAllowProgression, setShouldAllowProgression] = useState(false) // set by the inquiry component

    // states for managing branching progression
    const [allBranchInquiries, setAllBranchInquiries] = useState('') // stores all the inquiries in the active branch
    const [branchParentInquiry, setBranchParentInquiry] = useState('') // inquiry that originates the branch
    const [shouldBreakBranch, setShouldBreakBranch] = useState(false) // dictates if we should return to the main set of inquiries

    // event handlers
    const handleProgressionRequest = () => {
        if (shouldAllowProgression) {
            manageProgression()
        }
        else {
            console.log("respond correctly to proceed");
        }
    }

    // state management functions  
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

    const manageBranchRepetition = () => {
        setSelectedInquiry(branchParentInquiry)
    }
    
    const resetBranch = () => {
        setShouldAllowProgression(false)
        setAllBranchInquiries('')
        setBranchParentInquiry('')
        setShouldBreakBranch(false)
    }

    // helper functions
    const manageProgression = () => {
        if (allBranchInquiries) {
            if (shouldBreakBranch) {
                const isLastInquiryInTheBranch = allBranchInquiries.indexOf(selectedInquiry) == allBranchInquiries.length - 1
                if (isLastInquiryInTheBranch) {
                    const indexOfCurrentInquiry = allInquiries.indexOf(branchParentInquiry)
                    const hasNextInquiry = selectNextInquiry(allInquiries, indexOfCurrentInquiry)

                    if (!hasNextInquiry) {
                        manageGlaEnd()
                    }
                    resetBranch()
                }
            }
            else {
                const hasNextInquiry = selectNextInquiry(allBranchInquiries)

                if (!hasNextInquiry) {
                    manageBranchRepetition()
                }
            }
        }
        else {
            const hasNextInquiry = selectNextInquiry(allInquiries)

            if (!hasNextInquiry) {
                manageGlaEnd()
            }
        }

        //setShouldAllowProgression(false) // TODO: uncomment this line
    }

    const manageGlaEnd = () => {
        console.log('This is the end of the gla'); // TODO: go to the summary page
    }

    // side effects
    useEffect(() => {
        const selectFirstInquiry = () => {
            const sortedInquiries = allInquiries
                .filter(inquiry => inquiry.branch === null)
                .sort((a, b) => a.order - b.order);

            setSelectedInquiry(sortedInquiries[0])
        }
        if (!selectedInquiry) {
            selectFirstInquiry()
        }
    }, [allInquiries, selectedInquiry])


    return (
        <>
            <InquiryComponent
                inquiry={selectedInquiry}
                handleCorrectResponse={() => setShouldAllowProgression(true)}
            />

            <button
                onClick={handleProgressionRequest}
                disabled={shouldAllowProgression}
            >
                Next
            </button>
        </>
    )

}

export default GlaPage