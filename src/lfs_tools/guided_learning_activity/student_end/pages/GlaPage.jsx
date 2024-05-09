/**
 * facilitates all the features of the gla - for the student to experience
 */
import InquiryComponent from "../components/InquiryComponent"
import useProgression from "../helpers/hooks/useProgressionHook";
import { ResponseHandlingActions } from "../helpers/glaResponseHelpers";
import { fetchAllMainInquiries } from "../helpers/queryHelpers";
import { useQuery } from "@tanstack/react-query";


const GlaPage = () => {

    // TODO: replace this with the prop this page receives
    const gla_id = 1

    // Fetch the main inquiries using TanStack Query
    const { data: allMainInquiries } = useQuery({
        queryKey: ['allMainInquiries', gla_id],
        queryFn: () => fetchAllMainInquiries(gla_id)
    })

    const handleInquiryCompletion = (result) => {
        // actions suggested by the child component in response to user interaction
        const action = new ResponseHandlingActions(result);

        if (action.shouldExitBranch) {
            p.handleProgressionRequest(true, true);
        }
        else {
            if (action.proceedToNextInquiry) {
                p.handleProgressionRequest(true);
            }
            else if (action.selectedBranch) {
                if (action.shouldInitializeBranch) {
                    p.handleBranchInitialization(action.selectedBranch);
                } else if (action.shouldEnterBranch) {
                    p.handleProgressionRequest(true);
                }
            }
        }
    };

    const manageGlaEnd = () => {
        console.log("This is the end of the gla");
        // TODO: navigate to the summary page
    };

    const p = useProgression(allMainInquiries || [], manageGlaEnd);


    return (
        <>{p.selectedInquiry
            ? <div className="min-h-screen grid grid-cols-1">
                <div className="mt-5">
                    <InquiryComponent
                        key={p.selectedInquiry.id}
                        inquiry={p.selectedInquiry}
                        onFinalBranchInquiry={p.isLastBranchInquiry.current}
                        onCompletion={result => handleInquiryCompletion(result)}
                    />
                </div>
            </div>
            : null}
        </>
    );
};

export default GlaPage;