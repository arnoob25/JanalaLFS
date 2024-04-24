/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */

import ContextComponent from "../student_end/components/ContextComponent";
import MediaContainer from "../../shared_components/media/MediaContainer";
import PromptComponent from "../student_end/components/PromptComponent";
import { BRANCHES } from "../../../test_data/test_db";
import selectGlaResponseComponent from "../student_end/helpers/glaResponseHelpers";

// positions the context and prompt sections side by side in desktop, but vertically stacked in mobile
const responsiveLayoutStyle = "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
// vertically stacks the componenets within the context and prompt sections
const columnSectionStyle = "space-y-4 flex flex-col gap-5"

const InquiryComponent = ({
    inquiry,
    onProgressionRequest = () => { },
    onBranchEntryRequest = () => { }
}) => {
    // TODO: track and manage scaffoldings

    // get the corresponding branch selected by the student using the selected choice
    const handleBranchSelection = selectedBranch => {
        // TODO: replace it with a proper query
        const branchToEnter = BRANCHES.filter(
            branch => branch.id === selectedBranch.branchId
        )[0]

        onBranchEntryRequest(branchToEnter)
    }

    // TODO: decide whether to ask for explanation
    const handleInquiryCompletion = isCorrect => {
        if (isCorrect) {
            onProgressionRequest(true)
        } else {
            onProgressionRequest(false)
        }
    }


    return (
        <div className={responsiveLayoutStyle}>
            <div className={columnSectionStyle}>
                {inquiry.context.length > 0
                    ? <div><ContextComponent inquiry={inquiry} /></div>
                    : null}

                {inquiry.media_type !== null
                    ? <div><MediaContainer inquiry={inquiry} /></div>
                    : null}
            </div>

            <div className={'space-y-4 flex flex-col gap-5'}>
                {inquiry.prompt.length > 0
                    ? <div><PromptComponent inquiry={inquiry} /></div>
                    : null}

                {/** renders the appropriate response component */}
                {inquiry !== undefined
                    ? <div>{selectGlaResponseComponent({
                        inquiry,
                        handleBranchSelection,
                        handleInquiryCompletion
                    })}</div>
                    : null}
            </div>

        </div >
    );

};

export default InquiryComponent;