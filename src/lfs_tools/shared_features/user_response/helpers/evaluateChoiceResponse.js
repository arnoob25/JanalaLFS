/**
 * Evaluates the user's selected choices against the correct choices and returns the result.
 *
 * @param {Array<Object>} selectedChoices - An array of objects representing the user's selected choices.
 * Each object should have an 'id' property.
 * @param {Array<Object>} correctChoices - An array of objects representing the correct choices.
 * Each object should have an 'id' property.
 * @returns {Object} - An object with three properties:
 * - `isCorrect` (boolean): `true` if the user's selected choices match the correct choices, `false` otherwise.
 * - `correctChoices` (Array<Object>): An array of the user's selected choices that match the correct choices.
 * - `incorrectChoices` (Array<Object>): An array of the user's selected choices that do not match the correct choices.
 */

export default function evaluateChoiceResponse(selectedChoices, correctChoices) {
  // Helper function to check if an item exists in an array based on its 'id' property
  const itemExistsInArray = (array, choice) => array.some(item => item.id === choice.id);

  // Ensure that both input arrays are not empty
  if (selectedChoices.length === 0 || correctChoices.length === 0) {
    return { isCorrect: false, correctSelections: [], incorrectSelections: [] };
  }

  const correctSelections = selectedChoices.filter(choice => itemExistsInArray(correctChoices, choice));
  const incorrectSelections = selectedChoices.filter(choice => !itemExistsInArray(correctSelections, choice));

  const isCorrect =
    correctSelections.length === correctChoices.length &&
    selectedChoices.length === correctChoices.length;

  return { isCorrect, correctSelections, incorrectSelections };
}