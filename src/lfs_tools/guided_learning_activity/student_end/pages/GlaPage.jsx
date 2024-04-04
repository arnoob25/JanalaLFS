/* eslint-disable react-hooks/exhaustive-deps */
/**
 * facilitates all the features of the gle - for the student to experience
 */
import { useEffect, useState } from "react"
import InquiryComponent from "../../shared_ui_components/InquiryComponent"

import { INQUIRIES } from '../test_db'



const GlaPage = () => {
    // states for displaying inquiries and managing linear progression
    const [allInquiries] = useState(INQUIRIES)
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

    const selectNextInquiry = (listOfInquiries, orderOfCurrentInquiry = null) => {
        if (!orderOfCurrentInquiry) {
            orderOfCurrentInquiry = selectedInquiry.order
        }

        const nextInquiry = listOfInquiries[orderOfCurrentInquiry + 1]

        if (nextInquiry) {
            setSelectedInquiry(nextInquiry)
            return true
        }

        else { return false }
    }

    const handleProgression = () => {
        if (allBranchInquiries) { 
            if (shouldBreakBranch) { 
                const orderOfNextInquiry = branchParentInquiry.order + 1
                const hasNextInquiry = selectNextInquiry(allInquiries, orderOfNextInquiry)

                if (!hasNextInquiry) {
                    handleGlaEnd()
                }

                resetBranch()
            }
            else {
                const hasNextInquiry = selectNextInquiry(allBranchInquiries)

                if (!hasNextInquiry) {
                    setSelectedInquiry(branchParentInquiry)
                }
            }
        }
        else {
            const hasNextInquiry = selectNextInquiry(allInquiries)

            if (!hasNextInquiry) {
                handleGlaEnd()
            }
        }

        setShouldAllowProgression(false)
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