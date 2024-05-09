/**
 * facilitates all the features of the gla - for the student to experience
 */
import InquiryComponent from "../components/InquiryComponent"
import useProgression from "../helpers/hooks/useProgressionHook";
import { ResponseHandlingActions } from "../helpers/glaResponseHelpers";
import {
    fetchAllBranchInquiriesForBranch,
    fetchAllMainInquiries,
    fetchCorrespondingBranchFromChoice
} from "../helpers/queryHelpers";
import { useQuery } from "@tanstack/react-query";

const manageGlaEnd = () => {
    // TODO: navigate to the summary page
    console.log("This is the end of the gla");
};

const GlaPage = ({ gla = { id: 2 } }) => {
    // Fetch the main inquiries using TanStack Query
    const { data: allMainInquiries } = useQuery({
        queryKey: ['allMainInquiries', gla.id],
        queryFn: () => fetchAllMainInquiries(gla.id)
    })

    const p = useProgression({
        allMainSteps: allMainInquiries,
        fetchSelectedBranch: fetchCorrespondingBranchFromChoice,
        fetchAllBranchSteps: fetchAllBranchInquiriesForBranch,
        manageEnd: manageGlaEnd
    });

    const handleGlaProgression = (result) => {
        // take actions in response to user interaction with the inquiry
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

    return (
        <>{p.selectedStep
            ? <div className="min-h-screen grid grid-cols-1">
                <div className="mt-5">
                    <InquiryComponent
                        key={p.selectedStep.id}
                        inquiry={p.selectedStep}
                        isFinalBranchInquiry={p.isFinalBranchStep}
                        onCompletion={result => handleGlaProgression(result)}
                    />
                </div>
            </div>
            : null}
        </>
    );
};

export default GlaPage;