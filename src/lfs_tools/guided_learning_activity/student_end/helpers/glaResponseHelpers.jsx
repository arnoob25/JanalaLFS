import GlaBranchSelectionComponent from "../components/GlaBranchSelectionComponent";
import GlaChoiceResponseComponent from "../components/GlaChoiceResponseComponent";
import GlaTextResponseComponent from "../components/GlaTextResponseComponent";

export const RESPONSE_TYPES = {
    TEXT: 'text',
    CHOICE: 'choice',
    CHOICE_AMBIGIOUS: 'choice_ambigious',
}

export default function selectGlaResponseComponent({ inquiry, handleBranchSelection, handleInquiryCompletion }) {
    if (inquiry.is_branching) {
        return (
            <GlaBranchSelectionComponent
                inquiry={inquiry}
                onBranchSelection={selectedBranch => handleBranchSelection(selectedBranch)}
            />
        )
    }
    switch (inquiry.response_type) {
        case RESPONSE_TYPES.CHOICE:
            return (
                <GlaChoiceResponseComponent
                    inquiry={inquiry}
                    onChoiceEvaluation={isCorrect => handleInquiryCompletion(isCorrect)}
                />
            )
        case RESPONSE_TYPES.CHOICE_AMBIGIOUS:
            return (
                <GlaChoiceResponseComponent
                    inquiry={inquiry}
                    onChoiceEvaluation={isCorrect => handleInquiryCompletion(isCorrect)}
                />
            )
        case RESPONSE_TYPES.TEXT:
            return (
                <GlaTextResponseComponent
                    inquiry={inquiry}
                    onMeaningfulInput={isCorrect => handleInquiryCompletion(isCorrect)}
                />
            )
        default:
            return null;
    }
}