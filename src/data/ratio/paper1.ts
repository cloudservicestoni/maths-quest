import type { Paper } from '../../types/content';

export const ratioPaper1: Paper = {
  id: 'ratio-paper-1',
  topicId: 'ratio',
  topicTitle: 'Ratio',
  topicDescription: 'Simplify, share and scale ratios — essential 11+ skills.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Show your working where you can — ' +
    'find the total parts, then the value of 1 part.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Simplify each ratio.',
      parts: [
        { id: '1a', marks: 1, label: 'a) Simplify 6 : 9', type: 'text', accept: ['2:3', '2 : 3'], answerDisplay: '2 : 3  (HCF = 3)' },
        { id: '1b', marks: 1, label: 'b) Simplify 20 : 15', type: 'text', accept: ['4:3', '4 : 3'], answerDisplay: '4 : 3  (HCF = 5)' },
        { id: '1c', marks: 1, label: 'c) Simplify 24 : 36', type: 'text', accept: ['2:3', '2 : 3'], answerDisplay: '2 : 3  (HCF = 12)' },
      ],
    },
    {
      n: 2, marks: 3, prompt: 'Find the missing value in each equivalent ratio.',
      parts: [
        { id: '2a', marks: 1, label: 'a) 1 : 4 = ? : 12', type: 'number', answer: 3, answerDisplay: '3  (4 × 3 = 12, so 1 × 3 = 3)' },
        { id: '2b', marks: 1, label: 'b) 3 : 5 = 9 : ?', type: 'number', answer: 15, answerDisplay: '15  (3 × 3 = 9, so 5 × 3 = 15)' },
        { id: '2c', marks: 1, label: 'c) 2 : 7 = 8 : ?', type: 'number', answer: 28, answerDisplay: '28  (2 × 4 = 8, so 7 × 4 = 28)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Share £30 in the ratio 2 : 3.',
      diagram: { type: 'barChart', data: { title: 'Ratio 2 : 3 (5 parts total)', yMax: 3, bars: [{ label: 'A  (2 parts)', value: 2 }, { label: 'B  (3 parts)', value: 3 }] } },
      parts: [
        { id: '3a', marks: 1, label: 'a) Total number of parts =', type: 'number', answer: 5, answerDisplay: '5  (2 + 3)' },
        { id: '3b', marks: 1, label: 'b) Value of 1 part = £', type: 'number', answer: 6, answerDisplay: '£6  (£30 ÷ 5)' },
        { id: '3c', marks: 1, label: 'c) Smaller share = £', type: 'number', answer: 12, answerDisplay: '£12  (2 × £6)' },
        { id: '3d', marks: 1, label: 'd) Larger share = £', type: 'number', answer: 18, answerDisplay: '£18  (3 × £6)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Write each ratio as a fraction of the total.',
      parts: [
        { id: '4a', marks: 1, label: 'a) Ratio 3 : 5 — what fraction of the total is the smaller part?', type: 'fraction', answer: '3/8', answerDisplay: '3/8  (3 out of 3 + 5 = 8)' },
        { id: '4b', marks: 1, label: 'b) Ratio 1 : 4 — what fraction of the total is the larger part?', type: 'fraction', answer: '4/5', answerDisplay: '4/5  (4 out of 1 + 4 = 5)' },
        { id: '4c', marks: 1, label: 'c) Ratio 2 : 3 — what fraction of the total is the larger part?', type: 'fraction', answer: '3/5', answerDisplay: '3/5  (3 out of 2 + 3 = 5)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Share 36 in the ratio 1 : 2 : 3.',
      diagram: { type: 'barChart', data: { title: 'Ratio 1 : 2 : 3 (6 parts total)', yMax: 3, bars: [{ label: 'A (1)', value: 1 }, { label: 'B (2)', value: 2 }, { label: 'C (3)', value: 3 }] } },
      parts: [
        { id: '5a', marks: 1, label: 'a) Total number of parts =', type: 'number', answer: 6, answerDisplay: '6  (1 + 2 + 3)' },
        { id: '5b', marks: 1, label: 'b) Value of 1 part =', type: 'number', answer: 6, answerDisplay: '6  (36 ÷ 6)' },
        { id: '5c', marks: 1, label: 'c) Smallest share =', type: 'number', answer: 6, answerDisplay: '6  (1 × 6)' },
        { id: '5d', marks: 1, label: 'd) Largest share =', type: 'number', answer: 18, answerDisplay: '18  (3 × 6)' },
      ],
    },
    {
      n: 6, marks: 4, prompt: 'Tom and Lucy share sweets in the ratio 3 : 4. Tom gets 18 sweets.',
      parts: [
        { id: '6a', marks: 1, label: 'a) How many ratio parts does Tom have?', type: 'number', answer: 3, answerDisplay: '3' },
        { id: '6b', marks: 1, label: 'b) Value of 1 part =', type: 'number', answer: 6, answerDisplay: '6  (18 ÷ 3)' },
        { id: '6c', marks: 1, label: "c) Lucy's sweets =", type: 'number', answer: 24, answerDisplay: '24  (4 × 6)' },
        { id: '6d', marks: 1, label: 'd) Total sweets =', type: 'number', answer: 42, answerDisplay: '42  (18 + 24)' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Mixed questions.',
      parts: [
        { id: '7a', marks: 1, label: 'a) Simplify 45 : 30', type: 'text', accept: ['3:2', '3 : 2'], answerDisplay: '3 : 2  (HCF = 15)' },
        { id: '7b', marks: 1, label: 'b) 5 : 3 = ? : 18', type: 'number', answer: 30, answerDisplay: '30  (3 × 6 = 18, so 5 × 6 = 30)' },
        { id: '7c', marks: 1, label: 'c) Share 48 in ratio 1 : 3. What is the larger share?', type: 'number', answer: 36, answerDisplay: '36  (4 parts, 1 part = 12; larger = 3 × 12 = 36)' },
        { id: '7d', marks: 1, label: 'd) Ratio 5 : 7 — what fraction of the total is the smaller part?', type: 'fraction', answer: '5/12', answerDisplay: '5/12  (5 out of 5 + 7 = 12)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 2! 🌟' },
    { min: 18, label: 'Good — review any slips, then push on.' },
    { min: 13, label: 'Getting there — go back over Lessons 1–3.' },
    { min: 0, label: 'Keep practising — revisit the lessons, then try again.' },
  ],
};
