/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */
import ChoiceResponseComponent from "../student_end/components/ChoiceResponseComponent";
import ContextComponent from "../student_end/components/ContextComponent";
import MediaComponent from "../student_end/components/MediaComponent";
import PromptComponent from "../student_end/components/PromptComponent";
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
            <div className="space-y-4">
                <div>
                    <ContextComponent inquiry={inquiry} />
                </div>
                <div>
                    <MediaComponent />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <PromptComponent inquiry={inquiry} />
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

        </div>
    );

};

export default InquiryComponent;