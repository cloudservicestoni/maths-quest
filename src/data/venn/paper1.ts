/*
 * Venn Diagrams — Exam Practice Paper 1
 * Source: 05-exam-practice/paper-1.md  +  paper-1-answers.md
 *
 * Marking types (handled by js/marking.js):
 *   'number'  — single whole number.            answer: 5
 *   'text'    — keyword match.                   accept: ['even','multiples of 2']
 *   'set'     — list of numbers, any order.      answer: [2,4,6,8,12,14]
 *   'fraction'— fraction, equivalents accepted.  answer: '8/50'
 *
 * Every part has `marks`, an `answerDisplay` (what we show if they get it wrong),
 * and an optional `hint` shown under the input.
 */

import type { Paper } from '../../types/content';

export const vennPaper1: Paper = {
  id: 'venn-paper-1',
  topicId: 'venn',
  topicTitle: 'Venn Diagrams',
  topicDescription: '11+ exam practice — sets, intersections and word problems.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Show your thinking — you can ' +
    'still get marks for the right method even if a final answer is wrong.',

  questions: [
    {
      n: 1,
      marks: 2,
      prompt:
        'The universal set is whole numbers from 1 to 10.\nCircle A contains: {2, 4, 6, 8, 10}',
      parts: [
        {
          id: '1a',
          label: 'a) Write a rule that describes the numbers in Circle A.',
          marks: 1,
          type: 'text',
          accept: ['even', 'multiple of 2', 'multiples of 2', 'multiple of two', 'times 2', 'divisible by 2'],
          answerDisplay: 'Even numbers (accept: multiples of 2)',
          placeholder: 'e.g. all the ...',
        },
        {
          id: '1b',
          label: 'b) How many numbers are outside Circle A but still in the universal set?',
          marks: 1,
          type: 'number',
          answer: 5,
          answerDisplay: '5  (the numbers 1, 3, 5, 7, 9)',
          placeholder: 'a number',
        },
      ],
    },

    {
      n: 2,
      marks: 3,
      prompt:
        'The universal set is whole numbers from 1 to 15.\nCircle P: multiples of 2\nCircle Q: multiples of 5',
      parts: [
        {
          id: '2a',
          label: 'a) Write down all the numbers that belong in BOTH circles.',
          marks: 1,
          type: 'set',
          answer: [10],
          answerDisplay: '10',
          placeholder: 'e.g. 3, 6, 9',
        },
        {
          id: '2b',
          label: 'b) How many numbers belong in Circle P only?',
          marks: 1,
          type: 'number',
          answer: 6,
          answerDisplay: '6  (2, 4, 6, 8, 12, 14)',
          placeholder: 'a number',
        },
        {
          id: '2c',
          label: 'c) How many numbers are outside BOTH circles?',
          marks: 1,
          type: 'number',
          answer: 6,
          answerDisplay: '6  (1, 3, 7, 9, 11, 13)',
          placeholder: 'a number',
        },
      ],
    },

    {
      n: 3,
      marks: 4,
      prompt:
        'A group of 24 children were asked if they like reading or drawing.\n• 14 like reading\n• 10 like drawing\n• 4 like both',
      parts: [
        { id: '3a', label: 'a) How many like ONLY reading?', marks: 1, type: 'number', answer: 10, answerDisplay: '10  (14 − 4)' },
        { id: '3b', label: 'b) How many like ONLY drawing?', marks: 1, type: 'number', answer: 6, answerDisplay: '6  (10 − 4)' },
        { id: '3c', label: 'c) How many like NEITHER?', marks: 1, type: 'number', answer: 4, answerDisplay: '4  (24 − 10 − 4 − 6)' },
        { id: '3d', label: 'd) How many like reading OR drawing (or both)?', marks: 1, type: 'number', answer: 20, answerDisplay: '20  (24 − 4, or 10 + 4 + 6)' },
      ],
    },

    {
      n: 4,
      marks: 3,
      prompt:
        'In a year group of 60 pupils, 35 have a mobile phone, 28 have a tablet, and 12 have NEITHER.',
      parts: [
        { id: '4a', label: 'a) How many pupils have at least one device?', marks: 1, type: 'number', answer: 48, answerDisplay: '48  (60 − 12)' },
        {
          id: '4b',
          label: 'b) How many pupils have BOTH a phone and a tablet?',
          marks: 2,
          type: 'number',
          answer: 15,
          answerDisplay: '15  (35 + 28 − 48 = 15)',
          hint: 'Both = phone + tablet − (at least one)',
        },
      ],
    },

    {
      n: 5,
      marks: 4,
      prompt:
        'The Venn diagram shows 50 people and whether they like tea (T) or coffee (C).\nT only = 17,  Both = 8,  C only = 13,  Outside = 12.',
      diagram: { type: 'venn2', data: { setA: 'T', setB: 'C', onlyA: 17, both: 8, onlyB: 13, outside: 12 } },
      parts: [
        { id: '5a', label: 'a) How many people like tea altogether?', marks: 1, type: 'number', answer: 25, answerDisplay: '25  (17 + 8)' },
        { id: '5b', label: 'b) How many people like coffee altogether?', marks: 1, type: 'number', answer: 21, answerDisplay: '21  (13 + 8)' },
        { id: '5c', label: 'c) How many people like NEITHER tea nor coffee?', marks: 1, type: 'number', answer: 12, answerDisplay: '12  (shown outside both circles)' },
        { id: '5d', label: 'd) What fraction of the 50 people like BOTH tea and coffee?', marks: 1, type: 'fraction', answer: '8/50', answerDisplay: '8/50 = 4/25', placeholder: 'e.g. 8/50' },
      ],
    },

    {
      n: 6,
      marks: 5,
      prompt:
        'In a class of 32 children, each child studies at least one of Art, Music or Drama.\n' +
        '• 18 study Art   • 16 study Music   • 14 study Drama\n' +
        '• 7 study Art and Music (but not Drama)\n' +
        '• 5 study Art and Drama (but not Music)\n' +
        '• 4 study Music and Drama (but not Art)\n' +
        '• 3 study all three',
      parts: [
        { id: '6a', label: 'a) How many study ART only?', marks: 1, type: 'number', answer: 3, answerDisplay: '3  (18 − 7 − 5 − 3)' },
        { id: '6b', label: 'b) How many study MUSIC only?', marks: 1, type: 'number', answer: 2, answerDisplay: '2  (16 − 7 − 4 − 3)' },
        { id: '6c', label: 'c) How many study DRAMA only?', marks: 1, type: 'number', answer: 2, answerDisplay: '2  (14 − 5 − 4 − 3)' },
        {
          id: '6d',
          label: 'd) Check: do all the regions add up to 32?',
          marks: 1,
          type: 'text',
          accept: ['26', 'no', 'not', "doesn't", 'does not', 'don’t', 'dont', 'discrep', 'wrong', 'left over', 'leftover', '6 '],
          answerDisplay:
            'No — they add to 26 (3+2+2+7+5+4+3), not 32. This question has a deliberate ' +
            'inconsistency: spotting that the numbers don’t balance is the real exam skill.',
          placeholder: 'What do they add to? Does it balance?',
        },
        { id: '6e', label: 'e) How many children study EXACTLY TWO subjects?', marks: 1, type: 'number', answer: 16, answerDisplay: '16  (7 + 5 + 4)' },
      ],
    },

    {
      n: 7,
      marks: 4,
      prompt:
        'The universal set is all two-digit numbers where both digits are the same (e.g. 11, 22, 33...).\n' +
        'Circle X: the number is less than 60\nCircle Y: the number is even',
      parts: [
        {
          id: '7a',
          label: 'a) Write down all members of the universal set.',
          marks: 1,
          type: 'set',
          answer: [11, 22, 33, 44, 55, 66, 77, 88, 99],
          answerDisplay: '11, 22, 33, 44, 55, 66, 77, 88, 99',
          placeholder: 'e.g. 11, 22, 33, ...',
        },
        { id: '7b', label: 'b) X only (less than 60, odd):', marks: 1, type: 'set', answer: [11, 33, 55], answerDisplay: '11, 33, 55' },
        { id: '7c', label: 'c) Both X and Y (less than 60 AND even):', marks: 1, type: 'set', answer: [22, 44], answerDisplay: '22, 44' },
        { id: '7d', label: 'd) Y only (even, 60 or more):', marks: 1, type: 'set', answer: [66, 88], answerDisplay: '66, 88' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — exam ready! 🌟' },
    { min: 18, label: 'Good — just review the questions you missed.' },
    { min: 13, label: 'Getting there — go back over three-circle and word problems.' },
    { min: 0, label: 'Keep practising — revisit the two-circle module, then try again.' },
  ],
};
