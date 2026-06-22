import type { Paper } from '../../types/content';

export const shapesPaper1: Paper = {
  id: 'shapes-paper-1',
  topicId: 'shapes',
  topicTitle: 'Properties of Shapes',
  topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro: 'Time allowed: 20 minutes. Total marks: 25. Answer all questions.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Star performance!' },
    { min: 16, label: '⭐⭐ Well done!' },
    { min: 9,  label: '⭐ Good effort — review the shape property tables.' },
    { min: 0,  label: 'Keep going — work through the lessons again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Naming 2D shapes from properties */
    {
      n: 1,
      marks: 3,
      prompt: 'Name each 2D shape from its description.',
      parts: [
        {
          id: '1a', label: 'a) A quadrilateral with 4 equal sides and 4 right angles.',
          marks: 1, type: 'text',
          accept: ['square', 'Square'],
          answerDisplay: 'Square — 4 equal sides, 4 right angles.',
        },
        {
          id: '1b', label: 'b) A triangle with exactly 2 equal sides.',
          marks: 1, type: 'text',
          accept: ['isosceles triangle', 'Isosceles triangle', 'isosceles', 'Isosceles'],
          answerDisplay: 'Isosceles triangle — exactly 2 equal sides and 2 equal base angles.',
        },
        {
          id: '1c', label: 'c) A regular polygon with 6 sides.',
          marks: 1, type: 'text',
          accept: ['hexagon', 'Hexagon', 'regular hexagon', 'Regular hexagon'],
          answerDisplay: 'Hexagon (regular hexagon).',
        },
      ],
    },

    /* Q2 — 3 marks — Triangle angles */
    {
      n: 2,
      marks: 3,
      prompt: 'A triangle has angles 35° and 75°.',
      diagram: { type: 'triangleAngles', data: { a: '?', b: '35°', c: '75°' } },
      parts: [
        {
          id: '2a', label: 'a) What is the sum of angles in any triangle?',
          marks: 1, type: 'number', answer: 180,
          answerDisplay: '180°',
        },
        {
          id: '2b', label: 'b) What is the third angle?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70°  (180 − 35 − 75 = 70)',
        },
        {
          id: '2c', label: 'c) All three angles are different. What type of triangle is it?',
          marks: 1, type: 'text',
          accept: ['scalene', 'Scalene', 'scalene triangle', 'Scalene triangle'],
          answerDisplay: 'Scalene triangle — all three sides and angles are different.',
        },
      ],
    },

    /* Q3 — 4 marks — Interior angles */
    {
      n: 3,
      marks: 4,
      prompt: 'Answer these questions about interior angles of polygons.',
      parts: [
        {
          id: '3a', label: 'a) What is the sum of interior angles of a pentagon?',
          marks: 1, type: 'number', answer: 540,
          answerDisplay: '540°  ((5 − 2) × 180 = 3 × 180 = 540)',
        },
        {
          id: '3b', label: 'b) What is each interior angle of a regular pentagon?',
          marks: 1, type: 'number', answer: 108,
          answerDisplay: '108°  (540 ÷ 5 = 108)',
        },
        {
          id: '3c', label: 'c) A quadrilateral has angles 90°, 115°, and 85°. What is the fourth angle?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70°  (360 − 90 − 115 − 85 = 70)',
        },
        {
          id: '3d', label: 'd) A hexagon has five angles of 115° each. What is the sixth angle?',
          marks: 1, type: 'number', answer: 145,
          answerDisplay: '145°  (720 − 5 × 115 = 720 − 575 = 145)',
          hint: 'Angle sum of hexagon = (6 − 2) × 180 = 720°.',
        },
      ],
    },

    /* Q4 — 4 marks — Triangular prism (F, E, V, Euler) */
    {
      n: 4,
      marks: 4,
      prompt: 'A triangular prism has two triangular ends and three rectangular sides.',
      parts: [
        {
          id: '4a', label: 'a) How many faces does it have?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (2 triangular + 3 rectangular)',
        },
        {
          id: '4b', label: 'b) How many edges does it have?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '9  (3 on front triangle + 3 on back triangle + 3 along the length)',
        },
        {
          id: '4c', label: 'c) How many vertices does it have?',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6  (3 on each triangular end)',
        },
        {
          id: '4d', label: 'd) Apply Euler\'s formula: F + V − E = ?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (5 + 6 − 9 = 2 ✓)',
        },
      ],
    },

    /* Q5 — 3 marks — Lines of symmetry */
    {
      n: 5,
      marks: 3,
      prompt: 'State the number of lines of symmetry for each shape.',
      parts: [
        {
          id: '5a', label: 'a) Regular hexagon.',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6  (a regular n-gon has n lines of symmetry)',
        },
        {
          id: '5b', label: 'b) Rectangle (that is not a square).',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (one horizontal, one vertical through the midpoints)',
        },
        {
          id: '5c', label: 'c) Parallelogram (that is not a rectangle or rhombus).',
          marks: 1, type: 'number', answer: 0,
          answerDisplay: '0  (a plain parallelogram has no lines of symmetry)',
        },
      ],
    },

    /* Q6 — 4 marks — Square-based pyramid */
    {
      n: 6,
      marks: 4,
      prompt: 'A square-based pyramid has a square base and four triangular faces.',
      parts: [
        {
          id: '6a', label: 'a) How many faces does it have?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (1 square + 4 triangles)',
        },
        {
          id: '6b', label: 'b) How many edges does it have?',
          marks: 1, type: 'number', answer: 8,
          answerDisplay: '8  (4 base edges + 4 slant edges to the apex)',
        },
        {
          id: '6c', label: 'c) How many vertices does it have?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (4 base corners + 1 apex)',
        },
        {
          id: '6d', label: 'd) Verify Euler\'s formula: F + V − E = ?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (5 + 5 − 8 = 2 ✓)',
        },
      ],
    },

    /* Q7 — 4 marks — Mixed properties */
    {
      n: 7,
      marks: 4,
      prompt: 'Answer these mixed shape questions.',
      parts: [
        {
          id: '7a', label: 'a) What is the order of rotational symmetry of a square?',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4  (looks the same after 90°, 180°, 270°, 360°)',
        },
        {
          id: '7b', label: 'b) A polyhedron has 6 identical square faces, 12 edges, and 8 vertices. Name it.',
          marks: 1, type: 'text',
          accept: ['cube', 'Cube'],
          answerDisplay: 'Cube — 6 square faces, 12 edges, 8 vertices.',
        },
        {
          id: '7c', label: 'c) What is the sum of interior angles of an octagon?',
          marks: 1, type: 'number', answer: 1080,
          answerDisplay: '1080°  ((8 − 2) × 180 = 6 × 180 = 1080)',
        },
        {
          id: '7d', label: 'd) How many lines of symmetry does an equilateral triangle have?',
          marks: 1, type: 'number', answer: 3,
          answerDisplay: '3  (one from each vertex to the midpoint of the opposite side)',
        },
      ],
    },
  ],
};
