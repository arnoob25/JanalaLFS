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

    const [allowNext, setAllowNext] = useState(true) // TODO: false by default

    // states for managing branching progression
    const [allBranchInquiries, setAllBranchInquiries] = useState('') // stores all the inquiries in the branch
    const [branch_parent, setBranchParent] = useState('')
    const [breakBranch, setBreakBranch] = useState(false) // dictates if we should return to the main set of inquiries

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

    const manageProgression = () => {
        selectNextInquiry(allInquiries)
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