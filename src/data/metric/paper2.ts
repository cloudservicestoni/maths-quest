/*
 * Metric Conversions — Paper 2 (Moderate)
 * 20 minutes · 25 marks · short-answer.
 * Decimals both ways, mixed units, the 1.05 m trap, comparing, and word problems.
 */

import type { Paper } from '../../types/content';

export const metricPaper2: Paper = {
  id: 'metric-paper-2',
  topicId: 'metric',
  topicTitle: 'Metric Conversions',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Watch the decimals carefully, and ' +
    'change everything to the same unit before you compare or calculate.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Convert (watch the decimals).',
      parts: [
        { id: 'm2-1a', label: 'a) 1.2 km = ___ m', marks: 1, type: 'number', answer: 1200, answerDisplay: '1200  (1.2 × 1000)' },
        { id: 'm2-1b', label: 'b) 3.5 m = ___ cm', marks: 1, type: 'number', answer: 350, answerDisplay: '350  (3.5 × 100)' },
        { id: 'm2-1c', label: 'c) 0.75 kg = ___ g', marks: 1, type: 'number', answer: 750, answerDisplay: '750  (0.75 × 1000)' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Convert to a bigger unit (answer as a decimal).',
      parts: [
        { id: 'm2-2a', label: 'a) 250 cm = ___ m', marks: 1, type: 'number', answer: 2.5, answerDisplay: '2.5  (250 ÷ 100)' },
        { id: 'm2-2b', label: 'b) 1500 m = ___ km', marks: 1, type: 'number', answer: 1.5, answerDisplay: '1.5  (1500 ÷ 1000)' },
        { id: 'm2-2c', label: 'c) 1750 g = ___ kg', marks: 1, type: 'number', answer: 1.75, answerDisplay: '1.75  (1750 ÷ 1000)' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Mixed units — write as one unit.',
      parts: [
        { id: 'm2-3a', label: 'a) 3 m 25 cm = ___ cm', marks: 1, type: 'number', answer: 325, answerDisplay: '325  (300 + 25)' },
        { id: 'm2-3b', label: 'b) 2 kg 750 g = ___ g', marks: 1, type: 'number', answer: 2750, answerDisplay: '2750  (2000 + 750)' },
        { id: 'm2-3c', label: 'c) 1 L 500 ml = ___ ml', marks: 1, type: 'number', answer: 1500, answerDisplay: '1500  (1000 + 500)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Split or convert.',
      parts: [
        { id: 'm2-4a', label: 'a) 365 cm = ___ m and …', marks: 1, type: 'number', answer: 3, answerDisplay: '3 m', hint: 'How many whole metres?' },
        { id: 'm2-4b', label: 'b) … ___ cm left over', marks: 1, type: 'number', answer: 65, answerDisplay: '65 cm  (365 − 300)' },
        { id: 'm2-4c', label: 'c) 2500 g = ___ kg', marks: 1, type: 'number', answer: 2.5, answerDisplay: '2.5  (2500 ÷ 1000)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Comparing and careful decimals.',
      parts: [
        { id: 'm2-5a', label: 'a) Longer: 1.5 m or 140 cm? Write the longer one in cm.', marks: 1, type: 'number', answer: 150, answerDisplay: '150  (1.5 m = 150 cm, beats 140 cm)' },
        { id: 'm2-5b', label: 'b) Heavier: 2.3 kg or 2400 g? Write the heavier one in g.', marks: 1, type: 'number', answer: 2400, answerDisplay: '2400  (2.3 kg = 2300 g, so 2400 g is heavier)' },
        { id: 'm2-5c', label: 'c) 1.05 m = ___ cm', marks: 1, type: 'number', answer: 105, answerDisplay: '105  (1.05 × 100 — not 150!)' },
        { id: 'm2-5d', label: 'd) 0.25 L = ___ ml', marks: 1, type: 'number', answer: 250, answerDisplay: '250  (0.25 × 1000)' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Word problems.',
      parts: [
        { id: 'm2-6a', label: 'a) A ribbon is 2.5 m long. You cut off 80 cm. How many cm are left?', marks: 1, type: 'number', answer: 170, answerDisplay: '170  (250 − 80)' },
        { id: 'm2-6b', label: 'b) A bottle holds 1.5 L. You pour out 350 ml. How many ml are left?', marks: 1, type: 'number', answer: 1150, answerDisplay: '1150  (1500 − 350)' },
        { id: 'm2-6c', label: 'c) 6 apples each weigh 250 g. What is their total mass in kg?', marks: 1, type: 'number', answer: 1.5, answerDisplay: '1.5  (6 × 250 = 1500 g = 1.5 kg)' },
      ],
    },
    {
      n: 7, marks: 3, prompt: 'Two-step problems.',
      parts: [
        { id: 'm2-7a', label: 'a) A 3 m plank is cut into 4 equal pieces. How long is each piece in cm?', marks: 1, type: 'number', answer: 75, answerDisplay: '75  (300 cm ÷ 4)' },
        { id: 'm2-7b', label: 'b) A cake needs 250 g of flour. How many kg are needed for 6 cakes?', marks: 1, type: 'number', answer: 1.5, answerDisplay: '1.5  (6 × 250 = 1500 g = 1.5 kg)' },
        { id: 'm2-7c', label: 'c) A tank holds 5 L. Four cups of 200 ml are taken out. How many ml remain?', marks: 1, type: 'number', answer: 4200, answerDisplay: '4200  (5000 − 4×200 = 5000 − 800)' },
      ],
    },
    {
      n: 8, marks: 3, prompt: 'More decimals.',
      parts: [
        { id: 'm2-8a', label: 'a) 4.5 km = ___ m', marks: 1, type: 'number', answer: 4500, answerDisplay: '4500  (4.5 × 1000)' },
        { id: 'm2-8b', label: 'b) 6200 m = ___ km', marks: 1, type: 'number', answer: 6.2, answerDisplay: '6.2  (6200 ÷ 1000)' },
        { id: 'm2-8c', label: 'c) 3050 g = ___ kg', marks: 1, type: 'number', answer: 3.05, answerDisplay: '3.05  (3050 ÷ 1000)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 3! 🌟' },
    { min: 18, label: 'Good — review the questions you missed, then push on.' },
    { min: 13, label: 'Getting there — revisit Lesson 3 (decimals & mixed units).' },
    { min: 0, label: 'Keep practising — go back over the lessons, then try again.' },
  ],
};
