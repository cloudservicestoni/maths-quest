import type { Lesson } from '../../types/content';

const topicId = 'algebra';
const topicTitle = 'Algebra';
const topicDescription = 'Letters, equations, sequences and inequalities — the language of 11+ maths.';

export const algebraLessons: Lesson[] = [
  /* ── Lesson 1 ── What is Algebra? ──────────────────────────────────── */
  {
    id: 'algebra-lesson-1',
    topicId, topicTitle, topicDescription,
    order: 1, level: '⭐',
    title: 'Lesson 1 — What is Algebra?',
    summary: 'Use letters to write expressions and substitute values to evaluate them.',
    sections: [
      {
        type: 'note',
        heading: 'Letters stand for numbers',
        body:
          'In algebra, a **letter** (called a **variable**) stands for an unknown number.\n\n' +
          'We can write expressions using letters and operations:\n\n' +
          '| Expression | Meaning |\n' +
          '|---|---|\n' +
          '| n + 4 | 4 more than n |\n' +
          '| 3n | 3 times n (we write the number first) |\n' +
          '| n − 2 | 2 less than n |\n' +
          '| n ÷ 5 or n/5 | n divided by 5 |',
      },
      {
        type: 'note',
        heading: 'Substitution',
        body:
          'To **evaluate** an expression, replace the letter with a number.\n\n' +
          '**Example:** If n = 4, find 3n + 1\n\n' +
          'Replace n with 4: **3 × 4 + 1 = 12 + 1 = 13**\n\n' +
          'Always multiply before you add (BIDMAS).',
      },
      {
        type: 'example',
        heading: 'Worked example',
        intro: 'If a = 5 and b = 3, find: (i) 2a + b,  (ii) a − 2b,  (iii) ab',
        steps: [
          '(i)  2a + b = 2 × 5 + 3 = 10 + 3 = 13',
          '(ii) a − 2b = 5 − 2 × 3 = 5 − 6 = −1',
          '(iii) ab = 5 × 3 = 15  (letters next to each other mean multiply)',
        ],
        result: '13,  −1,  15',
      },
      {
        type: 'practice',
        heading: 'Practice — substitution (use x = 4, y = 2)',
        parts: [
          { id: 'al1p1a', label: 'Find x + y', type: 'number', answer: 6, answerDisplay: '6  (4 + 2)' },
          { id: 'al1p1b', label: 'Find 3x', type: 'number', answer: 12, answerDisplay: '12  (3 × 4)' },
          { id: 'al1p1c', label: 'Find 2x + y', type: 'number', answer: 10, answerDisplay: '10  (2 × 4 + 2)' },
          { id: 'al1p1d', label: 'Find 5x − 3y', type: 'number', answer: 14, answerDisplay: '14  (5 × 4 − 3 × 2 = 20 − 6)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Practice — write the expression',
        parts: [
          { id: 'al1p2a', label: 'Tom has n sweets. He gets 6 more. How many does he have?', type: 'choice', options: ['n + 6', 'n − 6', '6n', 'n ÷ 6'], answer: 'n + 6', answerDisplay: 'n + 6' },
          { id: 'al1p2b', label: "Lucy has n books — 3 times as many as her brother. Expression for Lucy's books?", type: 'choice', options: ['3n', 'n + 3', 'n − 3', 'n ÷ 3'], answer: '3n', answerDisplay: '3n' },
          { id: 'al1p2c', label: "p people share £20 equally. Expression for each person's share?", type: 'choice', options: ['20 ÷ p', 'p + 20', '20p', 'p − 20'], answer: '20 ÷ p', answerDisplay: '20 ÷ p  (also written 20/p)' },
        ],
      },
    ],
  },

  /* ── Lesson 2 ── Simple Equations ──────────────────────────────────── */
  {
    id: 'algebra-lesson-2',
    topicId, topicTitle, topicDescription,
    order: 2, level: '⭐⭐',
    title: 'Lesson 2 — Simple Equations',
    summary: 'Solve one-step equations using inverse (opposite) operations.',
    sections: [
      {
        type: 'note',
        heading: 'What is an equation?',
        body:
          'An **equation** says that two things are **equal**: x + 3 = 10\n\n' +
          'Think of it as a **balance scale** — whatever you do to one side, you must do to the other.\n\n' +
          'To **solve** an equation, find the value of the letter.',
      },
      {
        type: 'note',
        heading: 'Inverse operations',
        body:
          'Use the **opposite operation** to undo each step:\n\n' +
          '| Operation | Inverse |\n' +
          '|---|---|\n' +
          '| + 3 | − 3 |\n' +
          '| − 7 | + 7 |\n' +
          '| × 4 | ÷ 4 |\n' +
          '| ÷ 5 | × 5 |',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          'x + 5 = 12  →  subtract 5 from both sides  →  x = 7',
          'x − 4 = 9   →  add 4 to both sides          →  x = 13',
          '3x = 18     →  divide both sides by 3        →  x = 6',
          'x ÷ 4 = 5   →  multiply both sides by 4      →  x = 20',
        ],
        result: 'Always check by substituting your answer back in.',
      },
      {
        type: 'practice',
        heading: 'Practice — solve for x',
        parts: [
          { id: 'al2p1a', label: 'x + 5 = 12', type: 'number', answer: 7, answerDisplay: '7  (12 − 5)', hint: 'Subtract 5 from both sides.' },
          { id: 'al2p1b', label: 'x − 3 = 9', type: 'number', answer: 12, answerDisplay: '12  (9 + 3)' },
          { id: 'al2p1c', label: '4x = 20', type: 'number', answer: 5, answerDisplay: '5  (20 ÷ 4)' },
          { id: 'al2p1d', label: 'x ÷ 3 = 4', type: 'number', answer: 12, answerDisplay: '12  (4 × 3)' },
          { id: 'al2p1e', label: '6x = 42', type: 'number', answer: 7, answerDisplay: '7  (42 ÷ 6)' },
          { id: 'al2p1f', label: 'x + 15 = 31', type: 'number', answer: 16, answerDisplay: '16  (31 − 15)' },
        ],
      },
    ],
  },

  /* ── Lesson 3 ── Two-Step Equations ────────────────────────────────── */
  {
    id: 'algebra-lesson-3',
    topicId, topicTitle, topicDescription,
    order: 3, level: '⭐⭐⭐',
    title: 'Lesson 3 — Two-Step Equations',
    summary: 'Solve equations that need two inverse operations, and form equations from words.',
    sections: [
      {
        type: 'note',
        heading: 'Two-step method',
        body:
          'When an equation has two operations, **undo them in reverse order**:\n\n' +
          '**Example:** 3x + 5 = 20\n\n' +
          '1. Subtract 5 from both sides:  3x = 15\n' +
          '2. Divide both sides by 3:  x = 5\n\n' +
          '**Example:** 2x − 7 = 11\n\n' +
          '1. Add 7 to both sides:  2x = 18\n' +
          '2. Divide both sides by 2:  x = 9',
      },
      {
        type: 'example',
        heading: 'Worked example — solve 4x + 3 = 19',
        steps: [
          'Subtract 3 from both sides:  4x = 16',
          'Divide both sides by 4:  x = 4',
          'Check: 4 × 4 + 3 = 16 + 3 = 19 ✓',
        ],
        result: 'x = 4',
      },
      {
        type: 'practice',
        heading: 'Practice — two-step equations',
        parts: [
          { id: 'al3p1a', label: '2x + 1 = 11', type: 'number', answer: 5, answerDisplay: '5  (2x = 10, x = 5)', hint: 'First subtract 1, then divide by 2.' },
          { id: 'al3p1b', label: '3x − 4 = 11', type: 'number', answer: 5, answerDisplay: '5  (3x = 15, x = 5)' },
          { id: 'al3p1c', label: '5x + 6 = 31', type: 'number', answer: 5, answerDisplay: '5  (5x = 25, x = 5)' },
          { id: 'al3p1d', label: '4x − 7 = 29', type: 'number', answer: 9, answerDisplay: '9  (4x = 36, x = 9)' },
        ],
      },
      {
        type: 'note',
        heading: 'Forming equations from words',
        body:
          'Read the problem, choose a letter for the unknown, write an equation, then solve.\n\n' +
          '**Example:** "I think of a number, multiply by 3 and add 4. The answer is 19."\n\n' +
          '- Let the number be n\n' +
          '- Equation: 3n + 4 = 19\n' +
          '- Solve: 3n = 15 → n = **5**\n\n' +
          'Check: 3 × 5 + 4 = 19 ✓',
      },
      {
        type: 'practice',
        heading: 'Practice — form and solve',
        parts: [
          { id: 'al3p2a', label: 'I think of a number, multiply by 3 and add 5. The answer is 17. What is the number?', type: 'number', answer: 4, answerDisplay: '4  (3n + 5 = 17 → 3n = 12 → n = 4)', hint: 'Let the number be n and write an equation.' },
          { id: 'al3p2b', label: 'I think of a number, multiply by 4 and subtract 6. The answer is 18. What is the number?', type: 'number', answer: 6, answerDisplay: '6  (4n − 6 = 18 → 4n = 24 → n = 6)' },
          { id: 'al3p2c', label: 'Two angles on a straight line are x and 2x. Find x (in degrees).', type: 'number', answer: 60, answerDisplay: '60°  (x + 2x = 180 → 3x = 180 → x = 60)' },
        ],
      },
    ],
  },

  /* ── Lesson 4 ── Sequences and Inequalities ─────────────────────────── */
  {
    id: 'algebra-lesson-4',
    topicId, topicTitle, topicDescription,
    order: 4, level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Sequences and Inequalities',
    summary: 'Find missing terms, nth-term rules, and solve simple inequalities.',
    sections: [
      {
        type: 'note',
        heading: 'Number sequences',
        body:
          'A **sequence** is a list of numbers that follow a rule.\n\n' +
          '**Term-to-term rule:** describes how to get from one term to the next.\n\n' +
          '- 3, 7, 11, 15, ... → add 4 each time\n' +
          '- 2, 6, 18, 54, ... → multiply by 3 each time\n' +
          '- 50, 43, 36, 29, ... → subtract 7 each time',
        diagram: { type: 'barChart', data: { title: 'Sequence: 3, 7, 11, 15…', yMax: 15, bars: [{ label: 'Term 1', value: 3 }, { label: 'Term 2', value: 7 }, { label: 'Term 3', value: 11 }, { label: 'Term 4', value: 15 }] } },
      },
      {
        type: 'note',
        heading: 'Nth-term rule',
        body:
          'For a **linear sequence** (constant difference), the nth-term rule has the form **an + b**.\n\n' +
          '**Example:** 5, 8, 11, 14, ...\n\n' +
          '- Common difference = 3, so a = 3\n' +
          '- Check: 3 × 1 = 3, but term 1 is 5 → b = 5 − 3 = 2\n' +
          '- nth term = **3n + 2**\n\n' +
          'Check: n=1 → 5 ✓, n=2 → 8 ✓, n=4 → 14 ✓',
      },
      {
        type: 'example',
        heading: 'Worked example — find the 10th term of 4, 7, 10, 13...',
        steps: [
          'Common difference = 3, so a = 3',
          'Check: 3 × 1 = 3, but term 1 is 4, so b = 4 − 3 = 1',
          'nth term = 3n + 1',
          '10th term = 3 × 10 + 1 = 31',
        ],
        result: 'The 10th term is 31.',
      },
      {
        type: 'practice',
        heading: 'Practice — sequences',
        parts: [
          { id: 'al4p1a', label: 'Next term of 3, 7, 11, 15, ___', type: 'number', answer: 19, answerDisplay: '19  (add 4)' },
          { id: 'al4p1b', label: 'Next term of 50, 43, 36, 29, ___', type: 'number', answer: 22, answerDisplay: '22  (subtract 7)' },
          { id: 'al4p1c', label: 'Next term of 2, 6, 18, 54, ___', type: 'number', answer: 162, answerDisplay: '162  (multiply by 3)' },
          { id: 'al4p1d', label: '10th term of the sequence 5, 8, 11, 14... (nth term = 3n + 2)', type: 'number', answer: 32, answerDisplay: '32  (3 × 10 + 2 = 32)' },
        ],
      },
      {
        type: 'note',
        heading: 'Simple inequalities',
        body:
          'An **inequality** uses < (less than) or > (greater than) instead of =.\n\n' +
          '**Solve like an equation** — use inverse operations on both sides.\n\n' +
          '**Example:** 2x > 10\n\n' +
          '- Divide both sides by 2: x > 5\n' +
          '- If x must be a **whole number**, the smallest value is **6**\n\n' +
          '**Example:** 3x + 1 < 16\n\n' +
          '- Subtract 1: 3x < 15\n' +
          '- Divide by 3: x < 5\n' +
          '- Largest whole number value of x = **4**',
      },
      {
        type: 'practice',
        heading: 'Practice — inequalities',
        parts: [
          { id: 'al4p2a', label: '3x > 12. What is the smallest integer value of x?', type: 'number', answer: 5, answerDisplay: '5  (x > 4, so smallest integer = 5)', hint: 'Solve like an equation, then pick the next whole number.' },
          { id: 'al4p2b', label: '4x < 20. What is the largest integer value of x?', type: 'number', answer: 4, answerDisplay: '4  (x < 5, so largest integer = 4)' },
          { id: 'al4p2c', label: '2x + 3 > 15. What is the smallest integer value of x?', type: 'number', answer: 7, answerDisplay: '7  (2x > 12, x > 6, smallest integer = 7)' },
        ],
      },
    ],
  },
];
