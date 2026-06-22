import type { Paper } from '../../types/content';

export const shapesPaper2: Paper = {
  id: 'shapes-paper-2',
  topicId: 'shapes',
  topicTitle: 'Properties of Shapes',
  topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro: 'Time allowed: 20 minutes. Total marks: 25. Questions involve applying shape properties and reasoning from clues.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Star performance!' },
    { min: 16, label: '⭐⭐ Well done!' },
    { min: 9,  label: '⭐ Good effort — focus on Euler\'s formula and polygon angles.' },
    { min: 0,  label: 'Keep going — work through the lessons again.' },
  ],
  questions: [
    /* Q1 — 4 marks — Quadrilateral properties */
    {
      n: 1,
      marks: 4,
      prompt: 'Answer these questions about quadrilaterals.',
      parts: [
        {
          id: '1a', label: 'a) Which quadrilateral has 4 equal sides but no right angles?',
          marks: 1, type: 'text',
          accept: ['rhombus', 'Rhombus'],
          answerDisplay: 'Rhombus — 4 equal sides, opposite angles equal, no right angles.',
        },
        {
          id: '1b', label: 'b) How many lines of symmetry does a rhombus have?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (both diagonals are lines of symmetry)',
        },
        {
          id: '1c', label: 'c) What is the order of rotational symmetry of a rhombus?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (looks the same after 180° and 360°)',
        },
        {
          id: '1d', label: 'd) How many lines of symmetry does a kite have?',
          marks: 1, type: 'number', answer: 1,
          answerDisplay: '1  (the line through the two "pointed" vertices)',
        },
      ],
    },

    /* Q2 — 3 marks — Angle ratio in triangle */
    {
      n: 2,
      marks: 3,
      prompt: 'A triangle has interior angles in the ratio 1 : 2 : 3.',
      parts: [
        {
          id: '2a', label: 'a) What do the ratio parts add up to?',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6  (1 + 2 + 3 = 6)',
        },
        {
          id: '2b', label: 'b) What is the smallest angle?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30°  (180 ÷ 6 × 1 = 30)',
        },
        {
          id: '2c', label: 'c) What is the largest angle?',
          marks: 1, type: 'number', answer: 90,
          answerDisplay: '90°  (180 ÷ 6 × 3 = 90) — this is a right-angled triangle.',
        },
      ],
    },

    /* Q3 — 4 marks — Polygon angles and exterior angles */
    {
      n: 3,
      marks: 4,
      prompt: 'Answer these questions about polygon angles.',
      parts: [
        {
          id: '3a', label: 'a) What is the sum of interior angles of a hexagon?',
          marks: 1, type: 'number', answer: 720,
          answerDisplay: '720°  ((6 − 2) × 180 = 720)',
        },
        {
          id: '3b', label: 'b) What is each interior angle of a regular hexagon?',
          marks: 1, type: 'number', answer: 120,
          answerDisplay: '120°  (720 ÷ 6 = 120)',
        },
        {
          id: '3c', label: 'c) A pentagon has angles 100°, 120°, 105°, 95°. What is the fifth angle?',
          marks: 1, type: 'number', answer: 120,
          answerDisplay: '120°  (540 − 100 − 120 − 105 − 95 = 120)',
        },
        {
          id: '3d', label: 'd) The exterior angle of a regular polygon is 45°. How many sides does it have?',
          marks: 1, type: 'number', answer: 8,
          answerDisplay: '8 sides  (360 ÷ 45 = 8) — a regular octagon.',
        },
      ],
    },

    /* Q4 — 4 marks — Euler's formula to deduce shapes */
    {
      n: 4,
      marks: 4,
      prompt: 'Use Euler\'s formula (F + V − E = 2) to answer these questions.',
      parts: [
        {
          id: '4a', label: 'a) A polyhedron has F = 5 and E = 9. Find V.',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6  (V = 2 + E − F = 2 + 9 − 5 = 6)',
        },
        {
          id: '4b', label: 'b) Name this shape (it has 2 triangular faces and 3 rectangular faces).',
          marks: 1, type: 'text',
          accept: ['triangular prism', 'Triangular prism'],
          answerDisplay: 'Triangular prism.',
        },
        {
          id: '4c', label: 'c) A polyhedron has F = 4 and E = 6. Find V.',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4  (V = 2 + 6 − 4 = 4)',
        },
        {
          id: '4d', label: 'd) Name this shape (all 4 faces are triangles).',
          marks: 1, type: 'text',
          accept: ['tetrahedron', 'Tetrahedron', 'triangular pyramid', 'Triangular pyramid', 'triangular-based pyramid', 'Triangular-based pyramid'],
          answerDisplay: 'Tetrahedron (triangular pyramid) — 4 triangular faces, 6 edges, 4 vertices.',
        },
      ],
    },

    /* Q5 — 3 marks — Nets */
    {
      n: 5,
      marks: 3,
      prompt: 'Answer these questions about nets of 3D shapes.',
      parts: [
        {
          id: '5a', label: 'a) A net has 1 square and 4 identical triangles. What 3D shape does it make?',
          marks: 1, type: 'text',
          accept: ['square-based pyramid', 'Square-based pyramid', 'square based pyramid', 'Square based pyramid'],
          answerDisplay: 'Square-based pyramid.',
        },
        {
          id: '5b', label: 'b) A net has 2 identical circles and 1 rectangle (which rolls into a tube). What shape does it make?',
          marks: 1, type: 'text',
          accept: ['cylinder', 'Cylinder'],
          answerDisplay: 'Cylinder.',
        },
        {
          id: '5c', label: 'c) A cube\'s net must contain exactly how many squares?',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6  (a cube has 6 faces, so its net has 6 squares)',
        },
      ],
    },

    /* Q6 — 3 marks — Regular pentagon: all three properties */
    {
      n: 6,
      marks: 3,
      prompt: 'A regular pentagon.',
      parts: [
        {
          id: '6a', label: 'a) What is the order of rotational symmetry?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (looks identical after rotating 72°, 144°, 216°, 288°, 360°)',
        },
        {
          id: '6b', label: 'b) What is the exterior angle?',
          marks: 1, type: 'number', answer: 72,
          answerDisplay: '72°  (360 ÷ 5 = 72)',
        },
        {
          id: '6c', label: 'c) What is the interior angle?',
          marks: 1, type: 'number', answer: 108,
          answerDisplay: '108°  (180 − 72 = 108)',
        },
      ],
    },

    /* Q7 — 4 marks — Harder mixed */
    {
      n: 7,
      marks: 4,
      prompt: 'Answer these more challenging shape questions.',
      parts: [
        {
          id: '7a', label: 'a) Each interior angle of a regular polygon is 150°. How many sides does it have?',
          marks: 1, type: 'number', answer: 12,
          answerDisplay: '12 sides  (exterior = 180 − 150 = 30°; 360 ÷ 30 = 12)',
          hint: 'Find the exterior angle first.',
        },
        {
          id: '7b', label: 'b) What is the sum of interior angles of a decagon (10 sides)?',
          marks: 1, type: 'number', answer: 1440,
          answerDisplay: '1440°  ((10 − 2) × 180 = 8 × 180 = 1440)',
        },
        {
          id: '7c', label: 'c) An isosceles triangle has a vertex (top) angle of 40°. What is each base angle?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70°  ((180 − 40) ÷ 2 = 140 ÷ 2 = 70)',
          hint: 'The two base angles are equal.',
        },
        {
          id: '7d', label: 'd) A shape has 8 lines of symmetry and order of rotational symmetry 8. Name it.',
          marks: 1, type: 'text',
          accept: ['regular octagon', 'Regular octagon', 'octagon', 'Octagon'],
          answerDisplay: 'Regular octagon.',
        },
      ],
    },
  ],
};
