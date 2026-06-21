/*
 * Angles in Shapes — Paper 2 (Moderate)
 * 20 minutes · 25 marks · short-answer.
 * Trickier type-naming, lines & points, triangles, quadrilaterals,
 * vertically opposite angles, and two-step reasoning.
 */
import type { Paper } from '../../types/content';

export const anglesPaper2: Paper = {
  id: 'angles-paper-2',
  topicId: 'angles',
  topicTitle: 'Angles in Shapes',
  title: 'Paper 2',
  subtitle: 'Moderate',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Use the rules together — a line is ' +
    '180°, a point 360°, a triangle 180°, a quadrilateral 360°.',

  questions: [
    {
      n: 1, marks: 3, prompt: 'Name each type of angle.',
      parts: [
        { id: 'an2-1a', label: 'a) 89° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Straight'], answer: 'Acute', answerDisplay: 'Acute  (just under 90°)' },
        { id: 'an2-1b', label: 'b) 91° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Straight'], answer: 'Obtuse', answerDisplay: 'Obtuse  (just over 90°)' },
        { id: 'an2-1c', label: 'c) 180° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Straight'], answer: 'Straight', answerDisplay: 'Straight' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Lines and points.',
      parts: [
        { id: 'an2-2a', label: 'a) Line: one angle is 65°. The other is ___°', marks: 1, type: 'number', answer: 115, answerDisplay: '115  (180 − 65)' },
        { id: 'an2-2b', label: 'b) Line: one angle is 138°. The other is ___°', marks: 1, type: 'number', answer: 42, answerDisplay: '42  (180 − 138)' },
        { id: 'an2-2c', label: 'c) Point: 150°, 90° and ___°', marks: 1, type: 'number', answer: 120, answerDisplay: '120  (360 − 240)' },
        { id: 'an2-2d', label: 'd) Point: 100°, 80°, 90° and ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (360 − 270)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Find the missing angle in each triangle.',
      parts: [
        { id: 'an2-3a', label: 'a) 55° and 65°. Third = ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (180 − 120)' },
        { id: 'an2-3b', label: 'b) 90° and 38°. Third = ___°', marks: 1, type: 'number', answer: 52, answerDisplay: '52  (180 − 128)' },
        { id: 'an2-3c', label: 'c) 120° and 25°. Third = ___°', marks: 1, type: 'number', answer: 35, answerDisplay: '35  (180 − 145)' },
        { id: 'an2-3d', label: 'd) Isosceles: two angles of 47°. Third = ___°', marks: 1, type: 'number', answer: 86, answerDisplay: '86  (180 − 94)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Quadrilaterals (they add to 360°).',
      parts: [
        { id: 'an2-4a', label: 'a) The angles of a quadrilateral add up to ___°', marks: 1, type: 'number', answer: 360, answerDisplay: '360' },
        { id: 'an2-4b', label: 'b) Three angles are 100°, 90° and 80°. The fourth is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (360 − 270)' },
        { id: 'an2-4c', label: 'c) Three angles are 120°, 60° and 100°. The fourth is ___°', marks: 1, type: 'number', answer: 80, answerDisplay: '80  (360 − 280)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Special shapes and crossing lines.',
      parts: [
        { id: 'an2-5a', label: 'a) Each angle of a square is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90' },
        { id: 'an2-5b', label: 'b) Each angle of an equilateral triangle is ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60' },
        { id: 'an2-5c', label: 'c) Two lines cross. One angle is 125°. The opposite angle is ___°', marks: 1, type: 'number', answer: 125, answerDisplay: '125  (vertically opposite angles are equal)' },
        { id: 'an2-5d', label: 'd) Isosceles triangle, top angle 50°. Each base angle is ___°', marks: 1, type: 'number', answer: 65, answerDisplay: '65  ((180 − 50) ÷ 2)' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Two-step problems.',
      parts: [
        { id: 'an2-6a', label: 'a) On a line, angle A is twice angle B. What is B, in °?', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (3B = 180)' },
        { id: 'an2-6b', label: 'b) A triangle has two equal angles and a third of 80°. Each equal angle is ___°', marks: 1, type: 'number', answer: 50, answerDisplay: '50  ((180 − 80) ÷ 2)' },
        { id: 'an2-6c', label: 'c) A right angle is split into 30° and ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (90 − 30)' },
      ],
    },
    {
      n: 7, marks: 4, prompt: 'Mixed.',
      parts: [
        { id: 'an2-7a', label: 'a) A triangle has angles 40° and 90°. The third is ___°', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (180 − 130)' },
        { id: 'an2-7b', label: 'b) An angle of 130° is what type?', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Obtuse', answerDisplay: 'Obtuse' },
        { id: 'an2-7c', label: 'c) Do 70° and 110° make a straight line? (yes/no)', marks: 1, type: 'text', accept: ['yes'], answerDisplay: 'Yes  (70 + 110 = 180)' },
        { id: 'an2-7d', label: 'd) Half of a straight-line angle is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (180 ÷ 2)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 3! 🌟' },
    { min: 18, label: 'Good — review the questions you missed, then push on.' },
    { min: 13, label: 'Getting there — revisit Lessons 3 & 4.' },
    { min: 0, label: 'Keep practising — go back over the lessons, then try again.' },
  ],
};
