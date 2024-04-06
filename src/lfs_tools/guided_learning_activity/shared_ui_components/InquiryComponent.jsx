/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end. 
 * but also used in the author end, to preview the designed inquiry.
 */


const InquiryComponent = ({ inquiry }) => {

    return (
        <>
            <h1>{inquiry.context_text}</h1>
        </>
    )
}

export default InquiryComponent