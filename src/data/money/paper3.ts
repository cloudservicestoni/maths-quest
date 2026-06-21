/*
 * Money — Paper 3 (Challenging)
 * 20 minutes · 25 marks · short-answer.
 * Awkward amounts, multiply/divide, change with several items, best value,
 * percentage discounts (cross-topic), and multi-step budgeting.
 */
import type { Paper } from '../../types/content';

export const moneyPaper3: Paper = {
  id: 'money-paper-3',
  topicId: 'money',
  topicTitle: 'Money',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These need two steps or careful ' +
    'reading. Work in pence if the pounds get fiddly, then change back at the end.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Convert and calculate.',
      parts: [
        { id: 'mo3-1a', label: 'a) £12.07 = ___ p', marks: 1, type: 'number', answer: 1207, answerDisplay: '1207' },
        { id: 'mo3-1b', label: 'b) 2005p = £ ___', marks: 1, type: 'number', answer: 20.05, answerDisplay: '£20.05' },
        { id: 'mo3-1c', label: 'c) £3.50 + £4.75 + £1.25 = £ ___', marks: 1, type: 'number', answer: 9.5, answerDisplay: '£9.50' },
        { id: 'mo3-1d', label: 'd) £10 − £3.65 = £ ___', marks: 1, type: 'number', answer: 6.35, answerDisplay: '£6.35' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Multiply and share.',
      parts: [
        { id: 'mo3-2a', label: 'a) 7 tickets at £3.50 each. Total in £?', marks: 1, type: 'number', answer: 24.5, answerDisplay: '£24.50  (7 × 3.50)' },
        { id: 'mo3-2b', label: 'b) £12 shared equally between 4 people. Each gets £?', marks: 1, type: 'number', answer: 3, answerDisplay: '£3  (12 ÷ 4)' },
        { id: 'mo3-2c', label: 'c) 6 cans at 80p each. Total in £?', marks: 1, type: 'number', answer: 4.8, answerDisplay: '£4.80  (480p)' },
        { id: 'mo3-2d', label: 'd) 5 pens cost £9 in total. Price per pen, in p?', marks: 1, type: 'number', answer: 180, answerDisplay: '180p  (900p ÷ 5)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Totals and change with several items.',
      parts: [
        { id: 'mo3-3a', label: 'a) 2 apples at 45p and 1 pear at 60p. Total in p?', marks: 1, type: 'number', answer: 150, answerDisplay: '150p  (90 + 60)' },
        { id: 'mo3-3b', label: 'b) Paid with £2 for part (a). Change in p?', marks: 1, type: 'number', answer: 50, answerDisplay: '50p  (200 − 150)' },
        { id: 'mo3-3c', label: 'c) 3 books at £4.99 each. Total in £?', marks: 1, type: 'number', answer: 14.97, answerDisplay: '£14.97' },
        { id: 'mo3-3d', label: 'd) Paid with £20 for part (c). Change in £?', marks: 1, type: 'number', answer: 5.03, answerDisplay: '£5.03' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Best value (write the lower price per item).',
      parts: [
        { id: 'mo3-4a', label: 'a) Pack A: 4 bars £2.00. Pack B: 6 bars £2.40. Lower price per bar, in p?', marks: 1, type: 'number', answer: 40, answerDisplay: '40p  (A 50p, B 40p)' },
        { id: 'mo3-4b', label: 'b) 500 g of cheese costs £3. Price per 100 g, in p?', marks: 1, type: 'number', answer: 60, answerDisplay: '60p  (300p ÷ 5)' },
        { id: 'mo3-4c', label: 'c) 2 L for £1.50 or 3 L for £2.10? Lower price per litre, in p?', marks: 1, type: 'number', answer: 70, answerDisplay: '70p  (75p vs 70p)' },
        { id: 'mo3-4d', label: 'd) 12 eggs cost £3. Cost of 1 egg, in p?', marks: 1, type: 'number', answer: 25, answerDisplay: '25p  (300p ÷ 12)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Percentage discounts.',
      parts: [
        { id: 'mo3-5a', label: 'a) A £40 coat has 25% off. Sale price in £?', marks: 1, type: 'number', answer: 30, answerDisplay: '£30  (£10 off)' },
        { id: 'mo3-5b', label: 'b) A £15 game has 10% off. How much off, in £?', marks: 1, type: 'number', answer: 1.5, answerDisplay: '£1.50' },
        { id: 'mo3-5c', label: 'c) A £24 toy has 50% off. Sale price in £?', marks: 1, type: 'number', answer: 12, answerDisplay: '£12' },
        { id: 'mo3-5d', label: 'd) A £60 bike has 20% off. Sale price in £?', marks: 1, type: 'number', answer: 48, answerDisplay: '£48  (£12 off)' },
      ],
    },
    {
      n: 6, marks: 5, prompt: 'Budgeting puzzles.',
      parts: [
        { id: 'mo3-6a', label: 'a) You have £20 and buy 3 books at £4.50 each. How much is left, in £?', marks: 1, type: 'number', answer: 6.5, answerDisplay: '£6.50  (20 − 13.50)' },
        { id: 'mo3-6b', label: 'b) Meal deals are £3.50. How many can you buy with £20?', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (5 × 3.50 = 17.50; 6 would be 21)' },
        { id: 'mo3-6c', label: 'c) Pencils are 40p each. How many can you buy with £3?', marks: 1, type: 'number', answer: 7, answerDisplay: '7  (7 × 40 = 280p; 8 would be 320p)' },
        { id: 'mo3-6d', label: 'd) You save £2.50 a week. How much after 6 weeks, in £?', marks: 1, type: 'number', answer: 15, answerDisplay: '£15  (6 × 2.50)' },
        { id: 'mo3-6e', label: 'e) A toy costs £18 and you have £12.50. How much more do you need, in £?', marks: 1, type: 'number', answer: 5.5, answerDisplay: '£5.50  (18 − 12.50)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — you have mastered money problems! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit Lesson 4 (best value & puzzles), then retry.' },
    { min: 0, label: 'These are tough — go back over Lessons 3 & 4, then try again.' },
  ],
};
