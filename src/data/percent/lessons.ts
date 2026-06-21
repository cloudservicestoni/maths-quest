/*
 * Percentages — Self-study lessons (basics → challenging)
 * Topic for UK 11+ grammar school maths.
 *
 * Key facts:
 *   percent means "out of 100".  X% = X/100 = X ÷ 100 (decimal).
 *   decimal → %: × 100.   fraction → %: make it out of 100.
 *   "of" means multiply.  10% = ÷10, 50% = ÷2, 25% = ÷4, 1% = ÷100.
 *   Common: 1/2=50%, 1/4=25%, 3/4=75%, 1/10=10%, 1/5=20%, 1/8=12.5%.
 */
import type { Lesson } from '../../types/content';

export const percentLessons: Lesson[] = [
  {
    id: 'percent-lesson-1',
    topicId: 'percent',
    topicTitle: 'Percentages',
    topicDescription: '11+ practice — fractions, decimals & percentages, and percentages of amounts.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — What is a Percentage?',
    summary: 'Percent means "out of 100".',
    sections: [
      {
        type: 'note',
        heading: 'Percent means "out of 100"',
        body:
          'The symbol <b>%</b> means <b>out of 100</b>. So <b>30%</b> means <b>30 out of every 100</b>. ' +
          'A whole amount — everything — is <b>100%</b>.',
        diagram: { type: 'percentBar', data: { percent: 30, label: '30% shaded' } },
      },
      {
        type: 'note',
        heading: 'A percentage is a fraction over 100',
        body:
          'Any percentage can be written as a fraction with <b>100</b> on the bottom:' +
          '<ul><li>37% = 37/100</li><li>9% = 9/100</li><li>100% = 100/100 = 1 whole</li></ul>',
      },
      {
        type: 'example',
        heading: 'Picture it',
        steps: [
          '50% is half of something — half a pizza, half your sweets.',
          '25% is a quarter.',
          '100% is all of it.',
          '0% is none of it.',
        ],
      },
      {
        type: 'practice',
        heading: 'Your turn',
        parts: [
          { id: 'pc1p1a', label: "Percent means 'out of ___'.", type: 'number', answer: 100, answerDisplay: '100', explanation: 'Per-cent = per hundred.' },
          { id: 'pc1p1b', label: 'A whole amount is ___%.', type: 'number', answer: 100, answerDisplay: '100', explanation: 'Everything is 100%.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Write each percentage as a fraction over 100',
        parts: [
          { id: 'pc1p2a', label: '30% = ___ / 100', type: 'fraction', answer: '30/100', answerDisplay: '30/100', placeholder: 'e.g. 30/100', explanation: '30 out of 100.' },
          { id: 'pc1p2b', label: '7% = ___ / 100', type: 'fraction', answer: '7/100', answerDisplay: '7/100', explanation: '7 out of 100.' },
          { id: 'pc1p2c', label: '90% = ___ / 100', type: 'fraction', answer: '90/100', answerDisplay: '90/100', explanation: '90 out of 100.' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'pc1p3', label: 'Which percentage is the same as one half?', type: 'choice', options: ['50%', '25%', '5%', '15%'], answer: '50%', answerDisplay: '50%', explanation: 'Half of 100 is 50, so a half = 50%.' },
        ],
      },
    ],
  },

  {
    id: 'percent-lesson-2',
    topicId: 'percent',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Percentages, Fractions & Decimals',
    summary: 'Three ways to write the same amount, and how to switch.',
    sections: [
      {
        type: 'note',
        heading: 'The same thing, three ways',
        body:
          'A fraction, a decimal and a percentage can all describe the same amount:' +
          '<ul>' +
          '<li>1/2 = 0.5 = 50%</li>' +
          '<li>1/4 = 0.25 = 25%</li>' +
          '<li>3/4 = 0.75 = 75%</li>' +
          '<li>1/10 = 0.1 = 10%</li>' +
          '</ul>',
      },
      {
        type: 'note',
        heading: 'How to switch',
        body:
          '<b>% → decimal:</b> divide by 100 (move the point 2 places left). 25% → 0.25<br>' +
          '<b>decimal → %:</b> multiply by 100 (move the point 2 places right). 0.6 → 60%<br>' +
          '<b>fraction → %:</b> change it so the bottom is 100, or divide top by bottom then × 100. 1/4 → 25%',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '25% → decimal: 25 ÷ 100 = <b>0.25</b>',
          '0.6 → %: 0.6 × 100 = <b>60%</b>',
          '3/4 → %: 3 ÷ 4 = 0.75 = <b>75%</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Percentage → decimal',
        parts: [
          { id: 'pc2p1a', label: '50% = ___ (decimal)', type: 'number', answer: 0.5, answerDisplay: '0.5', explanation: '50 ÷ 100 = 0.5.' },
          { id: 'pc2p1b', label: '25% = ___ (decimal)', type: 'number', answer: 0.25, answerDisplay: '0.25', explanation: '25 ÷ 100 = 0.25.' },
          { id: 'pc2p1c', label: '9% = ___ (decimal)', type: 'number', answer: 0.09, answerDisplay: '0.09', explanation: '9 ÷ 100 = 0.09.' },
          { id: 'pc2p1d', label: '80% = ___ (decimal)', type: 'number', answer: 0.8, answerDisplay: '0.8', explanation: '80 ÷ 100 = 0.8.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Decimal → percentage',
        parts: [
          { id: 'pc2p2a', label: '0.5 = ___%', type: 'number', answer: 50, answerDisplay: '50%', explanation: '0.5 × 100 = 50.' },
          { id: 'pc2p2b', label: '0.75 = ___%', type: 'number', answer: 75, answerDisplay: '75%', explanation: '0.75 × 100 = 75.' },
          { id: 'pc2p2c', label: '0.3 = ___%', type: 'number', answer: 30, answerDisplay: '30%', explanation: '0.3 × 100 = 30.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Fraction → percentage',
        parts: [
          { id: 'pc2p3a', label: '1/2 = ___%', type: 'number', answer: 50, answerDisplay: '50%', explanation: 'Half of 100 is 50.' },
          { id: 'pc2p3b', label: '1/4 = ___%', type: 'number', answer: 25, answerDisplay: '25%', explanation: 'A quarter of 100 is 25.' },
          { id: 'pc2p3c', label: '1/10 = ___%', type: 'number', answer: 10, answerDisplay: '10%', explanation: 'A tenth of 100 is 10.' },
          { id: 'pc2p3d', label: '3/4 = ___%', type: 'number', answer: 75, answerDisplay: '75%', explanation: 'Three quarters of 100 is 75.' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'pc2p4', label: 'Which decimal equals 7%?', type: 'choice', options: ['0.07', '0.7', '7.0', '70'], answer: '0.07', answerDisplay: '0.07', explanation: '7 ÷ 100 = 0.07.' },
        ],
      },
    ],
  },

  {
    id: 'percent-lesson-3',
    topicId: 'percent',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Percentage of an Amount',
    summary: 'Finding 10%, 1%, and building up to any percentage.',
    sections: [
      {
        type: 'note',
        heading: '"of" means multiply',
        body:
          'To find a percentage <i>of</i> an amount, the easy way is:' +
          '<ul>' +
          '<li><b>10%</b> = divide by 10</li>' +
          '<li><b>1%</b> = divide by 100</li>' +
          '<li><b>50%</b> = halve it (÷2)</li>' +
          '<li><b>25%</b> = quarter it (÷4)</li>' +
          '</ul>' +
          'Then build up: 30% = three lots of 10%.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '10% of 50 = 50 ÷ 10 = <b>5</b>',
          '50% of 80 = half of 80 = <b>40</b>',
          '25% of 40 = quarter of 40 = <b>10</b>',
          '30% of 40: 10% is 4, so 30% = 4 × 3 = <b>12</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Quick ones',
        parts: [
          { id: 'pc3p1a', label: '10% of 70 = ___', type: 'number', answer: 7, answerDisplay: '7', explanation: '70 ÷ 10 = 7.' },
          { id: 'pc3p1b', label: '50% of 80 = ___', type: 'number', answer: 40, answerDisplay: '40', explanation: 'Half of 80 = 40.' },
          { id: 'pc3p1c', label: '25% of 40 = ___', type: 'number', answer: 10, answerDisplay: '10', explanation: 'A quarter of 40 = 10.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Build it up',
        parts: [
          { id: 'pc3p2a', label: '20% of 60 = ___', type: 'number', answer: 12, answerDisplay: '12', explanation: '10% is 6, so 20% = 12.' },
          { id: 'pc3p2b', label: '30% of 50 = ___', type: 'number', answer: 15, answerDisplay: '15', explanation: '10% is 5, so 30% = 15.' },
          { id: 'pc3p2c', label: '5% of 200 = ___', type: 'number', answer: 10, answerDisplay: '10', explanation: '10% is 20, so 5% = half of that = 10.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Word problems',
        parts: [
          { id: 'pc3p3a', label: 'A toy costs £20 with 10% off. How many £ are taken off?', type: 'number', answer: 2, answerDisplay: '£2', explanation: '10% of 20 = 2.' },
          { id: 'pc3p3b', label: '75% of 40 children walk to school. How many children?', type: 'number', answer: 30, answerDisplay: '30', explanation: '75% = three quarters; 40 ÷ 4 = 10, × 3 = 30.' },
        ],
      },
    ],
  },

  {
    id: 'percent-lesson-4',
    topicId: 'percent',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Percentage Word Problems',
    summary: 'Discounts, test scores, increases and comparing.',
    sections: [
      {
        type: 'note',
        heading: 'Real-life percentages',
        body:
          'Most exam questions hide a percentage inside a story. The moves you need:' +
          '<ul>' +
          '<li><b>Discount / "off":</b> find the % of the price, then <b>subtract</b> for the new price.</li>' +
          '<li><b>Increase / "rise":</b> find the % and <b>add</b> it on.</li>' +
          '<li><b>Score as a %:</b> (score ÷ total) × 100.</li>' +
          '</ul>',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          'Jacket £40 with 25% off: 25% of 40 = 10, so you pay 40 − 10 = <b>£30</b>.',
          'Test 18 out of 20: 18 ÷ 20 = 0.9 = <b>90%</b>.',
          'Compare 60% of 50 vs 40% of 80: 30 vs 32 → the <b>second</b> is bigger.',
        ],
      },
      {
        type: 'practice',
        heading: 'Discount',
        parts: [
          { id: 'pc4p1a', label: 'A £50 coat has 20% off. How many £ are taken off?', type: 'number', answer: 10, answerDisplay: '£10', explanation: '20% of 50 = 10.' },
          { id: 'pc4p1b', label: 'So what is the new price, in £?', type: 'number', answer: 40, answerDisplay: '£40', explanation: '50 − 10 = 40.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Scores as percentages',
        parts: [
          { id: 'pc4p2a', label: 'Maya scored 9 out of 10 in spelling. What percentage?', type: 'number', answer: 90, answerDisplay: '90%', explanation: '9 ÷ 10 = 0.9 = 90%.' },
          { id: 'pc4p2b', label: 'Sam got 30 out of 50 in a test. What percentage?', type: 'number', answer: 60, answerDisplay: '60%', explanation: '30 ÷ 50 = 0.6 = 60%.' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'pc4p3', label: '40% of 25 pupils like art. How many pupils?', type: 'number', answer: 10, answerDisplay: '10', explanation: '10% of 25 is 2.5, so 40% = 10.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Challenge — an increase',
        parts: [
          { id: 'pc4p4', label: 'A bike costs £200. The price goes up by 10%. What is the new price, in £?', type: 'number', answer: 220, answerDisplay: '£220', explanation: '10% of 200 = 20; 200 + 20 = 220.' },
        ],
      },
    ],
  },
];
