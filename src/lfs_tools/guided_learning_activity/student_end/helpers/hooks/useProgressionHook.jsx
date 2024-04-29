import { useState } from "react"
import { INQUIRIES } from "@/assets/test_data/test_db"
import { flushSync } from "react-dom"


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

    // optional argument forces progression in special cases. e.g. text responses
    const handleProgressionRequest = (shouldProgress = false) => {
        if (shouldAllowProgression || shouldProgress) {
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
        selectedBranch
        return INQUIRIES.filter(inquiry => inquiry.branch == selectedBranch.id) || null
    }

    // TODO: dynamically set the selected branch
    const handleBranchInitialization = selectedBranch => {
        // only initialize when a branch has been selected
        if (selectedBranch) {
            const filteredInquiries = getBranchInquiries(selectedBranch)

            if (filteredInquiries) {
                flushSync(() => {
                    setBranchParentInquiry(selectedInquiry)
                    setSelectedBranch(selectedBranch)
                    setShouldEnterBranch(true)
                    setAllBranchInquiries(filteredInquiries)
                })
            }
        }

    }

    const enterBranch = () => {
        flushSync(() => {
            setSelectedInquiry(allBranchInquiries[0])
            setShouldEnterBranch(false)
        })
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
        handleProgressionRequest,
        handleBranchInitialization,
        /**
         * the following are included in the hook's api, but can be skipped 
         * by forcing progression with the optional argument in the handleProgresionRequest
         */
        shouldAllowProgression,
        setShouldAllowProgression,
    ]
}