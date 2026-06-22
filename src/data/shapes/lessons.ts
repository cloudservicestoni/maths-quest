import type { Lesson } from '../../types/content';

export const shapesLessons: Lesson[] = [
  /* ── Lesson 1 ── 2D Shape Properties ───────────────────────────────── */
  {
    id: 'shapes-lesson-1',
    topicId: 'shapes',
    topicTitle: 'Properties of Shapes',
    topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — 2D Shape Properties',
    summary: 'Name and describe triangles, quadrilaterals, and polygons by their sides and vertices.',
    sections: [
      {
        type: 'note',
        heading: 'Key vocabulary',
        body: '- **Vertex (vertices)** — a corner where two sides meet.\n- **Edge (side)** — a straight line forming part of the boundary.\n- **Regular polygon** — all sides equal AND all angles equal.\n- **Irregular polygon** — sides or angles differ.\n\nFor any 2D shape: **number of vertices = number of sides**.',
      },
      {
        type: 'note',
        heading: 'Triangles (3 sides, 3 vertices)',
        body: '| Type | Properties |\n|---|---|\n| **Equilateral** | All 3 sides equal · all angles 60° · 3 lines of symmetry |\n| **Isosceles** | Exactly 2 sides equal · 2 base angles equal · 1 line of symmetry |\n| **Scalene** | All 3 sides different · all angles different · 0 lines of symmetry |\n| **Right-angled** | One angle = 90° · can be isosceles or scalene |',
      },
      {
        type: 'note',
        heading: 'Quadrilaterals (4 sides, 4 vertices)',
        body: '| Shape | Key properties |\n|---|---|\n| **Square** | 4 equal sides · 4 right angles |\n| **Rectangle** | Opposite sides equal · 4 right angles |\n| **Parallelogram** | 2 pairs of parallel sides · opposite sides equal |\n| **Rhombus** | 4 equal sides · opposite angles equal · no right angles |\n| **Trapezium** | Exactly 1 pair of parallel sides |\n| **Kite** | 2 pairs of adjacent equal sides |',
      },
      {
        type: 'note',
        heading: 'Polygons with more sides',
        body: '| Name | Sides |\n|---|---|\n| Pentagon | 5 |\n| Hexagon | 6 |\n| Heptagon | 7 |\n| Octagon | 8 |\n| Nonagon | 9 |\n| Decagon | 10 |\n\nA **regular** polygon has all sides and angles equal. A regular n-gon has **n** lines of symmetry.',
      },
      {
        type: 'example',
        heading: 'Worked example — identifying a shape',
        intro: 'A shape has 4 equal sides, no right angles, and opposite sides are parallel. What is it?',
        steps: [
          '4 sides → quadrilateral.',
          '4 equal sides → square or rhombus.',
          'No right angles → not a square.',
          'Opposite sides parallel → it fits a rhombus.',
        ],
        result: 'The shape is a rhombus.',
      },
      {
        type: 'practice',
        heading: 'Practice — identify the shape',
        parts: [
          {
            id: 'p1a',
            label: 'A quadrilateral has exactly one pair of parallel sides. What is it?',
            type: 'text',
            accept: ['trapezium', 'Trapezium', 'trapezoid', 'Trapezoid'],
            answerDisplay: 'Trapezium — exactly one pair of parallel sides.',
          },
          {
            id: 'p1b',
            label: 'A triangle has all three sides equal. What type is it?',
            type: 'text',
            accept: ['equilateral', 'Equilateral', 'equilateral triangle', 'Equilateral triangle'],
            answerDisplay: 'Equilateral triangle — all sides equal, all angles 60°.',
          },
          {
            id: 'p1c',
            label: 'How many vertices does a regular octagon have?',
            type: 'number', answer: 8,
            answerDisplay: '8  (a polygon always has the same number of vertices as sides)',
          },
          {
            id: 'p1d',
            label: 'A quadrilateral has 2 pairs of adjacent equal sides but its sides are not all equal. What is it?',
            type: 'text',
            accept: ['kite', 'Kite'],
            answerDisplay: 'Kite — 2 pairs of adjacent (next-to-each-other) equal sides.',
          },
          {
            id: 'p1e',
            label: 'Which quadrilateral has opposite sides equal and parallel, plus all angles 90°, but is not a square?',
            type: 'text',
            accept: ['rectangle', 'Rectangle'],
            answerDisplay: 'Rectangle.',
          },
        ],
      },
    ],
  },

  /* ── Lesson 2 ── Symmetry ───────────────────────────────────────────── */
  {
    id: 'shapes-lesson-2',
    topicId: 'shapes',
    topicTitle: 'Properties of Shapes',
    topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Symmetry',
    summary: 'Count lines of symmetry and find the order of rotational symmetry for 2D shapes.',
    sections: [
      {
        type: 'note',
        heading: 'Lines of symmetry',
        body: 'A **line of symmetry** (mirror line) folds a shape into two identical halves.\n\n| Shape | Lines of symmetry |\n|---|---|\n| Equilateral triangle | 3 |\n| Isosceles triangle | 1 |\n| Scalene triangle | 0 |\n| Square | 4 |\n| Rectangle (non-square) | 2 |\n| Parallelogram (non-rectangle) | 0 |\n| Rhombus | 2 |\n| Kite | 1 |\n| Regular pentagon | 5 |\n| Regular hexagon | 6 |\n| Regular octagon | 8 |\n\nRule: a **regular n-gon** has exactly **n** lines of symmetry.',
      },
      {
        type: 'practice',
        heading: 'Practice — lines of symmetry',
        parts: [
          {
            id: 'p1a',
            label: 'How many lines of symmetry does a square have?',
            type: 'number', answer: 4,
            answerDisplay: '4  (2 through midpoints of opposite sides + 2 through opposite corners)',
          },
          {
            id: 'p1b',
            label: 'How many lines of symmetry does a regular pentagon have?',
            type: 'number', answer: 5,
            answerDisplay: '5  (a regular n-gon always has n lines of symmetry)',
          },
          {
            id: 'p1c',
            label: 'How many lines of symmetry does a parallelogram (that is not a rectangle) have?',
            type: 'number', answer: 0,
            answerDisplay: '0  (opposite halves are identical only after rotation, not reflection)',
          },
          {
            id: 'p1d',
            label: 'How many lines of symmetry does a rhombus have?',
            type: 'number', answer: 2,
            answerDisplay: '2  (both lines pass through opposite vertices)',
          },
        ],
      },
      {
        type: 'note',
        heading: 'Order of rotational symmetry',
        body: 'A shape has **rotational symmetry** if it looks identical after being rotated by less than 360°.\n\nThe **order** is how many times the shape looks the same in one full turn.\n\n| Shape | Order |\n|---|---|\n| Equilateral triangle | 3 |\n| Square | 4 |\n| Rectangle (non-square) | 2 |\n| Parallelogram | 2 |\n| Rhombus | 2 |\n| Regular pentagon | 5 |\n| Regular hexagon | 6 |\n| Kite / Scalene triangle | 1 (no rotational symmetry) |\n\nA regular n-gon has rotational symmetry of order **n**.',
      },
      {
        type: 'practice',
        heading: 'Practice — rotational symmetry',
        parts: [
          {
            id: 'p2a',
            label: 'What is the order of rotational symmetry of a regular hexagon?',
            type: 'number', answer: 6,
            answerDisplay: '6  (looks the same after rotating 60°, 120°, 180°, 240°, 300°, 360°)',
          },
          {
            id: 'p2b',
            label: 'What is the order of rotational symmetry of a rhombus?',
            type: 'number', answer: 2,
            answerDisplay: '2  (identical after 180° and 360°)',
          },
          {
            id: 'p2c',
            label: 'A shape has 5 lines of symmetry and order of rotational symmetry 5. Name it.',
            type: 'text',
            accept: ['regular pentagon', 'Regular pentagon', 'pentagon', 'Pentagon'],
            answerDisplay: 'Regular pentagon.',
          },
          {
            id: 'p2d',
            label: 'A kite has order of rotational symmetry 1. What does order 1 mean?',
            type: 'text',
            accept: ['no rotational symmetry', 'No rotational symmetry', 'only looks the same after 360', 'only identical after a full rotation'],
            answerDisplay: 'Order 1 means the shape only looks the same after a full 360° rotation — it has no rotational symmetry.',
          },
        ],
      },
    ],
  },

  /* ── Lesson 3 ── 3D Shape Properties ───────────────────────────────── */
  {
    id: 'shapes-lesson-3',
    topicId: 'shapes',
    topicTitle: 'Properties of Shapes',
    topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — 3D Shape Properties',
    summary: 'Count faces, edges, and vertices of prisms and pyramids. Use Euler\'s formula to find missing values.',
    sections: [
      {
        type: 'note',
        heading: 'Faces, edges, and vertices of 3D shapes',
        body: '- **Face** — a flat (or curved) surface.\n- **Edge** — where two faces meet.\n- **Vertex (vertices)** — a point where edges meet (a corner).\n\n| Shape | Faces | Edges | Vertices |\n|---|---|---|---|\n| Cube | 6 | 12 | 8 |\n| Cuboid | 6 | 12 | 8 |\n| Triangular prism | 5 | 9 | 6 |\n| Square-based pyramid | 5 | 8 | 5 |\n| Triangular pyramid (tetrahedron) | 4 | 6 | 4 |\n| Cylinder | 3 (2 flat + 1 curved) | 2 curved | 0 |\n| Cone | 2 (1 flat + 1 curved) | 1 curved | 1 |\n| Sphere | 1 curved | 0 | 0 |',
      },
      {
        type: 'example',
        heading: 'Worked example — triangular prism',
        intro: 'Count the faces, edges, and vertices of a triangular prism.',
        steps: [
          'Faces: 2 triangular ends + 3 rectangular sides = 5 faces.',
          'Edges: 3 on front triangle + 3 on back triangle + 3 along the length = 9 edges.',
          'Vertices: 3 on front + 3 on back = 6 vertices.',
        ],
        result: 'Triangular prism: F = 5, E = 9, V = 6.',
      },
      {
        type: 'note',
        heading: 'Euler\'s formula',
        body: 'For any **polyhedron** (a solid with flat faces):\n\n**F + V − E = 2**\n\nCube: 6 + 8 − 12 = **2** ✓\nTriangular prism: 5 + 6 − 9 = **2** ✓\nSquare-based pyramid: 5 + 5 − 8 = **2** ✓\n\nUse it to find a missing value:\n- Missing E → E = F + V − 2\n- Missing V → V = 2 + E − F\n- Missing F → F = 2 + E − V',
      },
      {
        type: 'practice',
        heading: 'Practice — 3D shapes and Euler\'s formula',
        parts: [
          {
            id: 'p1a',
            label: 'How many faces does a square-based pyramid have?',
            type: 'number', answer: 5,
            answerDisplay: '5  (1 square base + 4 triangular faces)',
          },
          {
            id: 'p1b',
            label: 'How many edges does a square-based pyramid have?',
            type: 'number', answer: 8,
            answerDisplay: '8  (4 base edges + 4 slant edges up to the apex)',
          },
          {
            id: 'p1c',
            label: 'How many vertices does a square-based pyramid have?',
            type: 'number', answer: 5,
            answerDisplay: '5  (4 base corners + 1 apex)',
          },
          {
            id: 'p1d',
            label: 'Apply Euler\'s formula to the square-based pyramid: F + V − E = ?',
            type: 'number', answer: 2,
            answerDisplay: '2  (5 + 5 − 8 = 2 ✓)',
          },
          {
            id: 'p1e',
            label: 'A polyhedron has 6 faces and 8 vertices. How many edges does it have?',
            type: 'number', answer: 12,
            answerDisplay: '12  (E = F + V − 2 = 6 + 8 − 2 = 12)',
            hint: 'Rearrange Euler\'s formula: E = F + V − 2.',
          },
        ],
      },
    ],
  },

  /* ── Lesson 4 ── Angles in Polygons ─────────────────────────────────── */
  {
    id: 'shapes-lesson-4',
    topicId: 'shapes',
    topicTitle: 'Properties of Shapes',
    topicDescription: 'Vertices, edges, faces, symmetry, and angles of 2D and 3D shapes.',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Angles in Polygons',
    summary: 'Calculate interior and exterior angles of regular and irregular polygons.',
    sections: [
      {
        type: 'note',
        heading: 'Interior angle sum',
        body: 'The **sum of interior angles** of a polygon with n sides:\n\n**(n − 2) × 180°**\n\n| Polygon | Sides | Angle sum |\n|---|---|---|\n| Triangle | 3 | 180° |\n| Quadrilateral | 4 | 360° |\n| Pentagon | 5 | 540° |\n| Hexagon | 6 | 720° |\n| Octagon | 8 | 1080° |\n| Decagon | 10 | 1440° |\n\nFor a **regular polygon**, each interior angle = sum ÷ n.',
      },
      {
        type: 'example',
        heading: 'Worked example — missing angle in a pentagon',
        intro: 'A pentagon has four angles: 100°, 115°, 95°, 110°. Find the fifth angle.',
        steps: [
          'Angle sum = (5 − 2) × 180 = 540°.',
          'Known angles total = 100 + 115 + 95 + 110 = 420°.',
          'Fifth angle = 540 − 420 = 120°.',
        ],
        result: 'The fifth angle is 120°.',
      },
      {
        type: 'practice',
        heading: 'Practice — interior angles',
        parts: [
          {
            id: 'p1a',
            label: 'What is the sum of interior angles of a hexagon?',
            type: 'number', answer: 720,
            answerDisplay: '720°  ((6 − 2) × 180 = 4 × 180 = 720)',
          },
          {
            id: 'p1b',
            label: 'What is each interior angle of a regular hexagon?',
            type: 'number', answer: 120,
            answerDisplay: '120°  (720 ÷ 6 = 120)',
          },
          {
            id: 'p1c',
            label: 'A quadrilateral has angles 85°, 110°, and 95°. What is the fourth angle?',
            type: 'number', answer: 70,
            answerDisplay: '70°  (360 − 85 − 110 − 95 = 70)',
          },
          {
            id: 'p1d',
            label: 'Each interior angle of a regular polygon is 108°. How many sides does it have?',
            type: 'number', answer: 5,
            answerDisplay: '5 sides  (exterior = 180 − 108 = 72°; 360 ÷ 72 = 5)',
            hint: 'Find the exterior angle first (180 − interior), then divide 360 by it.',
          },
        ],
      },
      {
        type: 'note',
        heading: 'Exterior angles',
        body: 'An **exterior angle** is formed by extending one side of a polygon outward.\n\nFor any polygon:\n- Interior + exterior = **180°** (they lie on a straight line).\n- Sum of ALL exterior angles = **360°** (always, for any polygon).\n\nFor a regular n-gon: each exterior angle = **360° ÷ n**.',
      },
      {
        type: 'practice',
        heading: 'Practice — exterior angles',
        parts: [
          {
            id: 'p2a',
            label: 'What is the exterior angle of a regular octagon?',
            type: 'number', answer: 45,
            answerDisplay: '45°  (360 ÷ 8 = 45)',
          },
          {
            id: 'p2b',
            label: 'A regular polygon has an exterior angle of 36°. How many sides does it have?',
            type: 'number', answer: 10,
            answerDisplay: '10 sides  (360 ÷ 36 = 10) — a decagon.',
          },
          {
            id: 'p2c',
            label: 'A regular polygon has an exterior angle of 60°. What is each interior angle?',
            type: 'number', answer: 120,
            answerDisplay: '120°  (180 − 60 = 120)',
          },
        ],
      },
    ],
  },
];
