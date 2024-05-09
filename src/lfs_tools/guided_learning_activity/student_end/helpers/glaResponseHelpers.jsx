import GlaBranchSelectionComponent from "../components/response_types/GlaBranchSelectionComponent";
import GlaChoiceResponseComponent from "../components/response_types/GlaChoiceResponseComponent";
import GlaTextResponseComponent from "../components/response_types/GlaTextResponseComponent";

export const RESPONSE_TYPES = {
    TEXT: 'text',
    CHOICE: 'choice',
    CHOICE_BRANCH: 'choice_branch',
    CHOICE_AMBIGIOUS: 'choice_ambigious',
}

/**
 * allows us to get data required to handle responses from the response components
 * this also offers autocompletion, preventing bugs, and enhancing maintainability
 */
export class ResponseTemplate {
    constructor() {
        this.type = null;
        this.isCorrect = false;
        this.isMeaningful = false;
        this.selectedBranch = false;
        this.requestProgression = false;
        this.shouldInitializeBranch = false;
        this.shouldEnterBranch = false;
    }
}

/**
 * allows us to handle responses received from the response components
 * this also offers autocompletion, preventing bugs, and enhancing maintainability
 */
export class ResponseHandlingActions {
    constructor(result = {}) {
        this.proceedToNextInquiry = result.proceedToNextInquiry || false;
        this.shouldInitializeBranch = result.shouldInitializeBranch || false;
        this.shouldEnterBranch = result.shouldEnterBranch || false;
        this.shouldExitBranch = result.shouldExitBranch || false;
        this.selectedBranch = result.selectedBranch || null;
    }
}

const selectGlaResponseComponent = ( inquiry, handleResponse ) => {

    switch (inquiry.response_type) {
        case RESPONSE_TYPES.CHOICE:
            return (
                <GlaChoiceResponseComponent
                    inquiry={inquiry}
                    onEvaluation={response => handleResponse(response)}
                />
            )
        case RESPONSE_TYPES.CHOICE_AMBIGIOUS:
            return (
                <GlaChoiceResponseComponent
                    inquiry={inquiry}
                    onEvaluation={response => handleResponse(response)}
                />
            )
        case RESPONSE_TYPES.TEXT:
            return (
                <GlaTextResponseComponent
                    inquiry={inquiry}
                    onMeaningfulResponse={response => handleResponse(response)}
                />
            )
        case RESPONSE_TYPES.CHOICE_BRANCH:
            return (
                <GlaBranchSelectionComponent
                    inquiry={inquiry}
                    onBranchSelection={response => handleResponse(response)}
                />
            )
        default:
            return null;
    }
}

export default selectGlaResponseComponent
