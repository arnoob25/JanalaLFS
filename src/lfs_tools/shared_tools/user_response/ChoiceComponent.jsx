/* eslint-disable react/prop-types */
import { Label } from "@/global_ui_components/ui/label";
import { Checkbox } from "@/global_ui_components/ui/checkbox";
import { useState } from "react";

const ChoiceComponent = ({ choices }) => {
    const [maxChoices] = useState(2)
    const [selectedChoices, setSelectedChoices] = useState([]);

    const handleCheckboxChange = (choiceId) => {
        if (maxChoices === 1) {
            // Radio group behavior
            if (selectedChoices.includes(choiceId)) {
                setSelectedChoices([]);
            } else {
                setSelectedChoices([choiceId]);
            }
        } else {
            // Multi-select behavior
            if (selectedChoices.includes(choiceId)) {
                setSelectedChoices(selectedChoices.filter((id) => id !== choiceId));
            } else if (selectedChoices.length < maxChoices) {
                setSelectedChoices([...selectedChoices, choiceId]);
            }
        }
    };

    const options = choices.map((choice) => {
        return (
            <div className="flex items-center space-x-2" key={choice.id}>
                <Checkbox
                    id={choice.id}
                    value={choice.id}
                    checked={selectedChoices.includes(choice.id)}
                    onCheckedChange={() => handleCheckboxChange(choice.id)}
                />
                <Label htmlFor={choice.id}>{choice.label}</Label>
            </div>
        );
    });

    return <>{options}</>;
};

export default ChoiceComponent;