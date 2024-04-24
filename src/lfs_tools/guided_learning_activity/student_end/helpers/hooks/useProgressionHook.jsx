import { useState } from "react"
import { BRANCHES, INQUIRIES } from "@/test_data/test_db"


/**
 * TODO: convert this hook into a generalized hook 
 * for using in other components. Such as the practice activity and CLA.
 */

export default function useProgression(allMainInquiries, manageGlaEnd) {
    const [selectedInquiry, setSelectedInquiry] = useState(allMainInquiries[0])
    const [shouldAllowProgression, setShouldAllowProgression] = useState(false) // set by the inquiry component

    // states for enabling branching progression
    const [shouldEnterBranch, setShouldEnterBranch] = useState(false)
    const [selectedBranch, setSelectedBranch] = useState(undefined) // current branch
    const [branchParentInquiry, setBranchParentInquiry] = useState(undefined) // inquiry that originated the selected branch
    const [allBranchInquiries, setAllBranchInquiries] = useState([]) // stores all the inquiries in the active branch
    const [shouldExitBranch, setShouldExitBranch] = useState(false) // dictates if we should return to the main set of inquiries


    const handleAllowingProgression = response => {
        setShouldAllowProgression(response)
    }

    // given a list of inquiries, can set the next inquiry as the selected inquiry. Returns false if next inquiry doesn't exist.
    const selectNextInquiry = (listOfInquiries, indexOfCurrentInquiry = null) => {
        if (!indexOfCurrentInquiry) {
            indexOfCurrentInquiry = listOfInquiries.indexOf(selectedInquiry)
        }

        const nextInquiry = listOfInquiries[indexOfCurrentInquiry + 1]

        if (nextInquiry) {
            setSelectedInquiry(nextInquiry)
            return true
        }

        else { return false }
    }

    const manageProgression = () => {
        // branching progression
        if (selectedBranch) {
            if (shouldExitBranch) {
                const isLastInquiryInTheBranch = allBranchInquiries.indexOf(selectedInquiry) == allBranchInquiries.length - 1

                // exits the branch, and resumes the main set of inquiries
                if (isLastInquiryInTheBranch) {
                    const indexOfCurrentInquiry = allMainInquiries.indexOf(branchParentInquiry)
                    const hasNextInquiry = selectNextInquiry(allMainInquiries, indexOfCurrentInquiry)

                    if (!hasNextInquiry) {
                        manageGlaEnd()
                    }
                    resetBranch()
                }
            }
            // continues with the next inquiry in the branch
            else {
                const hasNextInquiry = selectNextInquiry(allBranchInquiries)

                if (!hasNextInquiry) {
                    manageBranchRepetition()
                }
            }
        }
        // linear progression
        else {
            const hasNextInquiry = selectNextInquiry(allMainInquiries)

            if (!hasNextInquiry) {
                manageGlaEnd()
            }
        }
    }

    const handleProgressionRequest = () => {
        if (shouldAllowProgression) {
            if (shouldEnterBranch) {
                enterBranch()
            }
            else {
                manageProgression()
            }
        }
        else {
            console.log("respond correctly to proceed");
        }

        setShouldAllowProgression(false)
    }

    // for enabling branching progression

    // TODO: replace this with a query
    const getBranchInquiries = selectedBranch => {
        selectedBranch // TODO: fetch the inquiries using the selected branch (map using the choice made by the user)
        return INQUIRIES.filter(inquiry => inquiry.branch == 2)
    }

    // TODO: dynamically set the selected branch
    const handleBranchInitialization = selectedBranch => {

        // only initialize when a branch has been selected
        if (selectedBranch.length > 0) {

            setShouldAllowProgression(true)

            setShouldEnterBranch(true)

            setSelectedBranch(BRANCHES[1]) // TODO: replace the placeholder

            // current inquiry is the selected branch's inquiry
            setBranchParentInquiry(selectedInquiry)

            const filteredInquiries = getBranchInquiries(selectedBranch)

            setAllBranchInquiries(filteredInquiries)
        }
    }

    const enterBranch = () => {
        setSelectedInquiry(allBranchInquiries[0])
        setShouldEnterBranch(false)
    }

    const manageBranchRepetition = () => {
        setSelectedInquiry(branchParentInquiry)
    }

    const resetBranch = () => {
        setShouldAllowProgression(false)
        setShouldEnterBranch(false)
        selectedBranch('')
        setBranchParentInquiry('')
        setAllBranchInquiries([])
        setShouldExitBranch(false)
    }

    return [
        selectedInquiry,
        shouldAllowProgression,
        handleAllowingProgression,
        handleProgressionRequest,
        handleBranchInitialization,
    ]
}