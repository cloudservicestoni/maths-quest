import type { Paper } from '../../types/content';

export const ratioPaper2: Paper = {
  id: 'ratio-paper-2',
  topicId: 'ratio',
  topicTitle: 'Ratio',
  topicDescription: 'Simplify, share and scale ratios — essential 11+ skills.',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. You will need to work backwards ' +
    'from a given share — divide by the ratio number to find 1 part, then multiply.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Simplify each ratio.',
      parts: [
        { id: '1a', marks: 1, label: 'a) Simplify 42 : 28', type: 'text', accept: ['3:2', '3 : 2'], answerDisplay: '3 : 2  (HCF = 14)' },
        { id: '1b', marks: 1, label: 'b) Simplify 35 : 56', type: 'text', accept: ['5:8', '5 : 8'], answerDisplay: '5 : 8  (HCF = 7)' },
        { id: '1c', marks: 1, label: 'c) Simplify 16 : 24 : 40', type: 'text', accept: ['2:3:5', '2 : 3 : 5'], answerDisplay: '2 : 3 : 5  (HCF = 8)' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Tom and Sam share £60 in the ratio 2 : 3.',
      diagram: { type: 'barChart', data: { title: 'Ratio 2 : 3 (5 parts total)', yMax: 3, bars: [{ label: 'Tom  (2)', value: 2 }, { label: 'Sam  (3)', value: 3 }] } },
      parts: [
        { id: '2a', marks: 1, label: 'a) Total number of parts =', type: 'number', answer: 5, answerDisplay: '5  (2 + 3)' },
        { id: '2b', marks: 1, label: 'b) Value of 1 part = £', type: 'number', answer: 12, answerDisplay: '£12  (£60 ÷ 5)' },
        { id: '2c', marks: 1, label: "c) Tom's share = £", type: 'number', answer: 24, answerDisplay: '£24  (2 × £12)' },
        { id: '2d', marks: 1, label: "d) Sam's share = £", type: 'number', answer: 36, answerDisplay: '£36  (3 × £12)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Pens and pencils are in the ratio 3 : 7. There are 15 pens.',
      parts: [
        { id: '3a', marks: 1, label: 'a) Value of 1 part =', type: 'number', answer: 5, answerDisplay: '5  (15 ÷ 3)' },
        { id: '3b', marks: 1, label: 'b) Number of pencils =', type: 'number', answer: 35, answerDisplay: '35  (7 × 5)' },
        { id: '3c', marks: 1, label: 'c) Total pens and pencils =', type: 'number', answer: 50, answerDisplay: '50  (15 + 35)' },
        { id: '3d', marks: 1, label: 'd) What fraction of the total are pencils?', type: 'fraction', answer: '7/10', answerDisplay: '7/10  (7 out of 3 + 7 = 10 parts)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Scale problems.',
      parts: [
        { id: '4a', marks: 1, label: 'a) A recipe needs flour and sugar in ratio 5 : 2. You use 20 g sugar. How much flour (in g)?', type: 'number', answer: 50, answerDisplay: '50 g  (1 part = 20 ÷ 2 = 10; flour = 5 × 10 = 50)' },
        { id: '4b', marks: 1, label: 'b) A model car is made at scale 1 : 20. The model is 15 cm long. How long is the real car (in cm)?', type: 'number', answer: 300, answerDisplay: '300 cm  (15 × 20)' },
        { id: '4c', marks: 1, label: 'c) Cement and sand are mixed in ratio 1 : 3. You use 6 kg of cement. How many kg of sand?', type: 'number', answer: 18, answerDisplay: '18 kg  (3 × 6)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Share 84 in the ratio 2 : 3 : 7.',
      diagram: { type: 'barChart', data: { title: 'Ratio 2 : 3 : 7 (12 parts total)', yMax: 7, bars: [{ label: 'A (2)', value: 2 }, { label: 'B (3)', value: 3 }, { label: 'C (7)', value: 7 }] } },
      parts: [
        { id: '5a', marks: 1, label: 'a) Total number of parts =', type: 'number', answer: 12, answerDisplay: '12  (2 + 3 + 7)' },
        { id: '5b', marks: 1, label: 'b) Value of 1 part =', type: 'number', answer: 7, answerDisplay: '7  (84 ÷ 12)' },
        { id: '5c', marks: 1, label: 'c) Smallest share =', type: 'number', answer: 14, answerDisplay: '14  (2 × 7)' },
        { id: '5d', marks: 1, label: 'd) Largest share =', type: 'number', answer: 49, answerDisplay: '49  (7 × 7)' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'A jar has red and blue marbles in the ratio 4 : 5. There are 36 red marbles.',
      parts: [
        { id: '6a', marks: 1, label: 'a) Value of 1 part =', type: 'number', answer: 9, answerDisplay: '9  (36 ÷ 4)' },
        { id: '6b', marks: 1, label: 'b) Number of blue marbles =', type: 'number', answer: 45, answerDisplay: '45  (5 × 9)' },
        { id: '6c', marks: 1, label: 'c) Total marbles =', type: 'number', answer: 81, answerDisplay: '81  (36 + 45)' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Mixed questions.',
      parts: [
        { id: '7a', marks: 1, label: 'a) In a class, the ratio of girls to boys is 3 : 4. There are 21 girls. How many boys?', type: 'number', answer: 28, answerDisplay: '28  (1 part = 21 ÷ 3 = 7; boys = 4 × 7 = 28)' },
        { id: '7b', marks: 1, label: 'b) Simplify 72 : 48', type: 'text', accept: ['3:2', '3 : 2'], answerDisplay: '3 : 2  (HCF = 24)' },
        { id: '7c', marks: 1, label: 'c) Share 45 in ratio 4 : 5. What is the larger share?', type: 'number', answer: 25, answerDisplay: '25  (9 parts, 1 part = 5; larger = 5 × 5 = 25)' },
        { id: '7d', marks: 1, label: 'd) A length of 80 cm is split in ratio 3 : 5. What is the shorter piece (in cm)?', type: 'number', answer: 30, answerDisplay: '30 cm  (8 parts, 1 part = 10; shorter = 3 × 10 = 30)' },
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
