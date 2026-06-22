import type { Lesson } from '../../types/content';

export const areasLessons: Lesson[] = [
  /* ── Lesson 1 ── Perimeter ─────────────────────────────────────────── */
  {
    id: 'areas-lesson-1',
    topicId: 'areas',
    topicTitle: 'Area & Perimeter',
    topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — Perimeter',
    summary: 'Add up all the sides to find the total distance around a shape.',
    sections: [
      {
        type: 'note',
        heading: 'What is perimeter?',
        body: 'The **perimeter** is the total distance around the outside of a shape.\n\nAdd up every side length.\n\n- **Rectangle:** P = 2 × (length + width)\n- **Square:** P = 4 × side\n\nAlways include the unit in your answer (cm, m, mm).',
      },
      {
        type: 'example',
        heading: 'Worked example',
        intro: 'Find the perimeter of a rectangle 8 cm long and 5 cm wide.',
        diagram: { type: 'rect', data: { width: 8, height: 5, unit: 'cm' } },
        steps: [
          'P = 2 × (length + width)',
          'P = 2 × (8 + 5)',
          'P = 2 × 13',
          'P = 26 cm',
        ],
        result: 'The perimeter is 26 cm.',
      },
      {
        type: 'practice',
        heading: 'Practice — basic perimeters',
        parts: [
          {
            id: 'p1a',
            label: 'A rectangle is 12 cm long and 7 cm wide. What is its perimeter?',
            type: 'number', answer: 38,
            answerDisplay: '38 cm  (2 × (12 + 7) = 2 × 19 = 38)',
          },
          {
            id: 'p1b',
            label: 'A square has side length 9 cm. What is its perimeter?',
            type: 'number', answer: 36,
            answerDisplay: '36 cm  (4 × 9 = 36)',
          },
          {
            id: 'p1c',
            label: 'A rectangle is 15 m long and 4 m wide. What is its perimeter?',
            type: 'number', answer: 38,
            answerDisplay: '38 m  (2 × (15 + 4) = 2 × 19 = 38)',
          },
        ],
      },
      {
        type: 'note',
        heading: 'Finding a missing side from perimeter',
        body: 'If you know the perimeter and one side, you can find the other.\n\n**Method:** Half the perimeter gives you length + width.\n\n**Example:** Perimeter = 30 cm, width = 5 cm.\n\n30 ÷ 2 = 15 → length + width = 15 → length = 15 − 5 = **10 cm**',
      },
      {
        type: 'practice',
        heading: 'Practice — missing sides',
        parts: [
          {
            id: 'p2a',
            label: 'A rectangle has perimeter 40 cm and width 8 cm. What is its length?',
            type: 'number', answer: 12,
            answerDisplay: '12 cm  (40 ÷ 2 = 20; 20 − 8 = 12)',
            hint: 'Half the perimeter = length + width.',
          },
          {
            id: 'p2b',
            label: 'A square has perimeter 52 cm. What is its side length?',
            type: 'number', answer: 13,
            answerDisplay: '13 cm  (52 ÷ 4 = 13)',
          },
          {
            id: 'p2c',
            label: 'A rectangle has perimeter 46 cm and length 14 cm. What is its width?',
            type: 'number', answer: 9,
            answerDisplay: '9 cm  (46 ÷ 2 = 23; 23 − 14 = 9)',
          },
        ],
      },
    ],
  },

  /* ── Lesson 2 ── Area ──────────────────────────────────────────────── */
  {
    id: 'areas-lesson-2',
    topicId: 'areas',
    topicTitle: 'Area & Perimeter',
    topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Area',
    summary: 'Multiply length by width to find the space inside a shape.',
    sections: [
      {
        type: 'note',
        heading: 'What is area?',
        body: 'The **area** is the amount of space inside a 2D shape. It is measured in **square units**: cm², m², mm².\n\n- **Rectangle:** A = length × width\n- **Square:** A = side × side = side²\n\nImagine counting how many 1 cm squares fit inside — that is the area.',
      },
      {
        type: 'example',
        heading: 'Worked example',
        intro: 'Find the area of a rectangle 9 cm long and 4 cm wide.',
        diagram: { type: 'rect', data: { width: 9, height: 4, unit: 'cm' } },
        steps: [
          'A = length × width',
          'A = 9 × 4',
          'A = 36 cm²',
        ],
        result: 'The area is 36 cm².',
      },
      {
        type: 'practice',
        heading: 'Practice — find the area',
        parts: [
          {
            id: 'p1a',
            label: 'A rectangle is 11 cm long and 6 cm wide. What is its area?',
            type: 'number', answer: 66,
            answerDisplay: '66 cm²  (11 × 6 = 66)',
          },
          {
            id: 'p1b',
            label: 'A square has side length 8 cm. What is its area?',
            type: 'number', answer: 64,
            answerDisplay: '64 cm²  (8 × 8 = 64)',
          },
          {
            id: 'p1c',
            label: 'A rectangle is 13 cm long and 5 cm wide. What is its area?',
            type: 'number', answer: 65,
            answerDisplay: '65 cm²  (13 × 5 = 65)',
          },
        ],
      },
      {
        type: 'note',
        heading: 'Finding a missing side from area',
        body: 'If you know the area and one side, divide to find the other.\n\n**Method:** missing side = area ÷ known side\n\n**Example:** Area = 48 cm², width = 6 cm.\n\nlength = 48 ÷ 6 = **8 cm**',
      },
      {
        type: 'practice',
        heading: 'Practice — missing sides from area',
        parts: [
          {
            id: 'p2a',
            label: 'A rectangle has area 72 cm² and width 8 cm. What is its length?',
            type: 'number', answer: 9,
            answerDisplay: '9 cm  (72 ÷ 8 = 9)',
          },
          {
            id: 'p2b',
            label: 'A rectangle has area 91 cm² and length 13 cm. What is its width?',
            type: 'number', answer: 7,
            answerDisplay: '7 cm  (91 ÷ 13 = 7)',
          },
          {
            id: 'p2c',
            label: 'A square has area 100 cm². What is its side length?',
            type: 'number', answer: 10,
            answerDisplay: '10 cm  (√100 = 10, since 10 × 10 = 100)',
            hint: 'What number multiplied by itself gives 100?',
          },
        ],
      },
    ],
  },

  /* ── Lesson 3 ── Compound Shapes ───────────────────────────────────── */
  {
    id: 'areas-lesson-3',
    topicId: 'areas',
    topicTitle: 'Area & Perimeter',
    topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Compound Shapes',
    summary: 'Split L-shapes into rectangles to find area and perimeter.',
    sections: [
      {
        type: 'note',
        heading: 'What is a compound shape?',
        body: 'A **compound shape** is made from two or more rectangles joined together. L-shapes are very common in 11+ exams.\n\n**To find the area — two methods:**\n\n**Method 1 (split):** Divide the L into two rectangles. Find each area. Add them.\n\n**Method 2 (subtract):** Find the area of the full bounding rectangle. Subtract the missing piece.\n\n**To find the perimeter:** Trace all outer edges. Calculate any missing sides first (the two missing sides always sum to the overall dimension).',
      },
      {
        type: 'example',
        heading: 'Worked example — L-shape',
        intro: 'An L-shape has overall width 10 cm and height 8 cm. A 4 cm × 3 cm rectangle is cut from the top-right corner.',
        steps: [
          'Full rectangle = 10 × 8 = 80 cm²',
          'Removed piece = 4 × 3 = 12 cm²',
          'L-shape area = 80 − 12 = 68 cm²',
          'Missing right side = 8 − 3 = 5 cm',
          'Missing inner top = 10 − 4 = 6 cm',
          'Perimeter = 10 + 5 + 4 + 3 + 6 + 8 = 36 cm',
        ],
        result: 'Area = 68 cm²  |  Perimeter = 36 cm',
      },
      {
        type: 'practice',
        heading: 'Practice — compound area',
        parts: [
          {
            id: 'p1a',
            label: 'An L-shape: overall width 12 cm, height 9 cm. Top-right notch is 5 cm wide × 4 cm tall. What is the area?',
            type: 'number', answer: 88,
            answerDisplay: '88 cm²  (12 × 9 − 5 × 4 = 108 − 20 = 88)',
            hint: 'Full rectangle minus the missing piece.',
          },
          {
            id: 'p1b',
            label: 'A shape is made from two rectangles: one is 8 cm × 3 cm and the other is 5 cm × 4 cm. What is the total area?',
            type: 'number', answer: 44,
            answerDisplay: '44 cm²  (8 × 3 + 5 × 4 = 24 + 20 = 44)',
          },
        ],
      },
      {
        type: 'practice',
        heading: 'Practice — compound perimeter',
        parts: [
          {
            id: 'p2a',
            label: 'L-shape: overall 12 cm × 9 cm, top-right notch 5 cm wide × 4 cm tall. What is the perimeter?',
            type: 'number', answer: 42,
            answerDisplay: '42 cm  (12 + 5 + 5 + 4 + 7 + 9 = 42)  right side = 9 − 4 = 5; inner top = 12 − 5 = 7',
            hint: 'Two missing sides: right = 9 − 4, inner top = 12 − 5.',
          },
          {
            id: 'p2b',
            label: 'L-shape: overall 10 cm × 8 cm, top-right notch 4 cm wide × 3 cm tall. What is its perimeter?',
            type: 'number', answer: 36,
            answerDisplay: '36 cm  (10 + 5 + 4 + 3 + 6 + 8 = 36)',
          },
        ],
      },
    ],
  },

  /* ── Lesson 4 ── Problem Solving ────────────────────────────────────── */
  {
    id: 'areas-lesson-4',
    topicId: 'areas',
    topicTitle: 'Area & Perimeter',
    topicDescription: 'Calculate areas and perimeters of rectangles, squares, and compound shapes.',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Problem Solving',
    summary: 'Apply area and perimeter to tiling, fencing, and scaling problems.',
    sections: [
      {
        type: 'note',
        heading: 'Types of problem',
        body: '11+ exams test area and perimeter in real-world contexts:\n\n- **Tiling:** tiles needed = total area ÷ tile area. Always convert to the same unit first!\n- **Fencing:** fencing needed = perimeter of the space.\n- **Scaling:** if all sides double → area × 4. If all sides triple → area × 9.\n- **Same perimeter, different area:** two shapes can have equal perimeters but very different areas.',
      },
      {
        type: 'example',
        heading: 'Worked example — tiling',
        intro: 'A rectangular floor is 6 m long and 4 m wide. Square tiles have side 50 cm. How many tiles are needed?',
        steps: [
          'Convert: 50 cm = 0.5 m',
          'Tile area = 0.5 × 0.5 = 0.25 m²',
          'Floor area = 6 × 4 = 24 m²',
          'Tiles needed = 24 ÷ 0.25 = 96',
        ],
        result: '96 tiles are needed.',
      },
      {
        type: 'practice',
        heading: 'Practice — real-world problems',
        parts: [
          {
            id: 'p1a',
            label: 'A rectangular garden is 8 m × 5 m. A gardener fences the outside. How many metres of fencing are needed?',
            type: 'number', answer: 26,
            answerDisplay: '26 m  (P = 2 × (8 + 5) = 26)',
          },
          {
            id: 'p1b',
            label: 'Square paving slabs have side 40 cm. How many slabs cover a path 400 cm long and 80 cm wide?',
            type: 'number', answer: 20,
            answerDisplay: '20 slabs  (400 × 80 = 32 000 cm²; 40 × 40 = 1 600 cm²; 32 000 ÷ 1 600 = 20)',
            hint: 'All measurements are already in cm — no conversion needed.',
          },
          {
            id: 'p1c',
            label: 'A rectangle is 5 cm × 3 cm. All sides are doubled. What is the new area?',
            type: 'number', answer: 60,
            answerDisplay: '60 cm²  (new size: 10 × 6 = 60; original 15 cm² × 4 = 60)',
          },
        ],
      },
      {
        type: 'note',
        heading: 'Comparing shapes',
        body: 'Two shapes can have the **same perimeter** but different areas.\n\n**Example:**\n- Rectangle P: 12 cm × 5 cm → P = 34 cm, A = 60 cm²\n- Rectangle Q: 8 cm × 9 cm → P = 34 cm, A = 72 cm²\n\nSame perimeter — Q has greater area. A shape closer to a square always has more area for the same perimeter.',
      },
      {
        type: 'practice',
        heading: 'Practice — comparing shapes',
        parts: [
          {
            id: 'p2a',
            label: 'Rectangle P is 12 cm × 5 cm. Rectangle Q is 8 cm × 9 cm. Which has the greater area? (Write P or Q)',
            type: 'text',
            accept: ['q', 'Q', 'rectangle q', 'Rectangle Q'],
            answerDisplay: 'Rectangle Q  (P: 12 × 5 = 60 cm²; Q: 8 × 9 = 72 cm²)',
          },
          {
            id: 'p2b',
            label: 'By how many cm² is Rectangle Q\'s area greater than Rectangle P\'s?',
            type: 'number', answer: 12,
            answerDisplay: '12 cm²  (72 − 60 = 12)',
          },
        ],
      },
    ],
  },
];
