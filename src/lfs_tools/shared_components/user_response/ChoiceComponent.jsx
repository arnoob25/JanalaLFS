/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/**
 * allows selecting and evaluating single or multiple choices.
 * Also, reports the user selection.
 */
import { Label } from "@/global_ui_components/ui/label";
import { Checkbox } from "@/global_ui_components/ui/checkbox";
import { useEffect, useState } from "react";

const ChoiceComponent = ({
    choices,
    correctChoices = [],
    reportEvaluation = () => { },
    reportSelectedChoice = () => { },
}) => {
    const [selectedChoices, setSelectedChoices] = useState([]); // stores the id instead of the object
    // eslint-disable-next-line no-unused-vars
    const [incorrectChoices, setIncorrectChoices] = useState([]);

    const maxChoices = correctChoices.length;

    // event handlers
    const handleChoiceSelection = (choiceId) => {

        if (maxChoices === 1) {
            // single-select behavior
            if (selectedChoices.includes(choiceId)) {
                setSelectedChoices([]);
            } else {
                setSelectedChoices([choiceId]);
            }
        } else {
            // multi-select behavior
            if (selectedChoices.includes(choiceId)) {
                setSelectedChoices(selectedChoices.filter((id) => id !== choiceId));
            } else if (selectedChoices.length < maxChoices) {
                setSelectedChoices([...selectedChoices, choiceId]);
            }
        }
    };

    // helper functions
    const evaluateResponse = () => {
        const incorrectResponses = selectedChoices.filter(
            (choice) => !correctChoices.some((correctChoice) => correctChoice.id === choice)
        );
        setIncorrectChoices(incorrectResponses);
        if (incorrectResponses.length === 0 && selectedChoices.length === correctChoices.length) {
            return [true, []];
        } else {
            return [false, incorrectResponses];
        }
    };

    useEffect(() => {
        if (selectedChoices.length > 0 && correctChoices.length > 0) {
            if (maxChoices === 1) {
                reportSelectedChoice(selectedChoices);
            }

            const [isCorrectResponse, incorrectChoices] = evaluateResponse();

            setIncorrectChoices(incorrectChoices);

            reportEvaluation(isCorrectResponse);
        }
    }, [selectedChoices]);

    return (
        <>
            {// render checkboxes for each choice
                choices.map((choice) => {
                    return (
                        <div className="flex items-center space-x-2" key={choice.id}>
                            <Checkbox
                                id={choice.id}
                                value={choice.value}
                                checked={selectedChoices.includes(choice.id)}
                                onCheckedChange={() => handleChoiceSelection(choice.id)}
                            />
                            <Label htmlFor={choice.id}>{choice.label}</Label>
                        </div>
                    );
                })}
        </>
    );
};

export default ChoiceComponent;