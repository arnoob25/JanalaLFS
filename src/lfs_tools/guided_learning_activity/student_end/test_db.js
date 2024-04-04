export const INQUIRIES = [
    {
      "id": 1,
      "branch": null,
      "is_branching": false,
      "order": 1,
      "context_text": "Imagine ingredients for a cake. During baking, these ingredients undergo a chemical reaction to form the cake itself. What do we call the ingredients before they are baked?",
      "prompt": "The ingredients that start a chemical reaction are called..."
    },
    {
      "id": 2,
      "branch": null,
      "is_branching": true,
      "context_text": "Let's say you mix baking soda and vinegar. They fizz and bubble, creating a new substance. Can you think of another example of a chemical reaction in everyday life?",
      "prompt": "Give an example of a chemical reaction you might see in daily life."
    },
    {
      "id": 3,
      "branch": 2, // This branch prompt relates back to inquiry 2 (corrected)
      "is_branching": false,
      "context_text": "Great! Burning is a common chemical reaction. What happens to the wood during burning?",
      "prompt": "When wood burns, it changes into..."
    },
    {
      "id": 4,
      "branch": 1, // This branch prompt relates back to inquiry 1 (corrected)
      "is_branching": false,
      "order": 2,
      "context_text": "Exactly! Those starting ingredients are called reactants. Now, after baking, what do we call the cake itself?",
      "prompt": "The substances formed at the end of a chemical reaction are called..."
    }
  ]
  
  export const BRANCHES = [
    {
      "id": 2,
      "parent_inquiry": 1,
      "is_correct": true // This branch provides the correct answer to inquiry 1
    },
    {
      "id": 3,
      "parent_inquiry": 1,
      "is_correct": false // This branch provides an incorrect answer to inquiry 1
    }
  ]
  