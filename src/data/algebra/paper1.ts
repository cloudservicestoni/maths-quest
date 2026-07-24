import type { Paper } from '../../types/content';

export const algebraPaper1: Paper = {
  id: 'algebra-paper-1',
  topicId: 'algebra',
  topicTitle: 'Algebra',
  topicDescription: 'Letters, equations, sequences and inequalities — the language of 11+ maths.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Replace the letter with the given ' +
    'value, then use inverse operations to solve each equation.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Substitution. Use a = 3 and b = 5.',
      parts: [
        { id: '1a', marks: 1, label: 'a) Find a + b', type: 'number', answer: 8, answerDisplay: '8  (3 + 5)' },
        { id: '1b', marks: 1, label: 'b) Find 2a', type: 'number', answer: 6, answerDisplay: '6  (2 × 3)' },
        { id: '1c', marks: 1, label: 'c) Find 3b − 4', type: 'number', answer: 11, answerDisplay: '11  (3 × 5 − 4 = 15 − 4)' },
        { id: '1d', marks: 1, label: 'd) Find ab', type: 'number', answer: 15, answerDisplay: '15  (3 × 5)' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Solve each one-step equation.',
      parts: [
        { id: '2a', marks: 1, label: 'a) x + 5 = 12', type: 'number', answer: 7, answerDisplay: '7  (12 − 5)' },
        { id: '2b', marks: 1, label: 'b) x − 3 = 9', type: 'number', answer: 12, answerDisplay: '12  (9 + 3)' },
        { id: '2c', marks: 1, label: 'c) 4x = 20', type: 'number', answer: 5, answerDisplay: '5  (20 ÷ 4)' },
        { id: '2d', marks: 1, label: 'd) x ÷ 3 = 4', type: 'number', answer: 12, answerDisplay: '12  (4 × 3)' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Choose the correct expression.',
      parts: [
        { id: '3a', marks: 1, label: 'a) Tom has n pencils. He gets 4 more. How many does he have?', type: 'choice', options: ['n + 4', 'n − 4', '4n', 'n ÷ 4'], answer: 'n + 4', answerDisplay: 'n + 4' },
        { id: '3b', marks: 1, label: 'b) Lucy has n books — 3 times as many as her friend. Expression for Lucy?', type: 'choice', options: ['3n', 'n + 3', 'n − 3', 'n ÷ 3'], answer: '3n', answerDisplay: '3n' },
        { id: '3c', marks: 1, label: 'c) p people each pay £5. Total cost?', type: 'choice', options: ['5p', 'p + 5', 'p − 5', 'p ÷ 5'], answer: '5p', answerDisplay: '5p' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Solve each two-step equation.',
      parts: [
        { id: '4a', marks: 1, label: 'a) 2x + 1 = 11', type: 'number', answer: 5, answerDisplay: '5  (2x = 10, x = 5)' },
        { id: '4b', marks: 1, label: 'b) 3x − 4 = 11', type: 'number', answer: 5, answerDisplay: '5  (3x = 15, x = 5)' },
        { id: '4c', marks: 1, label: 'c) 4x + 3 = 19', type: 'number', answer: 4, answerDisplay: '4  (4x = 16, x = 4)' },
        { id: '4d', marks: 1, label: 'd) 5x − 6 = 14', type: 'number', answer: 4, answerDisplay: '4  (5x = 20, x = 4)' },
      ],
    },
    {
      n: 5, marks: 3, prompt: 'Form and solve.',
      parts: [
        { id: '5a', marks: 1, label: 'a) I think of a number, multiply by 3 and add 5. The answer is 17. Find the number.', type: 'number', answer: 4, answerDisplay: '4  (3n + 5 = 17 → 3n = 12 → n = 4)' },
        { id: '5b', marks: 1, label: 'b) I think of a number, multiply by 4 and subtract 6. The answer is 18. Find the number.', type: 'number', answer: 6, answerDisplay: '6  (4n − 6 = 18 → 4n = 24 → n = 6)' },
        { id: '5c', marks: 1, label: 'c) Two angles on a straight line are x and 2x. Find x (in degrees).', type: 'number', answer: 60, answerDisplay: '60°  (x + 2x = 180 → 3x = 180 → x = 60)' },
      ],
    },
    {
      n: 6, marks: 4, prompt: 'Find the next term in each sequence.',
      parts: [
        { id: '6a', marks: 1, label: 'a) 3, 7, 11, 15, ___', type: 'number', answer: 19, answerDisplay: '19  (add 4 each time)' },
        { id: '6b', marks: 1, label: 'b) 2, 6, 18, 54, ___', type: 'number', answer: 162, answerDisplay: '162  (multiply by 3 each time)' },
        { id: '6c', marks: 1, label: 'c) 50, 43, 36, 29, ___', type: 'number', answer: 22, answerDisplay: '22  (subtract 7 each time)' },
        { id: '6d', marks: 1, label: 'd) 1, 4, 9, 16, ___', type: 'number', answer: 25, answerDisplay: '25  (square numbers: 1², 2², 3², 4², 5²)' },
      ],
    },
    {
      n: 7, marks: 3, prompt: 'Mixed.',
      parts: [
        { id: '7a', marks: 1, label: 'a) If y = 6, find 2y + 3', type: 'number', answer: 15, answerDisplay: '15  (2 × 6 + 3 = 12 + 3)' },
        { id: '7b', marks: 1, label: 'b) Solve 6x = 42', type: 'number', answer: 7, answerDisplay: '7  (42 ÷ 6)' },
        { id: '7c', marks: 1, label: 'c) Solve 3x + 2 = 20', type: 'number', answer: 6, answerDisplay: '6  (3x = 18, x = 6)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 2! 🌟' },
    { min: 18, label: 'Good — review any slips, then push on.' },
    { min: 13, label: 'Getting there — go back over Lessons 2 & 3.' },
    { min: 0, label: 'Keep practising — revisit the lessons, then try again.' },
  ],
};
