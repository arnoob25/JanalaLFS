// ChoiceResponseComponent.js
/* eslint-disable react/prop-types */

import ChoiceComponent from "@/lfs_tools/shared_features/user_response/components/ChoiceComponent";
import { useState } from "react";
import GlaButton from "../GlaButton";
import { RESPONSE_TYPES, ResponseTemplate } from "../../helpers/glaResponseHelpers";
import { useQuery } from "@tanstack/react-query";
import { fetchChoicesForInquiry } from "../../helpers/queryHelpers";


const GlaBranchSelectionComponent = ({ inquiry, onBranchSelection }) => {

    const [selectedChoice, setSelectedChoice] = useState(null)

    const { data } = useQuery({
        queryKey: ['choices', inquiry.id],
        queryFn: () => fetchChoicesForInquiry(inquiry.id)
    })

    // initialize the template for reporting user response
    const response = new ResponseTemplate()
    response.type = RESPONSE_TYPES.CHOICE_BRANCH

    // TODO: when user deselects, disable the next button
    const handleBranchSelection = (selectedChoice) => {
        if (selectedChoice) {
            setSelectedChoice(selectedChoice)

            response.selectedBranch = selectedChoice.id
            response.shouldInitializeBranch = true
            onBranchSelection(response)
        }
    }

    const handleBranchEntry = () => {
        response.selectedBranch = selectedChoice.id
        response.shouldInitializeBranch = false
        response.shouldEnterBranch = true

        onBranchSelection(response)
    }

    return (
        <>{data && data.choices.length > 0
            ? <>
                <ChoiceComponent
                    choices={data.choices}
                    onSelectionChange={selectedChoice => handleBranchSelection(selectedChoice[0])}
                />
                <GlaButton label={'Next'} onClick={handleBranchEntry} disabled={!selectedChoice} />
            </>
            : null}
        </>
    );
};

export default GlaBranchSelectionComponent;