import { useQuery } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { fetchAllBranchInquiriesForBranch } from "../queryHelpers"

/**
 * TODO: convert this hook into a generalized hook 
 * for using in other components. Such as the practice activity and CLA.
 */

export default function useProgression(allMainInquiries, manageGlaEnd) {
    const [selectedInquiry, setSelectedInquiry] = useState(null)
    const [shouldAllowProgression, setShouldAllowProgression] = useState(false) // set by the inquiry component

    // states for enabling branching progression
    const [shouldEnterBranch, setShouldEnterBranch] = useState(false)
    const [selectedBranch, setSelectedBranch] = useState(null) // current branch
    const [branchParentInquiry, setBranchParentInquiry] = useState(null) // inquiry that originated the selected branch
    const [allBranchInquiries, setAllBranchInquiries] = useState([]) // stores all the inquiries in the active branch
    const isLastBranchInquiry = useRef(false)
    const [shouldExitBranch, setShouldExitBranch] = useState(false) // dictates if we should return to the main set of inquiries

    // initialize the new gla with the first inquiry
    useEffect(() => {
        setSelectedInquiry(allMainInquiries[0])
    }, [allMainInquiries])

    // given a list of inquiries, can set the next inquiry as the selected inquiry. Returns false if next inquiry doesn't exist.
    const selectNextInquiry = (listOfInquiries, indexOfCurrentInquiry = null) => {

        if (indexOfCurrentInquiry === null) {
            indexOfCurrentInquiry = listOfInquiries.indexOf(selectedInquiry)
        }

        const nextInquiry = listOfInquiries[indexOfCurrentInquiry + 1]

        if (nextInquiry) {
            setSelectedInquiry(nextInquiry)

            // If we're in a branch, check if this is the last inquiry
            if (selectedBranch) checkIfLastBranchInquiry(nextInquiry)

            return true
        }

        else { return false }
    }

    const manageProgression = (forceExitBranch = false) => {
        // branching progression
        if (selectedBranch) {
            // optional argument allows bypassing setting an extra state
            if ((isLastBranchInquiry.current && shouldExitBranch) || forceExitBranch) {
                // exits the branch, and resumes the main set of inquiries
                const indexOfCurrentInquiry = allMainInquiries.indexOf(branchParentInquiry)
                const hasNextInquiry = selectNextInquiry(allMainInquiries, indexOfCurrentInquiry)

                if (!hasNextInquiry) manageGlaEnd()

                resetBranch()
            }
            // continues with the next inquiry in the branch
            else {
                const hasNextInquiry = selectNextInquiry(allBranchInquiries)

                if (!hasNextInquiry) manageBranchRepetition()
            }
        }
        // linear progression
        else {
            const hasNextInquiry = selectNextInquiry(allMainInquiries)

            if (!hasNextInquiry) manageGlaEnd()
        }
    }

    // optional argument forces progression in special cases. e.g. text responses
    const handleProgressionRequest = (forceProgress = false, forceExitBranch = false) => {
        if (shouldAllowProgression || forceProgress) {
            if (shouldEnterBranch) {
                enterBranch()
            }
            else {
                manageProgression(forceExitBranch)
            }
        }
        else {
            console.log("respond correctly to proceed");
        }

        setShouldAllowProgression(false)
    }

    // for enabling branching progression
    /**
     *  TODO: replace this with a query
     *  this wouldn't work inside the hook,since the hook is generalized
     *  we won't have query functions. Or maybe we can pass the query functions. 
     *  in that case, we can also query the corresponding branch from the selected choice.
     */
    // TODO: make the query dependent
    const { data: branchInquiries } = useQuery({
        queryKey: ['branchInquiries', selectedBranch?.id],
        queryFn: () => fetchAllBranchInquiriesForBranch(selectedBranch?.id)
    })

    const handleBranchInitialization = selectedBranch => {
        // only initialize when a branch has been selected
        if (selectedBranch) {
            if (branchInquiries) {
                /**
                 * schedules the state updates after the current render cycle ends.
                 * this prevents warnings in the console, and potential bugs and infinite loops.
                 */
                queueMicrotask(() => {
                    /**
                     * immediately updates the states
                     * otherwise, they'd get batched with other state updates, 
                     * at the next trigger.
                     */
                    flushSync(() => {
                        setBranchParentInquiry(selectedInquiry)
                        setSelectedBranch(selectedBranch)
                        setShouldEnterBranch(true)
                        setAllBranchInquiries(branchInquiries)
                    })
                })
            }
        }

    }

    const enterBranch = () => {
        setSelectedInquiry(allBranchInquiries[0])
        setShouldEnterBranch(false)
    }

    const checkIfLastBranchInquiry = (branchInquiry) => {
        const isLastInquiry = allBranchInquiries.indexOf(branchInquiry) == allBranchInquiries.length - 1;

        isLastBranchInquiry.current = isLastInquiry
    }

    const manageBranchRepetition = () => {
        isLastBranchInquiry.current = false
        setSelectedInquiry(branchParentInquiry)
    }

    const resetBranch = () => {
        isLastBranchInquiry.current = false
        setShouldAllowProgression(false)
        setShouldEnterBranch(false)
        setSelectedBranch(null)
        setBranchParentInquiry(null)
        setAllBranchInquiries([])
        setShouldExitBranch(false)
    }

    return {
        selectedInquiry,
        handleProgressionRequest,
        handleBranchInitialization,
        isLastBranchInquiry,
        setShouldExitBranch,
        /**
         * the following can be skipped by forcing progression 
         * with the optional argument (true) in the handleProgresionRequest
         */
        shouldAllowProgression,
        setShouldAllowProgression,
    }
}