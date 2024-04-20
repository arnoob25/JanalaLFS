import video11 from '../../guided_learning_activity/test_data/11.mp4';
import video12 from '../../guided_learning_activity/test_data/12.mp4';
import video21 from '../../guided_learning_activity/test_data/21.mp4';
import video22 from '../../guided_learning_activity/test_data/22.mp4';
import video23 from '../../guided_learning_activity/test_data/23.mp4';
import video51 from '../../guided_learning_activity/test_data/51.mp4';
import video52 from '../../guided_learning_activity/test_data/52.mp4';
import video53 from '../../guided_learning_activity/test_data/53.mp4';
import video54 from '../../guided_learning_activity/test_data/54.mp4';

export const RESPONSE_TYPES = {
  TEXT: 'text',
  CHOICE: 'choice',
}

export const INQUIRIES = [
  {
    id: 1,
    branch: null,
    is_branching: false,
    order: 1,
    context: "Consider the following scenarios where you apply some force to an object on a smooth surface - we want to rotate the donut, but in this case, it doesn’t rotate.",
    prompt: "Can you guess what happens if we offset the force a bit towards the edge of the donut?",
    response_type: RESPONSE_TYPES.TEXT
  },
  {
    id: 2,
    branch: null,
    is_branching: false,
    order: 2,
    context: "The same amount of force should always result in the same amount of acceleration. - Newton’s Second Law (F=ma).",
    prompt: "Based on Newton’s second law, which one of the scenarios accurately describes the expected behavior?",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 3,
    branch: null,
    is_branching: false,
    order: 3,
    context: "To verify, lets simulate, and observe what happens.",
    prompt: "Did you notice that? The wheel rotates faster when we apply the force further away from the center! Why do you think this happens?",
    response_type: RESPONSE_TYPES.TEXT
  },
  {
    id: 4,
    branch: null,
    is_branching: false,
    order: 4,
    context: "Does this invalidate Newton’s Second Law, which clearly states that the wheel should rotate in the same speed regardless of where we apply force? Or, are we clearly missing something?",
    prompt: "What does your intuition tell you?",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 5,
    branch: null,
    is_branching: false,
    order: 5,
    context: "",
    prompt: "Which of the scenarios do you think will exhibit similar behavior?",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 6,
    branch: null,
    is_branching: false,
    order: 6,
    context: "lets investigate the scenarios, to find clues and gather information that could potentially help us explain this behavior.",
    prompt: "can you identify the things (if any) they have in common?",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 7,
    branch: null,
    is_branching: false,
    order: 7,
    context: "lets examine the windmill, to understand how Fixed Axis Rotation works. We can carry out some tests, to outline their behavior compared to what we know about the scenarios involving regular stationary objects from Newton’s Second Law.",
    prompt: "Choose an experiment, that’d enable us to learn about Fixed Axis Rotation",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 8,
    branch: null,
    is_branching: false,
    order: 8,
    context: "",
    prompt: "",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 9,
    branch: null,
    is_branching: false,
    order: 9,
    context: "",
    prompt: "",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 10,
    branch: null,
    is_branching: false,
    order: 10,
    context: "",
    prompt: "",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 11,
    branch: null,
    is_branching: false,
    order: 11,
    context: "",
    prompt: "",
    response_type: RESPONSE_TYPES.CHOICE
  },
  {
    id: 12,
    branch: null,
    is_branching: false,
    order: 12,
    context: "",
    prompt: "",
    response_type: RESPONSE_TYPES.CHOICE
  },
]

export const BRANCHES = []

export const CHOICES = [
  // inquiry 2
  { id: 1, inquiry: 2, label: 'Left side', isCorrect: false, branchId: null },
  { id: 2, inquiry: 2, label: 'Right side', isCorrect: true, branchId: null },
  // inquiry 4
  { id: 3, inquiry: 4, label: "Newton’s Second Law has limitations.", isCorrect: false, branchId: null },
  { id: 4, inquiry: 4, label: `This is a special case, and we should explore more before drawing conclusions.`, isCorrect: true, branchId: null },
  { id: 5, inquiry: 4, label: `The simulation is inaccurate.`, isCorrect: false, branchId: null },
  // inquiry 5
  { id: 6, inquiry: 5, label: `A windmill’s rotating flaps.`, isCorrect: true, branchId: null },
  { id: 7, inquiry: 5, label: `A see saw.`, isCorrect: true, branchId: null },
  { id: 8, inquiry: 5, label: `A door with hinges.`, isCorrect: true, branchId: null },
  { id: 9, inquiry: 5, label: `A projectile`, isCorrect: false, branchId: null },
  // inquiry 6
  { id: 10, inquiry: 6, label: `A pivot point to revolve around`, isCorrect: true, branchId: null },
  { id: 11, inquiry: 6, label: `They can move without restriction`, isCorrect: false, branchId: null },
  { id: 12, inquiry: 6, label: `We don't need force to move them`, isCorrect: false, branchId: null },
  { id: 13, inquiry: 6, label: `Nothing`, isCorrect: false, branchId: null },
  // inquiry 7
  { id: 14, inquiry: 7, label: `Apply force in different points on the flap to see how fast it rotates based on how far the points are from the pivot point.`, isCorrect: false, branchId: null },
  { id: 15, inquiry: 7, label: `Apply varying force on the same place to see how fast/ slow it rotates depending on the magnitude of the force.`, isCorrect: false, branchId: null },
  { id: 16, inquiry: 7, label: `Choice 3`, isCorrect: false, branchId: null },
  { id: 17, inquiry: 7, label: `Choice 4`, isCorrect: true, branchId: null },
  // inquiry #
  { id: 0, inquiry: 0, label: ``, isCorrect: false, branchId: null },
];

export const TEXT_LABELS = [
  // inquiry 1
  { id: 1, inquiry: 1, label: 'Your thoughts on torque' }
]

export const MEDIA = [
  {
    id: 1, inquiry: 1, sims: [
      { src: video11, Label: 'Video 1' },
      { src: video12, Label: 'Video 2' },
    ]
  },
  { // TODO: this is inquiry 3
    id: 2, inquiry: 2, sims: [
      { src: video21, Label: 'Video 1' },
      { src: video22, Label: 'Video 2' },
      { src: video23, Label: 'Video 3' },
    ]
  },
  {
    id: 3, inquiry: 5, sims: [
      { src: video51, Label: 'Video 1', loop: true, autoplay: true, hideControls: true },
      { src: video52, Label: 'Video 2', autoplay: true, hideControls: true },
      { src: video53, Label: 'Video 3', autoplay: true, hideControls: true },
      { src: video54, Label: 'Video 4', autoplay: true, hideControls: true },
    ]
  },
  {
    id: 4, inquiry: 6, sims: [
      { src: video51, Label: 'Video 1', loop: true, autoplay: true, hideControls: true },
      { src: video52, Label: 'Video 2', autoplay: true, hideControls: true },
      { src: video53, Label: 'Video 3', autoplay: true, hideControls: true },
      { src: video54, Label: 'Video 4', autoplay: true, hideControls: true },
    ]
  },
]