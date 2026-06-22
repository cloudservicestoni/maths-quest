import type { Paper } from '../../types/content';

export const barchartsPaper1: Paper = {
  id: 'barcharts-paper-1',
  topicId: 'barcharts',
  topicTitle: 'Bar Charts',
  topicDescription: '11+ exam practice — reading, calculating, and interpreting bar charts.',
  title: 'Paper 1',
  subtitle: 'Exam Ready',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro: 'Time allowed: 20 minutes. Total marks: 25. Read each bar chart carefully before answering.',
  gradeBands: [
    { min: 22, label: '⭐⭐⭐ Star performance!' },
    { min: 16, label: '⭐⭐ Well done — great reading skills.' },
    { min: 9,  label: '⭐ Good effort — review the scale and totals.' },
    { min: 0,  label: 'Keep practising — go back to the lessons first.' },
  ],
  questions: [
    /* Q1 — 3 marks — Reading values */
    {
      n: 1,
      marks: 3,
      prompt: 'The bar chart shows how many pupils in Year 6 chose each subject as their favourite.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Favourite subjects — Year 6 (50 pupils)',
          yLabel: 'Pupils',
          yMax: 15,
          bars: [
            { label: 'Maths',   value: 10 },
            { label: 'English', value: 8  },
            { label: 'Science', value: 12 },
            { label: 'History', value: 6  },
            { label: 'Art',     value: 14 },
          ],
        },
      },
      parts: [
        {
          id: '1a', label: 'a) How many pupils chose Maths?',
          marks: 1, type: 'number', answer: 10,
          answerDisplay: '10',
        },
        {
          id: '1b', label: 'b) Which subject is the most popular?',
          marks: 1, type: 'text', accept: ['art', 'Art'],
          answerDisplay: 'Art (14 pupils — the tallest bar)',
        },
        {
          id: '1c', label: 'c) How many pupils were surveyed in total?',
          marks: 1, type: 'number', answer: 50,
          answerDisplay: '50  (10 + 8 + 12 + 6 + 14 = 50)',
        },
      ],
    },

    /* Q2 — 3 marks — Differences and fractions */
    {
      n: 2,
      marks: 3,
      prompt: 'Use the same Year 6 favourite subjects bar chart (Maths:10, English:8, Science:12, History:6, Art:14, total:50).',
      parts: [
        {
          id: '2a', label: 'a) How many more pupils chose Art than History?',
          marks: 1, type: 'number', answer: 8,
          answerDisplay: '8  (14 − 6 = 8)',
        },
        {
          id: '2b', label: 'b) What fraction of pupils chose Maths? (e.g. 1/5)',
          marks: 1, type: 'fraction', answer: '1/5',
          answerDisplay: '1/5  (10 ÷ 50 = 1/5)',
        },
        {
          id: '2c', label: 'c) What percentage of pupils chose Science?',
          marks: 1, type: 'number', answer: 24,
          answerDisplay: '24%  (12 ÷ 50 × 100 = 24)',
        },
      ],
    },

    /* Q3 — 4 marks — Year group proportions */
    {
      n: 3,
      marks: 4,
      prompt: 'The bar chart shows the number of pupils in each year group at a primary school.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Pupils per year group',
          yLabel: 'Pupils',
          yMax: 80,
          bars: [
            { label: 'Year 3', value: 40  },
            { label: 'Year 4', value: 50  },
            { label: 'Year 5', value: 30  },
            { label: 'Year 6', value: 80  },
          ],
        },
      },
      parts: [
        {
          id: '3a', label: 'a) How many pupils are in the school altogether?',
          marks: 1, type: 'number', answer: 200,
          answerDisplay: '200  (40 + 50 + 30 + 80 = 200)',
        },
        {
          id: '3b', label: 'b) How many more pupils are in Year 6 than Year 3?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40  (80 − 40 = 40)',
        },
        {
          id: '3c', label: 'c) What fraction of the school is in Year 3? (e.g. 1/5)',
          marks: 1, type: 'fraction', answer: '1/5',
          answerDisplay: '1/5  (40 ÷ 200 = 1/5)',
        },
        {
          id: '3d', label: 'd) What percentage of the school is in Year 6?',
          marks: 1, type: 'number', answer: 40,
          answerDisplay: '40%  (80 ÷ 200 × 100 = 40)',
        },
      ],
    },

    /* Q4 — 3 marks — Combining categories */
    {
      n: 4,
      marks: 3,
      prompt: 'Use the same Year 6 subjects bar chart (Maths:10, English:8, Science:12, History:6, Art:14, total:50).',
      parts: [
        {
          id: '4a', label: 'a) How many pupils chose a STEM subject (Maths or Science)?',
          marks: 1, type: 'number', answer: 22,
          answerDisplay: '22  (10 + 12 = 22)',
        },
        {
          id: '4b', label: 'b) What fraction of all pupils chose a STEM subject? (e.g. 11/25)',
          marks: 1, type: 'fraction', answer: '11/25',
          answerDisplay: '11/25  (22 ÷ 50 = 11/25)',
        },
        {
          id: '4c',
          label: 'c) The school target is for at least 30% of pupils to choose a STEM subject. Did they meet the target? (yes / no)',
          marks: 1, type: 'text', accept: ['yes', 'Yes', 'YES'],
          answerDisplay: 'Yes  (22/50 = 44%, which is above 30%)',
          hint: 'Work out what percentage chose Maths or Science.',
        },
      ],
    },

    /* Q5 — 3 marks — Cost / practical */
    {
      n: 5,
      marks: 3,
      prompt: 'Use the year group bar chart (Y3:40, Y4:50, Y5:30, Y6:80, total:200).',
      parts: [
        {
          id: '5a', label: 'a) English and History classes each need £3 per pupil for new books. Year 6 chose those two subjects (8 + 6 = 14 pupils). How much money is needed?',
          marks: 1, type: 'number', answer: 42,
          answerDisplay: '£42  (14 × £3 = £42)',
        },
        {
          id: '5b', label: 'b) Science pupils are split into 3 equal groups. How many are in each group?',
          marks: 1, type: 'number', answer: 4,
          answerDisplay: '4  (12 ÷ 3 = 4)',
        },
        {
          id: '5c', label: 'c) The art teacher says she has enough pupils to fill exactly 2 tables of 7. Is she correct? (yes / no)',
          marks: 1, type: 'text', accept: ['yes', 'Yes', 'YES'],
          answerDisplay: 'Yes  (14 ÷ 7 = 2 — exactly 2 full tables)',
        },
      ],
    },

    /* Q6 — 4 marks — Scaling up */
    {
      n: 6,
      marks: 4,
      prompt: 'Use the favourite subjects bar chart (Maths:10, English:8, Science:12, History:6, Art:14, total:50). Suppose 25 additional pupils are surveyed and the proportions stay exactly the same.',
      parts: [
        {
          id: '6a', label: 'a) How many of the 25 extra pupils would choose Maths?',
          marks: 1, type: 'number', answer: 5,
          answerDisplay: '5  (10/50 × 25 = 5)',
          hint: 'What fraction chose Maths? Apply that fraction to 25.',
        },
        {
          id: '6b', label: 'b) How many extra would choose Art?',
          marks: 1, type: 'number', answer: 7,
          answerDisplay: '7  (14/50 × 25 = 7)',
        },
        {
          id: '6c', label: 'c) What would the new total number of Science pupils be (original + extra)?',
          marks: 1, type: 'number', answer: 18,
          answerDisplay: '18  (12 + 6 = 18, since 12/50 × 25 = 6 extra)',
        },
        {
          id: '6d', label: 'd) What would the new grand total of all pupils surveyed be?',
          marks: 1, type: 'number', answer: 75,
          answerDisplay: '75  (50 + 25 = 75)',
        },
      ],
    },

    /* Q7 — 5 marks — Visitors / car park */
    {
      n: 7,
      marks: 5,
      prompt: 'The bar chart shows the colour of cars in a car park.',
      diagram: {
        type: 'barChart',
        data: {
          title: 'Car colours in the car park',
          yMax: 30,
          bars: [
            { label: 'Red',    value: 10 },
            { label: 'Blue',   value: 20 },
            { label: 'White',  value: 30 },
            { label: 'Black',  value: 15 },
            { label: 'Silver', value: 25 },
          ],
        },
      },
      parts: [
        {
          id: '7a', label: 'a) Which colour is most common?',
          marks: 1, type: 'text', accept: ['white', 'White'],
          answerDisplay: 'White (30 cars — the tallest bar)',
        },
        {
          id: '7b', label: 'b) How many more Blue cars than Red cars are there?',
          marks: 1, type: 'number', answer: 10,
          answerDisplay: '10  (20 − 10 = 10)',
        },
        {
          id: '7c', label: 'c) How many cars are in the car park altogether?',
          marks: 1, type: 'number', answer: 100,
          answerDisplay: '100  (10 + 20 + 30 + 15 + 25 = 100)',
        },
        {
          id: '7d', label: 'd) What percentage of cars are White?',
          marks: 1, type: 'number', answer: 30,
          answerDisplay: '30%  (30 ÷ 100 × 100 = 30)',
        },
        {
          id: '7e', label: 'e) The car park adds 50 more spaces and they fill with the same proportions. How many extra White cars arrive?',
          marks: 1, type: 'number', answer: 15,
          answerDisplay: '15  (30% of 50 = 15)',
          hint: 'White is 30% of the total. Find 30% of 50.',
        },
      ],
    },
  ],
};
