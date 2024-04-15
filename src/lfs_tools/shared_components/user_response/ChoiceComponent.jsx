/**
 * A reusable component that allows users to select single or multiple choices from a list of options.
 *
 * @param {Array<Object>} choices - An array of objects representing the available choices. Each object should have the following properties:
 *   - `id` (string|number): A unique identifier for the choice.
 *   - `label` (string): The label to be displayed for the choice.
 *   - `value` (any): The value associated with the choice.
 * @param {number} maxChoices - The maximum number of choices the user can select. Set to 1 for single-select, and greater than 1 for multi-select.
 * @param {Function} onSelectionChange - A callback function that is called whenever the user's selection changes. It receives an array of the selected choices as its argument.
 * @param {boolean} [disabled=false] - An optional boolean flag indicating whether the choices should be disabled and unselectable.
 * @param {Object} evaluatedUserResponse - An object containing the evaluated user response, with the following properties:
 *   - `isCorrect` (boolean): Indicates whether the user's response is correct or not.
 *   - `correctResponses` (Array<Object>): An array of the user's selected choices that match the correct choices.
 *   - `incorrectResponses` (Array<Object>): An array of the user's selected choices that do not match the correct choices.
 *
 * @returns {JSX.Element} - A React component that renders the choice selection UI.
 */


import { Label } from "@/global_ui_components/ui/label";
import { Checkbox } from "@/global_ui_components/ui/checkbox";
import { useEffect, useState } from "react";

const ChoiceComponent = ({
    choices,
    maxChoices = 1,
    onSelectionChange,
    disabled = false,
    evaluatedUserResponseData = ['', '']
}) => {

    const [selectedChoiceIds, setSelectedChoiceIds] = useState([]); // stores the id instead of the object
    const [correctResponses, incorrectResponses] = evaluatedUserResponseData

    // TODO: apply custom styling for incorrect and correct responses,
    // TODO: disable the component conditionally
    // TODO: display additional info and/ user's explanations

    const handleChoiceSelection = (choiceId) => {

        if (maxChoices === 1) {
            // single-select behavior
            if (selectedChoiceIds.includes(choiceId)) {
                setSelectedChoiceIds([]);
            } else {
                setSelectedChoiceIds([choiceId]);
            }
        } else {
            // multi-select behavior
            if (selectedChoiceIds.includes(choiceId)) {
                setSelectedChoiceIds(selectedChoiceIds.filter((id) => id !== choiceId));
            } else if (selectedChoiceIds.length < maxChoices) {
                setSelectedChoiceIds([...selectedChoiceIds, choiceId]);
            }
        }
    };

    // sending the selected choices to the parent
    useEffect(() => {
        const selectedChoices = choices.filter(
            choice => selectedChoiceIds.includes(choice.id)
        )

        onSelectionChange(selectedChoices)
    }, [selectedChoiceIds])

    return (
        <>
            <p className="text-sm text-muted-foreground mb-2">Select {maxChoices} from {choices.length} options</p>
            <div className="flex flex-col space-y-3">
                {choices.map(choice => (
                    <label
                        htmlFor={choice.id}
                        className="flex items-center space-x-2 p-6 rounded-md cursor-pointer"
                        style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
                        key={choice.id}
                    >
                        <Checkbox
                            id={choice.id}
                            value={choice.value}
                            checked={selectedChoiceIds.includes(choice.id)}
                            onCheckedChange={() => handleChoiceSelection(choice.id)}
                            className="form-checkbox h-5 w-5"
                        />
                        <span>{choice.label}</span>
                    </label>
                ))}
            </div>
        </>
    );



};

export default ChoiceComponent;