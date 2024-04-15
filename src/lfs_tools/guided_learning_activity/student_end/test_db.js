export const INQUIRIES = [
  {
    id: 1,
    branch: null,
    is_branching: false,
    order: 1,
    context_text: "Discussing the basics of chemical reactions, focusing on the starting materials.",
    prompt: "Main Inquiry 1 (doesn't branch)"
  },
  {
    id: 2,
    branch: null,
    is_branching: true,
    order: 2,
    context_text: "Exploring common chemical reactions that occur in everyday settings.",
    prompt: "Main Inquiry 2 (originates a branch)"
  },
  {
    id: 6,
    branch: null,
    is_branching: false,
    order: 3,
    context_text: "Identifying chemical reactions that are part of routine activities.",
    prompt: "Main Inquiry 3 (last inquiry)"
  },
  {
    id: 3,
    branch: 2, // This branch prompt relates back to inquiry 2
    is_branching: false,
    order: 0,
    context_text: "Describing the chemical changes that occur during the combustion of wood.",
    prompt: "Branch Inquiry 1 (from Main Inquiry 2)"
  },
  {
    id: 4,
    branch: 2, // This branch prompt relates back to inquiry 2
    is_branching: false,
    order: 1,
    context_text: "Understanding the outcomes of chemical reactions and the new substances formed.",
    prompt: "Branch Inquiry (Last One) (from Main Inquiry 2)"
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

export const CHOICES = [
  // Inquiry 1
  { id: 1, inquiry: 1, label: 'Inquiry 1, Choice A', isCorrect: true },
  { id: 2, inquiry: 1, label: 'Inquiry 1, Choice B', isCorrect: false },
  { id: 3, inquiry: 1, label: 'Inquiry 1, Choice C', isCorrect: false },
  // Inquiry 2
  { id: 4, inquiry: 2, label: 'Inquiry 2, Choice A', isCorrect: true },
  { id: 5, inquiry: 2, label: 'Inquiry 2, Choice B', isCorrect: true },
  { id: 6, inquiry: 2, label: 'Inquiry 2, Choice C', isCorrect: false },
  { id: 7, inquiry: 2, label: 'Inquiry 2, Choice D', isCorrect: false },
  // Inquiry 3
  { id: 8, inquiry: 3, label: 'Inquiry 3, Choice A', isCorrect: true },
  { id: 9, inquiry: 3, label: 'Inquiry 3, Choice B', isCorrect: false },
  { id: 10, inquiry: 3, label: 'Inquiry 3, Choice C', isCorrect: false },
  { id: 11, inquiry: 3, label: 'Inquiry 3, Choice D', isCorrect: true },
  // Inquiry 4
  { id: 12, inquiry: 4, label: 'Inquiry 4, Choice A', isCorrect: false },
  { id: 13, inquiry: 4, label: 'Inquiry 4, Choice B', isCorrect: true },
  { id: 14, inquiry: 4, label: 'Inquiry 4, Choice C', isCorrect: false },
  // Inquiry 5
  { id: 15, inquiry: 5, label: 'Inquiry 5, Choice A', isCorrect: true },
  { id: 16, inquiry: 5, label: 'Inquiry 5, Choice B', isCorrect: false },
  { id: 17, inquiry: 5, label: 'Inquiry 5, Choice C', isCorrect: true },
  // Inquiry 6
  { id: 18, inquiry: 6, label: 'Inquiry 6, Choice A', isCorrect: false },
  { id: 19, inquiry: 6, label: 'Inquiry 6, Choice B', isCorrect: true },
  { id: 20, inquiry: 6, label: 'Inquiry 6, Choice C', isCorrect: false },
  { id: 21, inquiry: 6, label: 'Inquiry 6, Choice D', isCorrect: false },
  // Inquiry 7
  { id: 22, inquiry: 7, label: 'Inquiry 7, Choice A', isCorrect: true },
  { id: 23, inquiry: 7, label: 'Inquiry 7, Choice B', isCorrect: true },
  { id: 24, inquiry: 7, label: 'Inquiry 7, Choice C', isCorrect: false },
  // Inquiry 8
  { id: 25, inquiry: 8, label: 'Inquiry 8, Choice A', isCorrect: false },
  { id: 26, inquiry: 8, label: 'Inquiry 8, Choice B', isCorrect: true },
  { id: 27, inquiry: 8, label: 'Inquiry 8, Choice C', isCorrect: true },
  { id: 28, inquiry: 8, label: 'Inquiry 8, Choice D', isCorrect: false },
  // Inquiry 9
  { id: 29, inquiry: 9, label: 'Inquiry 9, Choice A', isCorrect: true },
  { id: 30, inquiry: 9, label: 'Inquiry 9, Choice B', isCorrect: false },
  { id: 31, inquiry: 9, label: 'Inquiry 9, Choice C', isCorrect: true },
];
