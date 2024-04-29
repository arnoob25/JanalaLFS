import video11 from './11.mp4';
import video12 from './12.mp4';
import video13 from './13.mp4';
import video14 from './14.mp4';
import video21 from './21.mp4';
import video22 from './22.mp4';
import video23 from './23.mp4';
import video51 from './51.mp4';
import video52 from './52.mp4';
import video53 from './53.mp4';
import video54 from './54.mp4';
import video71 from './71.mp4';
import video72 from './72.mp4';
import video91 from './91.mp4';
import video111 from './111.mp4';
import video112 from './112.mp4';
import video141 from './141.mp4';
import video142 from './142.mp4';
import { RESPONSE_TYPES } from '@/lfs_tools/guided_learning_activity/student_end/helpers/glaResponseHelpers';
import { MEDIA_SWITCH_METHODS } from '@/lfs_tools/shared_features/media/helpers/mediaRenderHelpers';

export const MEDIA_TYPES = {
  VIDEO: 'video',
  DATA_TABLE: 'data_table',
}

export const INQUIRIES = [
  {
    id: 1,
    branch: null,
    is_branching: true, // maybe we don't need it since we have response type
    order: 1,
    context: "This inquiry originates a branch",
    prompt: "First one is incorrect, 2nd one correct",
    response_type: RESPONSE_TYPES.CHOICE_BRANCH,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
  {
    id: 2,
    branch: 1,
    is_branching: false,
    order: 1,
    context: "First Inquiry",
    prompt: "Branch 1 (Incorrect branch)",
    response_type: RESPONSE_TYPES.CHOICE,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
  {
    id: 3,
    branch: 1,
    is_branching: false,
    order: 2,
    context: "Last Inquiry",
    prompt: "Branch 1 (Incorrect branch)",
    response_type: RESPONSE_TYPES.CHOICE,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
  {
    id: 4,
    branch: 2,
    is_branching: false,
    order: 1,
    context: "First Inquiry",
    prompt: "Branch 2 (Correct branch)",
    response_type: RESPONSE_TYPES.CHOICE_AMBIGIOUS,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
  {
    id: 5,
    branch: 2,
    is_branching: false,
    order: 2,
    context: "Last Inquiry",
    prompt: "Branch 2 (Correct branch)",
    response_type: RESPONSE_TYPES.CHOICE,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
  {
    id: 6,
    branch: null,
    is_branching: false,
    order: 2,
    context: "Lets simulate the motion of the object to validate our predictions. We'll apply the same amount of force on the object. And repeat it 3 times. In each new attempt, we'll apply the force farther away from the center.",
    prompt: "Did you notice that the wheel rotates in the last 2 attempts!",
    response_type: RESPONSE_TYPES.CHOICE,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB,

  },
  {
    id: 7,
    branch: null,
    is_branching: false,
    order: 0,
    context: `Newton's second law describes acceleration due to force. The stronger the force is, the faster an object will accelerate (F=ma). Perhaps it can explain the rotation. So, lets try to simulate the wheel's motion using F=ma.`,
    prompt: "Notice that the simulation is inaccurate. But why?",
    response_type: RESPONSE_TYPES.TEXT,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
  {
    id: 8,
    branch: null,
    is_branching: false,
    order: 4,
    context: "Apparantly, F=ma doesn't have any quantities that address rotation. How about we investigate some cases involving rotation? Perhaps this could help us find ways to explain rotation due to force.",
    prompt: "Select relevant examples to study.",
    response_type: RESPONSE_TYPES.CHOICE_AMBIGIOUS,
    media_type: MEDIA_TYPES.VIDEO,
    media_switch_method: MEDIA_SWITCH_METHODS.TAB
  },
]

export const BRANCHES = [
  {id: 1, choice: 1, isCorrect: false},
  {id: 2, choice: 2, isCorrect: true},
]

export const CHOICES = [
  // inquiry 1
  { id: 1, inquiry: 1, label: "The program contains bugs", isCorrect: false, branchId: null },
  { id: 2, inquiry: 1, label: `F=ma doesn't address rotation`, isCorrect: true, branchId: null },
  // inquiry 2
  { id: 19, inquiry: 2, label: "The program contains bugs", isCorrect: false, branchId: null },
  { id: 29, inquiry: 2, label: `F=ma doesn't address rotation`, isCorrect: true, branchId: null },
  // inquiry 3
  { id: 1, inquiry: 3, label: "The program contains bugs", isCorrect: false, branchId: null },
  { id: 2, inquiry: 3, label: `F=ma doesn't address rotation`, isCorrect: true, branchId: null },
  // inquiry 4
  { id: 3, inquiry: 4, label: `A windmill’s rotating blades.`, isCorrect: true, branchId: null },
  { id: 4, inquiry: 4, label: `A projectile`, isCorrect: false, branchId: null },
  { id: 5, inquiry: 4, label: `A see saw.`, isCorrect: true, branchId: null },
  { id: 6, inquiry: 4, label: `A door with hinges.`, isCorrect: true, branchId: null },
  // inquiry 5
  { id: 7, inquiry: 5, label: `Their trajectories create a complete circle`, isCorrect: false, branchId: null },
  { id: 8, inquiry: 5, label: `They require no driving force to sustain rotation`, isCorrect: false, branchId: null },
  { id: 9, inquiry: 5, label: `No condition is shared by all examples`, isCorrect: false, branchId: null },
  { id: 10, inquiry: 5, label: `They all rotate about a fixed pivot point`, isCorrect: true, branchId: null },
  // inquiry 6
  { id: 11, inquiry: 6, label: `Counting the number of rotations in a controlled experiment. Blade facing the wind from varying angles, keeping every other factor constant across iterations.`, isCorrect: false, branchId: null },
  { id: 12, inquiry: 6, label: `Observing the number of rotations for varying windspeeds. Targetting the same area of the blade.`, isCorrect: false, branchId: null },
  { id: 13, inquiry: 6, label: `Counting the number of rotations for varying windspeeds. Targetting different areas on the blade based on their distance from the central shaft.`, isCorrect: false, branchId: null },
  { id: 14, inquiry: 6, label: `Counting the number of rotations in a controlled experiment. Targetting different areas on the blade based on their distance from the central shaft.`, isCorrect: true, branchId: null },
  // inquiry 7
  { id: 15, inquiry: 7, label: `Applying force away from the pivot/ axis decreases the amount of rotation.`, isCorrect: false, branchId: null },
  { id: 16, inquiry: 7, label: `Applying force away from the pivot/ axis increases the amount of rotation.`, isCorrect: true, branchId: null },
  // inquiry 8
  { id: 17, inquiry: 8, label: `Counting the number of rotations in a controlled experiment. Blade facing the wind from varying angles, keeping every other factor constant across iterations.`, isCorrect: false, branchId: null },
  { id: 18, inquiry: 8, label: `Observing the number of rotations for varying windspeeds. Targetting the same area of the blade.`, isCorrect: true, branchId: null },
  { id: 19, inquiry: 8, label: `Counting the number of rotations for varying windspeeds. Targetting different areas on the blade based on their distance from the central shaft.`, isCorrect: false, branchId: null },
  // inquiry 9
  { id: 20, inquiry: 9, label: `Increasing force decreases the amount of rotation.`, isCorrect: false, branchId: null },
  { id: 21, inquiry: 9, label: `Decreasing force decreases the amount of rotation.`, isCorrect: true, branchId: null },
  // inquiry 10
  { id: 22, inquiry: 10, label: `Observing the number of rotations in a controlled experiment. Blade facing the wind from varying angles, keeping every other factor constant across iterations.`, isCorrect: true, branchId: null },
  { id: 23, inquiry: 10, label: `Counting the number of rotations for varying windspeeds. Targetting different areas on the blade based on their distance from the central shaft.`, isCorrect: false, branchId: null },
  // inquiry 11
  { id: 23, inquiry: 11, label: `Blades rotate fastest when the angle is between 0 and 90 degrees.`, isCorrect: false, branchId: null },
  { id: 24, inquiry: 11, label: `Blades rotate fastest when the angle is 90 degrees`, isCorrect: true, branchId: null },
  { id: 25, inquiry: 11, label: `Blades rotate fastest when the angle is 0 degrees`, isCorrect: false, branchId: null },
  // inquiry 12
  { id: 26, inquiry: 12, label: `Torque can be considered as the tendency of a force to cause an object to rotate about an axis.`, isCorrect: true, branchId: null },
  { id: 27, inquiry: 12, label: `Torque is maximized when the force acts parallel to the object's surface.`, isCorrect: false, branchId: null },
  { id: 28, inquiry: 12, label: `Torque increases with the magnitude of the applied force.`, isCorrect: true, branchId: null },
  { id: 29, inquiry: 12, label: `Torque increases as the force is applied closer to the pivot/axis.`, isCorrect: false, branchId: null },
  { id: 30, inquiry: 12, label: `Torque is a vector quantity that determines both the speed and direction of an object's rotation.`, isCorrect: true, branchId: null },
  { id: 31, inquiry: 12, label: `Torque can be applied even in the absence of a fixed axis or pivot.`, isCorrect: false, branchId: null },
  // inquiry 13
  { id: 31, inquiry: 13, label: `τ⃗ = k ( r⃗ × F⃗ ), where k is the scalar constant`, isCorrect: true, branchId: null },
  { id: 32, inquiry: 13, label: `τ⃗ = k ( r⃗ + F⃗ ), where k is the scalar constant`, isCorrect: false, branchId: null },
  { id: 33, inquiry: 13, label: `τ⃗ ∝ r⃗ × F⃗`, isCorrect: false, branchId: null },
  { id: 34, inquiry: 13, label: `τ⃗ ∝ r⃗ + F⃗`, isCorrect: false, branchId: null },
];

export const TEXT_LABELS = [
  // inquiry 1
  { id: 1, inquiry: 7, label: 'Motion of the object when applying force towards the center vs away from the center' },
  //inquiry 2
  { id: 2, inquiry: 2, label: 'Why do you think the wheel is rotating?' },
]

export const MEDIA = [
  {
    id: 1, inquiry: 1, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video11, label: 'Towards the center', hideControls: true },
      { src: video12, label: '', hideControls: true },
    ], data: []
  },
  {
    id: 3, inquiry: 2, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video21, label: 'Attempt 1', controls: { play: true, reset: true } },
      { src: video22, label: 'Attempt 2', controls: { play: true, reset: true } },
      { src: video23, label: 'Attempt 3', controls: { play: true, reset: true } },
    ], data: []
  },
  {
    id: 2, inquiry: 3, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video14, label: 'Using F=ma to simulate rotation', controls: { play: true, reset: true } },
    ], data: []
  },
  {
    id: 4, inquiry: 4, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video51, label: 'Windmil', loop: true, autoplay: true, hideControls: true },
      { src: video52, label: 'See Saw', autoplay: true, hideControls: true },
      { src: video53, label: 'Door', autoplay: true, loop: true, hideControls: true },
      { src: video54, label: 'Projectile', autoplay: true, hideControls: true },
    ], data: []
  },
  {
    id: 5, inquiry: 5, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video51, label: 'Windmil', loop: true, autoplay: true, hideControls: true },
      { src: video52, label: 'See Saw', autoplay: true, controls: { play: true } },
      { src: video53, label: 'Door', loop: true, autoplay: true, hideControls: true },
    ], data: []
  },
  {
    id: 6, inquiry: 6, type: MEDIA_TYPES.VIDEO, sims: [], data: [
      {
        id: "1", label: 'Common circumstances involving force',
        columns: [
          { accessorKey: 'scenario', header: 'Scenario' },
          { accessorKey: 'effect', header: 'Effect on Fixed Axis Rotation' }
        ],
        data: [
          {
            id: 1,
            scenario: 'Same force¹ on different points',
            effect: 'Unknown  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ',
          },
          {
            id: 2,
            scenario: 'Varying force on the same point²',
            effect: 'Unknown',
          },
          {
            id: 3,
            scenario: 'Same force on the same point, but from different angles',
            effect: 'Unknown',
          },
        ]
      },
    ]
  },
  {
    id: 7, inquiry: 7, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video71, label: 'Near the shaft (Rotations: 10)', loop: true, autoplay: true, hideControls: true },
      { src: video72, label: 'Away from the shaft (Rotations: 60)', loop: true, autoplay: true, hideControls: true },
    ], data: []
  },
  {
    id: 8, inquiry: 8, type: MEDIA_TYPES.VIDEO, sims: [], data: [
      {
        id: "1", label: 'Effects of force on Fixed Axis Rotation',
        columns: [
          { accessorKey: 'scenario', header: 'Scenario' },
          { accessorKey: 'effect', header: 'Effect on Fixed Axis Rotation' }
        ],
        data: [
          {
            id: 1,
            scenario: 'Same force¹ on different points',
            effect: 'Rotates faster as with force is applied farther away from the pivot/ axis'
          },
          {
            id: 2,
            scenario: 'Varying force on the same point²',
            effect: 'Unknown',
          },
          {
            id: 3,
            scenario: 'Same force on same point, but different angles',
            effect: 'Unknown',
          },
        ]
      },
    ]
  },
  {
    id: 9, inquiry: 9, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video91, label: 'Rotation due to force', loop: true },
    ], data: []
  },
  {
    id: 10, inquiry: 10, type: MEDIA_TYPES.VIDEO, sims: [], data: [
      {
        id: "1", label: 'Effects of force on Fixed Axis Rotation',
        columns: [
          { accessorKey: 'scenario', header: 'Scenario' },
          { accessorKey: 'effect', header: 'Effect on Fixed Axis Rotation' }
        ],
        data: [
          {
            id: 1,
            scenario: 'Same force¹ on different points',
            effect: 'Rotates faster as with force is applied farther away from the pivot/ axis'
          },
          {
            id: 2,
            scenario: 'Varying force on the same point²',
            effect: 'Rotates faster as the force increases',
          },
          {
            id: 3,
            scenario: 'Same force on same point, but different angles',
            effect: 'Unknown',
          },
        ]
      },
    ]
  },
  {
    id: 11, inquiry: 11, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video111, label: 'Perpendicular to the blade', loop: true, autoplay: true, hideControls: true },
      { src: video112, label: 'Inclined towards the blade', loop: true, autoplay: true, hideControls: true },
    ], data: []
  },
  {
    id: 12, inquiry: 12, type: MEDIA_TYPES.VIDEO, sims: [], data: [
      {
        id: "1", label: 'Effects of force on Fixed Axis Rotation',
        columns: [
          { accessorKey: 'scenario', header: 'Scenario' },
          { accessorKey: 'effect', header: 'Effects' }
        ],
        data: [
          {
            id: 1,
            scenario: 'Same force¹ on different points',
            effect: 'Rotates faster as with force is applied farther away from the pivot/ axis'
          },
          {
            id: 2,
            scenario: 'Varying force on the same point²',
            effect: 'Rotates faster as the force increases',
          },
          {
            id: 3,
            scenario: 'Same force on same point, but different angles',
            effect: 'Rotates fastest when the force acts perpendicular to the object',
          },
        ]
      },
    ]
  },
  {
    id: 13, inquiry: 13, type: MEDIA_TYPES.VIDEO, sims: [], data: [
      {
        id: "1", label: 'Mathematically expressing the factors involved with Torque (τ - tau)',
        columns: [
          { accessorKey: 'factor', header: 'Factor' },
          { accessorKey: 'expression', header: 'Mathematical Expression' }
        ],
        data: [
          {
            id: 1,
            factor: 'Torque is a vector',
            expression: "If A⃗ and B⃗ are the vectors involved in Fixed Axis Rotation,\nTorque should be either:\n\nτ⃗ = A⃗ × B⃗ (cross product)\n\nor\n\nτ⃗ = A⃗ + B⃗ (vector sum)",
          },
          {
            id: 2,
            factor: 'Torque increases with the magnitude of the applied force.',
            expression: '( τ⃗ ∝ F⃗ ), where F is the force acting on the object'
          },
          {
            id: 3,
            factor: 'Torque increases as the force is applied farther from the pivot/axis.',
            expression: '( τ⃗ ∝ r⃗ ), where r is the distance from the pivot/ axis to the point where the force acts',
          },
          {
            id: 4,
            factor: `Torque is maximized when the force acts parallel to the object's surface.`,
            expression: 'The angle θ between the force vector and the object is a right angle, where θ = 90°.',
          },
        ]
      },
    ]
  },
  {
    id: 14, inquiry: 14, type: MEDIA_TYPES.VIDEO, sims: [
      { src: video141, label: 'Varying force', autoplay: true, hideControls: true },
      { src: video142, label: 'Varying distance from the axis', autoplay: true, hideControls: true },
    ], data: []
  },
]

export const VIDEO = [
  { id: 1, inquiry: 3, order: 1, type: MEDIA_TYPES.VIDEO, label: 'Towards the center', src: video11, conf: { hideControls: true } },
  { id: 2, inquiry: 3, order: 2, type: MEDIA_TYPES.VIDEO, label: 'Away from the center', src: video12, conf: { hideControls: true } },
  { id: 3, inquiry: 4, order: 1, src: video21, label: 'Attempt 1', conf: { controls: { play: true, reset: true } }, type: MEDIA_TYPES.VIDEO },
  { id: 4, inquiry: 4, order: 2, src: video22, label: 'Attempt 2', conf: { controls: { play: true, speed: true }, sliderControls: { defaultValue: 50, step: 20 } }, type: MEDIA_TYPES.VIDEO },
  { id: 5, inquiry: 4, order: 3, src: video23, label: 'Attempt 3', conf: { buttonLabels: { play: 'Simulate', speed: 'Slider' } }, type: MEDIA_TYPES.VIDEO },
]

export const SIMULATION = [

]

export const DATA_TABLE = [

]