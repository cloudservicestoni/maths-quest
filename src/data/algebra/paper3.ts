import type { Paper } from '../../types/content';

export const algebraPaper3: Paper = {
  id: 'algebra-paper-3',
  topicId: 'algebra',
  topicTitle: 'Algebra',
  topicDescription: 'Letters, equations, sequences and inequalities — the language of 11+ maths.',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These need careful equation-forming ' +
    'and multi-step reasoning. Write your working and check every answer.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Substitution. Use a = 2, b = 5, c = 3.',
      parts: [
        { id: '1a', marks: 1, label: 'a) Find a + b + c', type: 'number', answer: 10, answerDisplay: '10  (2 + 5 + 3)' },
        { id: '1b', marks: 1, label: 'b) Find abc', type: 'number', answer: 30, answerDisplay: '30  (2 × 5 × 3)' },
        { id: '1c', marks: 1, label: 'c) Find a × a + b × b', type: 'number', answer: 29, answerDisplay: '29  (4 + 25)' },
        { id: '1d', marks: 1, label: 'd) Find (b + c) × (b + c) ÷ a', type: 'number', answer: 32, answerDisplay: '32  ((5 + 3)² ÷ 2 = 64 ÷ 2)' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Form and solve.',
      parts: [
        { id: '2a', marks: 1, label: 'a) A rectangle has perimeter 40 cm. Its length is 4 cm more than its width. Find the width (in cm).', type: 'number', answer: 8, answerDisplay: '8 cm  (2w + 2(w + 4) = 40 → 4w + 8 = 40 → w = 8)' },
        { id: '2b', marks: 1, label: 'b) Sam is 3 times older than his brother. Their total age is 20. How old is Sam?', type: 'number', answer: 15, answerDisplay: '15  (s + s/3 = 20; let brother = x → 3x + x = 20 → x = 5 → Sam = 15)' },
        { id: '2c', marks: 1, label: 'c) I multiply a number by 5 and subtract 9. The result equals 3 times the number plus 7. Find the number.', type: 'number', answer: 8, answerDisplay: '8  (5n − 9 = 3n + 7 → 2n = 16 → n = 8)' },
        { id: '2d', marks: 1, label: 'd) Four friends each contribute £n to a gift. They still need £8 more to reach £60. Find n.', type: 'number', answer: 13, answerDisplay: '13  (4n + 8 = 60 → 4n = 52 → n = 13)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Sequences and nth term.',
      parts: [
        { id: '3a', marks: 1, label: 'a) Sequence 4, 7, 10, 13... What is the 10th term? (nth term = 3n + 1)', type: 'number', answer: 31, answerDisplay: '31  (3 × 10 + 1)' },
        { id: '3b', marks: 1, label: 'b) Sequence 5, 10, 15, 20... What is the 8th term?', type: 'number', answer: 40, answerDisplay: '40  (5 × 8)' },
        { id: '3c', marks: 1, label: 'c) Next term of 2, 5, 10, 17, 26, ___ (differences increase by 2 each time)', type: 'number', answer: 37, answerDisplay: '37  (differences: 3, 5, 7, 9, 11 → 26 + 11)' },
        { id: '3d', marks: 1, label: 'd) Sequence 3, 6, 9, 12... What is the 20th term?', type: 'number', answer: 60, answerDisplay: '60  (3 × 20)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Inequalities — find whole-number solutions.',
      parts: [
        { id: '4a', marks: 1, label: 'a) 2x > 10. Smallest integer value of x?', type: 'number', answer: 6, answerDisplay: '6  (x > 5, so smallest integer = 6)' },
        { id: '4b', marks: 1, label: 'b) 3x − 2 > 7. Smallest integer value of x?', type: 'number', answer: 4, answerDisplay: '4  (3x > 9, x > 3, smallest integer = 4)' },
        { id: '4c', marks: 1, label: 'c) 5x < 30. Largest integer value of x?', type: 'number', answer: 5, answerDisplay: '5  (x < 6, so largest integer = 5)' },
        { id: '4d', marks: 1, label: 'd) x is a whole number and 2 < 3x < 20. How many values can x take?', type: 'number', answer: 6, answerDisplay: '6  (x can be 1, 2, 3, 4, 5, 6)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Multi-step word problems.',
      parts: [
        { id: '5a', marks: 1, label: 'a) Five consecutive numbers add to 55. What is the smallest?', type: 'number', answer: 9, answerDisplay: '9  (n + (n+1) + (n+2) + (n+3) + (n+4) = 55 → 5n + 10 = 55 → n = 9)' },
        { id: '5b', marks: 1, label: 'b) The larger of two numbers is twice the smaller. Their sum is 30. Find the larger number.', type: 'number', answer: 20, answerDisplay: '20  (n + 2n = 30 → n = 10 → larger = 20)' },
        { id: '5c', marks: 1, label: 'c) A rectangle is 3 times as long as it is wide. Perimeter = 48 cm. Find the width (in cm).', type: 'number', answer: 6, answerDisplay: '6 cm  (2w + 2(3w) = 48 → 8w = 48 → w = 6)' },
        { id: '5d', marks: 1, label: 'd) Apples cost x pence each. I buy 6 apples and pay with a £1 coin, receiving 22p change. Find x.', type: 'number', answer: 13, answerDisplay: '13p  (6x = 100 − 22 = 78 → x = 13)' },
      ],
    },
    {
      n: 6, marks: 5, prompt: 'Hardest mixed.',
      parts: [
        { id: '6a', marks: 1, label: 'a) Angles in a quadrilateral are x, 2x, 3x and 4x. Find x (in degrees).', type: 'number', answer: 36, answerDisplay: '36°  (10x = 360 → x = 36)' },
        { id: '6b', marks: 1, label: 'b) x is a whole number and 10 < 4x < 30. How many values can x take?', type: 'number', answer: 4, answerDisplay: '4  (x = 3, 4, 5, 6: giving 12, 16, 20, 24)' },
        { id: '6c', marks: 1, label: 'c) The sum of three consecutive even numbers is 78. What is the middle one?', type: 'number', answer: 26, answerDisplay: '26  ((n−2) + n + (n+2) = 78 → 3n = 78 → n = 26)' },
        { id: '6d', marks: 1, label: 'd) What is the nth term of the sequence 5, 8, 11, 14, ...?', type: 'text', accept: ['3n+2', '3n + 2'], answerDisplay: '3n + 2  (common difference 3; check: 3×1+2 = 5 ✓)' },
        { id: '6e', marks: 1, label: 'e) I double a number and add 7. This equals 5 times the number minus 8. Find the number.', type: 'number', answer: 5, answerDisplay: '5  (2n + 7 = 5n − 8 → 15 = 3n → n = 5)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — algebra mastery unlocked! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit Lessons 3 & 4, then retry.' },
    { min: 0, label: 'These are tough — go back over the lessons, then try again.' },
  ],
};
