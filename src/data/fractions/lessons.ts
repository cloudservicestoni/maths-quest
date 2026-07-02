import type { Lesson } from '../../types/content';

const TOPIC = {
  topicId: 'fractions',
  topicTitle: 'Fractions',
  topicDescription: 'Proper, improper and mixed fractions — add, subtract, multiply, divide, and compare.',
};

export const fractionsLessons: Lesson[] = [
  /* ───────────── Lesson 1 ───────────── */
  {
    id: 'fractions-lesson-1',
    ...TOPIC,
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — Understanding Fractions',
    summary: 'Parts of a fraction, proper vs improper vs mixed, equivalent fractions, and simplifying.',
    sections: [
      {
        type: 'note',
        heading: 'Parts of a fraction',
        body: `The **numerator** is the top number — how many parts you have.
The **denominator** is the bottom number — how many equal parts the whole is split into.

| Type | Rule | Examples |
|---|---|---|
| **Proper fraction** | numerator < denominator | 3/4, 2/7, 5/9 |
| **Improper fraction** | numerator ≥ denominator | 9/4, 7/3, 11/5 |
| **Mixed number** | whole number + proper fraction | 2¼, 1⅔, 3½ |

**Converting improper → mixed:** divide numerator by denominator.
- 9 ÷ 4 = 2 remainder 1, so 9/4 = **2¼**

**Converting mixed → improper:** multiply whole by denominator, then add numerator.
- 2¼ → (2 × 4) + 1 = 9, so 2¼ = **9/4**`,
      },
      {
        type: 'note',
        heading: 'Equivalent fractions',
        body: `Equivalent fractions show the same value written differently.

**Rule:** multiply or divide the numerator AND denominator by the **same number**.

| ÷ or × | Result |
|---|---|
| 1/2 × 2/2 | = 2/4 |
| 1/2 × 3/3 | = 3/6 |
| 6/10 ÷ 2/2 | = 3/5 |

To fill in a blank: decide what you multiplied or divided the denominator by — do the same to the numerator.
3/5 = ?/20 → denominator × 4, so numerator × 4 → **12**/20`,
      },
      {
        type: 'note',
        heading: 'Simplifying fractions',
        body: `A fraction is in its **simplest form** when the only common factor of numerator and denominator is 1.

**Method:** find the **Highest Common Factor (HCF)** of both numbers, then divide both by it.

- Simplify 12/18 → HCF(12, 18) = 6 → 12 ÷ 6 = **2**, 18 ÷ 6 = **3** → **2/3**
- Simplify 15/25 → HCF(15, 25) = 5 → **3/5**
- Simplify 24/36 → HCF(24, 36) = 12 → **2/3**

**Tip:** if you're not sure of the HCF, keep dividing by small common factors (2, 3, 5…) until you can't anymore.`,
      },
      {
        type: 'example',
        heading: 'Worked example — simplify and convert',
        intro: 'Simplify 20/28. Then write 17/6 as a mixed number.',
        steps: [
          'Simplify 20/28: factors of 20 are 1,2,4,5,10,20. Factors of 28 are 1,2,4,7,14,28.',
          'HCF(20, 28) = 4. Divide both: 20 ÷ 4 = 5 and 28 ÷ 4 = 7.',
          '20/28 = 5/7 ✓',
          'Convert 17/6: 17 ÷ 6 = 2 remainder 5.',
          'So 17/6 = 2 5/6 ✓',
        ],
        result: '20/28 = <strong>5/7</strong> &nbsp;|&nbsp; 17/6 = <strong>2 5/6</strong>',
      },
      {
        type: 'practice',
        heading: 'Practice — fractions basics',
        parts: [
          {
            id: 'fl1-1',
            label: 'What type of fraction is 5/8? (proper, improper, or mixed)',
            type: 'text',
            accept: ['proper', 'proper fraction'],
            answerDisplay: 'Proper — numerator (5) is less than denominator (8), so it is less than 1.',
            explanation: 'When the top is smaller than the bottom, the fraction is less than 1 — always proper.',
          },
          {
            id: 'fl1-2',
            label: 'What type of fraction is 11/4? (proper, improper, or mixed)',
            type: 'text',
            accept: ['improper', 'improper fraction'],
            answerDisplay: 'Improper — numerator (11) is greater than denominator (4), so it is greater than 1.',
            explanation: 'When the top number is larger, the value is at least 1 — that makes it improper.',
          },
          {
            id: 'fl1-3',
            label: 'Convert 11/4 to a mixed number. How many whole groups of 4 fit into 11?',
            type: 'number',
            answer: 2,
            answerDisplay: '2 — because 11 ÷ 4 = 2 remainder 3, so 11/4 = 2¾.',
            explanation: 'The whole number part is the quotient; the remainder over the denominator gives the fraction part.',
          },
          {
            id: 'fl1-4',
            label: 'Simplify 8/12. (Enter your answer as a fraction, e.g. 2/3)',
            type: 'fraction',
            answer: '2/3',
            answerDisplay: '2/3 — HCF(8,12) = 4; 8÷4 = 2, 12÷4 = 3.',
            explanation: 'Always divide both numbers by their HCF in one step to reach the simplest form.',
          },
          {
            id: 'fl1-5',
            label: 'Simplify 15/20.',
            type: 'fraction',
            answer: '3/4',
            answerDisplay: '3/4 — HCF(15,20) = 5; 15÷5 = 3, 20÷5 = 4.',
            explanation: '15 and 20 are both in the 5 times table, so 5 is a common factor.',
          },
        ],
      },
    ],
  },

  /* ───────────── Lesson 2 ───────────── */
  {
    id: 'fractions-lesson-2',
    ...TOPIC,
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Fractions of Amounts & Adding/Subtracting',
    summary: 'Find a fraction of a number, add and subtract fractions with the same and different denominators.',
    sections: [
      {
        type: 'note',
        heading: 'Fractions of amounts',
        body: `To find a fraction of an amount:
1. **Divide** by the denominator (find one part)
2. **Multiply** by the numerator (scale up)

- 3/4 of 48 → 48 ÷ 4 = **12** → 12 × 3 = **36**
- 2/5 of 35 → 35 ÷ 5 = **7** → 7 × 2 = **14**

**Memory hook:** divide first, then times — "**D**onuts **T**aste **A**mazing" (Divide Then ×).`,
      },
      {
        type: 'note',
        heading: 'Adding and subtracting — same denominator',
        body: `When denominators are the same, just add or subtract the **numerators**. The denominator stays the same.

- 3/8 + 2/8 = **5/8**
- 7/9 − 4/9 = **3/9** = **1/3** (simplify!)

Always simplify your answer if possible.`,
      },
      {
        type: 'note',
        heading: 'Adding and subtracting — different denominators',
        body: `When denominators differ, first convert to a **common denominator** (use the LCM).

**Steps:**
1. Find the LCM of both denominators
2. Convert each fraction to an equivalent fraction with the LCM as denominator
3. Add or subtract the numerators
4. Simplify if possible

**Example:** 1/3 + 1/4
- LCM(3, 4) = **12**
- 1/3 = 4/12 and 1/4 = 3/12
- 4/12 + 3/12 = **7/12** ✓`,
      },
      {
        type: 'example',
        heading: 'Worked example — fraction of an amount and adding',
        intro: 'Find 2/3 of 36. Then calculate 3/4 + 1/6.',
        steps: [
          '2/3 of 36: divide by 3 → 36 ÷ 3 = 12. Multiply by 2 → 12 × 2 = 24.',
          '3/4 + 1/6: LCM(4, 6) = 12.',
          '3/4 = 9/12 and 1/6 = 2/12.',
          '9/12 + 2/12 = 11/12.',
        ],
        result: '2/3 of 36 = <strong>24</strong> &nbsp;|&nbsp; 3/4 + 1/6 = <strong>11/12</strong>',
      },
      {
        type: 'practice',
        heading: 'Practice — fractions of amounts and adding/subtracting',
        parts: [
          {
            id: 'fl2-1',
            label: 'Find 1/4 of 36.',
            type: 'number',
            answer: 9,
            answerDisplay: '9 — 36 ÷ 4 = 9.',
            explanation: 'Finding 1/4 means dividing by 4.',
          },
          {
            id: 'fl2-2',
            label: 'Find 3/5 of 40.',
            type: 'number',
            answer: 24,
            answerDisplay: '24 — 40 ÷ 5 = 8, then 8 × 3 = 24.',
            explanation: 'Divide by the bottom, multiply by the top.',
          },
          {
            id: 'fl2-3',
            label: 'Calculate 1/3 + 1/3.',
            type: 'fraction',
            answer: '2/3',
            answerDisplay: '2/3 — same denominator, so just add the numerators: 1+1=2.',
            explanation: 'Same denominator makes it simple — the denominator never changes.',
          },
          {
            id: 'fl2-4',
            label: 'Calculate 5/8 − 1/8. Simplify your answer.',
            type: 'fraction',
            answer: '1/2',
            answerDisplay: '1/2 — 5/8 − 1/8 = 4/8 = 1/2 (HCF = 4).',
            explanation: 'Always check if the result simplifies further.',
          },
          {
            id: 'fl2-5',
            label: 'Calculate 1/3 + 1/4. (Find the LCM of 3 and 4 first.)',
            type: 'fraction',
            answer: '7/12',
            answerDisplay: '7/12 — LCM(3,4)=12; 1/3=4/12, 1/4=3/12; 4+3=7, so 7/12.',
            explanation: 'LCM(3,4)=12 because 12 is the smallest number in both the 3 and 4 times tables.',
          },
        ],
      },
    ],
  },

  /* ───────────── Lesson 3 ───────────── */
  {
    id: 'fractions-lesson-3',
    ...TOPIC,
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Multiplying & Dividing Fractions',
    summary: 'Multiply fractions, use the Keep-Change-Flip rule to divide, and work with mixed numbers.',
    sections: [
      {
        type: 'note',
        heading: 'Multiplying fractions',
        body: `**Rule:** multiply the numerators together and the denominators together, then simplify.

numerator × numerator / denominator × denominator

- 2/3 × 4/5 = (2×4)/(3×5) = 8/15
- 3/4 × 2/3 = 6/12 = **1/2** (simplify!)

**Top tip:** you can cross-cancel before multiplying. 3/4 × 2/3 → cancel the 3s → 1/4 × 2/1 = **1/2**. Saves working!

**Fraction of a fraction:** "of" means multiply. So ½ of ¾ = 1/2 × 3/4 = **3/8**.`,
      },
      {
        type: 'note',
        heading: 'Dividing fractions — Keep, Change, Flip',
        body: `Dividing by a fraction is the same as multiplying by its **reciprocal** (flip it upside down).

**KCF method:**
1. **Keep** the first fraction as it is
2. **Change** ÷ to ×
3. **Flip** the second fraction (swap numerator and denominator)

- 3/4 ÷ 1/2 → 3/4 × 2/1 = 6/4 = **3/2**
- 2/3 ÷ 4/5 → 2/3 × 5/4 = 10/12 = **5/6**

**Memory:** "Keep, Change, Flip" — KCF!`,
      },
      {
        type: 'note',
        heading: 'Operations with mixed numbers',
        body: `Always **convert mixed numbers to improper fractions first**, then multiply or divide as normal.

- 1½ × 2/3 → 3/2 × 2/3 = 6/6 = **1**
- 2¼ ÷ 1½ → 9/4 ÷ 3/2 → 9/4 × 2/3 = 18/12 = **3/2**

After calculating, convert back to a mixed number if needed:
3/2 = 1½`,
      },
      {
        type: 'example',
        heading: 'Worked example — multiply and divide',
        intro: 'Calculate 1⅓ × 2¼, then calculate 3¾ ÷ 1¼.',
        steps: [
          '1⅓ × 2¼: convert to improper → 4/3 × 9/4.',
          'Cross-cancel: cancel the 4s and the... 4/3 × 9/4 = 36/12 = 3.',
          '3¾ ÷ 1¼: convert → 15/4 ÷ 5/4.',
          'KCF: 15/4 × 4/5. Cancel the 4s → 15/1 × 1/5 = 15/5 = 3.',
        ],
        result: '1⅓ × 2¼ = <strong>3</strong> &nbsp;|&nbsp; 3¾ ÷ 1¼ = <strong>3</strong>',
      },
      {
        type: 'practice',
        heading: 'Practice — multiplying and dividing',
        parts: [
          {
            id: 'fl3-1',
            label: 'Calculate 2/3 × 3/5. Simplify your answer.',
            type: 'fraction',
            answer: '2/5',
            answerDisplay: '2/5 — (2×3)/(3×5) = 6/15 = 2/5.',
            explanation: 'Cancel the 3s first: 2/1 × 1/5 = 2/5. Much easier!',
          },
          {
            id: 'fl3-2',
            label: 'Calculate 3/4 ÷ 1/2 using Keep, Change, Flip.',
            type: 'fraction',
            answer: '3/2',
            answerDisplay: '3/2 (= 1½) — 3/4 × 2/1 = 6/4 = 3/2.',
            explanation: 'Dividing by 1/2 is the same as multiplying by 2.',
          },
          {
            id: 'fl3-3',
            label: 'Write 2⅓ as an improper fraction.',
            type: 'fraction',
            answer: '7/3',
            answerDisplay: '7/3 — (2 × 3) + 1 = 7, so 2⅓ = 7/3.',
            explanation: 'Whole × denominator + numerator = new numerator. Keep the same denominator.',
          },
          {
            id: 'fl3-4',
            label: 'Calculate 1½ × 2/3.',
            type: 'fraction',
            answer: '1',
            answerDisplay: '1 — convert 1½ to 3/2; 3/2 × 2/3 = 6/6 = 1.',
            explanation: 'These fractions are reciprocals of each other — they always multiply to 1!',
          },
          {
            id: 'fl3-5',
            label: 'Calculate 2¼ ÷ 1½. Give your answer as an improper fraction.',
            type: 'fraction',
            answer: '3/2',
            answerDisplay: '3/2 — 9/4 ÷ 3/2 = 9/4 × 2/3 = 18/12 = 3/2.',
            explanation: 'Convert both to improper fractions first, then KCF.',
          },
        ],
      },
    ],
  },

  /* ───────────── Lesson 4 ───────────── */
  {
    id: 'fractions-lesson-4',
    ...TOPIC,
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Comparing, Ordering & Problem Solving',
    summary: 'Compare and order fractions using a common denominator, then tackle multi-step word problems.',
    sections: [
      {
        type: 'note',
        heading: 'Comparing fractions',
        body: `To compare fractions, convert them to a **common denominator**, then compare numerators.

**Example:** Which is larger — 3/4 or 5/7?
- LCM(4,7) = 28
- 3/4 = 21/28 and 5/7 = 20/28
- 21 > 20, so **3/4 > 5/7**

**Shortcut — cross multiplication:**
- 3/4 vs 5/7: multiply diagonally → 3×7=21 and 5×4=20
- 21 > 20, so the fraction on the left (3/4) is bigger ✓`,
      },
      {
        type: 'note',
        heading: 'Ordering several fractions',
        body: `To order 3 or more fractions:
1. Find the LCM of all denominators
2. Convert every fraction to an equivalent fraction with that denominator
3. Sort the new numerators

**Example:** order 2/3, 3/4, 5/6 smallest first.
- LCM(3, 4, 6) = 12
- 2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12
- Order: **2/3 < 3/4 < 5/6** ✓`,
      },
      {
        type: 'note',
        heading: 'Multi-step word problems',
        body: `For harder problems, pick out what fraction operation you need:

- "What fraction **of** …" → multiply
- "How many **left**?" → subtract from 1 (or from the whole)
- "What was the **original** amount?" → divide by the fraction (or × by its reciprocal)
- "How many **portions** can you get from …?" → divide

**Example:** A rope is 4½ m long. Pieces of ¾ m are cut off. How many pieces?
- 4½ ÷ ¾ = 9/2 ÷ 3/4 = 9/2 × 4/3 = 36/6 = **6 pieces** ✓`,
      },
      {
        type: 'example',
        heading: 'Worked example — ordering and working backwards',
        intro: 'Order 7/12, 2/3, 5/8 smallest first. Then: 3/4 of a number is 18 — find the number.',
        steps: [
          'Ordering: LCM(12, 3, 8) = 24.',
          '7/12 = 14/24, 2/3 = 16/24, 5/8 = 15/24.',
          'Order of numerators: 14 < 15 < 16, so: 7/12 < 5/8 < 2/3.',
          'Working backwards: 3/4 of n = 18 → n = 18 ÷ 3/4 = 18 × 4/3 = 24.',
        ],
        result: 'Order: <strong>7/12, 5/8, 2/3</strong> &nbsp;|&nbsp; The number is <strong>24</strong>',
      },
      {
        type: 'practice',
        heading: 'Practice — comparing, ordering and problems',
        parts: [
          {
            id: 'fl4-1',
            label: 'Which is larger: 3/4 or 5/7?',
            type: 'choice',
            options: ['3/4', '5/7'],
            answer: '3/4',
            answerDisplay: '3/4 — cross-multiply: 3×7=21 and 5×4=20. Since 21>20, 3/4 is larger.',
            explanation: 'Cross-multiplication is the quickest way to compare two fractions.',
          },
          {
            id: 'fl4-2',
            label: 'What is the LCM of 4 and 6?',
            type: 'number',
            answer: 12,
            answerDisplay: '12 — the 4 times table: 4, 8, 12. The 6 times table: 6, 12. LCM = 12.',
            explanation: 'LCM is the smallest number that appears in both multiplication tables.',
          },
          {
            id: 'fl4-3',
            label: 'Which is the smallest fraction: 2/3, 3/4, or 5/6?',
            type: 'choice',
            options: ['2/3', '3/4', '5/6'],
            answer: '2/3',
            answerDisplay: '2/3 — with denominator 12: 2/3=8/12, 3/4=9/12, 5/6=10/12. Smallest numerator = 8.',
            explanation: '2/3 is just over half, while 3/4 and 5/6 are closer to 1.',
          },
          {
            id: 'fl4-4',
            label: '3/4 of a number is 18. What is the number?',
            type: 'number',
            answer: 24,
            answerDisplay: '24 — 18 ÷ (3/4) = 18 × 4/3 = 72/3 = 24.',
            explanation: 'To find the whole when you know a fraction of it, divide by that fraction (KCF).',
          },
          {
            id: 'fl4-5',
            label: 'Sam has £60. He spends 2/5 of it. How much does he have left?',
            type: 'number',
            answer: 36,
            answerDisplay: '£36 — 2/5 of £60 = £24 spent. £60 − £24 = £36.',
            explanation: 'Find what was spent first, then subtract from the total.',
          },
        ],
      },
    ],
  },
];
