export const INQUIRIES = [
    {
      "id": 1,
      "branch": null,
      "is_branching": false,
      "order": 1,
      "context_text": "Main inquiry 1 (doesn't branch)",
      "prompt": "The ingredients that start a chemical reaction are called..."
    },
    {
      "id": 2,
      "branch": null,
      "is_branching": true,
      "order": 2,
      "context_text": "Main inquiry 2 (Originates branch)",
      "prompt": "Give an example of a chemical reaction you might see in daily life."
    },
    {
      "id": 6,
      "branch": null,
      "is_branching": false,
      "order": 3,
      "context_text": "Main inquiry 3 (doesn't branch)",
      "prompt": "Give an example of a chemical reaction you might see in daily life."
    },
    {
      "id": 3,
      "branch": 1, // This branch prompt relates back to inquiry 2 (corrected)
      "is_branching": false,
      "order": 0,
      "context_text": "Branch inquiry 1",
      "prompt": "When wood burns, it changes into..."
    },
    {
      "id": 4,
      "branch": 1, // This branch prompt relates back to inquiry 1 (corrected)
      "is_branching": false,
      "order": 1,
      "context_text": "Branch inquiry 2",
      "prompt": "The substances formed at the end of a chemical reaction are called..."
    }
  ]
  
  export const BRANCHES = [
    {
      "id": 1,
      "parent_inquiry": 2,
      "is_correct": true // This branch provides the correct answer to inquiry 1
    },
    {
      "id": 2,
      "parent_inquiry": 2,
      "is_correct": false // This branch provides an incorrect answer to inquiry 1
    }
  ]
  