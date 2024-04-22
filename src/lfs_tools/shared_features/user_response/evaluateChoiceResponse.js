/**
 * Evaluates the user's selected choices against the correct choices and returns the result.
 *
 * @param {Array<Object>} selectedChoices - An array of objects representing the user's selected choices.
 *                                         Each object should have an 'id' property.
 * @param {Array<Object>} correctChoices - An array of objects representing the correct choices.
 *                                         Each object should have an 'id' property.
 * @returns {Array} - An array with three elements:
 *                   - `isCorrect` (boolean): `true` if the user's selected choices match the correct choices, `false` otherwise.
 *                   - `correctChoices` (Array<Object>): An array of the user's selected choices that match the correct choices.
 *                   - `incorrectChoices` (Array<Object>): An array of the user's selected choices that do not match the correct choices.
 */


export default function evaluateChoiceResponse(selectedChoices, correctChoices) {

  // returns true if item found in the array
  const itemExistsInArray = (array, choice) => {
    return array.some(arrayItem => arrayItem.id === choice.id);
  };

  const evaluateChoice = () => {
    const correctResponses = selectedChoices.filter(
      selectedChoice => itemExistsInArray(correctChoices, selectedChoice)
    );
    const incorrectResponses = selectedChoices.filter(
      selectedChoice => !itemExistsInArray(correctResponses, selectedChoice)
    );

    return [
      /**
       * evaluates to true when:
       * all the correct choices are selected
       * the number of selected choices is exactly same as the number of correct choices 
       *  */ 
      correctResponses.length === correctChoices.length && selectedChoices.length === correctChoices.length,
      correctResponses,
      incorrectResponses,
    ];
  };

  if (selectedChoices.length > 0 && correctChoices.length > 0) {
    const [isCorrect, correctSelections, incorrectSelections] = evaluateChoice();
    return [isCorrect, correctSelections, incorrectSelections];
  }

  return [false, [], []];
}