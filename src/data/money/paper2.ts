/*
 * Money — Paper 2 (Moderate)
 * 20 minutes · 25 marks · short-answer.
 * Two-way conversions, adding/subtracting with decimals, multiplying, change,
 * best-value per-unit, and coin facts.
 */
import type { Paper } from '../../types/content';

export const moneyPaper2: Paper = {
  id: 'money-paper-2',
  topicId: 'money',
  topicTitle: 'Money',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Line up the decimal points when ' +
    'adding, and read each word problem carefully.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Convert between pounds and pence.',
      parts: [
        { id: 'mo2-1a', label: 'a) £4.05 = ___ p', marks: 1, type: 'number', answer: 405, answerDisplay: '405  (4.05 × 100)' },
        { id: 'mo2-1b', label: 'b) 630p = £ ___', marks: 1, type: 'number', answer: 6.3, answerDisplay: '£6.30' },
        { id: 'mo2-1c', label: 'c) £0.09 = ___ p', marks: 1, type: 'number', answer: 9, answerDisplay: '9p' },
        { id: 'mo2-1d', label: 'd) 1250p = £ ___', marks: 1, type: 'number', answer: 12.5, answerDisplay: '£12.50' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Add the money (write the £ total).',
      parts: [
        { id: 'mo2-2a', label: 'a) £2.45 + £1.55 = £ ___', marks: 1, type: 'number', answer: 4, answerDisplay: '£4.00' },
        { id: 'mo2-2b', label: 'b) £3.20 + £4.95 = £ ___', marks: 1, type: 'number', answer: 8.15, answerDisplay: '£8.15' },
        { id: 'mo2-2c', label: 'c) £1.75 + 60p = £ ___', marks: 1, type: 'number', answer: 2.35, answerDisplay: '£2.35' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Subtract / give change.',
      parts: [
        { id: 'mo2-3a', label: 'a) £5 − £2.35 = £ ___', marks: 1, type: 'number', answer: 2.65, answerDisplay: '£2.65' },
        { id: 'mo2-3b', label: 'b) £10 − £6.40 = £ ___', marks: 1, type: 'number', answer: 3.6, answerDisplay: '£3.60' },
        { id: 'mo2-3c', label: 'c) £20 paid for £13.50 of shopping. Change in £?', marks: 1, type: 'number', answer: 6.5, answerDisplay: '£6.50' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Buying several items.',
      parts: [
        { id: 'mo2-4a', label: 'a) 4 pens at £1.25 each. Total in £?', marks: 1, type: 'number', answer: 5, answerDisplay: '£5.00' },
        { id: 'mo2-4b', label: 'b) 6 sweets at 15p each. Total in p?', marks: 1, type: 'number', answer: 90, answerDisplay: '90p' },
        { id: 'mo2-4c', label: 'c) 3 books at £4.50 each. Total in £?', marks: 1, type: 'number', answer: 13.5, answerDisplay: '£13.50' },
        { id: 'mo2-4d', label: 'd) 5 stamps at 70p each. Total in £?', marks: 1, type: 'number', answer: 3.5, answerDisplay: '£3.50' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Multi-step word problem.',
      parts: [
        { id: 'mo2-5a', label: 'a) Mia buys 3 pens at £1.20 each. Total in £?', marks: 1, type: 'number', answer: 3.6, answerDisplay: '£3.60' },
        { id: 'mo2-5b', label: 'b) She pays with £5. Change in £?', marks: 1, type: 'number', answer: 1.4, answerDisplay: '£1.40' },
        { id: 'mo2-5c', label: 'c) 2 drinks at £1.30 and a sandwich at £2.40. Total in £?', marks: 1, type: 'number', answer: 5, answerDisplay: '£5.00' },
        { id: 'mo2-5d', label: 'd) Paid with £10 for part (c). Change in £?', marks: 1, type: 'number', answer: 5, answerDisplay: '£5.00' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Best value and price per unit.',
      parts: [
        { id: 'mo2-6a', label: 'a) Cheaper per pen: 3 for £1.50 or 4 for £1.60? Write the lower price per pen, in p.', marks: 1, type: 'number', answer: 40, answerDisplay: '40p  (50p vs 40p each)' },
        { id: 'mo2-6b', label: 'b) A 1 kg bag of rice costs £2. Price per 100 g, in p?', marks: 1, type: 'number', answer: 20, answerDisplay: '20p  (200p ÷ 10)' },
        { id: 'mo2-6c', label: 'c) 10 apples cost £2. Cost of 1 apple, in p?', marks: 1, type: 'number', answer: 20, answerDisplay: '20p  (200p ÷ 10)' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Coins and quick sums.',
      parts: [
        { id: 'mo2-7a', label: 'a) How many 20p coins make £1?', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (100 ÷ 20)' },
        { id: 'mo2-7b', label: 'b) How many 50p coins make £5?', marks: 1, type: 'number', answer: 10, answerDisplay: '10  (500 ÷ 50)' },
        { id: 'mo2-7c', label: 'c) £7.50 = ___ p', marks: 1, type: 'number', answer: 750, answerDisplay: '750' },
        { id: 'mo2-7d', label: 'd) 3 × £2.25 = £ ___', marks: 1, type: 'number', answer: 6.75, answerDisplay: '£6.75' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 3! 🌟' },
    { min: 18, label: 'Good — review the questions you missed, then push on.' },
    { min: 13, label: 'Getting there — revisit Lessons 2 & 3.' },
    { min: 0, label: 'Keep practising — go back over the lessons, then try again.' },
  ],
};
