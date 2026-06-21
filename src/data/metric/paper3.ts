/*
 * Metric Conversions — Paper 3 (Challenging)
 * 20 minutes · 25 marks · short-answer.
 * Two-step conversions (km→cm), tricky decimals/mixed units, multi-step word
 * problems, adding across different units, and comparing/reasoning.
 */

import type { Paper } from '../../types/content';

export const metricPaper3: Paper = {
  id: 'metric-paper-3',
  topicId: 'metric',
  topicTitle: 'Metric Conversions',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These need two steps or careful reading. ' +
    'Convert to the same unit first, work it through, then check it makes sense.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Tricky decimals.',
      parts: [
        { id: 'm3-1a', label: 'a) 1.05 m = ___ cm', marks: 1, type: 'number', answer: 105, answerDisplay: '105  (1.05 × 100 — not 150!)' },
        { id: 'm3-1b', label: 'b) 2.08 kg = ___ g', marks: 1, type: 'number', answer: 2080, answerDisplay: '2080  (2.08 × 1000)' },
        { id: 'm3-1c', label: 'c) 0.6 L = ___ ml', marks: 1, type: 'number', answer: 600, answerDisplay: '600  (0.6 × 1000)' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Two-step conversions.',
      parts: [
        { id: 'm3-2a', label: 'a) 2 km = ___ cm', marks: 1, type: 'number', answer: 200000, answerDisplay: '200000  (2 km = 2000 m = 200000 cm)' },
        { id: 'm3-2b', label: 'b) 3 m = ___ mm', marks: 1, type: 'number', answer: 3000, answerDisplay: '3000  (3 m = 300 cm = 3000 mm)' },
        { id: 'm3-2c', label: 'c) 1.5 km = ___ cm', marks: 1, type: 'number', answer: 150000, answerDisplay: '150000  (1.5 km = 1500 m = 150000 cm)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Mixed units — write as one unit (mind the traps).',
      parts: [
        { id: 'm3-3a', label: 'a) 1 m 5 cm = ___ cm', marks: 1, type: 'number', answer: 105, answerDisplay: '105  (100 + 5 — not 150)' },
        { id: 'm3-3b', label: 'b) 2 km 50 m = ___ m', marks: 1, type: 'number', answer: 2050, answerDisplay: '2050  (2000 + 50)' },
        { id: 'm3-3c', label: 'c) 3 kg 60 g = ___ g', marks: 1, type: 'number', answer: 3060, answerDisplay: '3060  (3000 + 60)' },
        { id: 'm3-3d', label: 'd) 1 L 75 ml = ___ ml', marks: 1, type: 'number', answer: 1075, answerDisplay: '1075  (1000 + 75)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Multi-step word problems.',
      parts: [
        { id: 'm3-4a', label: 'a) A wall is 4 m long. Tiles are 25 cm wide. How many tiles fit in one row?', marks: 1, type: 'number', answer: 16, answerDisplay: '16  (400 cm ÷ 25)' },
        { id: 'm3-4b', label: 'b) A jug holds 2 L. Glasses hold 250 ml each. How many full glasses can it fill?', marks: 1, type: 'number', answer: 8, answerDisplay: '8  (2000 ml ÷ 250)' },
        { id: 'm3-4c', label: 'c) A 1.2 kg cake is cut into 8 equal slices. What is the mass of each slice in g?', marks: 1, type: 'number', answer: 150, answerDisplay: '150  (1200 g ÷ 8)' },
        { id: 'm3-4d', label: 'd) A 3 m ribbon is cut into 40 cm pieces. How many whole pieces can you cut?', marks: 1, type: 'number', answer: 7, answerDisplay: '7  (300 ÷ 40 = 7.5, so 7 whole pieces)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Add the amounts, then give the total in the unit asked for.',
      parts: [
        { id: 'm3-5a', label: 'a) 1.5 m + 80 cm = ___ cm', marks: 1, type: 'number', answer: 230, answerDisplay: '230  (150 + 80)' },
        { id: 'm3-5b', label: 'b) 750 g + 1.2 kg = ___ g', marks: 1, type: 'number', answer: 1950, answerDisplay: '1950  (750 + 1200)' },
        { id: 'm3-5c', label: 'c) 1.5 L + 600 ml = ___ ml', marks: 1, type: 'number', answer: 2100, answerDisplay: '2100  (1500 + 600)' },
        { id: 'm3-5d', label: 'd) 1 m 25 cm = ___ mm', marks: 1, type: 'number', answer: 1250, answerDisplay: '1250  (125 cm × 10)' },
      ],
    },
    {
      n: 6, marks: 4, prompt: 'Compare and find differences.',
      parts: [
        { id: 'm3-6a', label: 'a) Greatest of 1.2 kg, 1150 g, 1300 g? Write it in g.', marks: 1, type: 'number', answer: 1300, answerDisplay: '1300  (1.2 kg = 1200 g, so 1300 g is greatest)' },
        { id: 'm3-6b', label: 'b) Longest of 1.5 m, 160 cm, 1400 mm? Write it in cm.', marks: 1, type: 'number', answer: 160, answerDisplay: '160  (= 1600 mm; 1.5 m = 1500 mm, 1400 mm — so 160 cm is longest)' },
        { id: 'm3-6c', label: 'c) How much heavier is a 2.5 kg box than a 1750 g box, in g?', marks: 1, type: 'number', answer: 750, answerDisplay: '750  (2500 − 1750)' },
        { id: 'm3-6d', label: 'd) Two ropes are 1.2 m and 95 cm. What is the difference in cm?', marks: 1, type: 'number', answer: 25, answerDisplay: '25  (120 − 95)' },
      ],
    },
    {
      n: 7, marks: 3, prompt: 'Real-life challenges.',
      parts: [
        { id: 'm3-7a', label: 'a) A recipe for 4 people needs 600 g of rice. How many kg are needed for 6 people?', marks: 1, type: 'number', answer: 0.9, answerDisplay: '0.9  (600 ÷ 4 = 150 g each; 150 × 6 = 900 g = 0.9 kg)' },
        { id: 'm3-7b', label: 'b) A tap fills 250 ml every 5 seconds. How many ml does it fill in 1 minute?', marks: 1, type: 'number', answer: 3000, answerDisplay: '3000  (60 s ÷ 5 = 12 lots of 250 = 3000 ml)' },
        { id: 'm3-7c', label: 'c) A 2 m plank has three 45 cm pieces cut off. How many cm are left?', marks: 1, type: 'number', answer: 65, answerDisplay: '65  (200 − 3×45 = 200 − 135)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — you have mastered metric conversions! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit Lesson 4 (word problems), then retry.' },
    { min: 0, label: 'These are tough — go back over Lessons 3 & 4, then try again.' },
  ],
};
