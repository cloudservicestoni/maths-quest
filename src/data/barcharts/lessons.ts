import type { Lesson } from '../../types/content';

export const barchartsLessons: Lesson[] = [
  /* ─────────────────────────────────────────────────────────────────────────
   * Lesson 1 — Reading Bar Charts  ⭐
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'barcharts-lesson-1',
    topicId: 'barcharts',
    topicTitle: 'Bar Charts',
    topicDescription: '11+ practice — read, draw, and interpret bar charts.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — Reading Bar Charts',
    summary: 'Axes, labels, scale, and reading values from a bar chart.',
    sections: [
      {
        type: 'note',
        heading: 'What is a bar chart?',
        body:
          'A <b>bar chart</b> is a diagram that uses rectangular bars to show amounts or counts. ' +
          'Each bar stands for one category, and the <b>height</b> of the bar shows its value.<br/><br/>' +
          'Key words to know:<br/>' +
          '<ul>' +
          '<li><b>x-axis</b> — the horizontal line along the bottom. It shows the <em>categories</em>.</li>' +
          '<li><b>y-axis</b> — the vertical line on the left. It shows the <em>scale</em> (the numbers).</li>' +
          '<li><b>scale</b> — the set of equally spaced numbers on the y-axis.</li>' +
          '<li><b>interval</b> — the gap between each number on the scale (e.g. 0, 2, 4, 6 → interval is 2).</li>' +
          '</ul>',
      },
      {
        type: 'note',
        heading: 'How to read a value',
        body:
          '<b>Step 1:</b> Find the bar you want to read.<br/>' +
          '<b>Step 2:</b> Look at the <em>top</em> of that bar.<br/>' +
          '<b>Step 3:</b> Follow an imaginary horizontal line from the top of the bar across to the y-axis.<br/>' +
          '<b>Step 4:</b> Read the number on the y-axis.<br/><br/>' +
          '<b>Tip:</b> If the top of the bar falls between two marked numbers, estimate carefully — ' +
          'e.g. halfway between 4 and 6 is 5.',
      },
      {
        type: 'example',
        heading: 'Worked example: books read in the holidays',
        intro: 'The bar chart below shows how many books five children read during the school holidays.',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Books read in the school holidays',
            yLabel: 'Books',
            yMax: 10,
            bars: [
              { label: 'Mia',  value: 8 },
              { label: 'Jake', value: 5 },
              { label: 'Lily', value: 10 },
              { label: 'Sam',  value: 3 },
              { label: 'Noah', value: 6 },
            ],
          },
        },
        steps: [
          'To find how many books Lily read: find the "Lily" bar, look at its top, read across to the y-axis → 10 books.',
          'To find who read the fewest: look for the shortest bar → Sam with 3 books.',
          'To find the total: add all the bars → 8 + 5 + 10 + 3 + 6 = 32 books.',
          'To find a difference: Lily read 10 and Jake read 5 → Lily read 10 − 5 = 5 more books than Jake.',
        ],
        result: 'Reading a bar chart = find the bar, trace to the y-axis, then add, subtract or compare as needed.',
      },
      {
        type: 'practice',
        heading: 'Reading values',
        prompt: 'Use the bar chart above (Mia: 8, Jake: 5, Lily: 10, Sam: 3, Noah: 6).',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Books read in the school holidays',
            yLabel: 'Books',
            yMax: 10,
            bars: [
              { label: 'Mia',  value: 8 },
              { label: 'Jake', value: 5 },
              { label: 'Lily', value: 10 },
              { label: 'Sam',  value: 3 },
              { label: 'Noah', value: 6 },
            ],
          },
        },
        parts: [
          {
            id: 'bc1-p1-a',
            label: 'How many books did Mia read?',
            type: 'number',
            answer: 8,
            answerDisplay: '8',
            explanation: 'The top of Mia\'s bar reaches 8 on the y-axis.',
          },
          {
            id: 'bc1-p1-b',
            label: 'How many books did Jake read?',
            type: 'number',
            answer: 5,
            answerDisplay: '5',
            explanation: 'Jake\'s bar reaches 5.',
          },
          {
            id: 'bc1-p1-c',
            label: 'Who read the most books? (write their name)',
            type: 'text',
            accept: ['lily', 'Lily'],
            answerDisplay: 'Lily (10 books — the tallest bar)',
            explanation: 'The tallest bar belongs to Lily with 10 books.',
          },
          {
            id: 'bc1-p1-d',
            label: 'Who read the fewest books?',
            type: 'text',
            accept: ['sam', 'Sam'],
            answerDisplay: 'Sam (3 books — the shortest bar)',
            explanation: 'The shortest bar belongs to Sam with 3 books.',
          },
        ],
      },
      {
        type: 'practice',
        heading: 'Totals and differences',
        prompt: 'Still using the same bar chart (Mia: 8, Jake: 5, Lily: 10, Sam: 3, Noah: 6).',
        parts: [
          {
            id: 'bc1-p2-a',
            label: 'What is the total number of books all five children read?',
            type: 'number',
            answer: 32,
            answerDisplay: '32  (8 + 5 + 10 + 3 + 6 = 32)',
            explanation: 'Add all five bar values: 8 + 5 + 10 + 3 + 6 = 32.',
          },
          {
            id: 'bc1-p2-b',
            label: 'How many more books did Lily read than Jake?',
            type: 'number',
            answer: 5,
            answerDisplay: '5  (10 − 5 = 5)',
            explanation: 'Subtract: Lily 10 − Jake 5 = 5 more books.',
          },
          {
            id: 'bc1-p2-c',
            label: 'How many books did Mia and Noah read altogether?',
            type: 'number',
            answer: 14,
            answerDisplay: '14  (8 + 6 = 14)',
            explanation: 'Add Mia and Noah\'s values: 8 + 6 = 14.',
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * Lesson 2 — Scale and Intervals  ⭐⭐
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'barcharts-lesson-2',
    topicId: 'barcharts',
    topicTitle: 'Bar Charts',
    topicDescription: '11+ practice — read, draw, and interpret bar charts.',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Scale and Intervals',
    summary: 'Reading between scale marks, identifying intervals, and fractions from charts.',
    sections: [
      {
        type: 'note',
        heading: 'The y-axis scale',
        body:
          'The y-axis always starts at <b>0</b> and goes up in <b>equal steps</b> called intervals.<br/><br/>' +
          '<b>How to find the interval:</b> look at two consecutive numbers on the y-axis and subtract them.<br/>' +
          'Example: if the marks are 0, 4, 8, 12 … the interval is 4.<br/><br/>' +
          '<b>Reading between marks:</b><br/>' +
          '<ul>' +
          '<li>If a bar lands exactly on a mark, read that number.</li>' +
          '<li>If a bar lands halfway between 4 and 8, the value is 6.</li>' +
          '<li>Count the gap carefully: if the interval is 4 and the bar is one quarter of the way up, add 1 (¼ × 4 = 1).</li>' +
          '</ul>',
      },
      {
        type: 'note',
        heading: 'Fractions and percentages from a bar chart',
        body:
          'Once you can read all the bar values, you can calculate:<br/>' +
          '<ul>' +
          '<li><b>Total</b> — add all the bar values.</li>' +
          '<li><b>Fraction</b> — one bar value ÷ total.  Example: 6 out of 30 = 6/30 = <b>1/5</b>.</li>' +
          '<li><b>Percentage</b> — (bar value ÷ total) × 100.  Example: 6/30 × 100 = <b>20%</b>.</li>' +
          '</ul>',
      },
      {
        type: 'example',
        heading: 'Worked example: favourite colours',
        intro: 'A class of 30 pupils voted for their favourite colour. The results are shown below.',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Favourite colours (class of 30)',
            yLabel: 'Pupils',
            yMax: 10,
            bars: [
              { label: 'Blue',   value: 10 },
              { label: 'Red',    value: 6  },
              { label: 'Green',  value: 8  },
              { label: 'Yellow', value: 4  },
              { label: 'Purple', value: 2  },
            ],
          },
        },
        steps: [
          'Interval: the y-axis marks are 0, 2, 4, 6, 8, 10 → interval = 2.',
          'Total: 10 + 6 + 8 + 4 + 2 = 30 pupils (matches the class size — good check!).',
          'Fraction who chose Blue: 10/30 = 1/3.',
          'Percentage who chose Red: 6/30 × 100 = 20%.',
          'Difference between Green and Yellow: 8 − 4 = 4 more pupils chose Green.',
        ],
        result: 'Interval = 2.  Blue fraction = 1/3.  Red percentage = 20%.  Green − Yellow = 4.',
      },
      {
        type: 'practice',
        heading: 'Scale and interval',
        prompt: 'Use the favourite colours bar chart above (Blue:10, Red:6, Green:8, Yellow:4, Purple:2, total 30).',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Favourite colours (class of 30)',
            yLabel: 'Pupils',
            yMax: 10,
            bars: [
              { label: 'Blue',   value: 10 },
              { label: 'Red',    value: 6  },
              { label: 'Green',  value: 8  },
              { label: 'Yellow', value: 4  },
              { label: 'Purple', value: 2  },
            ],
          },
        },
        parts: [
          {
            id: 'bc2-p1-a',
            label: 'What is the interval (gap between each number on the y-axis)?',
            type: 'number',
            answer: 2,
            answerDisplay: '2  (the marks go 0, 2, 4, 6, 8, 10)',
            explanation: 'Subtract any two neighbouring marks: 4 − 2 = 2.',
          },
          {
            id: 'bc2-p1-b',
            label: 'What is the total number of pupils in the class?',
            type: 'number',
            answer: 30,
            answerDisplay: '30  (10 + 6 + 8 + 4 + 2 = 30)',
            explanation: 'Add all five bar values: 10 + 6 + 8 + 4 + 2 = 30.',
          },
          {
            id: 'bc2-p1-c',
            label: 'What fraction of the class chose Blue? (write as a fraction e.g. 1/3)',
            type: 'fraction',
            answer: '1/3',
            answerDisplay: '1/3  (10 ÷ 30 = 1/3)',
            explanation: '10 out of 30 chose Blue. 10/30 simplifies to 1/3.',
          },
          {
            id: 'bc2-p1-d',
            label: 'What percentage of the class chose Red?',
            type: 'number',
            answer: 20,
            answerDisplay: '20%  (6 ÷ 30 × 100 = 20)',
            explanation: '6 out of 30 → 6/30 × 100 = 20%.',
          },
          {
            id: 'bc2-p1-e',
            label: 'How many more pupils chose Green than Yellow?',
            type: 'number',
            answer: 4,
            answerDisplay: '4  (8 − 4 = 4)',
            explanation: 'Green has 8, Yellow has 4. 8 − 4 = 4 more chose Green.',
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * Lesson 3 — Calculating from Charts  ⭐⭐⭐
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'barcharts-lesson-3',
    topicId: 'barcharts',
    topicTitle: 'Bar Charts',
    topicDescription: '11+ practice — read, draw, and interpret bar charts.',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Calculating from Charts',
    summary: 'Find totals, fractions, percentages, and the mean from bar chart data.',
    sections: [
      {
        type: 'note',
        heading: 'Four key calculations',
        body:
          'Once you have read all the bar values, four calculations come up again and again in 11+ questions:<br/><br/>' +
          '<b>1. Total</b> — add every bar value together.<br/>' +
          '<b>2. Difference</b> — subtract the smaller bar from the larger bar.<br/>' +
          '<b>3. Fraction</b> — one bar ÷ total (simplify if possible).<br/>' +
          '<b>4. Mean</b> — total ÷ number of bars.<br/><br/>' +
          '<b>Key tip:</b> always work out the total first — you need it for fractions, percentages, and the mean.',
      },
      {
        type: 'example',
        heading: 'Worked example: quiz scores',
        intro: 'Five teams played a pub quiz. The bar chart shows how many points each team scored. The total is 200 points.',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Points scored in the quiz',
            yLabel: 'Points',
            yMax: 60,
            bars: [
              { label: 'Team A', value: 20 },
              { label: 'Team B', value: 40 },
              { label: 'Team C', value: 30 },
              { label: 'Team D', value: 50 },
              { label: 'Team E', value: 60 },
            ],
          },
        },
        steps: [
          'Total: 20 + 40 + 30 + 50 + 60 = 200 points.',
          'Mean: 200 ÷ 5 = 40 points per team.',
          'Teams above the mean: Team D (50) and Team E (60). Team B is exactly on the mean.',
          'Fraction scored by Team D: 50/200 = 1/4.',
          'Percentage scored by Team A: 20/200 × 100 = 10%.',
          'Difference between Team E and Team A: 60 − 20 = 40 points.',
        ],
        result: 'Total = 200. Mean = 40. Team D fraction = 1/4. Team A percentage = 10%.',
      },
      {
        type: 'practice',
        heading: 'Totals, mean, fractions, percentages',
        prompt: 'Use the quiz scores chart above (A:20, B:40, C:30, D:50, E:60, total: 200).',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Points scored in the quiz',
            yLabel: 'Points',
            yMax: 60,
            bars: [
              { label: 'Team A', value: 20 },
              { label: 'Team B', value: 40 },
              { label: 'Team C', value: 30 },
              { label: 'Team D', value: 50 },
              { label: 'Team E', value: 60 },
            ],
          },
        },
        parts: [
          {
            id: 'bc3-p1-a',
            label: 'What is the total number of points scored by all teams?',
            type: 'number',
            answer: 200,
            answerDisplay: '200  (20 + 40 + 30 + 50 + 60)',
            explanation: 'Add all five values: 20 + 40 + 30 + 50 + 60 = 200.',
          },
          {
            id: 'bc3-p1-b',
            label: 'What is the mean (average) score per team?',
            type: 'number',
            answer: 40,
            answerDisplay: '40  (200 ÷ 5 = 40)',
            explanation: 'Mean = total ÷ number of teams = 200 ÷ 5 = 40.',
          },
          {
            id: 'bc3-p1-c',
            label: 'What fraction of the total did Team D score? (e.g. 1/4)',
            type: 'fraction',
            answer: '1/4',
            answerDisplay: '1/4  (50 ÷ 200 = 1/4)',
            explanation: 'Team D scored 50 out of 200. 50/200 = 1/4.',
          },
          {
            id: 'bc3-p1-d',
            label: 'What percentage of the total did Team A score?',
            type: 'number',
            answer: 10,
            answerDisplay: '10%  (20 ÷ 200 × 100 = 10)',
            explanation: '20 out of 200 = 10%.',
          },
          {
            id: 'bc3-p1-e',
            label: 'How many points more did Team E score than Team A?',
            type: 'number',
            answer: 40,
            answerDisplay: '40  (60 − 20 = 40)',
            explanation: 'Team E scored 60, Team A scored 20. 60 − 20 = 40.',
          },
          {
            id: 'bc3-p1-f',
            label: 'How many teams scored above the mean of 40?',
            type: 'number',
            answer: 2,
            answerDisplay: '2  (Team D: 50 and Team E: 60 are the only scores above 40)',
            explanation: 'Team D (50) and Team E (60) are both above 40. Team B is exactly 40 — not above.',
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * Lesson 4 — Problem Solving with Bar Charts  ⭐⭐⭐⭐
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'barcharts-lesson-4',
    topicId: 'barcharts',
    topicTitle: 'Bar Charts',
    topicDescription: '11+ practice — read, draw, and interpret bar charts.',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Problem Solving with Bar Charts',
    summary: 'Multi-step problems: scaling, missing values, and working backwards from chart data.',
    sections: [
      {
        type: 'note',
        heading: 'Multi-step bar chart problems',
        body:
          'Harder 11+ questions ask you to do several things with chart data:<br/><br/>' +
          '<b>Step 1 — Read</b> the values you need from the chart.<br/>' +
          '<b>Step 2 — Calculate</b> something with those values (e.g. total, fraction, cost).<br/>' +
          '<b>Step 3 — Answer</b> the final question using the result of step 2.<br/><br/>' +
          'Common multi-step patterns:<br/>' +
          '<ul>' +
          '<li><b>Cost problems:</b> read the number of items, multiply by the price per item.</li>' +
          '<li><b>Scaling:</b> if a chart shows 50 people but you need to predict for 200, multiply each value by 4.</li>' +
          '<li><b>Missing bar:</b> total − (sum of all shown bars) = missing bar value.</li>' +
          '</ul>',
      },
      {
        type: 'note',
        heading: 'Finding a missing bar value',
        body:
          'Sometimes a bar is missing and you are told the mean or the total.<br/><br/>' +
          '<b>Method 1 — given the total:</b><br/>' +
          'Missing bar = total − (sum of all shown bars).<br/><br/>' +
          '<b>Method 2 — given the mean:</b><br/>' +
          'Total = mean × number of bars.<br/>' +
          'Then: missing bar = total − (sum of all shown bars).',
      },
      {
        type: 'example',
        heading: 'Worked example: school trips',
        intro:
          'The bar chart shows how many pupils from each year group went on trips last term. ' +
          'The total across all four year groups is 100.',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Pupils on school trips by year group',
            yLabel: 'Pupils',
            yMax: 40,
            bars: [
              { label: 'Year 3', value: 20 },
              { label: 'Year 4', value: 40 },
              { label: 'Year 5', value: 30 },
              { label: 'Year 6', value: 10 },
            ],
          },
        },
        steps: [
          'Total: 20 + 40 + 30 + 10 = 100 pupils (check against the given total — it matches).',
          'Year 4 has twice as many as Year 3: 40 = 2 × 20. True ✓',
          'Fraction for Year 6: 10/100 = 1/10.',
          'Cost problem: each trip costs £15. Year 4 cost = 40 × £15 = £600.',
          'Scaling: if the same proportions held for 200 pupils, Year 6 would be 10/100 × 200 = 20 pupils.',
        ],
        result: 'Year 6 fraction = 1/10. Year 4 trip cost = £600. Scaled Year 6 = 20 pupils.',
      },
      {
        type: 'practice',
        heading: 'Multi-step practice',
        prompt: 'Use the school trips chart above (Year 3: 20, Year 4: 40, Year 5: 30, Year 6: 10, total: 100).',
        diagram: {
          type: 'barChart',
          data: {
            title: 'Pupils on school trips by year group',
            yLabel: 'Pupils',
            yMax: 40,
            bars: [
              { label: 'Year 3', value: 20 },
              { label: 'Year 4', value: 40 },
              { label: 'Year 5', value: 30 },
              { label: 'Year 6', value: 10 },
            ],
          },
        },
        parts: [
          {
            id: 'bc4-p1-a',
            label: 'What is the total number of pupils on trips?',
            type: 'number',
            answer: 100,
            answerDisplay: '100  (20 + 40 + 30 + 10)',
            explanation: 'Add all four bars: 20 + 40 + 30 + 10 = 100.',
          },
          {
            id: 'bc4-p1-b',
            label: 'What percentage of pupils went on trips from Year 3?',
            type: 'number',
            answer: 20,
            answerDisplay: '20%  (20 ÷ 100 × 100 = 20)',
            explanation: '20 out of 100 = 20%.',
          },
          {
            id: 'bc4-p1-c',
            label: 'Each trip cost £15 per pupil. How much did Year 4\'s trips cost in total? (write in £)',
            type: 'number',
            answer: 600,
            answerDisplay: '£600  (40 × £15 = £600)',
            explanation: 'Year 4 had 40 pupils, each paying £15: 40 × 15 = 600.',
          },
          {
            id: 'bc4-p1-d',
            label: 'What fraction of the total is Year 6? (e.g. 1/10)',
            type: 'fraction',
            answer: '1/10',
            answerDisplay: '1/10  (10 ÷ 100 = 1/10)',
            explanation: 'Year 6 has 10 pupils out of 100. 10/100 = 1/10.',
          },
          {
            id: 'bc4-p1-e',
            label: 'If the same proportions held for a school of 200 pupils, how many from Year 5 would go on trips?',
            type: 'number',
            answer: 60,
            answerDisplay: '60  (30/100 × 200 = 60)',
            explanation: 'Year 5 is 30% of 100. 30% of 200 = 60.',
          },
        ],
      },
      {
        type: 'practice',
        heading: 'Missing bar value',
        prompt:
          'A bar chart shows points scored by five players: Amy: 15, Ben: 25, Clara: 20, Dan: ?, Ed: 10. ' +
          'The mean score for all five players is 18.',
        parts: [
          {
            id: 'bc4-p2-a',
            label: 'What is the total score for all five players? (mean × 5)',
            type: 'number',
            answer: 90,
            answerDisplay: '90  (18 × 5 = 90)',
            explanation: 'Total = mean × number of players = 18 × 5 = 90.',
          },
          {
            id: 'bc4-p2-b',
            label: 'What is the sum of Amy, Ben, Clara, and Ed\'s scores?',
            type: 'number',
            answer: 70,
            answerDisplay: '70  (15 + 25 + 20 + 10 = 70)',
            explanation: '15 + 25 + 20 + 10 = 70.',
          },
          {
            id: 'bc4-p2-c',
            label: 'What is Dan\'s score?',
            type: 'number',
            answer: 20,
            answerDisplay: '20  (90 − 70 = 20)',
            explanation: 'Dan\'s score = total − other scores = 90 − 70 = 20.',
          },
        ],
      },
    ],
  },
];
