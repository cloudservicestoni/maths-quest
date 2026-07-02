import type { Paper } from '../../types/content';

export const fractionsPaper1: Paper = {
  id: 'fractions-paper-1',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Show your working for full marks.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Fantastic — top 11+ standard!' },
    { min: 16, label: '⭐⭐ Great work!' },
    { min: 9,  label: '⭐ Good effort — revisit lessons 1 and 2.' },
    { min: 0,  label: 'Keep going — work through the lessons again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Identify and convert */
    {
      n: 1, marks: 3,
      prompt: 'Look at these fractions: 5/8, 11/4, 2¾.',
      parts: [
        {
          id: '1a', label: 'a) What type of fraction is 5/8? (proper / improper / mixed)',
          marks: 1, type: 'text', accept: ['proper', 'proper fraction'],
          answerDisplay: 'Proper — numerator (5) is less than denominator (8).',
        },
        {
          id: '1b', label: 'b) What type of fraction is 11/4? (proper / improper / mixed)',
          marks: 1, type: 'text', accept: ['improper', 'improper fraction'],
          answerDisplay: 'Improper — numerator (11) is greater than denominator (4).',
        },
        {
          id: '1c', label: 'c) Write 11/4 as a mixed number. How many whole ones are there?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 11 ÷ 4 = 2 remainder 3, so 11/4 = 2¾.',
        },
      ],
    },

    /* Q2 — 3 marks — Equivalent fractions */
    {
      n: 2, marks: 3,
      prompt: 'Fill in the missing numbers to make equivalent fractions.',
      parts: [
        {
          id: '2a', label: 'a) 3/5 = ?/20  (What number goes where the ? is?)',
          marks: 1, type: 'number', answer: 12,
          answerDisplay: '12 — denominator ×4, so numerator ×4: 3×4=12.',
        },
        {
          id: '2b', label: 'b) 4/9 = 16/?  (What is the missing denominator?)',
          marks: 1, type: 'number', answer: 36,
          answerDisplay: '36 — numerator ×4, so denominator ×4: 9×4=36.',
        },
        {
          id: '2c', label: 'c) Which of these is equivalent to 2/3?',
          marks: 1, type: 'choice', options: ['6/8', '8/12', '5/8'], answer: '8/12',
          answerDisplay: '8/12 — 2×4=8, 3×4=12. Check: 8/12 ÷ 4/4 = 2/3 ✓',
        },
      ],
    },

    /* Q3 — 3 marks — Simplify */
    {
      n: 3, marks: 3,
      prompt: 'Write each fraction in its simplest form.',
      parts: [
        {
          id: '3a', label: 'a) Simplify 8/12.',
          marks: 1, type: 'fraction', answer: '2/3',
          answerDisplay: '2/3 — HCF(8,12)=4; 8÷4=2, 12÷4=3.',
        },
        {
          id: '3b', label: 'b) Simplify 15/20.',
          marks: 1, type: 'fraction', answer: '3/4',
          answerDisplay: '3/4 — HCF(15,20)=5; 15÷5=3, 20÷5=4.',
        },
        {
          id: '3c', label: 'c) Simplify 24/36.',
          marks: 1, type: 'fraction', answer: '2/3',
          answerDisplay: '2/3 — HCF(24,36)=12; 24÷12=2, 36÷12=3.',
        },
      ],
    },

    /* Q4 — 4 marks — Fractions of amounts */
    {
      n: 4, marks: 4,
      prompt: 'Calculate each fraction of an amount.',
      parts: [
        {
          id: '4a', label: 'a) Find 1/4 of 36.',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '9 — 36÷4=9.',
        },
        {
          id: '4b', label: 'b) Find 3/4 of 48.',
          marks: 1, type: 'number', answer: 36,
          answerDisplay: '36 — 48÷4=12, 12×3=36.',
        },
        {
          id: '4c', label: 'c) Find 2/5 of 45.',
          marks: 1, type: 'number', answer: 18,
          answerDisplay: '18 — 45÷5=9, 9×2=18.',
        },
        {
          id: '4d', label: 'd) A bag has 80 sweets. Jack eats 3/8 of them. How many does he eat?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30 — 80÷8=10, 10×3=30.',
        },
      ],
    },

    /* Q5 — 3 marks — Adding/subtracting same denominator */
    {
      n: 5, marks: 3,
      prompt: 'Calculate. Simplify your answers where possible.',
      parts: [
        {
          id: '5a', label: 'a) 1/7 + 3/7 =',
          marks: 1, type: 'fraction', answer: '4/7',
          answerDisplay: '4/7 — same denominator; 1+3=4.',
        },
        {
          id: '5b', label: 'b) 5/9 + 2/9 =',
          marks: 1, type: 'fraction', answer: '7/9',
          answerDisplay: '7/9 — same denominator; 5+2=7.',
        },
        {
          id: '5c', label: 'c) 7/8 − 3/8 = (simplify your answer)',
          marks: 1, type: 'fraction', answer: '1/2',
          answerDisplay: '1/2 — 7−3=4; 4/8 simplifies to 1/2.',
        },
      ],
    },

    /* Q6 — 4 marks — Adding/subtracting different denominators */
    {
      n: 6, marks: 4,
      prompt: 'Calculate. You will need to find a common denominator first.',
      parts: [
        {
          id: '6a', label: 'a) 1/2 + 1/4 =',
          marks: 1, type: 'fraction', answer: '3/4',
          answerDisplay: '3/4 — LCM(2,4)=4; 2/4+1/4=3/4.',
        },
        {
          id: '6b', label: 'b) 2/3 + 1/6 =',
          marks: 1, type: 'fraction', answer: '5/6',
          answerDisplay: '5/6 — LCM(3,6)=6; 4/6+1/6=5/6.',
        },
        {
          id: '6c', label: 'c) 3/4 − 1/3 =',
          marks: 1, type: 'fraction', answer: '5/12',
          answerDisplay: '5/12 — LCM(4,3)=12; 9/12−4/12=5/12.',
        },
        {
          id: '6d', label: 'd) 5/6 − 1/4 =',
          marks: 1, type: 'fraction', answer: '7/12',
          answerDisplay: '7/12 — LCM(6,4)=12; 10/12−3/12=7/12.',
        },
      ],
    },

    /* Q7 — 5 marks — Mixed numbers */
    {
      n: 7, marks: 5,
      prompt: 'Work with mixed numbers and improper fractions.',
      parts: [
        {
          id: '7a', label: 'a) Write 13/5 as a mixed number. What is the whole number part?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 13÷5=2 remainder 3, so 13/5=2⅗.',
        },
        {
          id: '7b', label: 'b) Write 3 2/7 as an improper fraction.',
          marks: 1, type: 'fraction', answer: '23/7',
          answerDisplay: '23/7 — (3×7)+2=23, so 3 2/7=23/7.',
        },
        {
          id: '7c', label: 'c) Calculate 1½ + 2¼. Give your answer as an improper fraction.',
          marks: 1, type: 'fraction', answer: '15/4',
          answerDisplay: '15/4 — 3/2+9/4=6/4+9/4=15/4 (= 3¾).',
        },
        {
          id: '7d', label: 'd) Calculate 3⅓ − 1 5/6. Give as an improper fraction.',
          marks: 1, type: 'fraction', answer: '3/2',
          answerDisplay: '3/2 — 10/3−11/6=20/6−11/6=9/6=3/2 (= 1½).',
        },
        {
          id: '7e', label: 'e) Find 1/3 of 2¼.',
          marks: 1, type: 'fraction', answer: '3/4',
          answerDisplay: '3/4 — 2¼=9/4; 9/4×1/3=9/12=3/4.',
        },
      ],
    },
  ],
};
