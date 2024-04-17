export const INQUIRIES = [
  {
    id: 1,
    branch: null,
    is_branching: false,
    order: 1,
    context_text: "Discussing the basics of chemical reactions, focusing on the starting materials.",
    prompt: "Main Inquiry 1 (doesn't branch)"
  }
]

export const BRANCHES = [
  {
    "id": 1,
    "parent_inquiry": 2,
    "is_correct": true // This branch provides the correct answer to inquiry 1
  },
]

export const CHOICES = [
  // Inquiry 1
  { id: 1, inquiry: 1, label: 'Inquiry 1, Choice A', isCorrect: true, branchId:null },
];

export const MEDIA = [
  {id: 1, type: 'simulation', label: 'sim 1', inquiry: 1, code: 'src/lfs_tools/guided_learning_activity/test_data/snakeGame.js'},
]