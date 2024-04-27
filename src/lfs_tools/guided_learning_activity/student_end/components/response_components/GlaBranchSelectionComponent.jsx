// ChoiceResponseComponent.js
/* eslint-disable react/prop-types */

import ChoiceComponent from "@/lfs_tools/shared_features/user_response/components/ChoiceComponent";
import { useEffect, useState } from "react";
import { BRANCHES, CHOICES } from "../../../../../assets/test_data/test_db";
import GlaResponseContainer from "./GlaResponseContainer";
import GlaButton from "./GlaButton";
import { RESPONSE_TYPES, ResponseTemplate } from "../../helpers/glaResponseHelpers";



const GlaBranchSelectionComponent = ({ inquiry, onBranchSelection }) => {

    const [choices, setChoices] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState(undefined); // choices selected by the user

    // getting the choices and correct choices
    useEffect(() => {
        // TODO: replace with query client from TanStack
        const choiceArray = CHOICES.filter(
            choice => {
                return (
                    choice.inquiry === inquiry.id
                )
            }
        )

        setChoices(choiceArray);
    }, [inquiry]);

    // TODO: replace with query
    const getCorrespondingBranch = (selectedChoice) => {
        if (selectedChoice) {
            const branch = BRANCHES.filter(branch => branch.choice === selectedChoice.id)[0]
            return branch || null
        }
        return null
    }

    const response = new ResponseTemplate()
    response.type = RESPONSE_TYPES.CHOICE_BRANCH

    const handleBranchSelection = (selectedChoice) => {
        setSelectedChoice(selectedChoice)
        const selectedBranch = getCorrespondingBranch(selectedChoice)

        if (selectedBranch) {
            response.selectedBranch = selectedBranch
            response.shouldInitializeBranch = true

            onBranchSelection(response)
        }
    }

    const handleBranchEntry = () => {
        const selectedBranch = getCorrespondingBranch(selectedChoice)
        if (selectedBranch) {
            response.selectedBranch = selectedBranch
            response.shouldInitializeBranch = false
            response.shouldEnterBranch = true

            onBranchSelection(response)
        }
    }

    return (
        <GlaResponseContainer>
            <ChoiceComponent
                choices={choices}
                onSelectionChange={selectedChoice => handleBranchSelection(selectedChoice[0])}
            />
            <GlaButton label={'Next'} onClick={handleBranchEntry} disabled={!selectedChoice} />
        </GlaResponseContainer>
    );
};

export default GlaBranchSelectionComponent;