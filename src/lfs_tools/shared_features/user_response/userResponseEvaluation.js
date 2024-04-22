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
export function evaluateChoiceResponse(selectedChoices, correctChoices) {

  const evaluateResponse = () => {
    const existsInArray = (array, choice) => {
      return array.some((arrayItem) => arrayItem.id === choice.id);
    };

    const correctResponses = selectedChoices.filter((selectedChoice) =>
      existsInArray(correctChoices, selectedChoice)
    );
    const incorrectResponses = selectedChoices.filter(
      (selectedChoice) => !existsInArray(correctResponses, selectedChoice)
    );

    return [
      correctResponses.length === correctChoices.length && selectedChoices.length === correctChoices.length,
      correctResponses,
      incorrectResponses,
    ];
  };

  if (selectedChoices.length > 0 && correctChoices.length > 0) {
    const [isCorrect, correctChoices, incorrectChoices] = evaluateResponse();
    return [isCorrect, correctChoices, incorrectChoices];
  }

  return [false, [], []];
}


// TODO: evaluate text response (text equals a set value) or (is a valid, meaningful text)

// TODO: evaluate responses in the sandbox