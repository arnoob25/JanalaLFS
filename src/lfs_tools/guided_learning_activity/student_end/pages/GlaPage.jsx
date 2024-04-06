/* eslint-disable react-hooks/exhaustive-deps */
/**
 * facilitates all the features of the gle - for the student to experience
 */
import { useEffect, useState } from "react"
import InquiryComponent from "../../shared_ui_components/InquiryComponent"

import { INQUIRIES } from '../test_db'


const GlaPage = () => {
    // states for displaying inquiries and managing linear progression
    const [allInquiries] = useState(INQUIRIES.filter(inquiry => inquiry.branch == null))
    const [selectedInquiry, setSelectedInquiry] = useState('')

    const [shouldAllowProgression, setShouldAllowProgression] = useState(true) // TODO: false by default

    // states for managing branching progression
    const [allBranchInquiries, setAllBranchInquiries] = useState('') // stores all the inquiries in the branch
    const [branchParentInquiry, setBranchParentInquiry] = useState('') // inquiry that originates the branch
    const [shouldBreakBranch, setShouldBreakBranch] = useState(false) // dictates if we should return to the main set of inquiries

    // helper functions

    const selectFirstInquiry = () => {
        const sortedInquiries = allInquiries
            .filter(inquiry => inquiry.branch === null)
            .sort((a, b) => a.order - b.order);

        setSelectedInquiry(sortedInquiries[0])
    }

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

    const handleProgression = () => {
        if (allBranchInquiries) {
            if (shouldBreakBranch) {
                const isLastInquiryInTheBranch = allBranchInquiries.indexOf(selectedInquiry) == allBranchInquiries.length - 1
                if (isLastInquiryInTheBranch) {
                    const indexOfCurrentInquiry = allInquiries.indexOf(branchParentInquiry)
                    const hasNextInquiry = selectNextInquiry(allInquiries, indexOfCurrentInquiry)

                    if (!hasNextInquiry) {
                        handleGlaEnd()
                    }
                    resetBranch()
                }
            }
            else {
                const hasNextInquiry = selectNextInquiry(allBranchInquiries)

                if (!hasNextInquiry) {
                    handleBranchRepetition()
                }
            }
        }
        else {
            const hasNextInquiry = selectNextInquiry(allInquiries)

            if (!hasNextInquiry) {
                handleGlaEnd()
            }
        }

        //setShouldAllowProgression(false) // TODO: uncomment this line
    }

    const resetBranch = () => {
        setShouldAllowProgression(false)
        setAllBranchInquiries('')
        setBranchParentInquiry('')
        setShouldBreakBranch(false)
    }

    const manageProgression = () => {
        if (shouldAllowProgression) {
            handleProgression()
        }
        else {
            console.log("respond correctly to proceed");
        }
    }

    const handleBranchRepetition = () => {
        setSelectedInquiry(branchParentInquiry)
    }

    const handleGlaEnd = () => {
        console.log('This is the end of the gla'); // TODO: go to the summary page
    }

    useEffect(() => {
        if (!selectedInquiry) {
            selectFirstInquiry()
        }
    }, [selectedInquiry])

    return (
        <>
            <InquiryComponent inquiry={selectedInquiry} />
            <button onClick={manageProgression}>Next</button>
        </>
    )

}

export default GlaPage