import type { Paper } from '../../types/content';

export const ratioPaper3: Paper = {
  id: 'ratio-paper-3',
  topicId: 'ratio',
  topicTitle: 'Ratio',
  topicDescription: 'Simplify, share and scale ratios — essential 11+ skills.',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These questions need two or more ' +
    'steps — read carefully, write out your working, and check your answers.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Simplify each ratio.',
      parts: [
        { id: '1a', marks: 1, label: 'a) Simplify 72 : 48 : 24', type: 'text', accept: ['3:2:1', '3 : 2 : 1'], answerDisplay: '3 : 2 : 1  (HCF = 24)' },
        { id: '1b', marks: 1, label: 'b) Simplify 35 : 21', type: 'text', accept: ['5:3', '5 : 3'], answerDisplay: '5 : 3  (HCF = 7)' },
        { id: '1c', marks: 1, label: 'c) Simplify 1.5 : 2.5 (write as whole numbers)', type: 'text', accept: ['3:5', '3 : 5'], answerDisplay: '3 : 5  (multiply both by 2 → 3 : 5)' },
        { id: '1d', marks: 1, label: 'd) A ratio simplifies to 3 : 4. The smaller number is 36. What is the larger number?', type: 'number', answer: 48, answerDisplay: '48  (36 ÷ 3 = 12; larger = 4 × 12 = 48)' },
      ],
    },
    {
      n: 2, marks: 4, prompt: "Emma and Jack's ages are in the ratio 2 : 5. Their combined age is 28.",
      diagram: { type: 'barChart', data: { title: 'Ratio 2 : 5 (7 parts total)', yMax: 5, bars: [{ label: 'Emma  (2)', value: 2 }, { label: 'Jack  (5)', value: 5 }] } },
      parts: [
        { id: '2a', marks: 1, label: 'a) Total number of parts =', type: 'number', answer: 7, answerDisplay: '7  (2 + 5)' },
        { id: '2b', marks: 1, label: 'b) Value of 1 part =', type: 'number', answer: 4, answerDisplay: '4  (28 ÷ 7)' },
        { id: '2c', marks: 1, label: "c) Emma's age =", type: 'number', answer: 8, answerDisplay: '8  (2 × 4)' },
        { id: '2d', marks: 1, label: "d) Jack's age =", type: 'number', answer: 20, answerDisplay: '20  (5 × 4)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'In a fruit bowl, apples : oranges : bananas = 2 : 3 : 5. There are 12 apples.',
      parts: [
        { id: '3a', marks: 1, label: 'a) Value of 1 part =', type: 'number', answer: 6, answerDisplay: '6  (12 ÷ 2)' },
        { id: '3b', marks: 1, label: 'b) Number of oranges =', type: 'number', answer: 18, answerDisplay: '18  (3 × 6)' },
        { id: '3c', marks: 1, label: 'c) Number of bananas =', type: 'number', answer: 30, answerDisplay: '30  (5 × 6)' },
        { id: '3d', marks: 1, label: 'd) Total fruit =', type: 'number', answer: 60, answerDisplay: '60  (12 + 18 + 30)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'A bag has 6 red and 9 blue sweets. Then 3 red sweets are added.',
      parts: [
        { id: '4a', marks: 1, label: 'a) Write the original ratio red : blue in simplest form.', type: 'text', accept: ['2:3', '2 : 3'], answerDisplay: '2 : 3  (6 : 9, HCF = 3)' },
        { id: '4b', marks: 1, label: 'b) New number of red sweets =', type: 'number', answer: 9, answerDisplay: '9  (6 + 3)' },
        { id: '4c', marks: 1, label: 'c) New ratio red : blue in simplest form.', type: 'text', accept: ['1:1', '1 : 1'], answerDisplay: '1 : 1  (9 : 9, HCF = 9)' },
        { id: '4d', marks: 1, label: 'd) How many blue sweets need to be removed so the ratio becomes 3 : 2?', type: 'number', answer: 3, answerDisplay: '3  (9 red → 3 parts of 3; blue needs to be 2 × 3 = 6; remove 9 − 6 = 3)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'A recipe for 6 people uses 450 g flour, 300 g sugar and 150 g butter.',
      parts: [
        { id: '5a', marks: 1, label: 'a) Write flour : sugar : butter in simplest form.', type: 'text', accept: ['3:2:1', '3 : 2 : 1'], answerDisplay: '3 : 2 : 1  (divide each by 150)' },
        { id: '5b', marks: 1, label: 'b) How much flour (in g) is needed for 4 people?', type: 'number', answer: 300, answerDisplay: '300 g  (450 ÷ 6 × 4 = 75 × 4)' },
        { id: '5c', marks: 1, label: 'c) How much sugar (in g) is needed for 10 people?', type: 'number', answer: 500, answerDisplay: '500 g  (300 ÷ 6 × 10 = 50 × 10)' },
        { id: '5d', marks: 1, label: 'd) How much butter (in g) is needed for 9 people?', type: 'number', answer: 225, answerDisplay: '225 g  (150 ÷ 6 × 9 = 25 × 9)' },
      ],
    },
    {
      n: 6, marks: 5, prompt: 'Two numbers are in the ratio 5 : 8. Their difference is 12.',
      parts: [
        { id: '6a', marks: 1, label: 'a) How many ratio parts is the difference? (8 − 5 = ?)', type: 'number', answer: 3, answerDisplay: '3  (8 − 5 = 3 parts)' },
        { id: '6b', marks: 1, label: 'b) Value of 1 part =', type: 'number', answer: 4, answerDisplay: '4  (12 ÷ 3)' },
        { id: '6c', marks: 1, label: 'c) Smaller number =', type: 'number', answer: 20, answerDisplay: '20  (5 × 4)' },
        { id: '6d', marks: 1, label: 'd) Larger number =', type: 'number', answer: 32, answerDisplay: '32  (8 × 4)' },
        { id: '6e', marks: 1, label: 'e) Sum of the two numbers =', type: 'number', answer: 52, answerDisplay: '52  (20 + 32)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — top-level ratio mastery! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit Lessons 3 & 4, then retry.' },
    { min: 0, label: 'These are tough — go back over the lessons, then try again.' },
  ],
};
