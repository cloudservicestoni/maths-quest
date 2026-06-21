/*
 * Metric Conversions — Paper 1 (Basics)
 * 20 minutes · 25 marks · short-answer.
 * Single-step conversions (whole numbers), key facts, easy decimals/mixed units,
 * and a few simple word/compare questions.
 */

import type { Paper } from '../../types/content';

export const metricPaper1: Paper = {
  id: 'metric-paper-1',
  topicId: 'metric',
  topicTitle: 'Metric Conversions',
  title: 'Paper 1',
  subtitle: 'Basics',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Remember the rule — big unit to small ' +
    'unit, multiply; small unit to big unit, divide. Just write the number.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Convert these lengths to a smaller unit.',
      parts: [
        { id: 'm1-1a', label: 'a) 6 cm = ___ mm', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (6 × 10)' },
        { id: 'm1-1b', label: 'b) 3 m = ___ cm', marks: 1, type: 'number', answer: 300, answerDisplay: '300  (3 × 100)' },
        { id: 'm1-1c', label: 'c) 5 km = ___ m', marks: 1, type: 'number', answer: 5000, answerDisplay: '5000  (5 × 1000)' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Convert these lengths to a bigger unit.',
      parts: [
        { id: 'm1-2a', label: 'a) 80 mm = ___ cm', marks: 1, type: 'number', answer: 8, answerDisplay: '8  (80 ÷ 10)' },
        { id: 'm1-2b', label: 'b) 400 cm = ___ m', marks: 1, type: 'number', answer: 4, answerDisplay: '4  (400 ÷ 100)' },
        { id: 'm1-2c', label: 'c) 7000 m = ___ km', marks: 1, type: 'number', answer: 7, answerDisplay: '7  (7000 ÷ 1000)' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Mass conversions.',
      parts: [
        { id: 'm1-3a', label: 'a) 4 kg = ___ g', marks: 1, type: 'number', answer: 4000, answerDisplay: '4000  (4 × 1000)' },
        { id: 'm1-3b', label: 'b) 9000 g = ___ kg', marks: 1, type: 'number', answer: 9, answerDisplay: '9  (9000 ÷ 1000)' },
        { id: 'm1-3c', label: 'c) 6 kg = ___ g', marks: 1, type: 'number', answer: 6000, answerDisplay: '6000  (6 × 1000)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Capacity conversions.',
      parts: [
        { id: 'm1-4a', label: 'a) 5 L = ___ ml', marks: 1, type: 'number', answer: 5000, answerDisplay: '5000  (5 × 1000)' },
        { id: 'm1-4b', label: 'b) 8000 ml = ___ L', marks: 1, type: 'number', answer: 8, answerDisplay: '8  (8000 ÷ 1000)' },
        { id: 'm1-4c', label: 'c) 3 L = ___ ml', marks: 1, type: 'number', answer: 3000, answerDisplay: '3000  (3 × 1000)' },
      ],
    },
    {
      n: 5, marks: 2, prompt: 'Fill in the missing fact.',
      parts: [
        { id: 'm1-5a', label: 'a) 1 metre = ___ cm', marks: 1, type: 'number', answer: 100, answerDisplay: '100' },
        { id: 'm1-5b', label: 'b) 1 kilogram = ___ g', marks: 1, type: 'number', answer: 1000, answerDisplay: '1000' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Simple decimals.',
      parts: [
        { id: 'm1-6a', label: 'a) 1.5 m = ___ cm', marks: 1, type: 'number', answer: 150, answerDisplay: '150  (1.5 × 100)' },
        { id: 'm1-6b', label: 'b) 2.5 kg = ___ g', marks: 1, type: 'number', answer: 2500, answerDisplay: '2500  (2.5 × 1000)' },
        { id: 'm1-6c', label: 'c) 0.5 L = ___ ml', marks: 1, type: 'number', answer: 500, answerDisplay: '500  (0.5 × 1000)' },
      ],
    },
    {
      n: 7, marks: 2, prompt: 'Mixed units — write as one unit.',
      parts: [
        { id: 'm1-7a', label: 'a) 2 m 50 cm = ___ cm', marks: 1, type: 'number', answer: 250, answerDisplay: '250  (200 + 50)' },
        { id: 'm1-7b', label: 'b) 1 kg 200 g = ___ g', marks: 1, type: 'number', answer: 1200, answerDisplay: '1200  (1000 + 200)' },
      ],
    },
    {
      n: 8, marks: 3, prompt: 'Word problems.',
      parts: [
        { id: 'm1-8a', label: 'a) A pencil is 12 cm long. How many mm is that?', marks: 1, type: 'number', answer: 120, answerDisplay: '120  (12 × 10)' },
        { id: 'm1-8b', label: 'b) A jug holds 2 L. How many ml does it hold?', marks: 1, type: 'number', answer: 2000, answerDisplay: '2000  (2 × 1000)' },
        { id: 'm1-8c', label: 'c) A rope is 300 cm long. How many metres is that?', marks: 1, type: 'number', answer: 3, answerDisplay: '3  (300 ÷ 100)' },
      ],
    },
    {
      n: 9, marks: 3, prompt: 'Which is bigger? Write the bigger amount in the unit asked for.',
      parts: [
        { id: 'm1-9a', label: 'a) Longer: 1 m or 90 cm? Write the longer one in cm.', marks: 1, type: 'number', answer: 100, answerDisplay: '100  (1 m = 100 cm, which beats 90 cm)' },
        { id: 'm1-9b', label: 'b) Heavier: 1 kg or 900 g? Write the heavier one in g.', marks: 1, type: 'number', answer: 1000, answerDisplay: '1000  (1 kg = 1000 g, which beats 900 g)' },
        { id: 'm1-9c', label: 'c) More: 1 L or 800 ml? Write the larger one in ml.', marks: 1, type: 'number', answer: 1000, answerDisplay: '1000  (1 L = 1000 ml, which beats 800 ml)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 2! 🌟' },
    { min: 18, label: 'Good — review any slips, then push on.' },
    { min: 13, label: 'Getting there — go back over Lessons 1 & 2.' },
    { min: 0, label: 'Keep practising — revisit the lessons, then try again.' },
  ],
};
