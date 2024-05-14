/**
 * ChoiceResponseComponent
 *
 * This component is responsible for rendering a set of choices for a given inquiry and evaluating the user's response.
 *
 * @param {object} inquiry - The inquiry object containing the relevant information for the current inquiry.
 * @param {function} onChoiceEvaluation - A callback function that is called with the result of the user's response evaluation.
 * @returns {JSX.Element} - The rendered `ChoiceComponent` with the appropriate choices and evaluation data.
 */


import ChoiceComponent from "@/lfs_tools/shared_features/user_response/components/ChoiceComponent";
import { useState } from "react";
import evaluateChoiceResponse from "@/lfs_tools/shared_features/user_response/helpers/evaluateChoiceResponse";
import { RESPONSE_TYPES, ResponseTemplate } from "../../helpers/glaResponseHelpers";
import GlaButton from "../GlaButton";

import { useQuery } from "@tanstack/react-query";
import { fetchChoicesForInquiry } from "../../helpers/queryHelpers";

const GlaChoiceResponseComponent = ({ inquiry, onEvaluation, isDisabled = false }) => {
    // doesn't reveal the number of correct choices, and enables selecting any number of choices
    const isAmbigious = inquiry.response_type === RESPONSE_TYPES.CHOICE_AMBIGIOUS;

    // gets the choice list, and correct choices
    const { data, error } = useQuery({
        queryKey: ['choices', inquiry.id],
        queryFn: () => fetchChoicesForInquiry(inquiry.id)
    })

    // enable evaluation
    // TODO: see if we can replace states with refs
    const [selectedChoices, setSelectedChoices] = useState([]);
    const [isValidResponse, setIsValidResponse] = useState(false);
    const [isCorrectResponse, setIsCorrectResponse] = useState(false)

    const manageEvaluation = () => {
        const evaluation = evaluateChoiceResponse(selectedChoices, data.correctChoices);
        setIsCorrectResponse(evaluation.isCorrect)
    };

    const manageProgression = () => {
        const response = new ResponseTemplate()
        response.type = RESPONSE_TYPES.CHOICE // we won't handle ambigious choices separately
        response.isCorrect = isCorrectResponse
        onEvaluation(response)
    }

    const handleChoiceSelection = (selection) => {
        if (selection && selection.length > 0) {
            setSelectedChoices(selection);
            // for ambigious responses, any number of selections result in true
            if (isAmbigious || selection.length === data.correctChoices.length) {
                setIsValidResponse(true);
            } else {
                setIsValidResponse(false);
            }
        } else {
            setIsValidResponse(false);
        }
    };

    const handleButtonClick = () => {
        if (isValidResponse && !isCorrectResponse) {
            manageEvaluation()
        } else {
            manageProgression()
        }
    }

    // TODO: disable selecting choices once correct. and when we require explanation, but it hasn't been provided yet.
    // TODO: reset choices after each response
    // TODO: indicate the correct and incorrect choices

    return (
        <>
            {data
                ? <>
                    <ChoiceComponent
                        choices={data.choices}
                        maxChoices={isAmbigious ? data.choices.length : data.correctChoices.length}
                        onSelectionChange={(selection) => handleChoiceSelection(selection)}
                        show_selection_prompt={!isAmbigious}
                    />
                    <GlaButton
                        label={!isCorrectResponse ? 'Check' : 'Next'}
                        onClick={handleButtonClick}
                        disabled={!isValidResponse || isDisabled}
                        isSecondary={isDisabled}
                    />
                </>
                : null}
        </>
    );
};

export default GlaChoiceResponseComponent;