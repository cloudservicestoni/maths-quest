/*
 * Percentages — Paper 1 (Basics)
 * 20 minutes · 25 marks · short-answer.
 * Percent-as-out-of-100, simple F/D/% conversions, and easy "percent of amount".
 */
import type { Paper } from '../../types/content';

export const percentPaper1: Paper = {
  id: 'percent-paper-1',
  topicId: 'percent',
  topicTitle: 'Percentages',
  title: 'Paper 1',
  subtitle: 'Basics',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Remember: percent means "out of 100". ' +
    'To find 10% divide by 10; to find 1% divide by 100.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Write each percentage as a fraction over 100.',
      parts: [
        { id: 'pc1-1a', label: 'a) 20% = ___ / 100', marks: 1, type: 'fraction', answer: '20/100', answerDisplay: '20/100', placeholder: 'e.g. 20/100' },
        { id: 'pc1-1b', label: 'b) 50% = ___ / 100', marks: 1, type: 'fraction', answer: '50/100', answerDisplay: '50/100' },
        { id: 'pc1-1c', label: 'c) 7% = ___ / 100', marks: 1, type: 'fraction', answer: '7/100', answerDisplay: '7/100' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Write each percentage as a decimal.',
      parts: [
        { id: 'pc1-2a', label: 'a) 50% = ___', marks: 1, type: 'number', answer: 0.5, answerDisplay: '0.5  (50 ÷ 100)' },
        { id: 'pc1-2b', label: 'b) 25% = ___', marks: 1, type: 'number', answer: 0.25, answerDisplay: '0.25  (25 ÷ 100)' },
        { id: 'pc1-2c', label: 'c) 10% = ___', marks: 1, type: 'number', answer: 0.1, answerDisplay: '0.1  (10 ÷ 100)' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Write each decimal as a percentage.',
      parts: [
        { id: 'pc1-3a', label: 'a) 0.5 = ___%', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (0.5 × 100)' },
        { id: 'pc1-3b', label: 'b) 0.25 = ___%', marks: 1, type: 'number', answer: 25, answerDisplay: '25  (0.25 × 100)' },
        { id: 'pc1-3c', label: 'c) 0.9 = ___%', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (0.9 × 100)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Write each fraction as a percentage.',
      parts: [
        { id: 'pc1-4a', label: 'a) 1/2 = ___%', marks: 1, type: 'number', answer: 50, answerDisplay: '50' },
        { id: 'pc1-4b', label: 'b) 1/4 = ___%', marks: 1, type: 'number', answer: 25, answerDisplay: '25' },
        { id: 'pc1-4c', label: 'c) 1/10 = ___%', marks: 1, type: 'number', answer: 10, answerDisplay: '10' },
      ],
    },
    {
      n: 5, marks: 2, prompt: 'Fill in the missing fact.',
      parts: [
        { id: 'pc1-5a', label: 'a) Percent means "out of ___".', marks: 1, type: 'number', answer: 100, answerDisplay: '100' },
        { id: 'pc1-5b', label: 'b) A whole amount is ___%.', marks: 1, type: 'number', answer: 100, answerDisplay: '100' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Find the percentage of each amount.',
      parts: [
        { id: 'pc1-6a', label: 'a) 10% of 50 = ___', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (50 ÷ 10)' },
        { id: 'pc1-6b', label: 'b) 50% of 60 = ___', marks: 1, type: 'number', answer: 30, answerDisplay: '30  (half of 60)' },
        { id: 'pc1-6c', label: 'c) 25% of 20 = ___', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (a quarter of 20)' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Find the percentage of each amount.',
      parts: [
        { id: 'pc1-7a', label: 'a) 20% of 40 = ___', marks: 1, type: 'number', answer: 8, answerDisplay: '8  (10% is 4, so 20% = 8)' },
        { id: 'pc1-7b', label: 'b) 75% of 40 = ___', marks: 1, type: 'number', answer: 30, answerDisplay: '30  (three quarters of 40)' },
        { id: 'pc1-7c', label: 'c) 10% of 90 = ___', marks: 1, type: 'number', answer: 9, answerDisplay: '9  (90 ÷ 10)' },
        { id: 'pc1-7d', label: 'd) 5% of 100 = ___', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (half of 10%)' },
      ],
    },
    {
      n: 8, marks: 4, prompt: 'Word problems.',
      parts: [
        { id: 'pc1-8a', label: 'a) There is 10% off a £30 toy. How many £ are taken off?', marks: 1, type: 'number', answer: 3, answerDisplay: '£3  (10% of 30)' },
        { id: 'pc1-8b', label: 'b) Half of a class are girls. What percentage are girls?', marks: 1, type: 'number', answer: 50, answerDisplay: '50%' },
        { id: 'pc1-8c', label: 'c) A jug is 25% full. Write that as a fraction.', marks: 1, type: 'fraction', answer: '25/100', answerDisplay: '25/100 = 1/4' },
        { id: 'pc1-8d', label: 'd) Write 0.4 as a percentage: ___%', marks: 1, type: 'number', answer: 40, answerDisplay: '40  (0.4 × 100)' },
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
