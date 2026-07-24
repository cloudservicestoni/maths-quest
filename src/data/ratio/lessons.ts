import type { Lesson } from '../../types/content';

const topicId = 'ratio';
const topicTitle = 'Ratio';
const topicDescription = 'Simplify, share and scale ratios — essential 11+ skills.';

export const ratioLessons: Lesson[] = [
  /* ── Lesson 1 ── What is a Ratio? ───────────────────────────────────── */
  {
    id: 'ratio-lesson-1',
    topicId, topicTitle, topicDescription,
    order: 1, level: '⭐',
    title: 'Lesson 1 — What is a Ratio?',
    summary: 'Write and simplify ratios using the highest common factor.',
    sections: [
      {
        type: 'note',
        heading: 'What is a ratio?',
        body:
          'A **ratio** compares two (or more) quantities of the same kind.\n\n' +
          'We write it with a colon: **a : b**\n\n' +
          '- 3 : 5 means "for every 3 of one thing, there are 5 of the other"\n' +
          '- Order matters — 3 : 5 is *not* the same as 5 : 3',
      },
      {
        type: 'note',
        heading: 'Simplifying ratios',
        body:
          'A ratio is in its **simplest form** when both numbers share no common factor other than 1.\n\n' +
          '**Method:** Divide both sides by their Highest Common Factor (HCF).\n\n' +
          '**Example:** 12 : 8 → HCF = 4 → 12 ÷ 4 : 8 ÷ 4 = **3 : 2**',
      },
      {
        type: 'example',
        heading: 'Worked example — simplify 24 : 16',
        steps: [
          'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24',
          'Factors of 16: 1, 2, 4, 8, 16',
          'HCF = 8',
          '24 ÷ 8 = 3,  16 ÷ 8 = 2',
          'Simplified ratio = 3 : 2',
        ],
        result: '24 : 16 in simplest form is 3 : 2.',
      },
      {
        type: 'practice',
        heading: 'Practice — simplify',
        parts: [
          { id: 'r1p1a', label: 'Simplify 4 : 6', type: 'text', accept: ['2:3', '2 : 3'], answerDisplay: '2 : 3  (HCF = 2)' },
          { id: 'r1p1b', label: 'Simplify 15 : 10', type: 'text', accept: ['3:2', '3 : 2'], answerDisplay: '3 : 2  (HCF = 5)' },
          { id: 'r1p1c', label: 'Simplify 20 : 30', type: 'text', accept: ['2:3', '2 : 3'], answerDisplay: '2 : 3  (HCF = 10)' },
          { id: 'r1p1d', label: 'Simplify 18 : 12', type: 'text', accept: ['3:2', '3 : 2'], answerDisplay: '3 : 2  (HCF = 6)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Practice — write ratios',
        parts: [
          { id: 'r1p2a', label: 'A bag has 5 red and 3 blue balls. Write the ratio of red to blue.', type: 'text', accept: ['5:3', '5 : 3'], answerDisplay: '5 : 3' },
          { id: 'r1p2b', label: 'A recipe uses 2 cups of flour and 1 cup of sugar. Write the ratio of flour to sugar.', type: 'text', accept: ['2:1', '2 : 1'], answerDisplay: '2 : 1' },
          { id: 'r1p2c', label: 'Simplify 36 : 24', type: 'text', accept: ['3:2', '3 : 2'], answerDisplay: '3 : 2  (HCF = 12)', explanation: 'Divide both by 12.' },
        ],
      },
    ],
  },

  /* ── Lesson 2 ── Equivalent Ratios ─────────────────────────────────── */
  {
    id: 'ratio-lesson-2',
    topicId, topicTitle, topicDescription,
    order: 2, level: '⭐⭐',
    title: 'Lesson 2 — Equivalent Ratios',
    summary: 'Multiply or divide both sides by the same number to find equivalent ratios.',
    sections: [
      {
        type: 'note',
        heading: 'Equivalent ratios',
        body:
          'Two ratios are **equivalent** if one can be obtained from the other by multiplying or dividing both parts by the same number.\n\n' +
          '**Example:** 2 : 3 = 4 : 6 = 6 : 9 = 10 : 15\n\n' +
          'To **find a missing value**, figure out what you multiplied or divided by:\n\n' +
          '3 : 5 = 9 : ?  →  3 × 3 = 9, so 5 × 3 = **15**',
      },
      {
        type: 'example',
        heading: 'Worked example — find the missing value',
        intro: '4 : 7 = 20 : ?',
        steps: [
          '4 → 20: what did we multiply by?  20 ÷ 4 = 5',
          'Multiply the other side by the same: 7 × 5 = 35',
        ],
        result: '4 : 7 = 20 : 35',
      },
      {
        type: 'practice',
        heading: 'Practice — find the missing value',
        parts: [
          { id: 'r2p1a', label: '1 : 4 = ? : 12', type: 'number', answer: 3, answerDisplay: '3  (4 × 3 = 12, so 1 × 3 = 3)' },
          { id: 'r2p1b', label: '3 : 5 = 9 : ?', type: 'number', answer: 15, answerDisplay: '15  (3 × 3 = 9, so 5 × 3 = 15)' },
          { id: 'r2p1c', label: '5 : 2 = 25 : ?', type: 'number', answer: 10, answerDisplay: '10  (5 × 5 = 25, so 2 × 5 = 10)' },
          { id: 'r2p1d', label: '6 : ? = 2 : 5', type: 'number', answer: 15, answerDisplay: '15  (6 ÷ 3 = 2, so ? ÷ 3 = 5 → ? = 15)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Practice — are these equivalent?',
        parts: [
          { id: 'r2p2a', label: 'Are 3 : 4 and 9 : 12 equivalent? (yes/no)', type: 'text', accept: ['yes', 'Yes', 'YES'], answerDisplay: 'Yes  (3 × 3 : 4 × 3 = 9 : 12)' },
          { id: 'r2p2b', label: 'Are 2 : 5 and 6 : 14 equivalent? (yes/no)', type: 'text', accept: ['no', 'No', 'NO'], answerDisplay: 'No  (2 × 3 : 5 × 3 = 6 : 15, not 6 : 14)' },
        ],
      },
    ],
  },

  /* ── Lesson 3 ── Sharing in a Ratio ─────────────────────────────────── */
  {
    id: 'ratio-lesson-3',
    topicId, topicTitle, topicDescription,
    order: 3, level: '⭐⭐⭐',
    title: 'Lesson 3 — Sharing in a Ratio',
    summary: 'Divide a quantity into parts using the find-one-part method.',
    sections: [
      {
        type: 'note',
        heading: 'The three-step method',
        body:
          'To share a quantity in a given ratio:\n\n' +
          '1. **Add** the ratio parts to find the total number of parts\n' +
          '2. **Divide** the quantity by the total to find the value of 1 part\n' +
          '3. **Multiply** each ratio number by the value of 1 part',
      },
      {
        type: 'example',
        heading: 'Worked example — share £40 in ratio 3 : 5',
        diagram: { type: 'barChart', data: { title: 'Ratio 3 : 5 (8 parts total)', yMax: 5, bars: [{ label: 'Tom  (3 parts)', value: 3 }, { label: 'Sam  (5 parts)', value: 5 }] } },
        steps: [
          'Total parts = 3 + 5 = 8',
          'Value of 1 part = £40 ÷ 8 = £5',
          'Tom gets 3 × £5 = £15',
          'Sam gets 5 × £5 = £25',
          'Check: £15 + £25 = £40 ✓',
        ],
        result: 'Tom gets £15, Sam gets £25.',
      },
      {
        type: 'practice',
        heading: 'Practice — 2-part ratios',
        parts: [
          { id: 'r3p1a', label: 'Share £24 in ratio 1 : 3. What is the smaller share?', type: 'number', answer: 6, answerDisplay: '£6  (4 parts, 1 part = £6; smaller = 1 × £6)', hint: 'Find the total number of parts first.' },
          { id: 'r3p1b', label: 'Share £24 in ratio 1 : 3. What is the larger share?', type: 'number', answer: 18, answerDisplay: '£18  (3 × £6 = £18)' },
          { id: 'r3p1c', label: 'Share 45 in ratio 4 : 5. What is the larger share?', type: 'number', answer: 25, answerDisplay: '25  (9 parts, 1 part = 5; larger = 5 × 5 = 25)' },
        ],
      },
      {
        type: 'note',
        heading: 'Three-part ratios',
        body:
          'The same method works for three (or more) parts — just add all the ratio numbers.\n\n' +
          '**Example:** Share 60 in ratio 1 : 2 : 3\n\n' +
          'Total parts = 1 + 2 + 3 = 6 → 1 part = 60 ÷ 6 = 10\n\n' +
          'Shares: 10, 20, 30  ✓  (10 + 20 + 30 = 60)',
        diagram: { type: 'barChart', data: { title: 'Ratio 1 : 2 : 3 (6 parts total)', yMax: 3, bars: [{ label: 'A (1)', value: 1 }, { label: 'B (2)', value: 2 }, { label: 'C (3)', value: 3 }] } },
      },
      {
        type: 'practice',
        heading: 'Practice — 3-part ratios',
        parts: [
          { id: 'r3p2a', label: 'Share 90 in ratio 1 : 2 : 3. What is the largest share?', type: 'number', answer: 45, answerDisplay: '45  (6 parts, 1 part = 15; largest = 3 × 15 = 45)' },
          { id: 'r3p2b', label: 'Share 84 in ratio 1 : 2 : 4. What is the middle share?', type: 'number', answer: 24, answerDisplay: '24  (7 parts, 1 part = 12; middle = 2 × 12 = 24)' },
        ],
      },
    ],
  },

  /* ── Lesson 4 ── Ratio and Problem Solving ──────────────────────────── */
  {
    id: 'ratio-lesson-4',
    topicId, topicTitle, topicDescription,
    order: 4, level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Ratio and Problem Solving',
    summary: 'Connect ratio to fractions, work backwards, and solve word problems.',
    sections: [
      {
        type: 'note',
        heading: 'Ratio and fractions',
        body:
          'If two quantities are in ratio **a : b**, then:\n\n' +
          '- The first quantity is **a / (a + b)** of the total\n' +
          '- The second quantity is **b / (a + b)** of the total\n\n' +
          '**Example:** Ratio 3 : 5 → total parts = 8\n\n' +
          'The smaller part = **3/8** of the total\n\n' +
          'The larger part = **5/8** of the total',
      },
      {
        type: 'note',
        heading: 'Working backwards — given one share',
        body:
          'If you know one share, you can find the value of 1 part and then everything else.\n\n' +
          '**Example:** Tom and Lucy share sweets in ratio 3 : 4. Tom has 12 sweets.\n\n' +
          'Tom has 3 parts → 1 part = 12 ÷ 3 = 4 sweets\n\n' +
          'Lucy has 4 × 4 = **16 sweets**\n\n' +
          'Total = 12 + 16 = **28 sweets**',
      },
      {
        type: 'practice',
        heading: 'Practice — ratio and fractions',
        parts: [
          { id: 'r4p1a', label: 'In ratio 3 : 5, what fraction of the total is the smaller part?', type: 'fraction', answer: '3/8', answerDisplay: '3/8  (3 out of 3 + 5 = 8 parts)' },
          { id: 'r4p1b', label: 'In ratio 1 : 4, what fraction of the total is the larger part?', type: 'fraction', answer: '4/5', answerDisplay: '4/5  (4 out of 1 + 4 = 5 parts)' },
          { id: 'r4p1c', label: 'In ratio 2 : 3, what fraction of the total is the smaller part?', type: 'fraction', answer: '2/5', answerDisplay: '2/5  (2 out of 2 + 3 = 5 parts)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Practice — working backwards',
        parts: [
          { id: 'r4p2a', label: 'Blue and red paints in ratio 3 : 5. There are 15 litres of blue. How many litres of red?', type: 'number', answer: 25, answerDisplay: '25 litres  (1 part = 15 ÷ 3 = 5; red = 5 × 5 = 25)', hint: 'Divide blue paint by its ratio number to find 1 part.' },
          { id: 'r4p2b', label: 'Same mixture. What is the total number of litres?', type: 'number', answer: 40, answerDisplay: '40 litres  (15 + 25 = 40, or 8 parts × 5 = 40)' },
          { id: 'r4p2c', label: 'Two numbers are in ratio 2 : 7. The smaller is 8. What is the larger?', type: 'number', answer: 28, answerDisplay: '28  (1 part = 8 ÷ 2 = 4; larger = 7 × 4 = 28)' },
        ],
      },
    ],
  },
];
