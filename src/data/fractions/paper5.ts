import type { Paper } from '../../types/content';

export const fractionsPaper5: Paper = {
  id: 'fractions-paper-5',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
  title: 'Paper 5',
  subtitle: 'Moderate',
  timeLimitMinutes: 25,
  totalMarks: 25,
  intro: 'Time allowed: 25 minutes. Total marks: 25. Show all working for full marks.',
  gradeBands: [
    { min: 21, label: '⭐⭐⭐ Outstanding — excellent fraction skills!' },
    { min: 15, label: '⭐⭐ Well done — solid fraction work.' },
    { min: 8,  label: '⭐ Good effort — revisit the trickier lessons.' },
    { min: 0,  label: 'Keep going — work through the lessons and try again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Fractions, decimals and percentages */
    {
      n: 1, marks: 3,
      prompt: 'Convert between fractions, decimals and percentages.',
      parts: [
        {
          id: '1a', label: 'a) Write 3/5 as a percentage (give just the number, e.g. 75 for 75%).',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60% — 3÷5=0.6=60%.',
        },
        {
          id: '1b', label: 'b) Write 40% as a fraction in its simplest form.',
          marks: 1, type: 'fraction', answer: '2/5',
          answerDisplay: '2/5 — 40/100; HCF(40,100)=20 → 2/5.',
        },
        {
          id: '1c', label: 'c) Write 0.625 as a fraction in its simplest form.',
          marks: 1, type: 'fraction', answer: '5/8',
          answerDisplay: '5/8 — 625/1000; HCF=125; 625÷125=5, 1000÷125=8.',
        },
      ],
    },

    /* Q2 — 4 marks — Four operations */
    {
      n: 2, marks: 4,
      prompt: 'Calculate. Simplify all answers fully.',
      parts: [
        {
          id: '2a', label: 'a) 7/8 − 2/3 =',
          marks: 1, type: 'fraction', answer: '5/24',
          answerDisplay: '5/24 — LCM(8,3)=24; 21/24−16/24=5/24.',
        },
        {
          id: '2b', label: 'b) 3/4 + 5/6 − 1/3 = (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '5/4',
          answerDisplay: '5/4 — LCM(4,6,3)=12; 9/12+10/12−4/12=15/12; HCF(15,12)=3 → 5/4.',
        },
        {
          id: '2c', label: 'c) 2⅖ × 1⅔ =',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4 — 12/5×5/3=60/15=4.',
        },
        {
          id: '2d', label: 'd) 4½ ÷ 1⅛ =',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4 — 9/2÷9/8=9/2×8/9=72/18=4.',
        },
      ],
    },

    /* Q3 — 3 marks — Fractions of amounts, multi-step */
    {
      n: 3, marks: 3,
      prompt: 'Solve each problem.',
      parts: [
        {
          id: '3a', label: 'a) A class has 30 students. 2/5 are girls. How many boys are there?',
          marks: 1, type: 'number', answer: 18,
          answerDisplay: '18 — girls: 2/5×30=12; boys: 30−12=18.',
        },
        {
          id: '3b', label: 'b) A shop has 240 items. It sells 3/8 on Monday and 1/4 on Tuesday. How many items are unsold?',
          marks: 1, type: 'number', answer: 90,
          answerDisplay: '90 — Monday: 3/8×240=90; Tuesday: 1/4×240=60; unsold: 240−90−60=90.',
        },
        {
          id: '3c', label: 'c) A farmer plants 5/12 of a 48-acre field with wheat and 1/6 with barley. How many acres are unplanted?',
          marks: 1, type: 'number', answer: 20,
          answerDisplay: '20 acres — wheat: 5/12×48=20; barley: 1/6×48=8; unplanted: 48−20−8=20.',
        },
      ],
    },

    /* Q4 — 4 marks — Distance and time */
    {
      n: 4, marks: 4,
      prompt: 'Solve each distance or time problem.',
      parts: [
        {
          id: '4a', label: 'a) A car travels at 60 mph. How far does it travel in ¾ of an hour?',
          marks: 1, type: 'number', answer: 45,
          answerDisplay: '45 miles — 60×3/4=45.',
        },
        {
          id: '4b', label: 'b) A 120 km journey takes 1½ hours. What fraction of the journey is completed in the first 45 minutes?',
          marks: 1, type: 'fraction', answer: '1/2',
          answerDisplay: '1/2 — 45 min is half of 90 min (=1½ hrs); so half the journey.',
        },
        {
          id: '4c', label: 'c) A cyclist covers 3/8 of a 96 km race. How far does she still have to go?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60 km — covered: 3/8×96=36; remaining: 96−36=60.',
        },
        {
          id: '4d', label: 'd) A bus journey takes 2½ hours. After completing 3/5 of the journey, how many minutes remain?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60 minutes — 2½ hr=150 min; 2/5 left: 2/5×150=60.',
        },
      ],
    },

    /* Q5 — 4 marks — Sharing and mixtures */
    {
      n: 5, marks: 4,
      prompt: 'Solve each sharing or mixture problem.',
      parts: [
        {
          id: '5a', label: 'a) Ali and Ben share £40 in the ratio 3:5. How much does Ali receive?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '£15 — 8 parts total; Ali: 3/8×40=15.',
        },
        {
          id: '5b', label: 'b) A mixture uses flour, sugar, and butter in the ratio 4:2:1. What fraction of the mixture is flour?',
          marks: 1, type: 'fraction', answer: '4/7',
          answerDisplay: '4/7 — 4+2+1=7 parts; flour = 4/7.',
        },
        {
          id: '5c', label: 'c) Amy eats 3/8 of a pizza, Ben eats 1/4. What fraction does Chris eat if he finishes it?',
          marks: 1, type: 'fraction', answer: '3/8',
          answerDisplay: '3/8 — 1−3/8−1/4=8/8−3/8−2/8=3/8.',
        },
        {
          id: '5d', label: 'd) In a bag of 56 marbles, 3/7 are red and 1/4 are blue. How many are green?',
          marks: 1, type: 'number', answer: 18,
          answerDisplay: '18 — red: 3/7×56=24; blue: 1/4×56=14; green: 56−24−14=18.',
        },
      ],
    },

    /* Q6 — 4 marks — Area and perimeter with fractions */
    {
      n: 6, marks: 4,
      prompt: 'Calculate using fractions. Give answers as fractions in their simplest form.',
      parts: [
        {
          id: '6a', label: 'a) A rectangle is ¾ m wide and 5/6 m long. What is its area in m²?',
          marks: 1, type: 'fraction', answer: '5/8',
          answerDisplay: '5/8 m² — 3/4×5/6=15/24; HCF(15,24)=3 → 5/8.',
        },
        {
          id: '6b', label: 'b) The perimeter of a square is 5/3 m. What is the length of one side?',
          marks: 1, type: 'fraction', answer: '5/12',
          answerDisplay: '5/12 m — perimeter÷4=5/3÷4=5/12.',
        },
        {
          id: '6c', label: 'c) A rectangle has an area of ¾ m² and a length of 3/2 m. What is its width?',
          marks: 1, type: 'fraction', answer: '1/2',
          answerDisplay: '1/2 m — width=area÷length=3/4÷3/2=3/4×2/3=6/12=1/2.',
        },
        {
          id: '6d', label: 'd) A garden path is 2¾ m long and ¾ m wide. What is its area? (give as an improper fraction)',
          marks: 1, type: 'fraction', answer: '33/16',
          answerDisplay: '33/16 m² (=2 1/16) — 11/4×3/4=33/16.',
        },
      ],
    },

    /* Q7 — 3 marks — Working backwards */
    {
      n: 7, marks: 3,
      prompt: 'Find the original amount.',
      parts: [
        {
          id: '7a', label: 'a) A school has 360 pupils. 5/9 are in Key Stage 2. How many is that?',
          marks: 1, type: 'number', answer: 200,
          answerDisplay: '200 — 5/9×360=1800/9=200.',
        },
        {
          id: '7b', label: 'b) A water tank holds 3/4 of its capacity, which is 120 litres. What is the full capacity?',
          marks: 1, type: 'number', answer: 160,
          answerDisplay: '160 litres — 3/4×C=120; C=120×4/3=160.',
        },
        {
          id: '7c', label: 'c) Emma saves 2/5 of her pocket money and saves £6 per week. What is her weekly pocket money?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '£15 — 2/5×P=6; P=6×5/2=15.',
        },
      ],
    },
  ],
};
