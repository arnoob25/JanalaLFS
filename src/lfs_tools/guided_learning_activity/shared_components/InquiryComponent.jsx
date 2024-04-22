/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */
import ChoiceResponseComponent from "../student_end/components/ChoiceResponseComponent";
import ContextComponent from "../student_end/components/ContextComponent";
import MediaContainer from "../../shared_components/media/MediaContainer";
import PromptComponent from "../student_end/components/PromptComponent";
import SelectBranchComponent from "../student_end/components/SelectBranchComponent";
import { BRANCHES, RESPONSE_TYPES } from "../test_data/test_db";
import TextResponseComponent from "../student_end/components/TextResponseComponent";
import { useEffect } from "react";

const InquiryComponent = ({
    inquiry,
    onProgressionRequest = () => { },
    onBranchEntryRequest = () => { }
}) => {

    // TODO: remove the following
    useEffect(() => {
        if (inquiry.response_type === RESPONSE_TYPES.TEXT) {
            onProgressionRequest(true)
        }
    }, [inquiry])

    // 
    const handleBranchSelection = selectedBranch => { // this choice corresponds to the branch we shall enter
        // get the corresponding branch selected by the student using the selected choice
        // TODO: replace it with a proper query
        const branchToEnter = BRANCHES.filter(
            branch => branch.id === selectedBranch.branchId
        )[0]

        onBranchEntryRequest(branchToEnter)
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
            <div className="space-y-4"> {
            /** TODO: each of these divs will have a max width.
             * and when the media component is not rendering, 
             * we'll display these divs in the same column.
             * 
             */}
                {inquiry.context.length > 0
                    ? <div>
                        <ContextComponent inquiry={inquiry} />
                    </div>
                    : null
                }
                <div>
                    <MediaContainer inquiry={inquiry} />
                </div>
            </div>

            <div className="space-y-4 flex flex-col  gap-5">
                <div>
                    <PromptComponent inquiry={inquiry} />
                </div>
                <div>
                    {inquiry.is_branching
                        ? <SelectBranchComponent
                            inquiry={inquiry}
                            onBranchSelection={selectedBranch => handleBranchSelection(selectedBranch)}
                        />
                        : inquiry.response_type === RESPONSE_TYPES.CHOICE || inquiry.response_type === RESPONSE_TYPES.CHOICE_AMBIGIOUS
                            ? <ChoiceResponseComponent
                                inquiry={inquiry}
                                onChoiceEvaluation={isCorrect => handleInquiryCompletion(isCorrect)}
                            />
                            : <TextResponseComponent inquiry={inquiry} />
                    }
                </div>
            </div>

        </div>
    );

};

export default InquiryComponent;