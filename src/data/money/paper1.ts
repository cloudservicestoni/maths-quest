/*
 * Money — Paper 1 (Basics)
 * 20 minutes · 25 marks · short-answer.
 * £↔p conversions, simple adding, change, multiplying, easy word problems.
 */
import type { Paper } from '../../types/content';

export const moneyPaper1: Paper = {
  id: 'money-paper-1',
  topicId: 'money',
  topicTitle: 'Money',
  title: 'Paper 1',
  subtitle: 'Basics',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Remember £1 = 100p. ' +
    'Write money amounts carefully — the two digits after the dot are the pence.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Change these pounds into pence.',
      parts: [
        { id: 'mo1-1a', label: 'a) £1 = ___ p', marks: 1, type: 'number', answer: 100, answerDisplay: '100' },
        { id: 'mo1-1b', label: 'b) £3 = ___ p', marks: 1, type: 'number', answer: 300, answerDisplay: '300  (3 × 100)' },
        { id: 'mo1-1c', label: 'c) £2.50 = ___ p', marks: 1, type: 'number', answer: 250, answerDisplay: '250  (2.50 × 100)' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Change these pence into pounds (write the £ amount).',
      parts: [
        { id: 'mo1-2a', label: 'a) 200p = £ ___', marks: 1, type: 'number', answer: 2, answerDisplay: '£2' },
        { id: 'mo1-2b', label: 'b) 450p = £ ___', marks: 1, type: 'number', answer: 4.5, answerDisplay: '£4.50' },
        { id: 'mo1-2c', label: 'c) 75p = £ ___', marks: 1, type: 'number', answer: 0.75, answerDisplay: '£0.75' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Add the money (write the £ total).',
      parts: [
        { id: 'mo1-3a', label: 'a) £1.20 + £2.30 = £ ___', marks: 1, type: 'number', answer: 3.5, answerDisplay: '£3.50' },
        { id: 'mo1-3b', label: 'b) £2.50 + £1.50 = £ ___', marks: 1, type: 'number', answer: 4, answerDisplay: '£4.00' },
        { id: 'mo1-3c', label: 'c) £3.40 + £0.60 = £ ___', marks: 1, type: 'number', answer: 4, answerDisplay: '£4.00' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Work out the change.',
      parts: [
        { id: 'mo1-4a', label: 'a) £5 paid for a £3 toy. Change in £?', marks: 1, type: 'number', answer: 2, answerDisplay: '£2' },
        { id: 'mo1-4b', label: 'b) £2 paid for a £1.40 drink. Change in p?', marks: 1, type: 'number', answer: 60, answerDisplay: '60p' },
        { id: 'mo1-4c', label: 'c) £10 paid, £7 spent. Change in £?', marks: 1, type: 'number', answer: 3, answerDisplay: '£3' },
      ],
    },
    {
      n: 5, marks: 2, prompt: 'Money facts.',
      parts: [
        { id: 'mo1-5a', label: 'a) £1 = ___ p', marks: 1, type: 'number', answer: 100, answerDisplay: '100' },
        { id: 'mo1-5b', label: 'b) How many pence are in £4?', marks: 1, type: 'number', answer: 400, answerDisplay: '400' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Buying several items.',
      parts: [
        { id: 'mo1-6a', label: 'a) 3 toys at £2 each. Total in £?', marks: 1, type: 'number', answer: 6, answerDisplay: '£6' },
        { id: 'mo1-6b', label: 'b) 5 stickers at 20p each. Total in p?', marks: 1, type: 'number', answer: 100, answerDisplay: '100p' },
        { id: 'mo1-6c', label: 'c) 4 cakes at £1.50 each. Total in £?', marks: 1, type: 'number', answer: 6, answerDisplay: '£6.00' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Writing and converting amounts.',
      parts: [
        { id: 'mo1-7a', label: 'a) How do you write 325 pence in pounds?', marks: 1, type: 'choice', options: ['£3.25', '£32.50', '£0.325', '£325'], answer: '£3.25', answerDisplay: '£3.25' },
        { id: 'mo1-7b', label: 'b) £0.05 = ___ p', marks: 1, type: 'number', answer: 5, answerDisplay: '5p' },
        { id: 'mo1-7c', label: 'c) 150p = £ ___', marks: 1, type: 'number', answer: 1.5, answerDisplay: '£1.50' },
        { id: 'mo1-7d', label: 'd) £6 = ___ p', marks: 1, type: 'number', answer: 600, answerDisplay: '600' },
      ],
    },
    {
      n: 8, marks: 4, prompt: 'Word problems.',
      parts: [
        { id: 'mo1-8a', label: 'a) Sam buys a £2.40 book and a £1.60 pen. Total in £?', marks: 1, type: 'number', answer: 4, answerDisplay: '£4.00' },
        { id: 'mo1-8b', label: 'b) He pays with £5. Change in £?', marks: 1, type: 'number', answer: 1, answerDisplay: '£1' },
        { id: 'mo1-8c', label: 'c) 2 drinks at £1.25 each. Total in £?', marks: 1, type: 'number', answer: 2.5, answerDisplay: '£2.50' },
        { id: 'mo1-8d', label: 'd) A pencil costs 35p. How much for 2, in p?', marks: 1, type: 'number', answer: 70, answerDisplay: '70p' },
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
