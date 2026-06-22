import type { Paper } from '../../types/content';

export const areasPaper1: Paper = {
  id: 'areas-paper-1',
  topicId: 'areas',
  topicTitle: 'Area & Perimeter',
  topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro: 'Time allowed: 20 minutes. Total marks: 25. Show your working for full marks.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Star performance!' },
    { min: 16, label: '⭐⭐ Well done!' },
    { min: 9,  label: '⭐ Good effort — review the formula sheets.' },
    { min: 0,  label: 'Keep going — work through the lessons again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Rectangle: perimeter, area, same-perimeter sibling */
    {
      n: 1,
      marks: 3,
      prompt: 'A rectangle is 14 cm long and 6 cm wide.',
      diagram: { type: 'rect', data: { width: 14, height: 6, unit: 'cm' } },
      parts: [
        {
          id: '1a', label: 'a) What is the perimeter of the rectangle?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40 cm  (2 × (14 + 6) = 2 × 20 = 40)',
        },
        {
          id: '1b', label: 'b) What is the area of the rectangle?',
          marks: 1, type: 'number', answer: 84,
          answerDisplay: '84 cm²  (14 × 6 = 84)',
        },
        {
          id: '1c', label: 'c) A second rectangle has the same perimeter (40 cm) and width 5 cm. What is its length?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15 cm  (40 ÷ 2 = 20; 20 − 5 = 15)',
          hint: 'Half the perimeter = length + width.',
        },
      ],
    },

    /* Q2 — 3 marks — Square */
    {
      n: 2,
      marks: 3,
      prompt: 'A square has side length 7 cm.',
      diagram: { type: 'rect', data: { width: 7, height: 7, unit: 'cm' } },
      parts: [
        {
          id: '2a', label: 'a) What is the perimeter of the square?',
          marks: 1, type: 'number', answer: 28,
          answerDisplay: '28 cm  (4 × 7 = 28)',
        },
        {
          id: '2b', label: 'b) What is the area of the square?',
          marks: 1, type: 'number', answer: 49,
          answerDisplay: '49 cm²  (7 × 7 = 49)',
        },
        {
          id: '2c', label: 'c) A different square has area 81 cm². What is its side length?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '9 cm  (9 × 9 = 81)',
          hint: 'What number multiplied by itself gives 81?',
        },
      ],
    },

    /* Q3 — 4 marks — Missing sides */
    {
      n: 3,
      marks: 4,
      prompt: 'Answer these missing-side problems.',
      parts: [
        {
          id: '3a', label: 'a) A rectangle has perimeter 44 cm and length 13 cm. What is its width?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '9 cm  (44 ÷ 2 = 22; 22 − 13 = 9)',
        },
        {
          id: '3b', label: 'b) A rectangle has area 56 cm² and width 7 cm. What is its length?',
          marks: 1, type: 'number', answer: 8,
          answerDisplay: '8 cm  (56 ÷ 7 = 8)',
        },
        {
          id: '3c', label: 'c) A square has perimeter 60 cm. What is its area?',
          marks: 2, type: 'number', answer: 225,
          answerDisplay: '225 cm²  (60 ÷ 4 = 15 cm per side; 15 × 15 = 225)',
          hint: 'First find the side length, then calculate the area.',
        },
      ],
    },

    /* Q4 — 4 marks — Compound L-shape area + cost */
    {
      n: 4,
      marks: 4,
      prompt: 'An L-shaped playground has overall width 15 m and height 12 m. A rectangular section 7 m wide and 5 m tall is removed from the top-right corner.',
      parts: [
        {
          id: '4a', label: 'a) What is the area of the full 15 m × 12 m rectangle?',
          marks: 1, type: 'number', answer: 180,
          answerDisplay: '180 m²  (15 × 12 = 180)',
        },
        {
          id: '4b', label: 'b) What is the area of the missing section?',
          marks: 1, type: 'number', answer: 35,
          answerDisplay: '35 m²  (7 × 5 = 35)',
        },
        {
          id: '4c', label: 'c) What is the area of the L-shaped playground?',
          marks: 1, type: 'number', answer: 145,
          answerDisplay: '145 m²  (180 − 35 = 145)',
        },
        {
          id: '4d', label: 'd) Artificial turf costs £8 per m². What is the total cost to cover the playground?',
          marks: 1, type: 'number', answer: 1160,
          answerDisplay: '£1160  (145 × 8 = 1160)',
        },
      ],
    },

    /* Q5 — 3 marks — L-shape perimeter */
    {
      n: 5,
      marks: 3,
      prompt: 'An L-shaped room has overall width 12 m and height 8 m. A rectangular section 4 m wide and 3 m tall is removed from the top-right corner.',
      parts: [
        {
          id: '5a', label: 'a) What is the missing horizontal side of the L-shape (the inner top)?',
          marks: 1, type: 'number', answer: 8,
          answerDisplay: '8 m  (12 − 4 = 8)',
        },
        {
          id: '5b', label: 'b) What is the missing vertical side of the L-shape (the step on the right)?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5 m  (8 − 3 = 5)',
        },
        {
          id: '5c', label: 'c) What is the perimeter of the L-shaped room?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40 m  (12 + 5 + 4 + 3 + 8 + 8 = 40)',
        },
      ],
    },

    /* Q6 — 4 marks — Tiling */
    {
      n: 6,
      marks: 4,
      prompt: 'A rectangular hall is 9 m long and 6 m wide. It is to be tiled with square tiles of side 30 cm.',
      parts: [
        {
          id: '6a', label: 'a) What is the floor area?',
          marks: 1, type: 'number', answer: 54,
          answerDisplay: '54 m²  (9 × 6 = 54)',
        },
        {
          id: '6b', label: 'b) How many tiles fit along the 9 m length? (30 cm = 0.3 m)',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30 tiles  (9 ÷ 0.3 = 30, or 900 cm ÷ 30 cm = 30)',
        },
        {
          id: '6c', label: 'c) How many tiles fit along the 6 m width?',
          marks: 1, type: 'number', answer: 20,
          answerDisplay: '20 tiles  (6 ÷ 0.3 = 20, or 600 cm ÷ 30 cm = 20)',
        },
        {
          id: '6d', label: 'd) How many tiles are needed in total?',
          marks: 1, type: 'number', answer: 600,
          answerDisplay: '600 tiles  (30 × 20 = 600)',
        },
      ],
    },

    /* Q7 — 4 marks — Comparing two rectangles (same perimeter, different area) */
    {
      n: 7,
      marks: 4,
      prompt: 'Rectangle P is 12 cm long and 5 cm wide. Rectangle Q is 8 cm long and 9 cm wide.',
      parts: [
        {
          id: '7a', label: 'a) What is the perimeter of Rectangle P?',
          marks: 1, type: 'number', answer: 34,
          answerDisplay: '34 cm  (2 × (12 + 5) = 34)',
        },
        {
          id: '7b', label: 'b) What is the perimeter of Rectangle Q?',
          marks: 1, type: 'number', answer: 34,
          answerDisplay: '34 cm  (2 × (8 + 9) = 34)',
        },
        {
          id: '7c', label: 'c) Which rectangle has the greater area? (Write P or Q)',
          marks: 1, type: 'text', accept: ['q', 'Q', 'rectangle q', 'Rectangle Q'],
          answerDisplay: 'Rectangle Q  (P: 12 × 5 = 60 cm²; Q: 8 × 9 = 72 cm²)',
        },
        {
          id: '7d', label: 'd) By how many cm² is it greater?',
          marks: 1, type: 'number', answer: 12,
          answerDisplay: '12 cm²  (72 − 60 = 12)',
        },
      ],
    },
  ],
};
