// ChoiceResponseComponent.js
/* eslint-disable react/prop-types */

import ChoiceComponent from "@/lfs_tools/shared_features/user_response/components/ChoiceComponent";
import { useState } from "react";
import GlaButton from "./GlaButton";
import { RESPONSE_TYPES, ResponseTemplate } from "../../helpers/glaResponseHelpers";
import { useQuery } from "@tanstack/react-query";
import { fetchChoicesForInquiry, fetchCorrespondingBranchFromChoice } from "../../helpers/queryHelpers";


const GlaBranchSelectionComponent = ({ inquiry, onBranchSelection }) => {

    // choices selected by the user
    const [selectedChoice, setSelectedChoice] = useState(undefined);

    // gets the current inquiry's choices
    const choices = useQuery({
        queryKey: ['choices', inquiry.id],
        queryFn: () => fetchChoicesForInquiry(inquiry.id)
    })

    // gets the branch that maps to the user's selected choice
    const selectedBranch = useQuery({
        queryKey: ['branch', selectedChoice.id],
        queryFn: () => fetchCorrespondingBranchFromChoice(selectedChoice.id)
    })

    // setup for responding to user interaction
    const response = new ResponseTemplate()
    response.type = RESPONSE_TYPES.CHOICE_BRANCH

    const handleBranchSelection = (selectedChoice) => {
        setSelectedChoice(selectedChoice)

        if (!selectedBranch.error) {
            response.selectedBranch = selectedBranch.data
            response.shouldInitializeBranch = true

            onBranchSelection(response)
        }
    }

    const handleBranchEntry = () => {

        if (!selectedBranch.error) {
            response.selectedBranch = selectedBranch.data
            response.shouldInitializeBranch = false
            response.shouldEnterBranch = true

            onBranchSelection(response)
        }
    }

    return (
        <>
            <ChoiceComponent
                choices={choices.data}
                onSelectionChange={selectedChoice => handleBranchSelection(selectedChoice[0])}
            />
            <GlaButton label={'Next'} onClick={handleBranchEntry} disabled={!selectedChoice} />
        </>
    );
};

export default GlaBranchSelectionComponent;