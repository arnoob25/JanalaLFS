/* eslint-disable react-hooks/exhaustive-deps */
/**
 * facilitates all the features of the gle - for the student to experience
 */
import { useEffect, useState } from "react"
import InquiryComponent from "../../shared_ui_components/InquiryComponent"

import { INQUIRIES, BRANCHES } from '../test_db'



const GlaPage = () => {
    const [allInquiries] = useState(INQUIRIES)
    const [selectedInquiry, setSelectedInquiry] = useState('')

    // helper functions

    const selectFirstInquiry = () => {
        const sortedInquiries = allInquiries
            .filter(inquiry => inquiry.branch === null)
            .sort((a, b) => a.order - b.order);

        setSelectedInquiry(sortedInquiries[0])
    }
    const selectNextInquiry = () => {

    }


    useEffect(() => {
        if (!selectedInquiry) {


            selectFirstInquiry()
        }
    }, [selectedInquiry])

    return (
        <>
            <InquiryComponent inquiry={selectedInquiry} />
            <button>Next</button>
        </>
    )

}

export default GlaPage