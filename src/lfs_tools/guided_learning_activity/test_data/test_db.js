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
    branch: 1, // This branch prompt relates back to inquiry 2
    is_branching: false,
    order: 0,
    context_text: "Describing the chemical changes that occur during the combustion of wood.",
    prompt: "Branch Inquiry 1 (from Main Inquiry 2 - Correct Branch)"
  },
  {
    id: 4,
    branch: 1, // This branch prompt relates back to inquiry 2
    is_branching: false,
    order: 1,
    context_text: "Understanding the outcomes of chemical reactions and the new substances formed.",
    prompt: "Branch Inquiry (Last One) (from Main Inquiry 2 - Correct Branch)"
  },
  {
    id: 7,
    branch: 2,
    is_branching: false,
    order: 1,
    context_text: "Identifying chemical reactions that are part of routine activities.",
    prompt: "Branch Inquiry 1 (from Main Inquiry 2 - Correct Branch)"
  },
  {
    id: 8,
    branch: 2,
    is_branching: false,
    order: 2,
    context_text: "Identifying chemical reactions that are part of routine activities.",
    prompt: "Main Inquiry 3 (from Main Inquiry 2 - Correct Branch)"
  },
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
  { id: 1, inquiry: 1, label: 'Inquiry 1, Choice A', isCorrect: true, branchId:null },
  { id: 2, inquiry: 1, label: 'Inquiry 1, Choice B', isCorrect: false, branchId:null },
  { id: 3, inquiry: 1, label: 'Inquiry 1, Choice C', isCorrect: false, branchId:null },
  // Inquiry 2
  { id: 4, inquiry: 2, label: 'Inquiry 2, Choice A', isCorrect: true, branchId:1 },
  { id: 5, inquiry: 2, label: 'Inquiry 2, Choice B', isCorrect: true, branchId:2 },
  // Inquiry 3
  { id: 8, inquiry: 3, label: 'Inquiry 3, Choice A', isCorrect: true, branchId:null },
  { id: 9, inquiry: 3, label: 'Inquiry 3, Choice B', isCorrect: false, branchId:null },
  { id: 10, inquiry: 3, label: 'Inquiry 3, Choice C', isCorrect: false, branchId:null },
  { id: 11, inquiry: 3, label: 'Inquiry 3, Choice D', isCorrect: true, branchId:null },
  // Inquiry 4
  { id: 12, inquiry: 4, label: 'Inquiry 4, Choice A', isCorrect: false, branchId:null },
  { id: 13, inquiry: 4, label: 'Inquiry 4, Choice B', isCorrect: true, branchId:null },
  { id: 14, inquiry: 4, label: 'Inquiry 4, Choice C', isCorrect: false, branchId:null },
  // Inquiry 6
  { id: 18, inquiry: 6, label: 'Inquiry 6, Choice A', isCorrect: false, branchId:null },
  { id: 19, inquiry: 6, label: 'Inquiry 6, Choice B', isCorrect: true, branchId:null },
  { id: 20, inquiry: 6, label: 'Inquiry 6, Choice C', isCorrect: false, branchId:null },
  { id: 21, inquiry: 6, label: 'Inquiry 6, Choice D', isCorrect: false, branchId:null },
  // Inquiry 7
  { id: 22, inquiry: 7, label: 'Inquiry 7, Choice A', isCorrect: true, branchId:null },
  { id: 23, inquiry: 7, label: 'Inquiry 7, Choice B', isCorrect: true, branchId:null },
  { id: 24, inquiry: 7, label: 'Inquiry 7, Choice C', isCorrect: false, branchId:null },
  // Inquiry 8
  { id: 25, inquiry: 8, label: 'Inquiry 8, Choice A', isCorrect: false, branchId:null },
  { id: 26, inquiry: 8, label: 'Inquiry 8, Choice B', isCorrect: true, branchId:null },
  { id: 27, inquiry: 8, label: 'Inquiry 8, Choice C', isCorrect: true, branchId:null },
  { id: 28, inquiry: 8, label: 'Inquiry 8, Choice D', isCorrect: false, branchId:null },
];

export const MEDIA = [
  {id: 1, type: 'simulation', label: 'sim 1', inquiry: 1, code: 'src/lfs_tools/guided_learning_activity/test_data/snakeGame.js'},
  {id: 2, type: 'simulation', label: 'sim 2', inquiry: 1, code: 'src/lfs_tools/guided_learning_activity/test_data/snakeGame.js'}
]