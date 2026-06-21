/*
 * Venn Diagrams — Exam Practice Paper 2
 * Difficulty: a moderate step up from Paper 1.
 * 20 minutes · 25 marks · GL/CEM short-answer style.
 *
 * Coverage: single circle, reading a 2-circle diagram, two-circle word problem
 * with working-backwards (find the intersection), a fraction question, a
 * three-circle reading question, a three-circle word problem where the pair
 * figures INCLUDE the all-three (the classic trap), and listing into regions.
 */

import type { Paper } from '../../types/content';

export const vennPaper2: Paper = {
  id: 'venn-paper-2',
  topicId: 'venn',
  topicTitle: 'Venn Diagrams',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Show your working — you can still ' +
    'earn marks for the right method. Remember: fill in the middle first!',

  questions: [
    {
      n: 1,
      marks: 2,
      prompt:
        'The universal set is whole numbers from 1 to 20.\nCircle A contains: {4, 8, 12, 16, 20}',
      parts: [
        {
          id: '2-1a',
          label: 'a) Write a rule that describes the numbers in Circle A.',
          marks: 1,
          type: 'text',
          accept: ['multiple of 4', 'multiples of 4', 'times 4', '4 times table', 'four times table', 'divisible by 4'],
          answerDisplay: 'Multiples of 4',
          placeholder: 'e.g. all the ...',
        },
        {
          id: '2-1b',
          label: 'b) How many numbers are outside Circle A but still in the universal set?',
          marks: 1,
          type: 'number',
          answer: 15,
          answerDisplay: '15  (20 − 5)',
        },
      ],
    },

    {
      n: 2,
      marks: 3,
      prompt:
        '40 children were asked which sports they play. The diagram shows the results.\n' +
        'F = football, R = rugby.',
      diagram: { type: 'venn2', data: { setA: 'F', setB: 'R', onlyA: 14, both: 6, onlyB: 9, outside: 11 } },
      parts: [
        { id: '2-2a', label: 'a) How many children play football altogether?', marks: 1, type: 'number', answer: 20, answerDisplay: '20  (14 + 6)' },
        { id: '2-2b', label: 'b) How many play rugby only?', marks: 1, type: 'number', answer: 9, answerDisplay: '9  (shown in the right-hand part)' },
        { id: '2-2c', label: 'c) How many play neither sport?', marks: 1, type: 'number', answer: 11, answerDisplay: '11  (shown outside both circles)' },
      ],
    },

    {
      n: 3,
      marks: 4,
      prompt:
        'In a class of 30 pupils, 19 like apples and 14 like bananas. 5 like neither fruit.',
      parts: [
        { id: '2-3a', label: 'a) How many pupils like at least one of the fruits?', marks: 1, type: 'number', answer: 25, answerDisplay: '25  (30 − 5)' },
        {
          id: '2-3b',
          label: 'b) How many pupils like BOTH apples and bananas?',
          marks: 2,
          type: 'number',
          answer: 8,
          answerDisplay: '8  (19 + 14 − 25 = 8)',
          hint: 'Both = apples + bananas − (at least one)',
        },
        { id: '2-3c', label: 'c) How many pupils like apples only?', marks: 1, type: 'number', answer: 11, answerDisplay: '11  (19 − 8)' },
      ],
    },

    {
      n: 4,
      marks: 3,
      prompt:
        'In a group of 20 people, 12 own a bike and 7 own a scooter. 3 people own both.',
      parts: [
        { id: '2-4a', label: 'a) How many own a bike only?', marks: 1, type: 'number', answer: 9, answerDisplay: '9  (12 − 3)' },
        { id: '2-4b', label: 'b) How many own neither a bike nor a scooter?', marks: 1, type: 'number', answer: 4, answerDisplay: '4  (bike only 9 + both 3 + scooter only 4 = 16, so 20 − 16 = 4)' },
        { id: '2-4c', label: 'c) What fraction of the 20 people own both?', marks: 1, type: 'fraction', answer: '3/20', answerDisplay: '3/20', placeholder: 'e.g. 3/20' },
      ],
    },

    {
      n: 5,
      marks: 4,
      prompt:
        '30 children chose after-school activities: Swimming (S), Gym (G) and Dance (D).\n' +
        'S only = 5,  G only = 4,  D only = 3,\nS and G only = 2,  S and D only = 3,  G and D only = 1,  all three = 2.',
      parts: [
        { id: '2-5a', label: 'a) How many do swimming only?', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (read straight off)' },
        { id: '2-5b', label: 'b) How many do swimming altogether?', marks: 1, type: 'number', answer: 12, answerDisplay: '12  (5 + 2 + 3 + 2)' },
        { id: '2-5c', label: 'c) How many do exactly two activities?', marks: 1, type: 'number', answer: 6, answerDisplay: '6  (2 + 3 + 1)' },
        { id: '2-5d', label: 'd) How many do none of the three activities?', marks: 1, type: 'number', answer: 10, answerDisplay: '10  (inside total = 20, so 30 − 20 = 10)' },
      ],
    },

    {
      n: 6,
      marks: 5,
      prompt:
        '50 children each said which instruments they play.\n' +
        '• 24 play piano   • 20 play guitar   • 18 play violin\n' +
        '• 8 play piano and guitar\n• 6 play piano and violin\n• 5 play guitar and violin\n• 3 play all three\n' +
        '(Note: the "pair" figures INCLUDE the children who play all three.)',
      parts: [
        { id: '2-6a', label: 'a) How many play piano and guitar ONLY (not violin)?', marks: 1, type: 'number', answer: 5, answerDisplay: '5  (8 − 3)', hint: 'Take the all-three out of the pair figure first.' },
        { id: '2-6b', label: 'b) How many play piano only?', marks: 1, type: 'number', answer: 13, answerDisplay: '13  (24 − 5 − 3 − 3)' },
        { id: '2-6c', label: 'c) How many play guitar only?', marks: 1, type: 'number', answer: 10, answerDisplay: '10  (20 − 5 − 2 − 3)' },
        { id: '2-6d', label: 'd) How many play violin only?', marks: 1, type: 'number', answer: 10, answerDisplay: '10  (18 − 3 − 2 − 3)' },
        { id: '2-6e', label: 'e) How many play none of the three instruments?', marks: 1, type: 'number', answer: 4, answerDisplay: '4  (inside total = 46, so 50 − 46 = 4)' },
      ],
    },

    {
      n: 7,
      marks: 4,
      prompt:
        'The universal set is the multiples of 10 from 10 to 90.\n' +
        'Circle X: the number is less than 50\nCircle Y: the number is a multiple of 20',
      parts: [
        { id: '2-7a', label: 'a) Write down all members of the universal set.', marks: 1, type: 'set', answer: [10, 20, 30, 40, 50, 60, 70, 80, 90], answerDisplay: '10, 20, 30, 40, 50, 60, 70, 80, 90', placeholder: 'e.g. 10, 20, ...' },
        { id: '2-7b', label: 'b) X only (less than 50, not a multiple of 20):', marks: 1, type: 'set', answer: [10, 30], answerDisplay: '10, 30' },
        { id: '2-7c', label: 'c) Both X and Y (less than 50 AND a multiple of 20):', marks: 1, type: 'set', answer: [20, 40], answerDisplay: '20, 40' },
        { id: '2-7d', label: 'd) Y only (a multiple of 20, but 50 or more):', marks: 1, type: 'set', answer: [60, 80], answerDisplay: '60, 80' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 3! 🌟' },
    { min: 18, label: 'Good — review the questions you missed, then push on.' },
    { min: 13, label: 'Getting there — go back over the three-circle lesson.' },
    { min: 0, label: 'Keep practising — revisit the lessons, then try again.' },
  ],
};
