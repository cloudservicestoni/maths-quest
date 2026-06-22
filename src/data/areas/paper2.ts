import type { Paper } from '../../types/content';

export const areasPaper2: Paper = {
  id: 'areas-paper-2',
  topicId: 'areas',
  topicTitle: 'Area & Perimeter',
  topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro: 'Time allowed: 20 minutes. Total marks: 25. These questions involve missing sides, unit conversion, and multi-step reasoning.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Star performance!' },
    { min: 16, label: '⭐⭐ Well done!' },
    { min: 9,  label: '⭐ Good effort — focus on unit conversions and compound shapes.' },
    { min: 0,  label: 'Keep going — work through the lessons again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Perimeter → missing side → area (chain) */
    {
      n: 1,
      marks: 3,
      prompt: 'A rectangle has a perimeter of 50 cm. One side is 18 cm.',
      parts: [
        {
          id: '1a', label: 'a) What is the sum of the length and width?',
          marks: 1, type: 'number', answer: 25,
          answerDisplay: '25 cm  (50 ÷ 2 = 25)',
          hint: 'Half the perimeter = length + width.',
        },
        {
          id: '1b', label: 'b) What is the other side length?',
          marks: 1, type: 'number', answer: 7,
          answerDisplay: '7 cm  (25 − 18 = 7)',
        },
        {
          id: '1c', label: 'c) What is the area of the rectangle?',
          marks: 1, type: 'number', answer: 126,
          answerDisplay: '126 cm²  (18 × 7 = 126)',
        },
      ],
    },

    /* Q2 — 4 marks — Tiling with cost */
    {
      n: 2,
      marks: 4,
      prompt: 'A rectangular garden is 5 m long and 3 m wide. It is to be covered with square tiles of side 50 cm.',
      parts: [
        {
          id: '2a', label: 'a) What is the area of the garden?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15 m²  (5 × 3 = 15)',
        },
        {
          id: '2b', label: 'b) What is the area of one tile in m²? (50 cm = 0.5 m)',
          marks: 1, type: 'number', answer: 0.25,
          answerDisplay: '0.25 m²  (0.5 × 0.5 = 0.25)',
        },
        {
          id: '2c', label: 'c) How many tiles are needed?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60 tiles  (15 ÷ 0.25 = 60)',
        },
        {
          id: '2d', label: 'd) Each tile costs £4.50. What is the total cost?',
          marks: 1, type: 'number', answer: 270,
          answerDisplay: '£270  (60 × 4.50 = 270)',
        },
      ],
    },

    /* Q3 — 4 marks — Find missing notch dimension from given area */
    {
      n: 3,
      marks: 4,
      prompt: 'An L-shape is formed by removing a rectangle from the top-right corner of a 10 cm × 8 cm rectangle. The removed piece is 4 cm wide, but its height is unknown. The L-shape has area 64 cm².',
      parts: [
        {
          id: '3a', label: 'a) What is the area of the full 10 cm × 8 cm rectangle?',
          marks: 1, type: 'number', answer: 80,
          answerDisplay: '80 cm²  (10 × 8 = 80)',
        },
        {
          id: '3b', label: 'b) What is the area of the removed piece?',
          marks: 1, type: 'number', answer: 16,
          answerDisplay: '16 cm²  (80 − 64 = 16)',
        },
        {
          id: '3c', label: 'c) What is the height of the removed piece?',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4 cm  (16 ÷ 4 = 4)',
        },
        {
          id: '3d', label: 'd) What is the perimeter of the L-shape?',
          marks: 1, type: 'number', answer: 36,
          answerDisplay: '36 cm  (10 + 4 + 4 + 4 + 6 + 8 = 36)  right side = 8 − 4 = 4; inner top = 10 − 4 = 6',
        },
      ],
    },

    /* Q4 — 4 marks — L-shape with harder numbers */
    {
      n: 4,
      marks: 4,
      prompt: 'An L-shaped field has overall width 20 m and height 15 m. A rectangular section 8 m wide and 6 m tall is removed from the top-right corner.',
      parts: [
        {
          id: '4a', label: 'a) What is the area of the L-shaped field?',
          marks: 2, type: 'number', answer: 252,
          answerDisplay: '252 m²  (20 × 15 − 8 × 6 = 300 − 48 = 252)',
          hint: 'Full rectangle minus the removed piece.',
        },
        {
          id: '4b', label: 'b) What is the missing inner top side of the L-shape?',
          marks: 1, type: 'number', answer: 12,
          answerDisplay: '12 m  (20 − 8 = 12)',
        },
        {
          id: '4c', label: 'c) What is the perimeter of the L-shaped field?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70 m  (20 + 9 + 8 + 6 + 12 + 15 = 70)  right side = 15 − 6 = 9',
        },
      ],
    },

    /* Q5 — 4 marks — Scaling sides */
    {
      n: 5,
      marks: 4,
      prompt: 'A rectangle is 6 cm long and 4 cm wide.',
      diagram: { type: 'rect', data: { width: 6, height: 4, unit: 'cm' } },
      parts: [
        {
          id: '5a', label: 'a) What is its area?',
          marks: 1, type: 'number', answer: 24,
          answerDisplay: '24 cm²  (6 × 4 = 24)',
        },
        {
          id: '5b', label: 'b) What is its perimeter?',
          marks: 1, type: 'number', answer: 20,
          answerDisplay: '20 cm  (2 × (6 + 4) = 20)',
        },
        {
          id: '5c', label: 'c) All sides are doubled. What is the new area?',
          marks: 1, type: 'number', answer: 96,
          answerDisplay: '96 cm²  (12 × 8 = 96)',
        },
        {
          id: '5d', label: 'd) How many times greater is the new area than the original?',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4 times  (96 ÷ 24 = 4)',
        },
      ],
    },

    /* Q6 — 3 marks — Comparing with fractions */
    {
      n: 6,
      marks: 3,
      prompt: 'Rectangle A is 15 cm long and 4 cm wide. Rectangle B is 10 cm long and 7 cm wide.',
      parts: [
        {
          id: '6a', label: 'a) What is the area of Rectangle A?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60 cm²  (15 × 4 = 60)',
        },
        {
          id: '6b', label: 'b) What is the area of Rectangle B?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70 cm²  (10 × 7 = 70)',
        },
        {
          id: '6c', label: 'c) What fraction of B\'s area is A\'s area? Give your answer in its simplest form. (e.g. 3/5)',
          marks: 1, type: 'fraction', answer: '6/7',
          answerDisplay: '6/7  (60 ÷ 70 = 6/7)',
        },
      ],
    },

    /* Q7 — 3 marks — Real-world cost (wallpaper) */
    {
      n: 7,
      marks: 3,
      prompt: 'A wall is 4 m wide and 2.5 m high.',
      parts: [
        {
          id: '7a', label: 'a) What is the area of the wall?',
          marks: 1, type: 'number', answer: 10,
          answerDisplay: '10 m²  (4 × 2.5 = 10)',
        },
        {
          id: '7b', label: 'b) Wallpaper rolls each cover 5 m². How many rolls are needed?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 rolls  (10 ÷ 5 = 2)',
        },
        {
          id: '7c', label: 'c) Each roll costs £12.50. What is the total cost?',
          marks: 1, type: 'number', answer: 25,
          answerDisplay: '£25  (2 × 12.50 = 25)',
        },
      ],
    },
  ],
};
