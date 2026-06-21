/*
 * Percentages — Paper 2 (Moderate)
 * 20 minutes · 25 marks · short-answer.
 * Mixed F/D/% conversions, percent of amount, scores as %, discounts, comparing.
 */
import type { Paper } from '../../types/content';

export const percentPaper2: Paper = {
  id: 'percent-paper-2',
  topicId: 'percent',
  topicTitle: 'Percentages',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Show your working. To write a score ' +
    'as a percentage: (score ÷ total) × 100.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Convert between fractions, decimals and percentages.',
      parts: [
        { id: 'pc2-1a', label: 'a) 0.35 = ___%', marks: 1, type: 'number', answer: 35, answerDisplay: '35  (0.35 × 100)' },
        { id: 'pc2-1b', label: 'b) 60% = ___ (decimal)', marks: 1, type: 'number', answer: 0.6, answerDisplay: '0.6  (60 ÷ 100)' },
        { id: 'pc2-1c', label: 'c) 3/4 = ___%', marks: 1, type: 'number', answer: 75, answerDisplay: '75' },
        { id: 'pc2-1d', label: 'd) 12% = ___ / 100', marks: 1, type: 'fraction', answer: '12/100', answerDisplay: '12/100 = 3/25' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Find the percentage of each amount.',
      parts: [
        { id: 'pc2-2a', label: 'a) 20% of 80 = ___', marks: 1, type: 'number', answer: 16, answerDisplay: '16  (10% is 8, so 20% = 16)' },
        { id: 'pc2-2b', label: 'b) 30% of 60 = ___', marks: 1, type: 'number', answer: 18, answerDisplay: '18  (10% is 6, so 30% = 18)' },
        { id: 'pc2-2c', label: 'c) 15% of 40 = ___', marks: 1, type: 'number', answer: 6, answerDisplay: '6  (10% is 4, 5% is 2, total 6)' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Find the percentage of each amount.',
      parts: [
        { id: 'pc2-3a', label: 'a) 5% of 80 = ___', marks: 1, type: 'number', answer: 4, answerDisplay: '4  (half of 10% of 80)' },
        { id: 'pc2-3b', label: 'b) 40% of 50 = ___', marks: 1, type: 'number', answer: 20, answerDisplay: '20  (10% is 5, × 4)' },
        { id: 'pc2-3c', label: 'c) 90% of 30 = ___', marks: 1, type: 'number', answer: 27, answerDisplay: '27  (10% is 3, × 9)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Write each score as a percentage.',
      parts: [
        { id: 'pc2-4a', label: 'a) 15 out of 20 = ___%', marks: 1, type: 'number', answer: 75, answerDisplay: '75  (15 ÷ 20 = 0.75)' },
        { id: 'pc2-4b', label: 'b) 18 out of 25 = ___%', marks: 1, type: 'number', answer: 72, answerDisplay: '72  (18 ÷ 25 = 0.72)' },
        { id: 'pc2-4c', label: 'c) 9 out of 10 = ___%', marks: 1, type: 'number', answer: 90, answerDisplay: '90' },
        { id: 'pc2-4d', label: 'd) 30 out of 60 = ___%', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (half)' },
      ],
    },
    {
      n: 5, marks: 3, prompt: 'Discount problems.',
      parts: [
        { id: 'pc2-5a', label: 'a) A £60 coat has 25% off. How many £ are taken off?', marks: 1, type: 'number', answer: 15, answerDisplay: '£15  (25% of 60)' },
        { id: 'pc2-5b', label: 'b) So the new price is £___', marks: 1, type: 'number', answer: 45, answerDisplay: '£45  (60 − 15)' },
        { id: 'pc2-5c', label: 'c) 20% of a class of 30 wear glasses. How many pupils?', marks: 1, type: 'number', answer: 6, answerDisplay: '6  (10% is 3, × 2)' },
      ],
    },
    {
      n: 6, marks: 4, prompt: 'Compare and calculate.',
      parts: [
        { id: 'pc2-6a', label: 'a) Which is bigger, 1/2 or 40%? Write the bigger one as a %.', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (1/2 = 50% beats 40%)' },
        { id: 'pc2-6b', label: 'b) Which is more, 0.7 or 75%? Write the larger one as a %.', marks: 1, type: 'number', answer: 75, answerDisplay: '75  (0.7 = 70%, so 75% is more)' },
        { id: 'pc2-6c', label: 'c) 10% of 200 = ___', marks: 1, type: 'number', answer: 20, answerDisplay: '20' },
        { id: 'pc2-6d', label: 'd) 1% of 500 = ___', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (500 ÷ 100)' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Two-step word problems.',
      parts: [
        { id: 'pc2-7a', label: 'a) A book costs £20. The price rises by 10%. New price in £?', marks: 1, type: 'number', answer: 22, answerDisplay: '£22  (20 + 2)' },
        { id: 'pc2-7b', label: 'b) A test has 40 marks. Tom gets 70%. How many marks?', marks: 1, type: 'number', answer: 28, answerDisplay: '28  (70% of 40)' },
        { id: 'pc2-7c', label: 'c) Sale: 50% off £18. New price in £?', marks: 1, type: 'number', answer: 9, answerDisplay: '£9  (half of 18)' },
        { id: 'pc2-7d', label: 'd) 30% of a 50 cm ribbon is cut off. How many cm are cut?', marks: 1, type: 'number', answer: 15, answerDisplay: '15  (30% of 50)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 3! 🌟' },
    { min: 18, label: 'Good — review the questions you missed, then push on.' },
    { min: 13, label: 'Getting there — revisit Lesson 3 (percent of an amount).' },
    { min: 0, label: 'Keep practising — go back over the lessons, then try again.' },
  ],
};
