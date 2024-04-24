/**
 * ChoiceResponseComponent
 *
 * This component is responsible for rendering a set of choices for a given inquiry and evaluating the user's response.
 *
 * @param {object} inquiry - The inquiry object containing the relevant information for the current inquiry.
 * @param {function} onChoiceEvaluation - A callback function that is called with the result of the user's response evaluation.
 * @returns {JSX.Element} - The rendered `ChoiceComponent` with the appropriate choices and evaluation data.
 */

/* eslint-disable react/prop-types */

import ChoiceComponent from "@/lfs_tools/shared_features/user_response/components/ChoiceComponent";
import { useEffect, useState } from "react";
import { CHOICES } from "../../../../assets/test_data/test_db";
import evaluateChoiceResponse from "@/lfs_tools/shared_features/user_response/helpers/evaluateChoiceResponse";
import { RESPONSE_TYPES } from "../helpers/glaResponseHelpers";

// TODO: work with objects for the time being. Later, we'll decide whether to work with ids or objects


const GlaChoiceResponseComponent = ({ inquiry, onChoiceEvaluation }) => {

    const [choices, setChoices] = useState([]);
    const [correctChoices, setCorrectChoices] = useState([]);
    const [selectedChoices, setSelectedChoices] = useState([]); // choices selected by the user

    // evaluates user responses
    const [isCorrectResponse, correctResponses, incorrectResponses] = evaluateChoiceResponse(selectedChoices, correctChoices)

    // setting the choices and correct choices
    // TODO: replace with query client from TanStack
    useEffect(() => {

        const choiceArray = CHOICES.filter(
            choice => choice.inquiry === inquiry.id
        )

        const correctChoiceArray = choiceArray.filter(
            choice => {
                return (
                    choice.isCorrect === true
                )
            }
        )



        setChoices(choiceArray);
        setCorrectChoices(correctChoiceArray);

    }, [inquiry]);


    // TODO: maybe return an event handler that'll send the correct response to the parent
    // extending on above: keep the callback for now, since I have to manage asking for explanations from this component
    useEffect(() => {
        onChoiceEvaluation(isCorrectResponse)
    }, [isCorrectResponse])


    return (
        <>
            <ChoiceComponent
                choices={choices}
                // student can select any number of choices when type is CHOICE_AMBIGIOUS
                maxChoices={inquiry.response_type === RESPONSE_TYPES.CHOICE_AMBIGIOUS ? choices.length : correctChoices.length}
                onSelectionChange={setSelectedChoices}
                evaluatedUserResponseData={[
                    correctResponses,
                    incorrectResponses
                ]}
                show_selection_prompt={!(inquiry.response_type === RESPONSE_TYPES.CHOICE_AMBIGIOUS)}
            />
        </>
    );
};

export default GlaChoiceResponseComponent;