import type { Paper } from '../../types/content';

export const shapesPaper3: Paper = {
  id: 'shapes-paper-3',
  topicId: 'shapes',
  topicTitle: 'Properties of Shapes',
  topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Multi-step reasoning required — show all working.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Outstanding — top 11+ level!' },
    { min: 16, label: '⭐⭐ Excellent work!' },
    { min: 9,  label: '⭐ Good effort — focus on angle algebra and Euler reasoning.' },
    { min: 0,  label: 'Keep going — re-read lessons 3 and 4.' },
  ],
  questions: [
    /* Q1 — 4 marks — Solve for x in hexagon angles */
    {
      n: 1,
      marks: 4,
      prompt: 'A hexagon has interior angles 2x°, 3x°, 4x°, 100°, 120°, and 140°.',
      parts: [
        {
          id: '1a', label: 'a) What is the sum of interior angles of a hexagon?',
          marks: 1, type: 'number', answer: 720,
          answerDisplay: '720°  ((6 − 2) × 180 = 720)',
        },
        {
          id: '1b', label: 'b) Form the equation: 9x + 360 = 720. Solve for x.',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: 'x = 40  (9x = 720 − 360 = 360; x = 40)',
        },
        {
          id: '1c', label: 'c) What is the largest of the three x-based angles (4x)?',
          marks: 1, type: 'number', answer: 160,
          answerDisplay: '160°  (4 × 40 = 160)',
        },
        {
          id: '1d', label: 'd) Is this hexagon regular or irregular?',
          marks: 1, type: 'text',
          accept: ['irregular', 'Irregular'],
          answerDisplay: 'Irregular — the angles are not all equal (a regular hexagon has all angles 120°).',
        },
      ],
    },

    /* Q2 — 4 marks — Deduce 3D shapes using Euler's formula */
    {
      n: 2,
      marks: 4,
      prompt: 'Use Euler\'s formula (F + V − E = 2) to identify these 3D shapes.',
      parts: [
        {
          id: '2a', label: 'a) A polyhedron has 12 edges and 8 vertices. How many faces does it have?',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6  (F = 2 + E − V = 2 + 12 − 8 = 6)',
        },
        {
          id: '2b', label: 'b) All 6 faces are rectangles. Name this polyhedron.',
          marks: 1, type: 'text',
          accept: ['cuboid', 'Cuboid'],
          answerDisplay: 'Cuboid.',
        },
        {
          id: '2c', label: 'c) A second polyhedron has 9 edges and 6 vertices. How many faces does it have?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (F = 2 + 9 − 6 = 5)',
        },
        {
          id: '2d', label: 'd) It has 2 triangular faces and 3 rectangular faces. Name it.',
          marks: 1, type: 'text',
          accept: ['triangular prism', 'Triangular prism'],
          answerDisplay: 'Triangular prism.',
        },
      ],
    },

    /* Q3 — 3 marks — Pentagonal prism (F, E, V) */
    {
      n: 3,
      marks: 3,
      prompt: 'A pentagonal prism has two pentagonal ends and five rectangular sides.',
      parts: [
        {
          id: '3a', label: 'a) How many faces does it have?',
          marks: 1, type: 'number', answer: 7,
          answerDisplay: '7  (2 pentagons + 5 rectangles)',
        },
        {
          id: '3b', label: 'b) How many edges does it have?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15  (5 on each pentagon + 5 joining them = 15)',
        },
        {
          id: '3c', label: 'c) How many vertices does it have?',
          marks: 1, type: 'number', answer: 10,
          answerDisplay: '10  (5 on each pentagonal end)  Check: F + V − E = 7 + 10 − 15 = 2 ✓',
        },
      ],
    },

    /* Q4 — 4 marks — Ratio angles in quadrilateral */
    {
      n: 4,
      marks: 4,
      prompt: 'A quadrilateral has interior angles in the ratio 2 : 3 : 4 : 6.',
      parts: [
        {
          id: '4a', label: 'a) What is the total number of ratio parts?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15  (2 + 3 + 4 + 6 = 15)',
        },
        {
          id: '4b', label: 'b) What is the value of one ratio part?',
          marks: 1, type: 'number', answer: 24,
          answerDisplay: '24°  (360 ÷ 15 = 24)',
          hint: 'Interior angles of a quadrilateral sum to 360°.',
        },
        {
          id: '4c', label: 'c) What is the largest angle?',
          marks: 1, type: 'number', answer: 144,
          answerDisplay: '144°  (6 × 24 = 144)',
        },
        {
          id: '4d', label: 'd) What is the smallest angle?',
          marks: 1, type: 'number', answer: 48,
          answerDisplay: '48°  (2 × 24 = 48)',
        },
      ],
    },

    /* Q5 — 4 marks — Identify shape from multiple clues */
    {
      n: 5,
      marks: 4,
      prompt: 'A quadrilateral has these properties: 4 equal sides, no right angles, 2 lines of symmetry, order of rotational symmetry 2.',
      parts: [
        {
          id: '5a', label: 'a) Name the shape.',
          marks: 1, type: 'text',
          accept: ['rhombus', 'Rhombus'],
          answerDisplay: 'Rhombus.',
        },
        {
          id: '5b', label: 'b) One angle of this rhombus is 70°. What is the opposite angle?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70°  (opposite angles in a rhombus are equal)',
        },
        {
          id: '5c', label: 'c) What is one of the other two angles?',
          marks: 1, type: 'number', answer: 110,
          answerDisplay: '110°  (360 − 70 − 70 = 220; 220 ÷ 2 = 110)',
          hint: 'All four angles must sum to 360°.',
        },
        {
          id: '5d', label: 'd) What is the sum of the exterior angles of this rhombus?',
          marks: 1, type: 'number', answer: 360,
          answerDisplay: '360°  (the sum of exterior angles of ANY polygon is always 360°)',
        },
      ],
    },

    /* Q6 — 3 marks — Find polygon from interior angle */
    {
      n: 6,
      marks: 3,
      prompt: 'Each interior angle of a regular polygon is 140°.',
      parts: [
        {
          id: '6a', label: 'a) What is each exterior angle?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40°  (180 − 140 = 40)',
        },
        {
          id: '6b', label: 'b) How many sides does the polygon have?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '9 sides  (360 ÷ 40 = 9)',
        },
        {
          id: '6c', label: 'c) What is the sum of its interior angles?',
          marks: 1, type: 'number', answer: 1260,
          answerDisplay: '1260°  ((9 − 2) × 180 = 7 × 180 = 1260)',
        },
      ],
    },

    /* Q7 — 3 marks — Net surface area of square-based pyramid */
    {
      n: 7,
      marks: 3,
      prompt: 'A square-based pyramid has a square base of side 5 cm. Each triangular face has base 5 cm and slant height 7 cm.',
      parts: [
        {
          id: '7a', label: 'a) What is the area of the square base?',
          marks: 1, type: 'number', answer: 25,
          answerDisplay: '25 cm²  (5 × 5 = 25)',
        },
        {
          id: '7b', label: 'b) What is the area of one triangular face?',
          marks: 1, type: 'number', answer: 17.5,
          answerDisplay: '17.5 cm²  (½ × 5 × 7 = 17.5)',
        },
        {
          id: '7c', label: 'c) What is the total surface area of the pyramid?',
          marks: 1, type: 'number', answer: 95,
          answerDisplay: '95 cm²  (25 + 4 × 17.5 = 25 + 70 = 95)',
        },
      ],
    },
  ],
};
