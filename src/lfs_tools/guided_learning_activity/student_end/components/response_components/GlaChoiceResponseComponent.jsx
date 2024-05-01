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
import { useEffect, useState } from "react";
import { CHOICES } from "../../../../../assets/test_data/test_db";
import evaluateChoiceResponse from "@/lfs_tools/shared_features/user_response/helpers/evaluateChoiceResponse";
import { RESPONSE_TYPES, ResponseTemplate } from "../../helpers/glaResponseHelpers";
import GlaButton from "./GlaButton";
import GlaResponseContainer from "./GlaResponseContainer";
import TextReflectionModal from "@/lfs_tools/shared_features/reflection/TextReflectionModal";

const GlaChoiceResponseComponent = ({ inquiry, onEvaluation }) => {
    // doesn't reveal the number of correct choices, and enables selecting any number of choices
    const isAmbigious = inquiry.response_type === RESPONSE_TYPES.CHOICE_AMBIGIOUS;

    // displays choices, and aids evaluation
    const [choices, setChoices] = useState([]);
    const [correctChoices, setCorrectChoices] = useState([]);
    // manages user response
    const [selectedChoices, setSelectedChoices] = useState([]);
    const [isValidResponse, setIsValidResponse] = useState(false);
    const [isCorrectResponse, setIsCorrectResponse] = useState(false)

    const [reflections, setReflections] = useState([])

    // TODO: replace with query client from TanStack
    useEffect(() => {
        // gets the choices and correct choices
        const choiceArray = CHOICES.filter((choice) => choice.inquiry === inquiry.id);
        const correctChoiceArray = choiceArray.filter((choice) => choice.isCorrect === true);
        setChoices(choiceArray);
        setCorrectChoices(correctChoiceArray);
    }, [inquiry]);

    const handleChoiceSelection = (selection) => {
        if (selection && selection.length > 0) {
            setSelectedChoices(selection);
            // for ambigious responses, any number of selections result in true
            if (isAmbigious || selection.length === correctChoices.length) {
                setIsValidResponse(true);
            } else {
                setIsValidResponse(false);
            }
        } else {
            setIsValidResponse(false);
        }
    };

    const promptReflection = choicesToReflectOn => {
        setReflections(choicesToReflectOn)
    }

    // TODO: uncomment the prompt reflection below
    const handleEvaluation = () => {
        const evaluation = evaluateChoiceResponse(selectedChoices, correctChoices);
        setIsCorrectResponse(evaluation.isCorrect)
        //promptReflection(selectedChoices)
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
            <GlaResponseContainer>
                <ChoiceComponent
                    choices={choices}
                    maxChoices={isAmbigious ? choices.length : correctChoices.length}
                    onSelectionChange={(selection) => handleChoiceSelection(selection)}
                    show_selection_prompt={!isAmbigious}
                />
                <GlaButton
                    label={!isCorrectResponse ? 'Check' : 'Next'}
                    onClick={handleButtonClick}
                    disabled={!isValidResponse}
                />
            </GlaResponseContainer>
            {reflections.length > 0
                ? <TextReflectionModal reflections={reflections} />
                : null}
        </>
    );
};

export default GlaChoiceResponseComponent;