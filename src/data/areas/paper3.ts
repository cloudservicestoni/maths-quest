import type { Paper } from '../../types/content';

export const areasPaper3: Paper = {
  id: 'areas-paper-3',
  topicId: 'areas',
  topicTitle: 'Area & Perimeter',
  topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Multi-step problems requiring careful reasoning — show all working.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Outstanding — top 11+ level!' },
    { min: 16, label: '⭐⭐ Excellent work!' },
    { min: 9,  label: '⭐ Good effort — focus on multi-step problems.' },
    { min: 0,  label: 'Keep going — re-read lessons 3 and 4.' },
  ],
  questions: [
    /* Q1 — 4 marks — Compound with unknown notch height */
    {
      n: 1,
      marks: 4,
      prompt: 'An L-shaped room has area 84 m². The full bounding rectangle is 12 m × 9 m. The rectangular notch removed from the top-right corner is 4 m wide.',
      parts: [
        {
          id: '1a', label: 'a) What is the area of the full 12 m × 9 m rectangle?',
          marks: 1, type: 'number', answer: 108,
          answerDisplay: '108 m²  (12 × 9 = 108)',
        },
        {
          id: '1b', label: 'b) What is the area of the removed notch?',
          marks: 1, type: 'number', answer: 24,
          answerDisplay: '24 m²  (108 − 84 = 24)',
        },
        {
          id: '1c', label: 'c) What is the height of the removed notch?',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6 m  (24 ÷ 4 = 6)',
        },
        {
          id: '1d', label: 'd) What is the perimeter of the L-shaped room?',
          marks: 1, type: 'number', answer: 42,
          answerDisplay: '42 m  (12 + 3 + 4 + 6 + 8 + 9 = 42)  right side = 9 − 6 = 3; inner top = 12 − 4 = 8',
        },
      ],
    },

    /* Q2 — 3 marks — Same area: square and rectangle */
    {
      n: 2,
      marks: 3,
      prompt: 'A square and a rectangle have the same area. The square has side length 12 cm. The rectangle is 9 cm wide.',
      parts: [
        {
          id: '2a', label: 'a) What is the area of the square?',
          marks: 1, type: 'number', answer: 144,
          answerDisplay: '144 cm²  (12 × 12 = 144)',
        },
        {
          id: '2b', label: 'b) What is the length of the rectangle?',
          marks: 1, type: 'number', answer: 16,
          answerDisplay: '16 cm  (144 ÷ 9 = 16)',
        },
        {
          id: '2c', label: 'c) What is the perimeter of the rectangle?',
          marks: 1, type: 'number', answer: 50,
          answerDisplay: '50 cm  (2 × (16 + 9) = 2 × 25 = 50)',
        },
      ],
    },

    /* Q3 — 4 marks — Tiling with obstacle */
    {
      n: 3,
      marks: 4,
      prompt: 'A kitchen floor is 6 m long and 4 m wide. A fixed cupboard base of 2 m × 1.5 m cannot be tiled underneath. The remaining floor is to be tiled with square tiles of side 25 cm.',
      parts: [
        {
          id: '3a', label: 'a) What is the total floor area?',
          marks: 1, type: 'number', answer: 24,
          answerDisplay: '24 m²  (6 × 4 = 24)',
        },
        {
          id: '3b', label: 'b) What is the area of the cupboard base?',
          marks: 1, type: 'number', answer: 3,
          answerDisplay: '3 m²  (2 × 1.5 = 3)',
        },
        {
          id: '3c', label: 'c) What is the area to be tiled?',
          marks: 1, type: 'number', answer: 21,
          answerDisplay: '21 m²  (24 − 3 = 21)',
        },
        {
          id: '3d', label: 'd) Each tile is 25 cm × 25 cm = 0.0625 m². How many tiles are needed?',
          marks: 1, type: 'number', answer: 336,
          answerDisplay: '336 tiles  (21 ÷ 0.0625 = 336)',
          hint: '0.25 × 0.25 = 0.0625 m²',
        },
      ],
    },

    /* Q4 — 4 marks — Percentage increase in area from scaling */
    {
      n: 4,
      marks: 4,
      prompt: 'A rectangle is 10 cm long and 6 cm wide.',
      diagram: { type: 'rect', data: { width: 10, height: 6, unit: 'cm' } },
      parts: [
        {
          id: '4a', label: 'a) What is its area?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60 cm²  (10 × 6 = 60)',
        },
        {
          id: '4b', label: 'b) Both the length and width are increased by 50%. What are the new dimensions? (Give the new length)',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15 cm  (10 + 50% of 10 = 10 + 5 = 15; new width = 6 + 3 = 9)',
          hint: '50% increase means multiply by 1.5.',
        },
        {
          id: '4c', label: 'c) What is the new area? (new length = 15 cm, new width = 9 cm)',
          marks: 1, type: 'number', answer: 135,
          answerDisplay: '135 cm²  (15 × 9 = 135)',
        },
        {
          id: '4d', label: 'd) By what percentage has the area increased?',
          marks: 1, type: 'number', answer: 125,
          answerDisplay: '125%  ((135 − 60) ÷ 60 × 100 = 75 ÷ 60 × 100 = 125)',
          hint: 'Percentage increase = (increase ÷ original) × 100.',
        },
      ],
    },

    /* Q5 — 4 marks — Swimming pool with surrounding path */
    {
      n: 5,
      marks: 4,
      prompt: 'A rectangular swimming pool is 10 m long and 6 m wide. It is surrounded by a tiled path of uniform width 2 m on all sides.',
      parts: [
        {
          id: '5a', label: 'a) What are the outer dimensions of the pool plus path? (Give the outer length)',
          marks: 1, type: 'number', answer: 14,
          answerDisplay: '14 m  (10 + 2 + 2 = 14; outer width = 6 + 2 + 2 = 10 m)',
        },
        {
          id: '5b', label: 'b) What is the total area of pool plus path? (outer length = 14 m, outer width = 10 m)',
          marks: 1, type: 'number', answer: 140,
          answerDisplay: '140 m²  (14 × 10 = 140)',
        },
        {
          id: '5c', label: 'c) What is the area of the pool alone?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60 m²  (10 × 6 = 60)',
        },
        {
          id: '5d', label: 'd) What is the area of the tiled path?',
          marks: 1, type: 'number', answer: 80,
          answerDisplay: '80 m²  (140 − 60 = 80)',
        },
      ],
    },

    /* Q6 — 3 marks — Work backwards from perimeter and area */
    {
      n: 6,
      marks: 3,
      prompt: 'A rectangle has perimeter 34 cm and area 70 cm².',
      parts: [
        {
          id: '6a', label: 'a) What is the sum of the length and width?',
          marks: 1, type: 'number', answer: 17,
          answerDisplay: '17 cm  (34 ÷ 2 = 17)',
        },
        {
          id: '6b', label: 'b) Find two whole numbers that add to 17 and multiply to 70. What is the longer side?',
          marks: 2, type: 'number', answer: 10,
          answerDisplay: '10 cm  (10 + 7 = 17; 10 × 7 = 70 ✓)',
          hint: 'Try pairs: 9 and 8 → 72, 10 and 7 → 70 ✓',
        },
      ],
    },

    /* Q7 — 3 marks — Fencing and seeding cost */
    {
      n: 7,
      marks: 3,
      prompt: 'A farmer has a rectangular field 25 m long and 18 m wide.',
      parts: [
        {
          id: '7a', label: 'a) How many metres of fencing are needed to go around the field?',
          marks: 1, type: 'number', answer: 86,
          answerDisplay: '86 m  (2 × (25 + 18) = 2 × 43 = 86)',
        },
        {
          id: '7b', label: 'b) Fencing costs £15 per metre. What is the total fencing cost?',
          marks: 1, type: 'number', answer: 1290,
          answerDisplay: '£1290  (86 × 15 = 1290)',
        },
        {
          id: '7c', label: 'c) Grass seed covers 10 m² per bag and costs £6 per bag. What is the total seed cost for the whole field?',
          marks: 1, type: 'number', answer: 270,
          answerDisplay: '£270  (25 × 18 = 450 m²; 450 ÷ 10 = 45 bags; 45 × 6 = 270)',
          hint: 'First find the field area, then divide by coverage per bag.',
        },
      ],
    },
  ],
};
