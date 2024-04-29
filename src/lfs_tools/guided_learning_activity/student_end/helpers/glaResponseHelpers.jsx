import GlaBranchSelectionComponent from "../components/response_components/GlaBranchSelectionComponent";
import GlaChoiceResponseComponent from "../components/response_components/GlaChoiceResponseComponent";
import GlaTextResponseComponent from "../components/response_components/GlaTextResponseComponent";

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
export class ResponseHandlingCommand {
    constructor(result = {}) {
        this.proceedToNextInquiry = result.proceedToNextInquiry || false;
        this.shouldInitializeBranch = result.shouldInitializeBranch || false;
        this.shouldEnterBranch = result.shouldEnterBranch || false;
        this.selectedBranch = result.selectedBranch || null;
    }
}

export function handleResponse(response, onCompletionCallback) {
    const command = new ResponseHandlingCommand()

    if ((response.type === RESPONSE_TYPES.CHOICE) && response.isCorrect) {
        // we assigned type = choice for ambigious choices as well.
        command.proceedToNextInquiry = true
    }
    else if (response.type === RESPONSE_TYPES.TEXT && response.isMeaningful) {
        command.proceedToNextInquiry = true
    }
    else if (response.type === RESPONSE_TYPES.CHOICE_BRANCH && response.selectedBranch) {
        if (response.shouldInitializeBranch) {
            command.shouldInitializeBranch = true
            command.selectedBranch = response.selectedBranch

        }
        else if (response.shouldEnterBranch) {
            command.shouldInitializeBranch = false
            command.shouldEnterBranch = true
            command.selectedBranch = response.selectedBranch
        }
    }
    onCompletionCallback(command)
}

export default function selectGlaResponseComponent({
    inquiry,
    onCompletion
}) {

    switch (inquiry.response_type) {
        case RESPONSE_TYPES.CHOICE:
            return (
                <GlaChoiceResponseComponent
                    inquiry={inquiry}
                    onEvaluation={response => handleResponse(response, onCompletion)}
                />
            )
        case RESPONSE_TYPES.CHOICE_AMBIGIOUS:
            return (
                <GlaChoiceResponseComponent
                    inquiry={inquiry}
                    onEvaluation={response => handleResponse(response, onCompletion)}
                />
            )
        case RESPONSE_TYPES.TEXT:
            return (
                <GlaTextResponseComponent
                    inquiry={inquiry}
                    onMeaningfulResponse={response => handleResponse(response, onCompletion)}
                />
            )
        case RESPONSE_TYPES.CHOICE_BRANCH:
            return (
                <GlaBranchSelectionComponent
                    inquiry={inquiry}
                    onBranchSelection={response => handleResponse(response, onCompletion)}
                />
            )
        default:
            return null;
    }
}

