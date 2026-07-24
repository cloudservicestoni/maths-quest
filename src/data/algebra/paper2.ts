import type { Paper } from '../../types/content';

export const algebraPaper2: Paper = {
  id: 'algebra-paper-2',
  topicId: 'algebra',
  topicTitle: 'Algebra',
  topicDescription: 'Letters, equations, sequences and inequalities — the language of 11+ maths.',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. You will need to form equations ' +
    'from word problems — read carefully and choose a letter for the unknown.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Substitution. Use p = 4 and q = 7.',
      parts: [
        { id: '1a', marks: 1, label: 'a) Find p + q', type: 'number', answer: 11, answerDisplay: '11  (4 + 7)' },
        { id: '1b', marks: 1, label: 'b) Find pq', type: 'number', answer: 28, answerDisplay: '28  (4 × 7)' },
        { id: '1c', marks: 1, label: 'c) Find 2p + 3q', type: 'number', answer: 29, answerDisplay: '29  (2 × 4 + 3 × 7 = 8 + 21)' },
        { id: '1d', marks: 1, label: 'd) Find 5q − 4p', type: 'number', answer: 19, answerDisplay: '19  (5 × 7 − 4 × 4 = 35 − 16)' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Solve each one-step equation.',
      parts: [
        { id: '2a', marks: 1, label: 'a) x ÷ 5 = 6', type: 'number', answer: 30, answerDisplay: '30  (6 × 5)' },
        { id: '2b', marks: 1, label: 'b) x − 11 = 24', type: 'number', answer: 35, answerDisplay: '35  (24 + 11)' },
        { id: '2c', marks: 1, label: 'c) 7x = 63', type: 'number', answer: 9, answerDisplay: '9  (63 ÷ 7)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Solve each two-step equation.',
      parts: [
        { id: '3a', marks: 1, label: 'a) 2x + 9 = 25', type: 'number', answer: 8, answerDisplay: '8  (2x = 16, x = 8)' },
        { id: '3b', marks: 1, label: 'b) 5x − 3 = 32', type: 'number', answer: 7, answerDisplay: '7  (5x = 35, x = 7)' },
        { id: '3c', marks: 1, label: 'c) 3x + 10 = 40', type: 'number', answer: 10, answerDisplay: '10  (3x = 30, x = 10)' },
        { id: '3d', marks: 1, label: 'd) 4x − 7 = 29', type: 'number', answer: 9, answerDisplay: '9  (4x = 36, x = 9)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Form and solve an equation for each problem.',
      parts: [
        { id: '4a', marks: 1, label: 'a) Pens cost £x each. 4 pens cost £20. Find x.', type: 'number', answer: 5, answerDisplay: '5  (4x = 20 → x = 5)' },
        { id: '4b', marks: 1, label: 'b) Three friends each have n cards. They have 45 in total. Find n.', type: 'number', answer: 15, answerDisplay: '15  (3n = 45 → n = 15)' },
        { id: '4c', marks: 1, label: 'c) I double a number and subtract 7. The answer is 13. Find the number.', type: 'number', answer: 10, answerDisplay: '10  (2n − 7 = 13 → 2n = 20 → n = 10)' },
        { id: '4d', marks: 1, label: 'd) Two numbers differ by 6. The larger is 3 times the smaller. Find the smaller number.', type: 'number', answer: 3, answerDisplay: '3  (3n − n = 6 → 2n = 6 → n = 3)' },
      ],
    },
    {
      n: 5, marks: 3, prompt: 'Find the next term in each sequence.',
      parts: [
        { id: '5a', marks: 1, label: 'a) 3, 8, 13, 18, ___', type: 'number', answer: 23, answerDisplay: '23  (add 5 each time)' },
        { id: '5b', marks: 1, label: 'b) 100, 90, 81, 73, ___  (differences decrease by 1 each time)', type: 'number', answer: 66, answerDisplay: '66  (differences: 10, 9, 8, 7 → next difference = 7; 73 − 7)' },
        { id: '5c', marks: 1, label: 'c) 1, 2, 4, 8, 16, ___', type: 'number', answer: 32, answerDisplay: '32  (multiply by 2 each time)' },
      ],
    },
    {
      n: 6, marks: 4, prompt: 'Choose the correct expression.',
      parts: [
        { id: '6a', marks: 1, label: 'a) A square has side length s. What is its perimeter?', type: 'choice', options: ['4s', 's + 4', 's²', '4 ÷ s'], answer: '4s', answerDisplay: '4s  (4 × side)' },
        { id: '6b', marks: 1, label: 'b) A rectangle is 3 cm longer than it is wide. Width = w. What is the length?', type: 'choice', options: ['w + 3', 'w − 3', '3w', 'w ÷ 3'], answer: 'w + 3', answerDisplay: 'w + 3' },
        { id: '6c', marks: 1, label: 'c) n is an even number. What is the next even number?', type: 'choice', options: ['n + 2', 'n + 1', '2n', 'n − 2'], answer: 'n + 2', answerDisplay: 'n + 2' },
        { id: '6d', marks: 1, label: 'd) 5 friends share x sweets equally. Each gets?', type: 'choice', options: ['x ÷ 5', '5x', 'x + 5', 'x − 5'], answer: 'x ÷ 5', answerDisplay: 'x ÷ 5' },
      ],
    },
    {
      n: 7, marks: 3, prompt: 'Mixed harder.',
      parts: [
        { id: '7a', marks: 1, label: 'a) Angles in a triangle are x, 2x, 3x. Find x (in degrees).', type: 'number', answer: 30, answerDisplay: '30°  (6x = 180 → x = 30)' },
        { id: '7b', marks: 1, label: 'b) Solve 10x − 7 = 43', type: 'number', answer: 5, answerDisplay: '5  (10x = 50, x = 5)' },
        { id: '7c', marks: 1, label: 'c) If m = 8, find m × m − 10', type: 'number', answer: 54, answerDisplay: '54  (8 × 8 − 10 = 64 − 10)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 3! 🌟' },
    { min: 18, label: 'Good — review any slips, then push on.' },
    { min: 13, label: 'Getting there — revisit Lessons 3 & 4.' },
    { min: 0, label: 'Keep practising — go back over the lessons, then try again.' },
  ],
};
