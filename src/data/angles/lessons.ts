/*
 * Angles in Shapes — Self-study lessons (basics → challenging)
 * Topic for UK 11+ grammar school maths.
 *
 * Key facts:
 *   Acute < 90°, right = 90°, obtuse 90°–180°, straight = 180°, reflex > 180°.
 *   Angles on a straight line add to 180°.  Angles around a point add to 360°.
 *   Angles in a triangle add to 180°.  Angles in a quadrilateral add to 360°.
 *   Equilateral triangle = 60° each.  Square/rectangle = 90° each.
 *   When two lines cross, vertically opposite angles are equal.
 */
import type { Lesson } from '../../types/content';

export const anglesLessons: Lesson[] = [
  {
    id: 'angles-lesson-1',
    topicId: 'angles',
    topicTitle: 'Angles in Shapes',
    topicDescription: '11+ practice — naming angles and finding missing ones in lines, triangles and shapes.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — Naming Angles',
    summary: 'Acute, right, obtuse, straight and reflex.',
    sections: [
      {
        type: 'note',
        heading: 'What is an angle?',
        body:
          'An angle is the amount of <b>turn</b> between two lines. We measure it in ' +
          '<b>degrees (°)</b>. A full turn is 360°.',
      },
      {
        type: 'note',
        heading: 'The five types',
        body:
          '<ul>' +
          '<li><b>Acute</b> — less than 90° (small and sharp)</li>' +
          '<li><b>Right</b> — exactly 90° (a square corner)</li>' +
          '<li><b>Obtuse</b> — between 90° and 180° (open and wide)</li>' +
          '<li><b>Straight</b> — exactly 180° (a flat line)</li>' +
          '<li><b>Reflex</b> — more than 180° (bigger than a straight line)</li>' +
          '</ul>',
        diagram: { type: 'angle', data: { degrees: 45, label: 'acute' } },
      },
      {
        type: 'note',
        body: 'A right angle (90°) — the square corner you see everywhere:',
        diagram: { type: 'angle', data: { degrees: 90, label: 'right' } },
      },
      {
        type: 'note',
        body: 'An obtuse angle — wider than a right angle but less than a straight line:',
        diagram: { type: 'angle', data: { degrees: 130, label: 'obtuse' } },
      },
      {
        type: 'practice',
        heading: 'Name the angle type',
        parts: [
          { id: 'an1p1a', label: 'An angle of 50° is…', type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Acute', answerDisplay: 'Acute', explanation: 'Less than 90° → acute.' },
          { id: 'an1p1b', label: 'An angle of 90° is…', type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Right', answerDisplay: 'Right', explanation: 'Exactly 90° → right angle.' },
          { id: 'an1p1c', label: 'An angle of 120° is…', type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Obtuse', answerDisplay: 'Obtuse', explanation: 'Between 90° and 180° → obtuse.' },
          { id: 'an1p1d', label: 'An angle of 250° is…', type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Reflex', answerDisplay: 'Reflex', explanation: 'More than 180° → reflex.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Key numbers',
        parts: [
          { id: 'an1p2a', label: 'A right angle is ___ degrees.', type: 'number', answer: 90, answerDisplay: '90', explanation: 'A right angle = 90°.' },
          { id: 'an1p2b', label: 'A straight line is ___ degrees.', type: 'number', answer: 180, answerDisplay: '180', explanation: 'A straight line = 180°.' },
        ],
      },
      {
        type: 'practice',
        prompt: 'What type of angle is shown below?',
        diagram: { type: 'angle', data: { degrees: 40, label: '40°' } },
        parts: [
          { id: 'an1p3', label: 'This angle is…', type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Acute', answerDisplay: 'Acute', explanation: '40° is less than 90°, so it is acute.' },
        ],
      },
    ],
  },

  {
    id: 'angles-lesson-2',
    topicId: 'angles',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Lines & Points',
    summary: 'Angles on a straight line (180°) and around a point (360°).',
    sections: [
      {
        type: 'note',
        heading: 'Two big rules',
        body:
          '<ul>' +
          '<li>Angles on a <b>straight line</b> add up to <b>180°</b>.</li>' +
          '<li>Angles <b>around a point</b> add up to <b>360°</b> (a full turn).</li>' +
          '</ul>' +
          'So to find a missing angle, subtract the ones you know from 180° or 360°.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          'On a line, one angle is 120°. The other = 180 − 120 = <b>60°</b>.',
          'Around a point: 100° + 150° + ? = 360, so ? = 360 − 250 = <b>110°</b>.',
          'Two right angles (90° + 90°) make a <b>straight line</b> (180°).',
        ],
      },
      {
        type: 'practice',
        heading: 'On a straight line (add to 180°)',
        parts: [
          { id: 'an2p1a', label: 'One angle is 120°. The other is ___°', type: 'number', answer: 60, answerDisplay: '60  (180 − 120)' },
          { id: 'an2p1b', label: 'One angle is 45°. The other is ___°', type: 'number', answer: 135, answerDisplay: '135  (180 − 45)' },
          { id: 'an2p1c', label: 'One angle is 90°. The other is ___°', type: 'number', answer: 90, answerDisplay: '90  (180 − 90)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Around a point (add to 360°)',
        parts: [
          { id: 'an2p2a', label: 'Three angles are 100°, 150° and ___°', type: 'number', answer: 110, answerDisplay: '110  (360 − 250)' },
          { id: 'an2p2b', label: 'Four equal angles meet at a point. Each is ___°', type: 'number', answer: 90, answerDisplay: '90  (360 ÷ 4)' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'an2p3', label: 'Angles around a point add up to ___°', type: 'number', answer: 360, answerDisplay: '360' },
        ],
      },
    ],
  },

  {
    id: 'angles-lesson-3',
    topicId: 'angles',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Angles in a Triangle',
    summary: 'The three angles always add up to 180°.',
    sections: [
      {
        type: 'note',
        heading: 'The triangle rule',
        body:
          'The three angles inside <b>any</b> triangle always add up to <b>180°</b>. ' +
          'So if you know two of them, subtract from 180° to find the third.',
        diagram: { type: 'triangleAngles', data: { a: '?', b: '70°', c: '60°' } },
      },
      {
        type: 'note',
        heading: 'Special triangles',
        body:
          '<ul>' +
          '<li><b>Equilateral</b> — all sides equal, all three angles are <b>60°</b>.</li>' +
          '<li><b>Isosceles</b> — two sides equal, and the <b>two base angles are equal</b>.</li>' +
          '<li><b>Right-angled</b> — one angle is 90°.</li>' +
          '</ul>',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '70° + 60° + ? = 180, so ? = 180 − 130 = <b>50°</b>.',
          'Right-angled: 90° + 30° + ? = 180, so ? = <b>60°</b>.',
          'Isosceles with two 65° angles: third = 180 − 130 = <b>50°</b>.',
        ],
      },
      {
        type: 'practice',
        heading: 'Find the third angle',
        parts: [
          { id: 'an3p1a', label: 'Two angles are 80° and 60°. The third is ___°', type: 'number', answer: 40, answerDisplay: '40  (180 − 140)' },
          { id: 'an3p1b', label: 'Two angles are 90° and 45°. The third is ___°', type: 'number', answer: 45, answerDisplay: '45  (180 − 135)' },
          { id: 'an3p1c', label: 'Two angles are 100° and 30°. The third is ___°', type: 'number', answer: 50, answerDisplay: '50  (180 − 130)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Special triangles',
        parts: [
          { id: 'an3p2a', label: 'Each angle of an equilateral triangle is ___°', type: 'number', answer: 60, answerDisplay: '60  (180 ÷ 3)' },
          { id: 'an3p2b', label: 'An isosceles triangle has two angles of 70°. The third is ___°', type: 'number', answer: 40, answerDisplay: '40  (180 − 140)' },
        ],
      },
      {
        type: 'practice',
        prompt: 'Find the missing angle in this triangle.',
        diagram: { type: 'triangleAngles', data: { a: '?', b: '50°', c: '60°' } },
        parts: [
          { id: 'an3p3', label: 'The missing angle is ___°', type: 'number', answer: 70, answerDisplay: '70  (180 − 110)' },
        ],
      },
    ],
  },

  {
    id: 'angles-lesson-4',
    topicId: 'angles',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Angles in Shapes',
    summary: 'Quadrilaterals, crossing lines, and multi-step problems.',
    sections: [
      {
        type: 'note',
        heading: 'Four-sided shapes',
        body:
          'The angles inside a <b>quadrilateral</b> (any 4-sided shape) add up to <b>360°</b>.<br>' +
          'A <b>square</b> and a <b>rectangle</b> have four <b>right angles</b> (90° each).',
      },
      {
        type: 'note',
        heading: 'When two lines cross',
        body:
          'Where two straight lines cross, the angles <b>opposite</b> each other are equal ' +
          '(called <b>vertically opposite</b> angles). The angles next to each other still add to 180°.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          'Quadrilateral 90° + 90° + 100° + ? = 360, so ? = <b>80°</b>.',
          'Two lines cross; one angle is 110°, so the opposite angle is also <b>110°</b>.',
          'Isosceles triangle with a 40° top: the two equal base angles are (180 − 40) ÷ 2 = <b>70°</b> each.',
        ],
      },
      {
        type: 'practice',
        heading: 'Quadrilaterals (add to 360°)',
        parts: [
          { id: 'an4p1a', label: 'Three angles are 100°, 80° and 90°. The fourth is ___°', type: 'number', answer: 90, answerDisplay: '90  (360 − 270)' },
          { id: 'an4p1b', label: 'The angles of a quadrilateral add up to ___°', type: 'number', answer: 360, answerDisplay: '360' },
        ],
      },
      {
        type: 'practice',
        heading: 'Shapes & crossing lines',
        parts: [
          { id: 'an4p2a', label: 'Each angle of a square is ___°', type: 'number', answer: 90, answerDisplay: '90' },
          { id: 'an4p2b', label: 'Two lines cross. One angle is 70°. The angle opposite it is ___°', type: 'number', answer: 70, answerDisplay: '70  (vertically opposite angles are equal)' },
        ],
      },
      {
        type: 'practice',
        heading: 'Challenge',
        parts: [
          { id: 'an4p3a', label: 'On a straight line, angle A is twice angle B. What is angle B, in °?', type: 'number', answer: 60, answerDisplay: '60  (B + 2B = 180, so 3B = 180)' },
          { id: 'an4p3b', label: 'An isosceles triangle has a top angle of 40°. Each base angle is ___°', type: 'number', answer: 70, answerDisplay: '70  ((180 − 40) ÷ 2)' },
        ],
      },
    ],
  },
];
