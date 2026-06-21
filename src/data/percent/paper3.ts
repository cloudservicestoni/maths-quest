/*
 * Percentages — Paper 3 (Challenging)
 * 20 minutes · 25 marks · short-answer.
 * Awkward conversions, harder amounts, increase/decrease, multi-step and reverse
 * percentage reasoning ("10% of a number is 7 — what is the number?").
 */
import type { Paper } from '../../types/content';

export const percentPaper3: Paper = {
  id: 'percent-paper-3',
  topicId: 'percent',
  topicTitle: 'Percentages',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These need care or two steps. ' +
    'Find 10% and 1% to build up, and read every word.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Convert (watch the tricky ones).',
      parts: [
        { id: 'pc3-1a', label: 'a) 0.125 = ___%', marks: 1, type: 'number', answer: 12.5, answerDisplay: '12.5  (0.125 × 100)' },
        { id: 'pc3-1b', label: 'b) 5% = ___ (decimal)', marks: 1, type: 'number', answer: 0.05, answerDisplay: '0.05  (5 ÷ 100)' },
        { id: 'pc3-1c', label: 'c) 2/5 = ___%', marks: 1, type: 'number', answer: 40, answerDisplay: '40  (2 ÷ 5 = 0.4)' },
        { id: 'pc3-1d', label: 'd) 1/8 = ___%', marks: 1, type: 'number', answer: 12.5, answerDisplay: '12.5  (1 ÷ 8 = 0.125)' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Find the percentage of each amount.',
      parts: [
        { id: 'pc3-2a', label: 'a) 35% of 80 = ___', marks: 1, type: 'number', answer: 28, answerDisplay: '28  (10% is 8 → 30% is 24; 5% is 4; 24+4)' },
        { id: 'pc3-2b', label: 'b) 15% of 60 = ___', marks: 1, type: 'number', answer: 9, answerDisplay: '9  (10% is 6, 5% is 3)' },
        { id: 'pc3-2c', label: 'c) 12% of 50 = ___', marks: 1, type: 'number', answer: 6, answerDisplay: '6  (1% is 0.5, × 12)' },
        { id: 'pc3-2d', label: 'd) 60% of 45 = ___', marks: 1, type: 'number', answer: 27, answerDisplay: '27  (10% is 4.5, × 6)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Write each score as a percentage.',
      parts: [
        { id: 'pc3-3a', label: 'a) 21 out of 28 = ___%', marks: 1, type: 'number', answer: 75, answerDisplay: '75  (21 ÷ 28 = 0.75)' },
        { id: 'pc3-3b', label: 'b) 24 out of 40 = ___%', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (24 ÷ 40 = 0.6)' },
        { id: 'pc3-3c', label: 'c) 13 out of 20 = ___%', marks: 1, type: 'number', answer: 65, answerDisplay: '65  (13 ÷ 20 = 0.65)' },
        { id: 'pc3-3d', label: 'd) 45 out of 50 = ___%', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (45 ÷ 50 = 0.9)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Increase and decrease.',
      parts: [
        { id: 'pc3-4a', label: 'a) £80 increased by 25%. New value in £?', marks: 1, type: 'number', answer: 100, answerDisplay: '£100  (80 + 20)' },
        { id: 'pc3-4b', label: 'b) £90 decreased by 10%. New value in £?', marks: 1, type: 'number', answer: 81, answerDisplay: '£81  (90 − 9)' },
        { id: 'pc3-4c', label: 'c) A class of 20 grows by 30%. New size?', marks: 1, type: 'number', answer: 26, answerDisplay: '26  (20 + 6)' },
        { id: 'pc3-4d', label: 'd) 200 reduced by 15%. New value?', marks: 1, type: 'number', answer: 170, answerDisplay: '170  (200 − 30)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Multi-step word problems.',
      parts: [
        { id: 'pc3-5a', label: 'a) A £120 phone has 20% off, then £5 more off. Final price in £?', marks: 1, type: 'number', answer: 91, answerDisplay: '£91  (120 − 24 = 96, then − 5)' },
        { id: 'pc3-5b', label: 'b) Tom scored 80% on a 50-mark test. How many marks did he LOSE?', marks: 1, type: 'number', answer: 10, answerDisplay: '10  (he got 40, so lost 50 − 40)' },
        { id: 'pc3-5c', label: 'c) A jug holds 2 L and is 75% full. How many ml of liquid?', marks: 1, type: 'number', answer: 1500, answerDisplay: '1500  (75% of 2000 ml)' },
        { id: 'pc3-5d', label: 'd) Out of 40 pupils, 30% chose art and 25% chose music. How many MORE chose art?', marks: 1, type: 'number', answer: 2, answerDisplay: '2  (12 − 10)' },
      ],
    },
    {
      n: 6, marks: 5, prompt: 'Reasoning.',
      parts: [
        { id: 'pc3-6a', label: 'a) Which is largest: 0.6, 55%, or 2/5? Write it as a %.', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (0.6 = 60%, 55%, 2/5 = 40%)' },
        { id: 'pc3-6b', label: 'b) What is 1% of 800?', marks: 1, type: 'number', answer: 8, answerDisplay: '8  (800 ÷ 100)' },
        { id: 'pc3-6c', label: 'c) If 10% of a number is 7, what is the number?', marks: 1, type: 'number', answer: 70, answerDisplay: '70  (10% × 10 = the whole)' },
        { id: 'pc3-6d', label: 'd) If 25% of a number is 15, what is the number?', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (a quarter is 15, so × 4)' },
        { id: 'pc3-6e', label: 'e) Half of 50% is what percentage?', marks: 1, type: 'number', answer: 25, answerDisplay: '25  (half of 50%)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — you have mastered percentages! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit Lesson 4 (word problems), then retry.' },
    { min: 0, label: 'These are tough — go back over Lessons 3 & 4, then try again.' },
  ],
};
