/*
 * Venn Diagrams — Self-study lessons (Modules 1–4)
 * Rewritten for the student to read and work through on their own.
 * Source: 01-basics … 04-problem-solving (lesson-notes + worksheet + answers)
 *
 * Section types (rendered by js/lessons.js):
 *   { type:'note',     heading, body, diagram? }   body may contain simple HTML
 *   { type:'example',  heading, intro?, steps:[..], result?, diagram? }
 *   { type:'practice', heading?, prompt?, diagram?, parts:[ part ] }
 *
 * A practice `part` reuses the exam marking types plus 'choice':
 *   type: 'number' | 'set' | 'fraction' | 'text' | 'choice'
 *   answer / accept / options as needed, answerDisplay, explanation, placeholder
 */

import type { Lesson } from '../../types/content';

export const vennLessons: Lesson[] = [
  {
    id: 'venn-lesson-1',
    topicId: 'venn',
    topicTitle: 'Venn Diagrams',
    topicDescription: '11+ practice — learn it first, then test yourself.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — What is a Venn Diagram?',
    summary: 'Sets, the universal set, and sorting into one circle.',
    sections: [
      {
        type: 'note',
        heading: 'What is a Venn diagram?',
        body:
          'A <b>Venn diagram</b> is a picture that sorts things into groups. ' +
          'Each group is called a <b>set</b> — a set is just a bunch of things that ' +
          'all follow the same rule (like "even numbers" or "shapes with 4 sides").',
      },
      {
        type: 'note',
        heading: 'Words to know',
        body:
          '<ul>' +
          '<li><b>Set</b> — a group of things that share a rule.</li>' +
          '<li><b>Member</b> (or <b>element</b>) — one thing inside a set.</li>' +
          '<li><b>Universal set</b> — the big rectangle that holds <i>everything</i> we are looking at.</li>' +
          '<li><b>Circle</b> — a named group inside the rectangle.</li>' +
          '<li><b>Outside the circle</b> — things still inside the rectangle, but they don\'t follow that circle\'s rule.</li>' +
          '</ul>',
        diagram: { type: 'single', data: { label: 'Even numbers' } },
      },
      {
        type: 'example',
        heading: 'Worked example: sorting 1 to 10',
        intro:
          'Our universal set is the numbers 1 to 10. The circle\'s rule is "even numbers". ' +
          'We check each number: is it even?',
        steps: [
          'Even numbers go <b>inside</b> the circle: 2, 4, 6, 8, 10.',
          'The rest stay <b>inside the rectangle but outside the circle</b>: 1, 3, 5, 7, 9.',
          'Nothing disappears — every number is still in the universal set.',
        ],
        result: '5 numbers inside the circle + 5 outside = 10 numbers altogether. ✓',
        diagram: { type: 'single', data: { label: 'Even numbers', inside: 5, outside: 5 } },
      },
      {
        type: 'practice',
        heading: 'Your turn',
        prompt: 'Fill in the gaps:',
        parts: [
          { id: 'l1p1a', label: 'A group of things that share a rule is called a …', type: 'text', accept: ['set'], answerDisplay: 'a set', explanation: 'A "set" is just a group with a shared rule.', placeholder: 'one word' },
          { id: 'l1p1b', label: 'The big rectangle that holds everything is called the … set.', type: 'text', accept: ['universal'], answerDisplay: 'the universal set', explanation: 'Everything we are looking at lives inside the universal set.', placeholder: 'one word' },
        ],
      },
      {
        type: 'practice',
        prompt: 'Universal set: whole numbers 1 to 12. The circle rule is "multiples of 3".',
        parts: [
          { id: 'l1p2a', label: 'List the numbers INSIDE the circle.', type: 'set', answer: [3, 6, 9, 12], answerDisplay: '3, 6, 9, 12', explanation: 'Multiples of 3 between 1 and 12.', placeholder: 'e.g. 3, 6, ...' },
          { id: 'l1p2b', label: 'How many are inside the circle?', type: 'number', answer: 4, answerDisplay: '4', explanation: 'There are four multiples of 3.' },
          { id: 'l1p2c', label: 'How many are outside the circle?', type: 'number', answer: 8, answerDisplay: '8', explanation: '12 − 4 = 8 numbers outside.' },
          { id: 'l1p2d', label: 'Add inside + outside. What do you get?', type: 'number', answer: 12, answerDisplay: '12', explanation: 'Inside + outside always equals the universal set total (12).' },
        ],
      },
      {
        type: 'practice',
        prompt: 'Universal set: 1 to 20. The circle rule is "square numbers" (1, 4, 9, 16, 25 …).',
        parts: [
          { id: 'l1p3a', label: 'List the square numbers from 1 to 20.', type: 'set', answer: [1, 4, 9, 16], answerDisplay: '1, 4, 9, 16', explanation: '1×1, 2×2, 3×3, 4×4. (5×5 = 25 is too big.)', placeholder: 'e.g. 1, 4, ...' },
        ],
      },
      {
        type: 'practice',
        prompt: 'Read this diagram: universal set 1–10, the circle holds the ODD numbers 1, 3, 5, 7, 9.',
        diagram: { type: 'single', data: { label: 'Odd numbers', inside: 5, outside: 5 } },
        parts: [
          { id: 'l1p4a', label: 'How many numbers are in the circle?', type: 'number', answer: 5, answerDisplay: '5', explanation: '1, 3, 5, 7, 9 — that\'s 5 numbers.' },
          { id: 'l1p4b', label: 'Is 6 in the circle? (yes/no)', type: 'text', accept: ['no'], answerDisplay: 'No', explanation: '6 is even, so it is outside the "odd" circle.' },
          { id: 'l1p4c', label: 'How many numbers are outside the circle?', type: 'number', answer: 5, answerDisplay: '5', explanation: 'The even numbers 2, 4, 6, 8, 10.' },
        ],
      },
    ],
  },
  {
    id: 'venn-lesson-2',
    topicId: 'venn',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Two Circles',
    summary: 'Overlap (intersection), "only", "neither", and the counting formula.',
    sections: [
      {
        type: 'note',
        heading: 'Two circles make FOUR regions',
        body:
          'When two circles overlap, you get four places a thing can go:' +
          '<ul>' +
          '<li><b>Only A</b> — follows rule A but not rule B.</li>' +
          '<li><b>Both (the overlap)</b> — follows <i>both</i> rules. We call this the <b>intersection</b>.</li>' +
          '<li><b>Only B</b> — follows rule B but not rule A.</li>' +
          '<li><b>Neither</b> — outside both circles (but still in the rectangle).</li>' +
          '</ul>',
        diagram: { type: 'venn2Labelled', data: { setA: 'A', setB: 'B' } },
      },
      {
        type: 'note',
        heading: 'The magic formula',
        body:
          'For any two-circle diagram:<br><br>' +
          '<b>Total = Only A + Both + Only B + Neither</b><br><br>' +
          'If you ever feel stuck, this formula and a quick check will rescue you.',
      },
      {
        type: 'note',
        heading: 'Watch out!',
        body:
          '<ul>' +
          '<li>A number that fits <b>both</b> rules goes in the <b>middle</b>, not in one circle.</li>' +
          '<li>"In circle A" means <b>Only A + Both</b>. "Only A" means just the left part.</li>' +
          '<li>Never forget the numbers <b>outside both circles</b> — they don\'t vanish!</li>' +
          '</ul>',
      },
      {
        type: 'example',
        heading: 'Worked example: 1 to 20',
        intro: 'Circle A = even numbers. Circle B = multiples of 3. Check each number for both rules.',
        steps: [
          'Even only: 2, 4, 8, 10, 14, 16, 20  →  7 numbers',
          'Both (even AND multiple of 3): 6, 12, 18  →  3 numbers',
          'Multiples of 3 only: 3, 9, 15  →  3 numbers',
          'Neither: 1, 5, 7, 11, 13, 17, 19  →  7 numbers',
        ],
        result: 'Check: 7 + 3 + 3 + 7 = 20 ✓',
        diagram: { type: 'venn2', data: { setA: 'Even', setB: '×3', onlyA: 7, both: 3, onlyB: 3, outside: 7 } },
      },
      {
        type: 'practice',
        heading: 'Your turn',
        prompt: 'Universal set 1–15. Circle A = odd numbers. Circle B = multiples of 5.',
        parts: [
          { id: 'l2p1a', label: 'Odd only:', type: 'set', answer: [1, 3, 7, 9, 11, 13], answerDisplay: '1, 3, 7, 9, 11, 13', explanation: 'Odd numbers that are NOT multiples of 5.', placeholder: 'e.g. 1, 3, ...' },
          { id: 'l2p1b', label: 'Both (odd AND multiple of 5):', type: 'set', answer: [5, 15], answerDisplay: '5, 15', explanation: '5 and 15 are odd and multiples of 5.' },
          { id: 'l2p1c', label: 'Multiples of 5 only:', type: 'set', answer: [10], answerDisplay: '10', explanation: '10 is a multiple of 5 but even, so not in the "odd" circle.' },
          { id: 'l2p1d', label: 'Neither:', type: 'set', answer: [2, 4, 6, 8, 12, 14], answerDisplay: '2, 4, 6, 8, 12, 14', explanation: 'Even numbers that aren\'t multiples of 5.' },
        ],
      },
      {
        type: 'practice',
        prompt: 'A class of 30 pupils. The diagram shows pet dogs and cats: only dog = 8, both = 5, only cat = 7, neither = 10.',
        diagram: { type: 'venn2', data: { setA: 'Dog', setB: 'Cat', onlyA: 8, both: 5, onlyB: 7, outside: 10 } },
        parts: [
          { id: 'l2p2a', label: 'How many have only a dog?', type: 'number', answer: 8, answerDisplay: '8', explanation: 'Read it straight from the left part.' },
          { id: 'l2p2b', label: 'How many have both?', type: 'number', answer: 5, answerDisplay: '5', explanation: 'The middle (overlap) shows 5.' },
          { id: 'l2p2c', label: 'How many have neither?', type: 'number', answer: 10, answerDisplay: '10', explanation: 'The number outside both circles.' },
          { id: 'l2p2d', label: 'How many have a dog ALTOGETHER?', type: 'number', answer: 13, answerDisplay: '13', explanation: 'Only dog + both = 8 + 5 = 13. "Altogether" includes the overlap!' },
        ],
      },
      {
        type: 'practice',
        prompt: '25 children: 14 like football, 11 like swimming, 6 like BOTH. (Start with the middle, then work outwards.)',
        parts: [
          { id: 'l2p3a', label: 'Only football:', type: 'number', answer: 8, answerDisplay: '8', explanation: '14 − 6 = 8 (take the "both" out of the football total).' },
          { id: 'l2p3b', label: 'Only swimming:', type: 'number', answer: 5, answerDisplay: '5', explanation: '11 − 6 = 5.' },
          { id: 'l2p3c', label: 'Neither:', type: 'number', answer: 6, answerDisplay: '6', explanation: '25 − 8 − 6 − 5 = 6.' },
        ],
      },
    ],
  },
  {
    id: 'venn-lesson-3',
    topicId: 'venn',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Three Circles',
    summary: 'Seven regions, naming them, and the table trick.',
    sections: [
      {
        type: 'note',
        heading: 'Three circles make SEVEN regions',
        body:
          'Three overlapping circles create 7 regions inside, plus "neither" outside. ' +
          'The trickiest part is the middle, where <i>all three</i> overlap.',
        diagram: { type: 'venn3Labelled', data: { setA: 'A', setB: 'B', setC: 'C' } },
      },
      {
        type: 'note',
        heading: 'The table trick',
        body:
          'Don\'t guess from the picture! Make a table and check each item against ' +
          'all three rules. For each thing ask: <b>Is it in A? In B? In C?</b> ' +
          'Then you always know exactly which region it belongs to.',
      },
      {
        type: 'example',
        heading: 'Worked example: 1 to 20',
        intro: 'A = even, B = multiples of 3, C = greater than 10. After checking every number:',
        steps: [
          'A only (even, not ×3, ≤10): 2, 4, 8, 10  →  4',
          'B only (×3, odd, ≤10): 3, 9  →  2',
          'C only (>10, odd, not ×3): 11, 13, 17, 19  →  4',
          'A and C only: 14, 16, 20  →  3      B and C only: 15  →  1',
          'A and B only: 6  →  1      All three: 12, 18  →  2',
          'Neither: 1, 5, 7  →  3',
        ],
        result: '4 + 2 + 4 + 3 + 1 + 1 + 2 + 3 = 20 ✓',
      },
      {
        type: 'practice',
        heading: 'Name that region',
        prompt: 'Pick the correct region name.',
        parts: [
          { id: 'l3p1a', label: 'In circle A and circle C, but NOT in B:', type: 'choice', options: ['A and C only', 'All three', 'B only', 'Neither'], answer: 'A and C only', answerDisplay: 'A and C only', explanation: 'In A and C, but the "only" means it stays out of B.' },
          { id: 'l3p1b', label: 'In all three circles:', type: 'choice', options: ['A and B only', 'All three', 'C only', 'Neither'], answer: 'All three', answerDisplay: 'All three', explanation: 'The very middle, inside every circle.' },
          { id: 'l3p1c', label: 'Not in any of the three circles:', type: 'choice', options: ['A only', 'All three', 'Neither', 'B and C only'], answer: 'Neither', answerDisplay: 'Neither', explanation: 'Outside every circle, but still in the rectangle.' },
        ],
      },
      {
        type: 'practice',
        prompt:
          '30 children chose Maths (M), English (E), Science (S). Regions: M only = 3, E only = 4, ' +
          'S only = 7, M&E only = 1, M&S only = 5, E&S only = 0, all three = 2.',
        parts: [
          { id: 'l3p2a', label: 'How many like only Maths?', type: 'number', answer: 3, answerDisplay: '3', explanation: 'Read it straight off: M only = 3.' },
          { id: 'l3p2b', label: 'How many like both Maths AND Science (including all three)?', type: 'number', answer: 7, answerDisplay: '7', explanation: 'M&S only + all three = 5 + 2 = 7.' },
          { id: 'l3p2c', label: 'How many like Maths altogether?', type: 'number', answer: 11, answerDisplay: '11', explanation: 'M only + M&E only + M&S only + all three = 3 + 1 + 5 + 2 = 11.' },
          { id: 'l3p2d', label: 'How many like none of the three?', type: 'number', answer: 8, answerDisplay: '8', explanation: '30 − (3+4+7+1+5+0+2) = 30 − 22 = 8.' },
          { id: 'l3p2e', label: 'How many like exactly two subjects?', type: 'number', answer: 6, answerDisplay: '6', explanation: 'The "pair only" regions: 1 + 5 + 0 = 6 (not the all-three).' },
        ],
      },
      {
        type: 'practice',
        prompt:
          '40 children: 18 football, 15 tennis, 12 basketball. Football&Tennis only = 5, ' +
          'Football&Basketball only = 4, Tennis&Basketball only = 3, all three = 2. (Work backwards from the totals.)',
        parts: [
          { id: 'l3p3a', label: 'Football only:', type: 'number', answer: 7, answerDisplay: '7', explanation: '18 − 5 − 4 − 2 = 7.' },
          { id: 'l3p3b', label: 'Tennis only:', type: 'number', answer: 5, answerDisplay: '5', explanation: '15 − 5 − 3 − 2 = 5.' },
          { id: 'l3p3c', label: 'Basketball only:', type: 'number', answer: 3, answerDisplay: '3', explanation: '12 − 4 − 3 − 2 = 3.' },
          { id: 'l3p3d', label: 'Neither:', type: 'number', answer: 11, answerDisplay: '11', explanation: '40 − (7+5+3+5+4+3+2) = 40 − 29 = 11.' },
        ],
      },
    ],
  },
  {
    id: 'venn-lesson-4',
    topicId: 'venn',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Word Problems',
    summary: 'Turn words into a diagram and work backwards. This is where exam marks live.',
    sections: [
      {
        type: 'note',
        heading: 'The exam wants you to work it out',
        body:
          'Real questions rarely hand you a finished diagram. They give you a few ' +
          'numbers and the total, and you fill in the rest. The method:' +
          '<ol>' +
          '<li>Draw the two (or three) circles.</li>' +
          '<li><b>Fill in the centre (the overlap) first.</b></li>' +
          '<li>Work outwards to find each "only" region.</li>' +
          '<li>Use the total to find "neither".</li>' +
          '<li><b>Check</b> that everything adds back to the total.</li>' +
          '</ol>',
      },
      {
        type: 'note',
        heading: 'Handy formulas',
        body:
          '<ul>' +
          '<li><b>Only A</b> = (total in A) − (both)</li>' +
          '<li><b>At least one</b> = total − neither</li>' +
          '<li><b>Both</b> = (total in A) + (total in B) − (at least one)</li>' +
          '<li><b>Neither</b> = total − (everyone inside the circles)</li>' +
          '</ul>',
      },
      {
        type: 'note',
        heading: 'The big trap',
        body:
          'If a question says "<b>20 study French and German</b>" it often means <i>at least</i> ' +
          'French and German — so it <b>includes</b> the people doing all three. To get the ' +
          '"pair only" region, <b>subtract the all-three number first</b>.',
      },
      {
        type: 'example',
        heading: 'Example 1 — fill from the centre',
        intro: '28 pupils: 16 study French, 14 study Spanish, 8 study both. How many study neither?',
        steps: [
          'Centre first: both = 8.',
          'French only = 16 − 8 = 8.',
          'Spanish only = 14 − 8 = 6.',
          'Neither = 28 − 8 − 8 − 6 = 6.',
        ],
        result: 'Check: 8 + 8 + 6 + 6 = 28 ✓',
      },
      {
        type: 'example',
        heading: 'Example 2 — working backwards',
        intro: '25 children: 15 like pizza, 13 like pasta, 7 like neither. How many like both?',
        steps: [
          'At least one = 25 − 7 = 18.',
          'Both = pizza + pasta − at least one = 15 + 13 − 18 = 10.',
        ],
        result: 'Check: pizza only 5 + both 10 + pasta only 3 + neither 7 = 25 ✓',
      },
      {
        type: 'practice',
        heading: 'Your turn',
        prompt: '30 pupils: 18 have a dog, 12 have a cat, 5 have both.',
        parts: [
          { id: 'l4p1a', label: 'Only a dog:', type: 'number', answer: 13, answerDisplay: '13', explanation: '18 − 5 = 13.' },
          { id: 'l4p1b', label: 'Only a cat:', type: 'number', answer: 7, answerDisplay: '7', explanation: '12 − 5 = 7.' },
          { id: 'l4p1c', label: 'Neither:', type: 'number', answer: 5, answerDisplay: '5', explanation: '30 − 13 − 5 − 7 = 5.' },
        ],
      },
      {
        type: 'practice',
        prompt: '35 children: 20 like football, 18 like cricket, 8 like neither.',
        parts: [
          { id: 'l4p2a', label: 'How many like at least one sport?', type: 'number', answer: 27, answerDisplay: '27', explanation: '35 − 8 = 27.' },
          { id: 'l4p2b', label: 'How many like both?', type: 'number', answer: 11, answerDisplay: '11', explanation: '20 + 18 − 27 = 11.' },
          { id: 'l4p2c', label: 'Only football:', type: 'number', answer: 9, answerDisplay: '9', explanation: '20 − 11 = 9.' },
          { id: 'l4p2d', label: 'Only cricket:', type: 'number', answer: 7, answerDisplay: '7', explanation: '18 − 11 = 7.' },
        ],
      },
      {
        type: 'practice',
        prompt: '32 children: 20 visited France, 18 visited Spain, 9 visited both.',
        parts: [
          { id: 'l4p3a', label: 'France only:', type: 'number', answer: 11, answerDisplay: '11', explanation: '20 − 9 = 11.' },
          { id: 'l4p3b', label: 'Spain only:', type: 'number', answer: 9, answerDisplay: '9', explanation: '18 − 9 = 9.' },
          { id: 'l4p3c', label: 'Neither:', type: 'number', answer: 3, answerDisplay: '3', explanation: '32 − 11 − 9 − 9 = 3.' },
          { id: 'l4p3d', label: 'Pick a child who visited France. What fraction also visited Spain?', type: 'fraction', answer: '9/20', answerDisplay: '9/20', explanation: '9 of the 20 France-visitors also went to Spain.' },
        ],
      },
      {
        type: 'practice',
        prompt:
          '120 pupils: 60 French, 50 German, 40 Spanish. 20 French & German, 15 French & Spanish, ' +
          '10 German & Spanish, 5 all three. (Remember: the pair numbers INCLUDE the all-three!)',
        parts: [
          { id: 'l4p4a', label: 'French only:', type: 'number', answer: 30, answerDisplay: '30', explanation: 'Pairs minus all-three: F&G only 15, F&S only 10. So 60 − 15 − 10 − 5 = 30.' },
          { id: 'l4p4b', label: 'German only:', type: 'number', answer: 25, answerDisplay: '25', explanation: '50 − 15 − 5 − 5 = 25.' },
          { id: 'l4p4c', label: 'Spanish only:', type: 'number', answer: 20, answerDisplay: '20', explanation: '40 − 10 − 5 − 5 = 20.' },
          { id: 'l4p4d', label: 'At least one language:', type: 'number', answer: 110, answerDisplay: '110', explanation: '30+25+20 + 15+10+5 + 5 = 110.' },
          { id: 'l4p4e', label: 'None of the three:', type: 'number', answer: 10, answerDisplay: '10', explanation: '120 − 110 = 10.' },
        ],
      },
    ],
  },
];
