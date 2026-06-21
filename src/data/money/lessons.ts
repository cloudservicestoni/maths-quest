/*
 * Money — Self-study lessons (basics → challenging)
 * Topic for UK 11+ grammar school maths.
 *
 * Key facts:
 *   £1 = 100p.  £ → p: × 100.   p → £: ÷ 100.
 *   Money in pounds uses 2 decimal places: £2.50, £0.05, £3.05.
 *   Change = money given − cost.  Line up the decimal points when adding.
 *   Best value: work out the price per item (or per 100 g / per litre) and compare.
 */
import type { Lesson } from '../../types/content';

export const moneyLessons: Lesson[] = [
  {
    id: 'money-lesson-1',
    topicId: 'money',
    topicTitle: 'Money',
    topicDescription: '11+ practice — pounds & pence, giving change, and money problems.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — Pounds & Pence',
    summary: '£1 = 100p, and how to write and convert money.',
    sections: [
      {
        type: 'note',
        heading: 'Pounds and pence',
        body:
          'We measure money in <b>pounds (£)</b> and <b>pence (p)</b>. The big rule:<br><br>' +
          '<b>£1 = 100p</b><br><br>' +
          'Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2. Notes: £5, £10, £20, £50.',
      },
      {
        type: 'note',
        heading: 'Writing money',
        body:
          'Amounts in pounds use <b>two digits</b> after the dot — those are the pence:' +
          '<ul>' +
          '<li>£2.50 = 2 pounds and 50 pence</li>' +
          '<li>£0.05 = 5 pence</li>' +
          '<li>£3.05 = 3 pounds and 5 pence (not 50!)</li>' +
          '</ul>' +
          '<b>£ → p:</b> multiply by 100.  <b>p → £:</b> divide by 100.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '£3 → p: 3 × 100 = <b>300p</b>',
          '£2.50 → p: 2.50 × 100 = <b>250p</b>',
          '175p → £: 175 ÷ 100 = <b>£1.75</b>',
          '5p → £: 5 ÷ 100 = <b>£0.05</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Pounds to pence',
        parts: [
          { id: 'mo1p1a', label: '£1 = ___ p', type: 'number', answer: 100, answerDisplay: '100p', explanation: '£1 = 100p.' },
          { id: 'mo1p1b', label: '£5 = ___ p', type: 'number', answer: 500, answerDisplay: '500p', explanation: '5 × 100 = 500.' },
          { id: 'mo1p1c', label: '£2.50 = ___ p', type: 'number', answer: 250, answerDisplay: '250p', explanation: '2.50 × 100 = 250.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Pence to pounds (write the £ amount)',
        parts: [
          { id: 'mo1p2a', label: '300p = £ ___', type: 'number', answer: 3, answerDisplay: '£3', explanation: '300 ÷ 100 = 3.' },
          { id: 'mo1p2b', label: '450p = £ ___', type: 'number', answer: 4.5, answerDisplay: '£4.50', explanation: '450 ÷ 100 = 4.50.' },
          { id: 'mo1p2c', label: '80p = £ ___', type: 'number', answer: 0.8, answerDisplay: '£0.80', explanation: '80 ÷ 100 = 0.80.' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'mo1p3', label: 'How do you write 250 pence in pounds?', type: 'choice', options: ['£2.50', '£25.00', '£0.25', '£250'], answer: '£2.50', answerDisplay: '£2.50', explanation: '250 ÷ 100 = £2.50.' },
        ],
      },
    ],
  },

  {
    id: 'money-lesson-2',
    topicId: 'money',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Adding, Subtracting & Change',
    summary: 'Totals, taking away, and working out change.',
    sections: [
      {
        type: 'note',
        heading: 'Adding and subtracting money',
        body:
          'Line up the <b>decimal points</b> — pounds under pounds, pence under pence. ' +
          'If it helps, turn everything into pence first, then change back to pounds at the end.',
      },
      {
        type: 'note',
        heading: 'Giving change',
        body: '<b>Change = money you give − the cost.</b> For example, paying with £5 for a £3 toy gives £2 change.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '£1.20 + £2.50 = <b>£3.70</b>',
          '£5 − £3.40 = <b>£1.60</b> change',
          '£2.75 + 50p = £2.75 + £0.50 = <b>£3.25</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Add it up (write the £ total)',
        parts: [
          { id: 'mo2p1a', label: '£1.20 + £2.30 = £ ___', type: 'number', answer: 3.5, answerDisplay: '£3.50', explanation: '1.20 + 2.30 = 3.50.' },
          { id: 'mo2p1b', label: '£2.45 + £1.50 = £ ___', type: 'number', answer: 3.95, answerDisplay: '£3.95', explanation: '2.45 + 1.50 = 3.95.' },
          { id: 'mo2p1c', label: '£4.60 + £3.40 = £ ___', type: 'number', answer: 8, answerDisplay: '£8.00', explanation: '4.60 + 3.40 = 8.00.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Change',
        parts: [
          { id: 'mo2p2a', label: 'You pay with £5 for a £3 toy. Change in £?', type: 'number', answer: 2, answerDisplay: '£2', explanation: '5 − 3 = 2.' },
          { id: 'mo2p2b', label: 'A drink costs £1.40. You pay with £2. Change in p?', type: 'number', answer: 60, answerDisplay: '60p', explanation: '£2 − £1.40 = £0.60 = 60p.' },
          { id: 'mo2p2c', label: 'You pay with a £10 note and spend £6.50. Change in £?', type: 'number', answer: 3.5, answerDisplay: '£3.50', explanation: '10 − 6.50 = 3.50.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Mixed pounds and pence',
        parts: [
          { id: 'mo2p3a', label: '£2.75 + 50p = £ ___', type: 'number', answer: 3.25, answerDisplay: '£3.25', explanation: '2.75 + 0.50 = 3.25.' },
          { id: 'mo2p3b', label: '£3 − 75p = £ ___', type: 'number', answer: 2.25, answerDisplay: '£2.25', explanation: '3.00 − 0.75 = 2.25.' },
        ],
      },
    ],
  },

  {
    id: 'money-lesson-3',
    topicId: 'money',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Multiplying & Word Problems',
    summary: 'Buying several items and finding totals.',
    sections: [
      {
        type: 'note',
        heading: 'Buying more than one',
        body:
          'To buy several of the <b>same</b> thing, <b>multiply</b> the price by how many.<br>' +
          'For different items, work out each cost and <b>add</b> them up.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '4 pens at £1.25 each: 4 × 1.25 = <b>£5.00</b>',
          '3 apples at 40p each: 3 × 40 = 120p = <b>£1.20</b>',
          '2 books at £3.50 + 1 pen at £1: 7.00 + 1.00 = <b>£8.00</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Totals',
        parts: [
          { id: 'mo3p1a', label: '5 stickers at 20p each. Total in p?', type: 'number', answer: 100, answerDisplay: '100p', explanation: '5 × 20 = 100.' },
          { id: 'mo3p1b', label: '3 toys at £2 each. Total in £?', type: 'number', answer: 6, answerDisplay: '£6', explanation: '3 × 2 = 6.' },
          { id: 'mo3p1c', label: '4 cakes at £1.50 each. Total in £?', type: 'number', answer: 6, answerDisplay: '£6', explanation: '4 × 1.50 = 6.00.' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'mo3p2a', label: '6 sweets at 10p each. Total in £?', type: 'number', answer: 0.6, answerDisplay: '£0.60', explanation: '6 × 10 = 60p = £0.60.' },
          { id: 'mo3p2b', label: '2 books at £4.25 each. Total in £?', type: 'number', answer: 8.5, answerDisplay: '£8.50', explanation: '2 × 4.25 = 8.50.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Word problem',
        parts: [
          { id: 'mo3p3a', label: 'Mia buys 3 pens at £1.20 each. How much in £?', type: 'number', answer: 3.6, answerDisplay: '£3.60', explanation: '3 × 1.20 = 3.60.' },
          { id: 'mo3p3b', label: 'She pays with £5. How much change in £?', type: 'number', answer: 1.4, answerDisplay: '£1.40', explanation: '5 − 3.60 = 1.40.' },
        ],
      },
    ],
  },

  {
    id: 'money-lesson-4',
    topicId: 'money',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Best Value & Money Puzzles',
    summary: 'Comparing prices and multi-step problems.',
    sections: [
      {
        type: 'note',
        heading: 'Finding the best value',
        body:
          'To compare deals, work out the <b>price for one</b> (or per 100 g, or per litre) and pick the smaller one.<br><br>' +
          'Pack A: 4 bars for £2.00 → 50p each. Pack B: 6 bars for £2.40 → 40p each. <b>B is better value.</b>',
      },
      {
        type: 'note',
        heading: 'Multi-step problems',
        body:
          'Break them into steps: find each cost, add for a total, then subtract for change. ' +
          'Watch for a <b>discount</b> (a percentage off) hidden in the question.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '3 apples at 40p and 2 bananas at 30p: 120p + 60p = 180p = <b>£1.80</b>. Change from £2 = <b>20p</b>.',
          'A £8 toy with 25% off: 25% of 8 = £2, so it costs <b>£6</b>.',
        ],
      },
      {
        type: 'practice',
        heading: 'Best value',
        parts: [
          { id: 'mo4p1a', label: 'Which is better value: 3 pens for £1.50, or 4 pens for £1.60?', type: 'choice', options: ['3 pens for £1.50', '4 pens for £1.60'], answer: '4 pens for £1.60', answerDisplay: '4 pens for £1.60', explanation: '50p each vs 40p each — the 4-pack is cheaper per pen.' },
          { id: 'mo4p1b', label: 'A 500 g bag of rice costs £2. What is the price per 100 g, in p?', type: 'number', answer: 40, answerDisplay: '40p', explanation: '£2 = 200p over 5 lots of 100 g → 40p each.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Multi-step',
        parts: [
          { id: 'mo4p2a', label: '2 drinks at £1.30 and 1 sandwich at £2.40. Total in £?', type: 'number', answer: 5, answerDisplay: '£5.00', explanation: '2.60 + 2.40 = 5.00.' },
          { id: 'mo4p2b', label: 'You pay with £10. How much change in £?', type: 'number', answer: 5, answerDisplay: '£5', explanation: '10 − 5 = 5.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Challenge',
        parts: [
          { id: 'mo4p3a', label: 'A toy is £8 with 25% off. What is the sale price in £?', type: 'number', answer: 6, answerDisplay: '£6', explanation: '25% of 8 = £2 off; 8 − 2 = 6.' },
          { id: 'mo4p3b', label: 'You have £20 and buy 3 books at £4.50 each. How much is left, in £?', type: 'number', answer: 6.5, answerDisplay: '£6.50', explanation: '3 × 4.50 = 13.50; 20 − 13.50 = 6.50.' },
        ],
      },
    ],
  },
];
