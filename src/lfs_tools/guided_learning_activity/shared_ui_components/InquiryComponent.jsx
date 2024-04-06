/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end. 
 * but also used in the author end, to preview the designed inquiry.
 */

import { INQUIRIES } from "../student_end/test_db"

const InquiryComponent = ({ inquiry, enterBranch, breakBranch }) => {

    const branchInquiries = INQUIRIES.filter(inquiry => inquiry.branch == 1)

    const handleBranchEnter = () => {
        enterBranch(inquiry, branchInquiries)
    }

    const hangleBreakingBranch = () => {
        breakBranch()
    }

    return (
        <>
            <h1>{inquiry.context_text}</h1>
            <button onClick={handleBranchEnter}>enter branch</button>
            <button onClick={hangleBreakingBranch}>break branch</button>
        </>
    )
}

export default InquiryComponent