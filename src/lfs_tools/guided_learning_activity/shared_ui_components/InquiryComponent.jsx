/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end. 
 * but also used in the author end, to preview the designed inquiry.
 */

import { useState } from "react"
import ChoiceComponent from "../../shared_tools/user_response/ChoiceComponent"


const InquiryComponent = ({ inquiry }) => {

    const [choices] = useState([
        {label: 'Apple', id: 1},
        {label: 'Kiwi', id: 2},
        {label: 'Banana', id: 3}
    ])

    return (
        <>
            <h1>{inquiry.context_text}</h1>
            <ChoiceComponent choices={choices} />
        </>
    )
}

export default InquiryComponent