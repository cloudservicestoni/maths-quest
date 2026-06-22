import type { Paper } from '../../types/content';

export const barchartsPaper3: Paper = {
  id: 'barcharts-paper-3',
  topicId: 'barcharts',
  topicTitle: 'Bar Charts',
  topicDescription: '11+ exam practice — reading, calculating, and interpreting bar charts.',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. ' +
    'These are harder — always find the total first, read the question twice, and show your working.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Outstanding — Boss Defeated!' },
    { min: 16, label: '⭐⭐ Great work on a tough paper.' },
    { min: 9,  label: '⭐ Good effort — review multi-step methods.' },
    { min: 0,  label: 'Tricky paper! Go back to lessons 3 and 4 first.' },
  ],
  questions: [
    /* Q1 — 3 marks — Mean, above mean, top-scorers fraction */
    {
      n: 1,
      marks: 3,
      prompt: 'Five athletes ran a race. The bar chart shows the number of seconds each athlete shaved off their personal best.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Seconds improved on personal best',
          yLabel: 'Seconds',
          yMax: 60,
          bars: [
            { label: 'Ali',    value: 20 },
            { label: 'Ben',    value: 40 },
            { label: 'Clara',  value: 30 },
            { label: 'Dan',    value: 50 },
            { label: 'Ed',     value: 60 },
          ],
        },
      },
      parts: [
        {
          id: '1a', label: 'a) What is the mean improvement across all five athletes?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40 seconds  (20 + 40 + 30 + 50 + 60 = 200; 200 ÷ 5 = 40)',
        },
        {
          id: '1b', label: 'b) How many athletes improved by more than the mean?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (Dan: 50 and Ed: 60)',
        },
        {
          id: '1c', label: 'c) What fraction of the total improvement did Dan and Ed achieve together? (e.g. 11/20)',
          marks: 1, type: 'fraction', answer: '11/20',
          answerDisplay: '11/20  ((50 + 60) ÷ 200 = 110/200 = 11/20)',
          hint: 'Total improvement = 200 seconds.',
        },
      ],
    },

    /* Q2 — 4 marks — Missing bar from mean */
    {
      n: 2,
      marks: 4,
      prompt:
        'Six friends each scored points in a board game. ' +
        'The bar chart shows five of their scores (Amy:24, Ben:30, Clara:36, Dan:18, Ed:12). ' +
        'Fran\'s bar is missing. The mean score for all six players is 25.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Board game scores (Fran\'s bar is missing)',
          yLabel: 'Points',
          yMax: 40,
          bars: [
            { label: 'Amy',   value: 24 },
            { label: 'Ben',   value: 30 },
            { label: 'Clara', value: 36 },
            { label: 'Dan',   value: 18 },
            { label: 'Ed',    value: 12 },
            { label: 'Fran',  value: 0  },
          ],
        },
      },
      parts: [
        {
          id: '2a', label: 'a) What is the total score for all six players?',
          marks: 1, type: 'number', answer: 150,
          answerDisplay: '150  (25 × 6 = 150)',
          hint: 'Total = mean × number of players.',
        },
        {
          id: '2b', label: 'b) What is the sum of the five shown scores?',
          marks: 1, type: 'number', answer: 120,
          answerDisplay: '120  (24 + 30 + 36 + 18 + 12 = 120)',
        },
        {
          id: '2c', label: 'c) How many points did Fran score?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30  (150 − 120 = 30)',
        },
        {
          id: '2d', label: 'd) What fraction of the total did Clara score? (e.g. 6/25)',
          marks: 1, type: 'fraction', answer: '6/25',
          answerDisplay: '6/25  (36 ÷ 150 = 6/25)',
        },
      ],
    },

    /* Q3 — 3 marks — Percentage change / comparison */
    {
      n: 3,
      marks: 3,
      prompt: 'The bar chart shows monthly sales (units) of a board game over four months.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Monthly board game sales (units)',
          yLabel: 'Units sold',
          yMax: 80,
          bars: [
            { label: 'Jan', value: 50 },
            { label: 'Feb', value: 60 },
            { label: 'Mar', value: 70 },
            { label: 'Apr', value: 75 },
          ],
        },
      },
      parts: [
        {
          id: '3a', label: 'a) What is the total number of units sold over the four months?',
          marks: 1, type: 'number', answer: 255,
          answerDisplay: '255  (50 + 60 + 70 + 75 = 255)',
        },
        {
          id: '3b', label: 'b) By what percentage did sales increase from January to April?',
          marks: 1, type: 'number', answer: 50,
          answerDisplay: '50%  ((75 − 50) ÷ 50 × 100 = 25/50 × 100 = 50%)',
          hint: 'Percentage increase = (increase ÷ original) × 100.',
        },
        {
          id: '3c', label: 'c) The shop predicted 80 units in April. By how many did actual sales fall short?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (80 − 75 = 5)',
        },
      ],
    },

    /* Q4 — 4 marks — Ice cream / ratio and proportion */
    {
      n: 4,
      marks: 4,
      prompt: 'A café sold ice cream in four flavours. The bar chart shows how many scoops of each flavour were sold.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Ice cream scoops sold',
          yLabel: 'Scoops',
          yMax: 30,
          bars: [
            { label: 'Chocolate', value: 21 },
            { label: 'Vanilla',   value: 14 },
            { label: 'Strawberry',value: 7  },
            { label: 'Mint',      value: 28 },
          ],
        },
      },
      parts: [
        {
          id: '4a', label: 'a) How many scoops were sold in total?',
          marks: 1, type: 'number', answer: 70,
          answerDisplay: '70  (21 + 14 + 7 + 28 = 70)',
        },
        {
          id: '4b', label: 'b) How many times more Mint scoops were sold than Strawberry scoops?',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4  (28 ÷ 7 = 4)',
        },
        {
          id: '4c', label: 'c) What fraction of all scoops were Mint? (e.g. 2/5)',
          marks: 1, type: 'fraction', answer: '2/5',
          answerDisplay: '2/5  (28 ÷ 70 = 2/5)',
        },
        {
          id: '4d', label: 'd) The café orders stock equal to twice the number of scoops sold. How many Vanilla ice creams should they order?',
          marks: 1, type: 'number', answer: 28,
          answerDisplay: '28  (14 × 2 = 28)',
        },
      ],
    },

    /* Q5 — 3 marks — New pupils joining, updated fractions */
    {
      n: 5,
      marks: 3,
      prompt: 'A survey of 60 pupils asked how many hours per week they practise music.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Weekly music practice (60 pupils)',
          yLabel: 'Pupils',
          yMax: 20,
          bars: [
            { label: '0–1 hr', value: 6  },
            { label: '1–2 hr', value: 12 },
            { label: '2–3 hr', value: 18 },
            { label: '3–4 hr', value: 12 },
            { label: '4+ hr',  value: 12 },
          ],
        },
      },
      parts: [
        {
          id: '5a', label: 'a) What fraction of pupils practise more than 2 hours per week? (e.g. 7/10)',
          marks: 1, type: 'fraction', answer: '7/10',
          answerDisplay: '7/10  ((18 + 12 + 12) ÷ 60 = 42/60 = 7/10)',
        },
        {
          id: '5b', label: 'b) 12 new pupils join and all choose the 2–3 hr category. How many pupils now choose that category?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30  (18 + 12 = 30)',
        },
        {
          id: '5c', label: 'c) What fraction of the new total of 72 pupils choose the 2–3 hr category? (e.g. 5/12)',
          marks: 1, type: 'fraction', answer: '5/12',
          answerDisplay: '5/12  (30 ÷ 72 = 5/12)',
          hint: 'New total = 60 + 12 = 72.',
        },
      ],
    },

    /* Q6 — 4 marks — Book sales, percentage change */
    {
      n: 6,
      marks: 4,
      prompt: 'The bar chart shows book sales in four categories at a shop last month.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Book sales by category',
          yLabel: 'Books sold',
          yMax: 80,
          bars: [
            { label: 'Fiction',      value: 80 },
            { label: 'Non-Fiction',  value: 40 },
            { label: "Children's",   value: 60 },
            { label: 'Reference',    value: 20 },
          ],
        },
      },
      parts: [
        {
          id: '6a', label: 'a) What is the total number of books sold?',
          marks: 1, type: 'number', answer: 200,
          answerDisplay: '200  (80 + 40 + 60 + 20 = 200)',
        },
        {
          id: '6b', label: 'b) Fiction sales increase by 25% next month. How many Fiction books are sold then?',
          marks: 1, type: 'number', answer: 100,
          answerDisplay: '100  (80 × 1.25 = 100)',
          hint: '25% of 80 = 20. Add the increase to the original.',
        },
        {
          id: '6c', label: 'c) What percentage of the original total were Non-Fiction and Reference combined?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30%  ((40 + 20) ÷ 200 × 100 = 60/200 × 100 = 30)',
        },
        {
          id: '6d', label: 'd) After Fiction\'s 25% increase, what is the new grand total of books sold?',
          marks: 1, type: 'number', answer: 220,
          answerDisplay: '220  (200 + 20 = 220)',
        },
      ],
    },

    /* Q7 — 4 marks — Pocket money, missing value, multi-step */
    {
      n: 7,
      marks: 4,
      prompt:
        'A bar chart shows weekly pocket money for five children: Amy:£8, Ben:£12, Clara:£10, Dan:£6. ' +
        'Ed\'s bar is missing. The mean pocket money is £9.',
      parts: [
        {
          id: '7a', label: 'a) What is the total pocket money for all five children?',
          marks: 1, type: 'number', answer: 45,
          answerDisplay: '£45  (9 × 5 = 45)',
          hint: 'Total = mean × number of children.',
        },
        {
          id: '7b', label: 'b) How much pocket money does Ed receive each week?',
          marks: 1, type: 'number', answer: 9,
          answerDisplay: '£9  (45 − 8 − 12 − 10 − 6 = 9)',
        },
        {
          id: '7c', label: 'c) What fraction of the total does Ben receive? (e.g. 4/15)',
          marks: 1, type: 'fraction', answer: '4/15',
          answerDisplay: '4/15  (12 ÷ 45 = 4/15)',
        },
        {
          id: '7d', label: 'd) Amy and Dan save all their pocket money for 3 weeks. How much do they save together?',
          marks: 1, type: 'number', answer: 42,
          answerDisplay: '£42  ((8 + 6) × 3 = 14 × 3 = 42)',
        },
      ],
    },
  ],
};
