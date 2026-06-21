/*
 * Venn Diagrams — Exam Practice Paper 3
 * Difficulty: challenging (the top of the progression).
 * 20 minutes · 25 marks · GL/CEM short-answer style.
 *
 * Coverage: percentages into a Venn, working backwards to find the intersection,
 * "exactly two" vs "at least two", a three-circle word problem with the
 * pair-includes-all-three trap, finding the intersection when nobody is left out,
 * percentages of an amount, and an algebra-lite "twice as many" reasoning question.
 */

import type { Paper } from '../../types/content';

export const vennPaper3: Paper = {
  id: 'venn-paper-3',
  topicId: 'venn',
  topicTitle: 'Venn Diagrams',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These are harder — read every word ' +
    'carefully, fill in the middle first, and always check your totals.',

  questions: [
    {
      n: 1,
      marks: 3,
      prompt:
        'In a year group of 80 students, 45% play a musical instrument and 30 play a sport. ' +
        '12 students do both.',
      parts: [
        { id: '3-1a', label: 'a) How many students play a musical instrument?', marks: 1, type: 'number', answer: 36, answerDisplay: '36  (45% of 80)' },
        { id: '3-1b', label: 'b) How many play a sport only?', marks: 1, type: 'number', answer: 18, answerDisplay: '18  (30 − 12)' },
        { id: '3-1c', label: 'c) How many do neither?', marks: 1, type: 'number', answer: 26, answerDisplay: '26  (instrument only 24 + both 12 + sport only 18 = 54, so 80 − 54 = 26)' },
      ],
    },

    {
      n: 2,
      marks: 4,
      prompt:
        'A survey of 60 people asked what they read. 38 read fiction, 29 read non-fiction, ' +
        'and 7 read neither.',
      parts: [
        { id: '3-2a', label: 'a) How many people read at least one type?', marks: 1, type: 'number', answer: 53, answerDisplay: '53  (60 − 7)' },
        {
          id: '3-2b',
          label: 'b) How many read BOTH fiction and non-fiction?',
          marks: 2,
          type: 'number',
          answer: 14,
          answerDisplay: '14  (38 + 29 − 53 = 14)',
          hint: 'Both = fiction + non-fiction − (at least one)',
        },
        { id: '3-2c', label: 'c) What fraction of all 60 people read both? (simplify if you can)', marks: 1, type: 'fraction', answer: '14/60', answerDisplay: '14/60 = 7/30', placeholder: 'e.g. 7/30' },
      ],
    },

    {
      n: 3,
      marks: 4,
      prompt:
        'A club has 60 members who each belong to groups A, B and/or C.\n' +
        'A only = 8,  B only = 10,  C only = 6,\nA and B only = 5,  A and C only = 4,  B and C only = 7,  all three = 6.',
      parts: [
        { id: '3-3a', label: 'a) How many belong to exactly two groups?', marks: 1, type: 'number', answer: 16, answerDisplay: '16  (5 + 4 + 7)' },
        { id: '3-3b', label: 'b) How many belong to at least two groups?', marks: 1, type: 'number', answer: 22, answerDisplay: '22  (exactly two 16 + all three 6)' },
        { id: '3-3c', label: 'c) How many belong to group A altogether?', marks: 1, type: 'number', answer: 23, answerDisplay: '23  (8 + 5 + 4 + 6)' },
        { id: '3-3d', label: 'd) How many belong to none of the groups?', marks: 1, type: 'number', answer: 14, answerDisplay: '14  (inside total = 46, so 60 − 46 = 14)' },
      ],
    },

    {
      n: 4,
      marks: 4,
      prompt:
        'A school surveyed 100 pupils about languages.\n' +
        '• 52 study Spanish   • 40 study French   • 28 study German\n' +
        '• 18 study Spanish and French\n• 12 study Spanish and German\n• 10 study French and German\n• 6 study all three\n' +
        '(The "pair" figures INCLUDE the pupils who study all three.)',
      parts: [
        { id: '3-4a', label: 'a) How many study Spanish and French ONLY (not German)?', marks: 1, type: 'number', answer: 12, answerDisplay: '12  (18 − 6)' },
        { id: '3-4b', label: 'b) How many study Spanish only?', marks: 1, type: 'number', answer: 28, answerDisplay: '28  (52 − 12 − 6 − 6)' },
        { id: '3-4c', label: 'c) How many study at least one language?', marks: 1, type: 'number', answer: 86, answerDisplay: '86  (all seven regions added together)' },
        { id: '3-4d', label: 'd) How many study none of the three languages?', marks: 1, type: 'number', answer: 14, answerDisplay: '14  (100 − 86)' },
      ],
    },

    {
      n: 5,
      marks: 4,
      prompt:
        'In a class of 32 children, EVERY child has at least one of a phone or a tablet ' +
        '(nobody has neither). 25 have a phone and 18 have a tablet.',
      parts: [
        {
          id: '3-5a',
          label: 'a) How many children have BOTH a phone and a tablet?',
          marks: 2,
          type: 'number',
          answer: 11,
          answerDisplay: '11  (25 + 18 − 32 = 11, because "at least one" is the whole class of 32)',
          hint: 'If nobody has neither, then "at least one" = the whole class.',
        },
        { id: '3-5b', label: 'b) How many have a phone only?', marks: 1, type: 'number', answer: 14, answerDisplay: '14  (25 − 11)' },
        { id: '3-5c', label: 'c) How many have a tablet only?', marks: 1, type: 'number', answer: 7, answerDisplay: '7  (18 − 11)' },
      ],
    },

    {
      n: 6,
      marks: 3,
      prompt:
        'In a town survey of 200 people, 60% have a car, 35% have a bicycle, and 25% have both.',
      parts: [
        { id: '3-6a', label: 'a) How many people have a car?', marks: 1, type: 'number', answer: 120, answerDisplay: '120  (60% of 200)' },
        { id: '3-6b', label: 'b) How many people have both a car and a bicycle?', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (25% of 200)' },
        { id: '3-6c', label: 'c) How many people have a bicycle only?', marks: 1, type: 'number', answer: 20, answerDisplay: '20  (bicycle 70 − both 50)' },
      ],
    },

    {
      n: 7,
      marks: 3,
      prompt:
        'In a group of 30 pupils, twice as many like ONLY maths as like ONLY science. ' +
        '6 pupils like both subjects and 3 like neither.',
      parts: [
        {
          id: '3-7a',
          label: 'a) How many pupils like science only?',
          marks: 1,
          type: 'number',
          answer: 7,
          answerDisplay: '7  (let science only = x, maths only = 2x; 2x + x + 6 + 3 = 30, so 3x = 21, x = 7)',
          hint: 'Call "science only" a box. "Maths only" is two boxes. Add everything to 30.',
        },
        { id: '3-7b', label: 'b) How many pupils like maths only?', marks: 1, type: 'number', answer: 14, answerDisplay: '14  (2 × 7)' },
        { id: '3-7c', label: 'c) How many pupils like maths altogether?', marks: 1, type: 'number', answer: 20, answerDisplay: '20  (14 + 6)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — you have really mastered Venn diagrams! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit the word-problem lesson and try again.' },
    { min: 0, label: 'These are tough — go back over Lessons 3 & 4, then retry.' },
  ],
};
