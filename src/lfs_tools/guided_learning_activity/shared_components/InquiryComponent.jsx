/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */
import ChoiceResponseComponent from "../student_end/components/ChoiceResponseComponent";
import SelectBranchComponent from "../student_end/components/SelectBranchComponent";

const InquiryComponent = ({
    inquiry,
    onProgressionRequest = () => { },
    onBranchingRequest = () => { }
}) => {

    // 
    const handleBranchSelection = selectedBranch => {
        onBranchingRequest(selectedBranch)
    }

    const handleInquiryCompletion = isCorrect => {
        if (isCorrect) {
            onProgressionRequest(true)
        } else {
            onProgressionRequest(false)
        }
    }

    return (
        <>
            <h3>
                {inquiry.prompt}
            </h3>

            {
                inquiry.is_branching
                    ? <SelectBranchComponent
                        inquiry={inquiry}
                        onBranchSelection={selectedBranch => handleBranchSelection(selectedBranch)}
                    />

                    : <ChoiceResponseComponent
                        inquiry={inquiry}
                        onChoiceEvaluation={isCorrect => handleInquiryCompletion(isCorrect)}
                    />
            }




        </>
    );
};

export default InquiryComponent;