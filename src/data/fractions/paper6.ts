import type { Paper } from '../../types/content';

export const fractionsPaper6: Paper = {
  id: 'fractions-paper-6',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
  title: 'Paper 6',
  subtitle: 'Challenging',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Genuine 11+ level — show all working.',
  gradeBands: [
    { min: 21, label: '⭐⭐⭐ Outstanding — 11+ ready!' },
    { min: 15, label: '⭐⭐ Excellent — strong advanced fraction skills.' },
    { min: 8,  label: '⭐ Good effort — re-read lessons 3 and 4 on harder operations.' },
    { min: 0,  label: 'Keep going — work through all four lessons, then try again.' },
  ],
  questions: [
    /* Q1 — 4 marks — Bracket and chain calculations */
    {
      n: 1, marks: 4,
      prompt: 'Calculate each expression. Give answers as fractions in their simplest form.',
      parts: [
        {
          id: '1a', label: 'a) 3 5/6 − 1⅞ + 2¼ =',
          marks: 1, type: 'fraction', answer: '101/24',
          answerDisplay: '101/24 (=4 5/24) — LCM(6,8,4)=24; 92/24−45/24+54/24=101/24.',
        },
        {
          id: '1b', label: 'b) (2½ + 1⅓) × 3/5 =',
          marks: 1, type: 'fraction', answer: '23/10',
          answerDisplay: '23/10 (=2 3/10) — 5/2+4/3=23/6; 23/6×3/5=69/30; HCF(69,30)=3 → 23/10.',
        },
        {
          id: '1c', label: 'c) 1¾ ÷ (3/8 + 1/4) =',
          marks: 1, type: 'fraction', answer: '14/5',
          answerDisplay: '14/5 (=2⅘) — 3/8+2/8=5/8; 7/4÷5/8=7/4×8/5=56/20; HCF(56,20)=4 → 14/5.',
        },
        {
          id: '1d', label: 'd) 2/3 of (4½ − 2 5/6) =',
          marks: 1, type: 'fraction', answer: '10/9',
          answerDisplay: '10/9 (=1⅑) — 9/2−17/6=27/6−17/6=10/6=5/3; 2/3×5/3=10/9.',
        },
      ],
    },

    /* Q2 — 4 marks — Multi-step word problems */
    {
      n: 2, marks: 4,
      prompt: 'Solve each multi-step problem. Show your working.',
      parts: [
        {
          id: '2a', label: 'a) A train travels ¾ of a 240-mile journey, then stops. After the stop it covers 2/5 of the remaining distance. How many miles is the final section?',
          marks: 1, type: 'number', answer: 36,
          answerDisplay: '36 miles — first: 3/4×240=180; remaining: 60; second: 2/5×60=24; final: 60−24=36.',
        },
        {
          id: '2b', label: 'b) In a school of 480 students, 5/8 study French. Of those, 2/5 also study German. How many study both?',
          marks: 1, type: 'number', answer: 120,
          answerDisplay: '120 — French: 5/8×480=300; both: 2/5×300=120.',
        },
        {
          id: '2c', label: 'c) A shopkeeper buys apples for £2.40 per kg and sells them at 5/4 of the cost price. How much does he receive for 3 kg?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '£9 — sell price: 5/4×£2.40=£3.00; for 3 kg: 3×£3=£9.',
        },
        {
          id: '2d', label: 'd) Harry gives 1/3 of his sweets to his sister, then 2/5 of what remains to his friend. He has 16 left. How many did he start with?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40 — after sister: 2/3 left; after friend: 3/5×2/3=2/5 of original=16; original=16×5/2=40.',
        },
      ],
    },

    /* Q3 — 4 marks — Advanced working backwards */
    {
      n: 3, marks: 4,
      prompt: 'Find the unknown value in each problem.',
      parts: [
        {
          id: '3a', label: 'a) A number is multiplied by 2/3 and then 4 is added, giving 12. What is the number?',
          marks: 1, type: 'number', answer: 12,
          answerDisplay: '12 — 2/3×n+4=12; 2/3×n=8; n=8×3/2=12.',
        },
        {
          id: '3b', label: 'b) Zara spends 2/5 of her money and then receives £15. She now has exactly 3/4 of her original amount. How much did she start with?',
          marks: 1, type: 'number', answer: 100,
          answerDisplay: '£100 — 3/5M+15=3/4M; 15=3/4M−3/5M=3M/20; M=100.',
        },
        {
          id: '3c', label: 'c) A tank is 3/8 full. After pumping in 120 litres it is 7/8 full. What is the full capacity?',
          marks: 1, type: 'number', answer: 240,
          answerDisplay: '240 litres — 7/8−3/8=4/8=1/2; 1/2×C=120; C=240.',
        },
        {
          id: '3d', label: 'd) A number is halved, then divided by 3. The result is 5. What was the starting number?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30 — 1/3×1/2×n=5; n/6=5; n=30.',
        },
      ],
    },

    /* Q4 — 4 marks — Fractions, percentages and decimals */
    {
      n: 4, marks: 4,
      prompt: 'Work with fractions, percentages and decimals.',
      parts: [
        {
          id: '4a', label: 'a) Which is largest: 3/5, 0.62, or 61%?',
          marks: 1, type: 'choice', options: ['3/5', '0.62', '61%'], answer: '0.62',
          answerDisplay: '0.62 — 3/5=0.60, 61%=0.61, 0.62. Largest: 0.62.',
        },
        {
          id: '4b', label: 'b) A TV costs £480. In a sale it is reduced by 3/8. What is the sale price?',
          marks: 1, type: 'number', answer: 300,
          answerDisplay: '£300 — reduction: 3/8×480=180; sale price: 480−180=300.',
        },
        {
          id: '4c', label: 'c) A savings account earns 1/20 interest on £800. How much interest is earned?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '£40 — 1/20×800=800/20=40.',
        },
        {
          id: '4d', label: 'd) In a test, a pupil scores 36 out of 48. Write this as a fraction in its simplest form.',
          marks: 1, type: 'fraction', answer: '3/4',
          answerDisplay: '3/4 — 36/48; HCF(36,48)=12; 36÷12=3, 48÷12=4.',
        },
      ],
    },

    /* Q5 — 3 marks — Ordering four fractions and comparison */
    {
      n: 5, marks: 3,
      prompt: 'Order and compare the fractions 5/8, 7/12, 2/3, 3/4.',
      parts: [
        {
          id: '5a', label: 'a) Which is the smallest of 5/8, 7/12, 2/3, 3/4?',
          marks: 1, type: 'choice', options: ['5/8', '7/12', '2/3', '3/4'], answer: '7/12',
          answerDisplay: '7/12 — over 24: 5/8=15/24, 7/12=14/24, 2/3=16/24, 3/4=18/24. Smallest: 14.',
        },
        {
          id: '5b', label: 'b) Which is the largest of 5/8, 7/12, 2/3, 3/4?',
          marks: 1, type: 'choice', options: ['5/8', '7/12', '2/3', '3/4'], answer: '3/4',
          answerDisplay: '3/4 — over 24: largest numerator is 18 (=3/4).',
        },
        {
          id: '5c', label: 'c) True or false: 5/9 > 7/13.',
          marks: 1, type: 'choice', options: ['True', 'False'], answer: 'True',
          answerDisplay: 'True — cross-multiply: 5×13=65, 7×9=63; 65>63 so 5/9>7/13.',
        },
      ],
    },

    /* Q6 — 3 marks — Equivalence reasoning */
    {
      n: 6, marks: 3,
      prompt: 'Use equivalence and fraction reasoning to find each unknown.',
      parts: [
        {
          id: '6a', label: 'a) 2/3 of a number equals 3/4 of 16. What is the number?',
          marks: 1, type: 'number', answer: 18,
          answerDisplay: '18 — 3/4×16=12; 2/3×n=12; n=12×3/2=18.',
        },
        {
          id: '6b', label: 'b) n/5 + 1/3 = 11/15. What is the value of n?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2 — n/5=11/15−5/15=6/15=2/5; n=2.',
        },
        {
          id: '6c', label: 'c) A fraction equivalent to 5/8 has a numerator of 35. What is its denominator?',
          marks: 1, type: 'number', answer: 56,
          answerDisplay: '56 — 5/8=35/d; d=35×8÷5=56.',
        },
      ],
    },

    /* Q7 — 3 marks — Puzzle */
    {
      n: 7, marks: 3,
      prompt: 'Logic and puzzle questions.',
      parts: [
        {
          id: '7a', label: 'a) Three fractions multiply to give 1. Two of them are 3/4 and 8/9. What is the third?',
          marks: 1, type: 'fraction', answer: '3/2',
          answerDisplay: '3/2 — 3/4×8/9=24/36=2/3; 2/3×x=1; x=3/2.',
        },
        {
          id: '7b', label: 'b) The sum of two fractions is 7/6 and their difference is 1/6. What is the larger fraction?',
          marks: 1, type: 'fraction', answer: '2/3',
          answerDisplay: '2/3 — (7/6+1/6)÷2=8/6÷2=4/6=2/3; smaller: 7/6−2/3=3/6=1/2.',
        },
        {
          id: '7c', label: 'c) I think of a fraction. I add 1/4 to it and double the result to get 1. What is my fraction?',
          marks: 1, type: 'fraction', answer: '1/4',
          answerDisplay: '1/4 — 2(f+1/4)=1; f+1/4=1/2; f=1/4.',
        },
      ],
    },
  ],
};
