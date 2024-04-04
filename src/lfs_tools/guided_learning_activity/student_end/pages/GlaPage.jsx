/* eslint-disable react-hooks/exhaustive-deps */
/**
 * facilitates all the features of the gle - for the student to experience
 */
import { useEffect, useState } from "react"
import InquiryComponent from "../../shared_ui_components/InquiryComponent"

import { INQUIRIES } from '../test_db'



const GlaPage = () => {
    const [allInquiries] = useState(INQUIRIES)
    const [selectedInquiry, setSelectedInquiry] = useState('')

    const [allowNext, setAllowNext] = useState(true)

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