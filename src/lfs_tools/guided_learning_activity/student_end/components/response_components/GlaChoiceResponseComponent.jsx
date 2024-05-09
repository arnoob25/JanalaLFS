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
import { useRef, useState } from "react";
import evaluateChoiceResponse from "@/lfs_tools/shared_features/user_response/helpers/evaluateChoiceResponse";
import { RESPONSE_TYPES, ResponseTemplate } from "../../helpers/glaResponseHelpers";
import GlaButton from "./GlaButton";
import TextReflectionModal from "@/lfs_tools/shared_features/reflection/TextReflectionModal";
import { useQuery } from "@tanstack/react-query";
import { fetchChoicesForInquiry } from "../../helpers/queryHelpers";

const GlaChoiceResponseComponent = ({ inquiry, onEvaluation }) => {
    // doesn't reveal the number of correct choices, and enables selecting any number of choices
    const isAmbigious = inquiry.response_type === RESPONSE_TYPES.CHOICE_AMBIGIOUS;

    // displays choices, and aids evaluation
    const [selectedChoices, setSelectedChoices] = useState([]);
    const [isValidResponse, setIsValidResponse] = useState(false);
    const [isCorrectResponse, setIsCorrectResponse] = useState(false)

    const attempts = useRef([]) // TODO: maybe we can use refs instead
    const reflections = useRef([]) // TODO: maybe we can use refs instead

    const { data, error } = useQuery({
        queryKey: ['choices', inquiry.id],
        queryFn: () => fetchChoicesForInquiry(inquiry.id)
    })

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

    const promptReflection = (choicesToReflectOn) => {

        if (attempts.current[0].isCorrect) { // we'll check whether the first attempt is correct or not
            reflections.current = choicesToReflectOn;
        }
    };

    // TODO: uncomment the prompt reflection below
    const handleEvaluation = () => {
        const evaluation = evaluateChoiceResponse(selectedChoices, data.correctChoices);
        setIsCorrectResponse(evaluation.isCorrect)
        attempts.current = [
            ...attempts.current,
            { isCorrect: isCorrectResponse, },
        ]
        promptReflection(selectedChoices)
    };

    const handleProgression = () => {
        const response = new ResponseTemplate()
        response.type = RESPONSE_TYPES.CHOICE // we won't handle ambigious choices separately
        response.isCorrect = isCorrectResponse
        onEvaluation(response)
    }

    const handleButtonClick = () => {
        if (isValidResponse && !isCorrectResponse) {
            handleEvaluation()
        } else {
            handleProgression()
        }
    }

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
                        disabled={!isValidResponse}
                    />
                    {reflections.length > 0
                        ? <TextReflectionModal reflections={reflections} />
                        : null}
                </>
                : null}
        </>
    );
};

export default GlaChoiceResponseComponent;