import type { Paper } from '../../types/content';

export const barchartsPaper2: Paper = {
  id: 'barcharts-paper-2',
  topicId: 'barcharts',
  topicTitle: 'Bar Charts',
  topicDescription: '11+ exam practice — reading, calculating, and interpreting bar charts.',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro: 'Time allowed: 20 minutes. Total marks: 25. These questions involve the mean, fractions, and working backwards.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Star performance!' },
    { min: 16, label: '⭐⭐ Well done!' },
    { min: 9,  label: '⭐ Good effort — practise totals and the mean.' },
    { min: 0,  label: 'Keep going — work through the lessons again.' },
  ],
  questions: [
    /* Q1 — 3 marks — Mean and above/below */
    {
      n: 1,
      marks: 3,
      prompt: 'Five teams played in a quiz tournament. The bar chart shows how many points each team scored.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Quiz tournament scores',
          yLabel: 'Points',
          yMax: 30,
          bars: [
            { label: 'Team A', value: 15 },
            { label: 'Team B', value: 21 },
            { label: 'Team C', value: 18 },
            { label: 'Team D', value: 24 },
            { label: 'Team E', value: 12 },
          ],
        },
      },
      parts: [
        {
          id: '1a', label: 'a) What is the total number of points scored by all teams?',
          marks: 1, type: 'number', answer: 90,
          answerDisplay: '90  (15 + 21 + 18 + 24 + 12 = 90)',
        },
        {
          id: '1b', label: 'b) What is the mean score per team?',
          marks: 1, type: 'number', answer: 18,
          answerDisplay: '18  (90 ÷ 5 = 18)',
        },
        {
          id: '1c', label: 'c) How many teams scored strictly above the mean?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (Team B: 21 and Team D: 24 — Team C scored exactly the mean)',
          hint: 'Strictly above means greater than, not equal to.',
        },
      ],
    },

    /* Q2 — 3 marks — Café customers, running mean */
    {
      n: 2,
      marks: 3,
      prompt: 'The bar chart shows the number of customers at a café from Monday to Friday.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Café customers (Mon–Fri)',
          yLabel: 'Customers',
          yMax: 80,
          bars: [
            { label: 'Mon', value: 30 },
            { label: 'Tue', value: 40 },
            { label: 'Wed', value: 50 },
            { label: 'Thu', value: 60 },
            { label: 'Fri', value: 70 },
          ],
        },
      },
      parts: [
        {
          id: '2a', label: 'a) What is the total number of customers from Monday to Friday?',
          marks: 1, type: 'number', answer: 250,
          answerDisplay: '250  (30 + 40 + 50 + 60 + 70 = 250)',
        },
        {
          id: '2b', label: 'b) What is the mean number of customers per day?',
          marks: 1, type: 'number', answer: 50,
          answerDisplay: '50  (250 ÷ 5 = 50)',
        },
        {
          id: '2c', label: 'c) On how many days were there strictly more customers than the mean?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (Thursday: 60 and Friday: 70 are the only days above 50)',
        },
      ],
    },

    /* Q3 — 4 marks — Plant heights, mean, missing */
    {
      n: 3,
      marks: 4,
      prompt: 'Six plants were measured after 4 weeks. Their heights in cm are shown in the bar chart.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Plant heights after 4 weeks (cm)',
          yLabel: 'Height (cm)',
          yMax: 25,
          bars: [
            { label: 'Plant A', value: 12 },
            { label: 'Plant B', value: 18 },
            { label: 'Plant C', value: 15 },
            { label: 'Plant D', value: 21 },
            { label: 'Plant E', value: 9  },
            { label: 'Plant F', value: 15 },
          ],
        },
      },
      parts: [
        {
          id: '3a', label: 'a) Which plant is the tallest?',
          marks: 1, type: 'text', accept: ['plant d', 'Plant D', 'd', 'D'],
          answerDisplay: 'Plant D (21 cm)',
        },
        {
          id: '3b', label: 'b) What is the mean height of the six plants?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15 cm  (12 + 18 + 15 + 21 + 9 + 15 = 90; 90 ÷ 6 = 15)',
        },
        {
          id: '3c', label: 'c) How many plants are shorter than the mean?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (Plant A: 12 cm and Plant E: 9 cm — Plants C and F equal the mean, not shorter)',
        },
        {
          id: '3d', label: 'd) Plants A and B are combined into one pot. What is their combined height?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30 cm  (12 + 18 = 30)',
        },
      ],
    },

    /* Q4 — 3 marks — Working backwards (missing bar via mean) */
    {
      n: 4,
      marks: 3,
      prompt:
        'A bar chart shows books checked out from a library in 5 months: Jan:60, Feb:45, Mar:75, Apr:90. ' +
        'May\'s bar is not shown. The mean number of books checked out per month across all 5 months is 66.',
      parts: [
        {
          id: '4a', label: 'a) What is the total number of books checked out across all 5 months?',
          marks: 1, type: 'number', answer: 330,
          answerDisplay: '330  (66 × 5 = 330)',
          hint: 'Total = mean × number of months.',
        },
        {
          id: '4b', label: 'b) What is the sum of Jan–Apr?',
          marks: 1, type: 'number', answer: 270,
          answerDisplay: '270  (60 + 45 + 75 + 90 = 270)',
        },
        {
          id: '4c', label: 'c) How many books were checked out in May?',
          marks: 1, type: 'number', answer: 60,
          answerDisplay: '60  (330 − 270 = 60)',
        },
      ],
    },

    /* Q5 — 3 marks — Homework hours, fractions */
    {
      n: 5,
      marks: 3,
      prompt: 'The bar chart shows the number of hours 60 pupils spend on homework each week.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Weekly homework hours (60 pupils)',
          yLabel: 'Pupils',
          yMax: 20,
          bars: [
            { label: '0–1 hr',  value: 6  },
            { label: '1–2 hr',  value: 12 },
            { label: '2–3 hr',  value: 18 },
            { label: '3–4 hr',  value: 12 },
            { label: '4+ hr',   value: 12 },
          ],
        },
      },
      parts: [
        {
          id: '5a', label: 'a) How many pupils do more than 2 hours per week?',
          marks: 1, type: 'number', answer: 42,
          answerDisplay: '42  (18 + 12 + 12 = 42)',
        },
        {
          id: '5b', label: 'b) What percentage spend 0–1 hour per week?',
          marks: 1, type: 'number', answer: 10,
          answerDisplay: '10%  (6 ÷ 60 × 100 = 10)',
        },
        {
          id: '5c', label: 'c) What fraction spend 2–3 hours? (e.g. 3/10)',
          marks: 1, type: 'fraction', answer: '3/10',
          answerDisplay: '3/10  (18 ÷ 60 = 3/10)',
        },
      ],
    },

    /* Q6 — 5 marks — Fundraiser, proportions, percentage change */
    {
      n: 6,
      marks: 5,
      prompt: 'Five classes took part in a school fundraiser. The bar chart shows how much money (£) each class raised.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Fundraiser totals by class (£)',
          yLabel: '£',
          yMax: 60,
          bars: [
            { label: 'Class A', value: 35 },
            { label: 'Class B', value: 50 },
            { label: 'Class C', value: 25 },
            { label: 'Class D', value: 60 },
            { label: 'Class E', value: 30 },
          ],
        },
      },
      parts: [
        {
          id: '6a', label: 'a) What is the total amount raised by all classes?',
          marks: 1, type: 'number', answer: 200,
          answerDisplay: '£200  (35 + 50 + 25 + 60 + 30 = 200)',
        },
        {
          id: '6b', label: 'b) The school target was £45 per class. How many classes met or exceeded the target?',
          marks: 1, type: 'number', answer: 2,
          answerDisplay: '2  (Class B: £50 and Class D: £60)',
        },
        {
          id: '6c', label: 'c) What fraction of the total did Class D raise? (e.g. 3/10)',
          marks: 1, type: 'fraction', answer: '3/10',
          answerDisplay: '3/10  (60 ÷ 200 = 3/10)',
        },
        {
          id: '6d', label: 'd) Class C runs a second fundraiser and raises £50 more. What is Class C\'s new total?',
          marks: 1, type: 'number', answer: 75,
          answerDisplay: '£75  (25 + 50 = 75)',
        },
        {
          id: '6e', label: 'e) What percentage of the new overall total (£250) does Class C now account for?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30%  (75 ÷ 250 × 100 = 30)',
          hint: 'New grand total = 200 + 50 = £250.',
        },
      ],
    },

    /* Q7 — 4 marks — Two-class comparison */
    {
      n: 7,
      marks: 4,
      prompt:
        'Two classes of 30 pupils each voted for their favourite sport. ' +
        'Class X: Football 15, Swimming 6, Tennis 9. ' +
        'Class Y: Football 12, Swimming 12, Tennis 6.',
      parts: [
        {
          id: '7a', label: 'a) What fraction of Class X chose Tennis? (e.g. 3/10)',
          marks: 1, type: 'fraction', answer: '3/10',
          answerDisplay: '3/10  (9 ÷ 30 = 3/10)',
        },
        {
          id: '7b', label: 'b) In which class did a larger proportion choose Football? (write X or Y)',
          marks: 1, type: 'text', accept: ['x', 'X', 'class x', 'Class X'],
          answerDisplay: 'Class X  (15/30 = 50% vs 12/30 = 40%)',
        },
        {
          id: '7c', label: 'c) What percentage of Class Y chose Swimming?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40%  (12 ÷ 30 × 100 = 40)',
        },
        {
          id: '7d', label: 'd) How many pupils in total across both classes chose Tennis?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15  (Class X: 9 + Class Y: 6 = 15)',
        },
      ],
    },
  ],
};
