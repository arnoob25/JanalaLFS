import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"


/**
 * TODO: see if we can enable branching without initialization
 */

export default function useProgression({
    allMainSteps = [],
    fetchSelectedBranch,
    fetchAllBranchSteps,
    manageEnd
}) {
    const queryClient = useQueryClient() // for resetting query data

    const [selectedStep, setSelectedStep] = useState(null)
    const shouldAllowProgression = useRef(false) // set by external component

    // states for enabling branching progression
    const [branchParentStep, setBranchParentStep] = useState(null)
    const shouldEnterBranch = useRef(false)
    const isFinalBranchStep = useRef(false)
    const shouldExitBranch = useRef(false)
    const selectedChoice = useRef(0); // choice that maps to the desired branch
    const { data: selectedBranch } = useQuery({
        // gets the branch that maps to the user's selected choice
        queryKey: ['selectedBranch', selectedChoice.current],
        queryFn: () => fetchSelectedBranch(selectedChoice.current),
        enabled: !!selectedChoice.current
    })
    const { data: allBranchSteps } = useQuery({
        // gets all the steps in the selected branch
        queryKey: ['allBranchSteps', selectedBranch?.id],
        queryFn: () => fetchAllBranchSteps(selectedBranch?.id),
        enabled: !!selectedBranch
    })

    // initialize the new gla with the first step
    useEffect(() => {
        setSelectedStep(allMainSteps[0])
    }, [allMainSteps])

    const selectNextStep = (listOfSteps, indexOfCurrentStep = null) => {
        // given a list of steps, can set the next step as the selected step.
        if (indexOfCurrentStep === null) {
            indexOfCurrentStep = listOfSteps.indexOf(selectedStep)
        }

        const nextStep = listOfSteps[indexOfCurrentStep + 1]

        if (nextStep) {
            setSelectedStep(nextStep)

            // If we're in a branch, check if this is the last step
            if (selectedBranch) checkIfFinalBranchStep(nextStep)

            return true
        }

        else { return false }
    }

    const manageProgression = (forceExitBranch = false) => {
        // branching progression
        if (selectedBranch) {
            // optional argument bypasses all checks to force exit
            if ((isFinalBranchStep.current && shouldExitBranch.current) || forceExitBranch) {
                // exits the branch, and resumes the main set of steps
                const indexOfCurrentStep = allMainSteps.indexOf(branchParentStep)
                const hasNextStep = selectNextStep(allMainSteps, indexOfCurrentStep)

                if (!hasNextStep) manageEnd()

                resetBranch()
            }
            // continues with the next step in the branch
            else {
                const hasNextStep = selectNextStep(allBranchSteps)

                if (!hasNextStep) manageBranchRepetition()
            }
        }
        // linear progression
        else {
            const hasNextStep = selectNextStep(allMainSteps)

            if (!hasNextStep) manageEnd()
        }
    }

    const handleProgressionRequest = (forceProgress = false, forceExitBranch = false) => {
        // optional argument forces progression to enable special use cases.
        if (shouldAllowProgression || forceProgress) {
            if (shouldEnterBranch.current) {
                enterBranch()
            }
            else {
                manageProgression(forceExitBranch)
            }
        }
        else {
            console.log("respond correctly to proceed");
        }

        shouldAllowProgression.current = false
    }

    const handleBranchInitialization = selectedChoiceId => {
        selectedChoice.current = selectedChoiceId
        queryClient.invalidateQueries({ queryKey: ['selectedBranch'] })
        shouldEnterBranch.current = true
        setBranchParentStep(selectedStep)
    }

    const enterBranch = () => {
        setSelectedStep(allBranchSteps[0])
        shouldEnterBranch.current = false
    }

    const checkIfFinalBranchStep = (branchStep) => {
        const isFinalStep = allBranchSteps.indexOf(branchStep) == allBranchSteps.length - 1;

        isFinalBranchStep.current = isFinalStep
    }

    const resetBranch = () => {
        setBranchParentStep(null)
        shouldAllowProgression.current = false
        shouldEnterBranch.current = false
        shouldExitBranch.current = false
        isFinalBranchStep.current = false
        selectedChoice.current = 0
    }

    const manageBranchRepetition = () => {
        setSelectedStep(branchParentStep)
        resetBranch()
    }

    return {
        selectedStep,
        handleProgressionRequest,
        handleBranchInitialization,
        isFinalBranchStep: isFinalBranchStep.current,
        /**
         * the following can be skipped by forcing progression 
         * with the optional argument (true) in the handleProgresionRequest
         */
        shouldAllowProgression,
        setShouldAllowProgression: shouldProgress => shouldAllowProgression.current = shouldProgress,
        setShouldExitBranch: shouldExit => shouldExitBranch.current = shouldExit,
    }
}