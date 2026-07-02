import type { Paper } from '../../types/content';

export const fractionsPaper2: Paper = {
  id: 'fractions-paper-2',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Show all working.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Excellent — you have mastered fractions!' },
    { min: 16, label: '⭐⭐ Good work — keep practising mixed numbers.' },
    { min: 9,  label: '⭐ Solid effort — focus on lessons 2 and 3.' },
    { min: 0,  label: 'Keep going — re-read the lessons and try again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Converting mixed/improper */
    {
      n: 1, marks: 3,
      prompt: 'Convert between mixed numbers and improper fractions.',
      parts: [
        {
          id: '1a', label: 'a) Write 17/6 as a mixed number. What is the whole number part?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 17÷6=2 remainder 5, so 17/6=2 5/6.',
        },
        {
          id: '1b', label: 'b) Write 4 3/8 as an improper fraction.',
          marks: 1, type: 'fraction', answer: '35/8',
          answerDisplay: '35/8 — (4×8)+3=35, so 4 3/8=35/8.',
        },
        {
          id: '1c', label: 'c) Which is larger: 7/3 or 2¼?',
          marks: 1, type: 'choice', options: ['7/3', '2¼'],
          answer: '7/3',
          answerDisplay: '7/3 — 7/3≈2.33 and 2¼=2.25, so 7/3 is larger.',
        },
      ],
    },

    /* Q2 — 4 marks — Adding/subtracting with different denominators including mixed numbers */
    {
      n: 2, marks: 4,
      prompt: 'Calculate. Simplify all answers.',
      parts: [
        {
          id: '2a', label: 'a) 3/4 + 5/6 =',
          marks: 1, type: 'fraction', answer: '19/12',
          answerDisplay: '19/12 — LCM(4,6)=12; 9/12+10/12=19/12 (=1 7/12).',
        },
        {
          id: '2b', label: 'b) 2⅓ + 1¾ = (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '49/12',
          answerDisplay: '49/12 — 7/3+7/4=28/12+21/12=49/12 (=4 1/12).',
        },
        {
          id: '2c', label: 'c) 5/6 − 3/8 =',
          marks: 1, type: 'fraction', answer: '11/24',
          answerDisplay: '11/24 — LCM(6,8)=24; 20/24−9/24=11/24.',
        },
        {
          id: '2d', label: 'd) 3¼ − 1⅔ = (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '19/12',
          answerDisplay: '19/12 — 13/4−5/3=39/12−20/12=19/12 (=1 7/12).',
        },
      ],
    },

    /* Q3 — 4 marks — Multiplying fractions */
    {
      n: 3, marks: 4,
      prompt: 'Calculate each product. Simplify fully.',
      parts: [
        {
          id: '3a', label: 'a) 2/3 × 3/4 =',
          marks: 1, type: 'fraction', answer: '1/2',
          answerDisplay: '1/2 — 2/3×3/4=6/12=1/2 (cancel the 3s: 2/1×1/4=2/4=1/2).',
        },
        {
          id: '3b', label: 'b) 3/5 × 5/9 =',
          marks: 1, type: 'fraction', answer: '1/3',
          answerDisplay: '1/3 — 3/5×5/9=15/45=1/3 (cancel: 1/1×1/3=1/3).',
        },
        {
          id: '3c', label: 'c) 1½ × 2/3 =',
          marks: 1, type: 'fraction', answer: '1',
          answerDisplay: '1 — 3/2×2/3=6/6=1.',
        },
        {
          id: '3d', label: 'd) 2¼ × 1⅓ =',
          marks: 1, type: 'number', answer: 3,
          answerDisplay: '3 — 9/4×4/3=36/12=3.',
        },
      ],
    },

    /* Q4 — 4 marks — Dividing fractions */
    {
      n: 4, marks: 4,
      prompt: 'Use Keep, Change, Flip to divide. Simplify all answers.',
      parts: [
        {
          id: '4a', label: 'a) 3/4 ÷ 1/2 =',
          marks: 1, type: 'fraction', answer: '3/2',
          answerDisplay: '3/2 — 3/4×2/1=6/4=3/2 (=1½).',
        },
        {
          id: '4b', label: 'b) 2/3 ÷ 4/5 =',
          marks: 1, type: 'fraction', answer: '5/6',
          answerDisplay: '5/6 — 2/3×5/4=10/12=5/6.',
        },
        {
          id: '4c', label: 'c) 1½ ÷ 3/4 =',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 3/2×4/3=12/6=2.',
        },
        {
          id: '4d', label: 'd) 2⅔ ÷ 1⅓ =',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 8/3÷4/3=8/3×3/4=24/12=2.',
        },
      ],
    },

    /* Q5 — 3 marks — Fraction of an amount */
    {
      n: 5, marks: 3,
      prompt: 'Find each fraction of an amount.',
      parts: [
        {
          id: '5a', label: 'a) Find 3/7 of 63.',
          marks: 1, type: 'number', answer: 27,
          answerDisplay: '27 — 63÷7=9, 9×3=27.',
        },
        {
          id: '5b', label: 'b) A school has 420 pupils. 5/7 of them walk to school. How many walk?',
          marks: 1, type: 'number', answer: 300,
          answerDisplay: '300 — 420÷7=60, 60×5=300.',
        },
        {
          id: '5c', label: 'c) Sarah spends 3/8 of her £64 pocket money on books. How much does she have left?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '£40 — 3/8 of £64=£24 spent; £64−£24=£40.',
        },
      ],
    },

    /* Q6 — 4 marks — Mixed word problems */
    {
      n: 6, marks: 4,
      prompt: 'Solve each problem. Show your working.',
      parts: [
        {
          id: '6a', label: 'a) A recipe uses 2/3 cup of flour. Maya makes 1½ times the recipe. How much flour does she need?',
          marks: 1, type: 'number', answer: 1,
          answerDisplay: '1 cup — 2/3×3/2=6/6=1.',
        },
        {
          id: '6b', label: 'b) Tom eats 1/4 of a pizza and his sister eats 3/8. What fraction of the pizza is left?',
          marks: 1, type: 'fraction', answer: '3/8',
          answerDisplay: '3/8 — 1−1/4−3/8=8/8−2/8−3/8=3/8.',
        },
        {
          id: '6c', label: 'c) A bottle holds 3/4 litre. How many full bottles can you fill from 6 litres?',
          marks: 1, type: 'number', answer: 8,
          answerDisplay: '8 — 6÷3/4=6×4/3=24/3=8.',
        },
        {
          id: '6d', label: 'd) A tank is 5/6 full. It holds 750 ml when full. How many ml are in it?',
          marks: 1, type: 'number', answer: 625,
          answerDisplay: '625 ml — 750×5/6=3750/6=625.',
        },
      ],
    },

    /* Q7 — 3 marks — Ordering and comparing */
    {
      n: 7, marks: 3,
      prompt: 'Compare and order fractions.',
      parts: [
        {
          id: '7a', label: 'a) Order 3/4, 2/3, 7/12 from smallest to largest. Which comes first?',
          marks: 1, type: 'choice', options: ['3/4', '2/3', '7/12'],
          answer: '7/12',
          answerDisplay: '7/12 — with denominator 12: 7/12 < 8/12 < 9/12, so order: 7/12, 2/3, 3/4.',
        },
        {
          id: '7b', label: 'b) Which is closer to 1: 5/6 or 7/8?',
          marks: 1, type: 'choice', options: ['5/6', '7/8'],
          answer: '7/8',
          answerDisplay: '7/8 — distance from 1: 1−5/6=1/6≈0.167, 1−7/8=1/8=0.125. 7/8 is closer.',
        },
        {
          id: '7c', label: 'c) Which is larger: 3/5 or 7/12?',
          marks: 1, type: 'choice', options: ['3/5', '7/12'],
          answer: '3/5',
          answerDisplay: '3/5 — LCM(5,12)=60; 3/5=36/60, 7/12=35/60. So 3/5 > 7/12.',
        },
      ],
    },
  ],
};
