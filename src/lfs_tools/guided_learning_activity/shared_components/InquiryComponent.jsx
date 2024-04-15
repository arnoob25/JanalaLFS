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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium ml-auto">{inquiry.prompt}</h3>
            </div>
            <div>
                {inquiry.is_branching ? (
                    <SelectBranchComponent
                        inquiry={inquiry}
                        onBranchSelection={(selectedBranch) => handleBranchSelection(selectedBranch)}
                    />
                ) : (
                    <ChoiceResponseComponent
                        inquiry={inquiry}
                        onChoiceEvaluation={(isCorrect) => handleInquiryCompletion(isCorrect)}
                    />
                )}
            </div>
        </div>
    );
};

export default InquiryComponent;