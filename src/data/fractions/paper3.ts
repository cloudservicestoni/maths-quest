import type { Paper } from '../../types/content';

export const fractionsPaper3: Paper = {
  id: 'fractions-paper-3',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Multi-step reasoning — show all working.',
  gradeBands: [
    { min: 21, label: '⭐⭐⭐ Outstanding — top 11+ level!' },
    { min: 15, label: '⭐⭐ Excellent — strong fraction skills.' },
    { min: 8,  label: '⭐ Good effort — re-read lesson 4 on word problems.' },
    { min: 0,  label: 'Keep going — work through all four lessons again.' },
  ],
  questions: [
    /* Q1 — 4 marks — All four operations */
    {
      n: 1, marks: 4,
      prompt: 'Calculate each of the following. Give answers in simplest form.',
      parts: [
        {
          id: '1a', label: 'a) 5/6 + 7/8 = (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '41/24',
          answerDisplay: '41/24 — LCM(6,8)=24; 20/24+21/24=41/24 (=1 17/24).',
        },
        {
          id: '1b', label: 'b) 4 1/6 − 2 5/8 = (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '37/24',
          answerDisplay: '37/24 — 25/6−21/8=100/24−63/24=37/24 (=1 13/24).',
        },
        {
          id: '1c', label: 'c) 1⅔ × 2 2/5 =',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4 — 5/3×12/5=60/15=4.',
        },
        {
          id: '1d', label: 'd) 3¾ ÷ 1¼ =',
          marks: 1, type: 'number', answer: 3,
          answerDisplay: '3 — 15/4÷5/4=15/4×4/5=60/20=3.',
        },
      ],
    },

    /* Q2 — 4 marks — Working backwards */
    {
      n: 2, marks: 4,
      prompt: 'Find the original whole number or amount in each case.',
      parts: [
        {
          id: '2a', label: 'a) 3/5 of a number is 24. What is the number?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40 — 24÷(3/5)=24×5/3=40.',
        },
        {
          id: '2b', label: 'b) 7/8 of a number is 63. What is the number?',
          marks: 1, type: 'number', answer: 72,
          answerDisplay: '72 — 63×8/7=72.',
        },
        {
          id: '2c', label: 'c) After giving away 2/5 of her stickers, Lily has 42 left. How many did she start with?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70 — she kept 3/5; 3/5 of n=42 → n=42×5/3=70.',
        },
        {
          id: '2d', label: 'd) A shirt costs £30 after its price was reduced by 2/5. What was the original price?',
          marks: 1, type: 'number', answer: 50,
          answerDisplay: '£50 — remaining price = 3/5 of original; 3/5×P=30 → P=30×5/3=50.',
        },
      ],
    },

    /* Q3 — 4 marks — Multi-step word problems */
    {
      n: 3, marks: 4,
      prompt: 'A jug contains 1½ litres of juice.',
      parts: [
        {
          id: '3a', label: 'a) 3/4 of a litre is poured out. How much juice remains? (Give as a fraction.)',
          marks: 1, type: 'fraction', answer: '3/4',
          answerDisplay: '3/4 litre — 3/2−3/4=6/4−3/4=3/4.',
        },
        {
          id: '3b', label: 'b) Each glass holds 1/4 litre. How many full glasses can be filled from the remaining juice?',
          marks: 1, type: 'number', answer: 3,
          answerDisplay: '3 — 3/4÷1/4=3.',
        },
        {
          id: '3c', label: 'c) Sam runs 2/3 of a race, then walks 1/4 of it. What fraction of the race is left?',
          marks: 1, type: 'fraction', answer: '1/12',
          answerDisplay: '1/12 — 1−2/3−1/4=12/12−8/12−3/12=1/12.',
        },
        {
          id: '3d', label: 'd) A recipe for 6 people uses 3/4 cup of sugar. How much sugar is needed for 10 people? (Give as an improper fraction.)',
          marks: 1, type: 'fraction', answer: '5/4',
          answerDisplay: '5/4 — per person: 3/4÷6=1/8 cup; for 10: 10/8=5/4 (=1¼ cups).',
        },
      ],
    },

    /* Q4 — 4 marks — Comparing and ordering */
    {
      n: 4, marks: 4,
      prompt: 'Compare and order the fractions 2/3, 3/4, 5/8, 7/12.',
      parts: [
        {
          id: '4a', label: 'a) Which is larger: 7/9 or 5/6?',
          marks: 1, type: 'choice', options: ['7/9', '5/6'],
          answer: '5/6',
          answerDisplay: '5/6 — LCM(9,6)=18; 7/9=14/18, 5/6=15/18. So 5/6 > 7/9.',
        },
        {
          id: '4b', label: 'b) What is the LCM of 3, 4, 8, and 12?',
          marks: 1, type: 'number', answer: 24,
          answerDisplay: '24 — 24 is the smallest number divisible by 3, 4, 8, and 12.',
        },
        {
          id: '4c', label: 'c) Which is the smallest of 2/3, 3/4, 5/8, 7/12?',
          marks: 1, type: 'choice', options: ['2/3', '3/4', '5/8', '7/12'],
          answer: '7/12',
          answerDisplay: '7/12 — over 24: 2/3=16/24, 3/4=18/24, 5/8=15/24, 7/12=14/24. Smallest is 14.',
        },
        {
          id: '4d', label: 'd) Which is the largest of 2/3, 3/4, 5/8, 7/12?',
          marks: 1, type: 'choice', options: ['2/3', '3/4', '5/8', '7/12'],
          answer: '3/4',
          answerDisplay: '3/4 — over 24: largest numerator is 18 (= 3/4).',
        },
      ],
    },

    /* Q5 — 3 marks — Fractions of measurements */
    {
      n: 5, marks: 3,
      prompt: 'Express each measurement as a fraction in its simplest form.',
      parts: [
        {
          id: '5a', label: 'a) What fraction of 2 hours is 45 minutes?',
          marks: 1, type: 'fraction', answer: '3/8',
          answerDisplay: '3/8 — 2 hours = 120 min; 45/120 = 3/8.',
        },
        {
          id: '5b', label: 'b) What fraction of 1 kg is 250 g?',
          marks: 1, type: 'fraction', answer: '1/4',
          answerDisplay: '1/4 — 250/1000 = 1/4.',
        },
        {
          id: '5c', label: 'c) Express 35 minutes as a fraction of 1 hour.',
          marks: 1, type: 'fraction', answer: '7/12',
          answerDisplay: '7/12 — 35/60; HCF(35,60)=5; 35÷5=7, 60÷5=12.',
        },
      ],
    },

    /* Q6 — 3 marks — Fraction sequence */
    {
      n: 6, marks: 3,
      prompt: 'A sequence of fractions starts: 1/6, 1/3, 1/2, …',
      parts: [
        {
          id: '6a', label: 'a) What fraction is added each time?',
          marks: 1, type: 'fraction', answer: '1/6',
          answerDisplay: '1/6 — 1/3−1/6=1/6; 1/2−1/3=1/6 ✓',
        },
        {
          id: '6b', label: 'b) What is the 6th term?',
          marks: 1, type: 'number', answer: 1,
          answerDisplay: '1 — the terms are 1/6, 2/6, 3/6, 4/6, 5/6, 6/6 = 1.',
        },
        {
          id: '6c', label: 'c) Between which two consecutive terms does 5/9 fall?',
          marks: 1, type: 'choice', options: ['1/3 and 1/2', '1/2 and 2/3', '2/3 and 5/6'],
          answer: '1/2 and 2/3',
          answerDisplay: '1/2 and 2/3 — 1/2=0.5, 5/9≈0.556, 2/3≈0.667. So 1/2 < 5/9 < 2/3.',
        },
      ],
    },

    /* Q7 — 3 marks — Challenge: chocolates */
    {
      n: 7, marks: 3,
      prompt: 'A box of chocolates is 5/8 dark chocolate and the rest milk chocolate.',
      parts: [
        {
          id: '7a', label: 'a) What fraction of the box is milk chocolate?',
          marks: 1, type: 'fraction', answer: '3/8',
          answerDisplay: '3/8 — 1−5/8=3/8.',
        },
        {
          id: '7b', label: 'b) There are 12 milk chocolates. How many dark chocolates are there?',
          marks: 1, type: 'number', answer: 20,
          answerDisplay: '20 — 3/8 of total=12 → total=12×8/3=32. Dark=5/8×32=20.',
        },
        {
          id: '7c', label: 'c) 1/4 of the dark chocolates are eaten. What fraction of the whole box remains?',
          marks: 1, type: 'fraction', answer: '27/32',
          answerDisplay: '27/32 — 1/4 of 20=5 eaten; 32−5=27 left; 27/32.',
        },
      ],
    },
  ],
};
