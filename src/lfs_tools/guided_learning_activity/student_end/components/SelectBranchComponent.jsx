// ChoiceResponseComponent.js
/* eslint-disable react/prop-types */

import ChoiceComponent from "@/lfs_tools/shared_components/user_response/ChoiceComponent";
import { useEffect, useState } from "react";
import { CHOICES } from "../test_db";


const SelectBranchComponent = ({ inquiry, onBranchSelection }) => {

    const [choices, setChoices] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState(''); // choices selected by the user

    // setting the choices and correct choices
    // TODO: replace with query client from TanStack
    useEffect(() => {

        const choiceArray = CHOICES.filter(
            choice => {
                return (
                    choice.inquiry === inquiry.id
                )
            }
        )

        setChoices(choiceArray);

    }, [inquiry]);


    return (
        <>
            <ChoiceComponent
                choices={choices}
                onSelectionChange={selectedChoice => onBranchSelection(selectedChoice)}
            />
        </>
    );
};

export default SelectBranchComponent;