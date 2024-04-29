/* eslint-disable react/prop-types */
/**
 * primarily used to deliver inquiries in the student end.
 * but also used in the author end, to preview the designed inquiry.
 */

import ContextComponent from "./ContextComponent";
import PromptComponent from "./PromptComponent";
import selectGlaResponseComponent from "../helpers/glaResponseHelpers";
import MediaComponent from "@/lfs_tools/shared_features/media/MediaComponent";

// positions the context and prompt sections side by side in desktop, but vertically stacked in mobile
const responsiveLayoutStyle = "grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-10 md:h-full"
// vertically stacks the components within the context and prompt sections
const columnSectionStyle = "flex flex-col gap-5"


const InquiryComponent = ({
    inquiry,
    onCompletion = () => { },
}) => {

    // TODO: track and manage scaffoldings


    return (
        <div className={responsiveLayoutStyle}>
            <div className={columnSectionStyle}>
                {inquiry.context.length > 0
                    ? <div><ContextComponent inquiry={inquiry} /></div>
                    : null}
                    
                {inquiry.media_type !== null
                    ? <div><MediaComponent inquiry={inquiry} /></div>
                    : null}
            </div>

            <div className={columnSectionStyle}>
                {inquiry.prompt.length > 0
                    ? <div><PromptComponent inquiry={inquiry} /></div>
                    : null}

                {/** renders the appropriate response component */}
                {inquiry !== undefined
                    ? <div className="flex-grow">{selectGlaResponseComponent({
                        inquiry,
                        onCompletion,
                    })}
                    </div>
                    : null}
            </div>

        </div >
    );

};

export default InquiryComponent;