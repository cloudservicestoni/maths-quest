import type { Paper } from '../../types/content';

export const fractionsPaper4: Paper = {
  id: 'fractions-paper-4',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
  title: 'Paper 4',
  subtitle: 'Moderate',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Show all working for full marks.',
  gradeBands: [
    { min: 21, label: '⭐⭐⭐ Outstanding — excellent fraction skills!' },
    { min: 15, label: '⭐⭐ Well done — solid fraction work.' },
    { min: 8,  label: '⭐ Good effort — revisit the trickier topics.' },
    { min: 0,  label: 'Keep going — work through the lessons and try again.' },
  ],
  questions: [
    /* Q1 — 4 marks — Add and subtract mixed numbers */
    {
      n: 1, marks: 4,
      prompt: 'Calculate. Give each answer as an improper fraction in its simplest form.',
      parts: [
        {
          id: '1a', label: 'a) 2¾ + 1 5/6 =',
          marks: 1, type: 'fraction', answer: '55/12',
          answerDisplay: '55/12 (=4 7/12) — LCM(4,6)=12; 33/12+22/12=55/12.',
        },
        {
          id: '1b', label: 'b) 3½ − 1⅔ =',
          marks: 1, type: 'fraction', answer: '11/6',
          answerDisplay: '11/6 (=1 5/6) — LCM(2,3)=6; 21/6−10/6=11/6.',
        },
        {
          id: '1c', label: 'c) 4⅙ + 2¾ =',
          marks: 1, type: 'fraction', answer: '83/12',
          answerDisplay: '83/12 (=6 11/12) — LCM(6,4)=12; 50/12+33/12=83/12.',
        },
        {
          id: '1d', label: 'd) 5⅓ − 2 7/12 =',
          marks: 1, type: 'fraction', answer: '11/4',
          answerDisplay: '11/4 (=2¾) — LCM(3,12)=12; 64/12−31/12=33/12; HCF(33,12)=3 → 11/4.',
        },
      ],
    },

    /* Q2 — 4 marks — Multiply and divide */
    {
      n: 2, marks: 4,
      prompt: 'Calculate each answer. Simplify fully.',
      parts: [
        {
          id: '2a', label: 'a) 3/4 × 8/9 =',
          marks: 1, type: 'fraction', answer: '2/3',
          answerDisplay: '2/3 — 24/36; HCF(24,36)=12 → 2/3.',
        },
        {
          id: '2b', label: 'b) 5/6 ÷ 5/12 =',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 5/6×12/5=60/30=2.',
        },
        {
          id: '2c', label: 'c) 2⅓ × 1½ = (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '7/2',
          answerDisplay: '7/2 (=3½) — 7/3×3/2=21/6; HCF(21,6)=3 → 7/2.',
        },
        {
          id: '2d', label: 'd) 3⅕ ÷ 4/5 =',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4 — 16/5×5/4=80/20=4.',
        },
      ],
    },

    /* Q3 — 3 marks — What fraction of X is Y? */
    {
      n: 3, marks: 3,
      prompt: 'Express each measurement as a fraction in its simplest form.',
      parts: [
        {
          id: '3a', label: 'a) What fraction of 1 metre is 45 cm?',
          marks: 1, type: 'fraction', answer: '9/20',
          answerDisplay: '9/20 — 45/100; HCF(45,100)=5 → 9/20.',
        },
        {
          id: '3b', label: 'b) What fraction of 2 hours is 50 minutes?',
          marks: 1, type: 'fraction', answer: '5/12',
          answerDisplay: '5/12 — 50/120; HCF(50,120)=10 → 5/12.',
        },
        {
          id: '3c', label: 'c) What fraction of £3 is 75p?',
          marks: 1, type: 'fraction', answer: '1/4',
          answerDisplay: '1/4 — 75/300; HCF(75,300)=75 → 1/4.',
        },
      ],
    },

    /* Q4 — 4 marks — Word problems */
    {
      n: 4, marks: 4,
      prompt: 'Solve each problem. Show your working.',
      parts: [
        {
          id: '4a', label: 'a) A bag of flour weighs 1½ kg. A recipe needs ¾ kg. How many complete recipes can be made?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — 3/2÷3/4=3/2×4/3=12/6=2.',
        },
        {
          id: '4b', label: 'b) Tom has £24. He spends 3/8 on a book. How much does he spend?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '£9 — 3/8×24=72/8=9.',
        },
        {
          id: '4c', label: 'c) A ribbon is 4½ m long. It is cut into pieces of ¾ m each. How many pieces are there?',
          marks: 1, type: 'number', answer: 6,
          answerDisplay: '6 — 9/2÷3/4=9/2×4/3=36/6=6.',
        },
        {
          id: '4d', label: 'd) Maya reads 2/5 of a book on Monday and 1/4 on Tuesday. What fraction remains unread?',
          marks: 1, type: 'fraction', answer: '7/20',
          answerDisplay: '7/20 — 1−2/5−1/4=20/20−8/20−5/20=7/20.',
        },
      ],
    },

    /* Q5 — 3 marks — Compare and order */
    {
      n: 5, marks: 3,
      prompt: 'Compare and order the fractions 3/5, 7/10, 11/20.',
      parts: [
        {
          id: '5a', label: 'a) Which is larger: 4/7 or 3/5?',
          marks: 1, type: 'choice', options: ['4/7', '3/5'], answer: '3/5',
          answerDisplay: '3/5 — cross-multiply: 4×5=20, 3×7=21; 21>20 so 3/5>4/7.',
        },
        {
          id: '5b', label: 'b) Which is the smallest of 3/5, 7/10, 11/20?',
          marks: 1, type: 'choice', options: ['3/5', '7/10', '11/20'], answer: '11/20',
          answerDisplay: '11/20 — over 20: 3/5=12/20, 7/10=14/20, 11/20=11/20. Smallest: 11/20.',
        },
        {
          id: '5c', label: 'c) Which is the largest of 3/5, 7/10, 11/20?',
          marks: 1, type: 'choice', options: ['3/5', '7/10', '11/20'], answer: '7/10',
          answerDisplay: '7/10 — over 20: largest numerator is 14 (=7/10).',
        },
      ],
    },

    /* Q6 — 4 marks — Working backwards */
    {
      n: 6, marks: 4,
      prompt: 'Find the original amount in each case.',
      parts: [
        {
          id: '6a', label: 'a) 2/3 of a number is 18. What is the number?',
          marks: 1, type: 'number', answer: 27,
          answerDisplay: '27 — 18÷(2/3)=18×3/2=27.',
        },
        {
          id: '6b', label: 'b) After eating 1/4 of a cake, 15 slices remain. How many slices were there originally?',
          marks: 1, type: 'number', answer: 20,
          answerDisplay: '20 — 3/4 of total=15; 15×4/3=20.',
        },
        {
          id: '6c', label: 'c) A train is 3/5 of the way through its journey. It has 60 km left. How long is the full journey?',
          marks: 1, type: 'number', answer: 150,
          answerDisplay: '150 km — 2/5 of journey=60; 60×5/2=150.',
        },
        {
          id: '6d', label: 'd) After spending 5/8 of her money, Priya has £12 left. How much did she start with?',
          marks: 1, type: 'number', answer: 32,
          answerDisplay: '£32 — she kept 3/8; 3/8×P=12; P=12×8/3=32.',
        },
      ],
    },

    /* Q7 — 3 marks — Mixed challenge */
    {
      n: 7, marks: 3,
      prompt: 'Mixed challenge questions.',
      parts: [
        {
          id: '7a', label: 'a) A pool is 3/8 full. After adding 150 litres it is 5/8 full. What is the full capacity in litres?',
          marks: 1, type: 'number', answer: 600,
          answerDisplay: '600 litres — 5/8−3/8=2/8=1/4; 1/4 of capacity=150; capacity=600.',
        },
        {
          id: '7b', label: 'b) Write 0.375 as a fraction in its simplest form.',
          marks: 1, type: 'fraction', answer: '3/8',
          answerDisplay: '3/8 — 375/1000; HCF=125; 375÷125=3, 1000÷125=8.',
        },
        {
          id: '7c', label: 'c) When a number is multiplied by 3/7 the result is 15. What is the number?',
          marks: 1, type: 'number', answer: 35,
          answerDisplay: '35 — n×3/7=15; n=15×7/3=35.',
        },
      ],
    },
  ],
};
