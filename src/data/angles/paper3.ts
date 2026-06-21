/*
 * Angles in Shapes — Paper 3 (Challenging)
 * 20 minutes · 25 marks · short-answer.
 * Reflex angles, harder triangles, quadrilaterals & a pentagon, vertically
 * opposite combinations, ratio/algebra-lite, and multi-step reasoning.
 */
import type { Paper } from '../../types/content';

export const anglesPaper3: Paper = {
  id: 'angles-paper-3',
  topicId: 'angles',
  topicTitle: 'Angles in Shapes',
  title: 'Paper 3',
  subtitle: 'Challenging',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. These need two steps or careful ' +
    'reasoning. Combine the rules and always check your total.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Reflex angles and types.',
      parts: [
        { id: 'an3-1a', label: 'a) An angle and its reflex add to 360°. If the angle is 110°, the reflex is ___°', marks: 1, type: 'number', answer: 250, answerDisplay: '250  (360 − 110)' },
        { id: 'an3-1b', label: 'b) If an angle is 75°, its reflex is ___°', marks: 1, type: 'number', answer: 285, answerDisplay: '285  (360 − 75)' },
        { id: 'an3-1c', label: 'c) 179° is what type?', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Obtuse', answerDisplay: 'Obtuse  (still under 180°)' },
        { id: 'an3-1d', label: 'd) 181° is what type?', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Reflex', answerDisplay: 'Reflex  (just over 180°)' },
      ],
    },
    {
      n: 2, marks: 4, prompt: 'Triangles.',
      parts: [
        { id: 'an3-2a', label: 'a) Two angles are 33° and 57°. The third is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (180 − 90)' },
        { id: 'an3-2b', label: 'b) Isosceles with base angles of 72° each. The top angle is ___°', marks: 1, type: 'number', answer: 36, answerDisplay: '36  (180 − 144)' },
        { id: 'an3-2c', label: 'c) Right-angled triangle with one angle 28°. The other angle is ___°', marks: 1, type: 'number', answer: 62, answerDisplay: '62  (180 − 90 − 28)' },
        { id: 'an3-2d', label: 'd) A triangle has angles 60° and 60°. The third is ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (equilateral)' },
      ],
    },
    {
      n: 3, marks: 4, prompt: 'Quadrilaterals and a pentagon.',
      parts: [
        { id: 'an3-3a', label: 'a) Quadrilateral 110°, 85°, 95° and ___°', marks: 1, type: 'number', answer: 70, answerDisplay: '70  (360 − 290)' },
        { id: 'an3-3b', label: 'b) A pentagon’s angles add to 540°. Four are 100° each. The fifth is ___°', marks: 1, type: 'number', answer: 140, answerDisplay: '140  (540 − 400)' },
        { id: 'an3-3c', label: 'c) Each angle of a rectangle is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90' },
        { id: 'an3-3d', label: 'd) Quadrilateral 90°, 90°, 135° and ___°', marks: 1, type: 'number', answer: 45, answerDisplay: '45  (360 − 315)' },
      ],
    },
    {
      n: 4, marks: 4, prompt: 'Crossing lines and angles on a line.',
      parts: [
        { id: 'an3-4a', label: 'a) Two lines cross. One angle is 48°. The angle next to it (on the line) is ___°', marks: 1, type: 'number', answer: 132, answerDisplay: '132  (180 − 48)' },
        { id: 'an3-4b', label: 'b) …and the angle vertically opposite the 48° is ___°', marks: 1, type: 'number', answer: 48, answerDisplay: '48  (vertically opposite)' },
        { id: 'an3-4c', label: 'c) Three angles on a straight line are 50°, 60° and ___°', marks: 1, type: 'number', answer: 70, answerDisplay: '70  (180 − 110)' },
        { id: 'an3-4d', label: 'd) Around a point: 90°, 90°, 100° and ___°', marks: 1, type: 'number', answer: 80, answerDisplay: '80  (360 − 280)' },
      ],
    },
    {
      n: 5, marks: 4, prompt: 'Ratios and equal angles.',
      parts: [
        { id: 'an3-5a', label: 'a) Two angles on a line are in the ratio 1:2. The smaller is ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (parts 60 and 120)' },
        { id: 'an3-5b', label: 'b) A triangle’s angles are in the ratio 1:1:1. Each is ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (180 ÷ 3)' },
        { id: 'an3-5c', label: 'c) On a line, angle A = 3 × angle B. What is B, in °?', marks: 1, type: 'number', answer: 45, answerDisplay: '45  (4B = 180)' },
        { id: 'an3-5d', label: 'd) An isosceles triangle has a top angle of 100°. Each base angle is ___°', marks: 1, type: 'number', answer: 40, answerDisplay: '40  ((180 − 100) ÷ 2)' },
      ],
    },
    {
      n: 6, marks: 5, prompt: 'Multi-step reasoning.',
      parts: [
        { id: 'an3-6a', label: 'a) A triangle has a right angle and an angle of 35°. The third angle is ___°', marks: 1, type: 'number', answer: 55, answerDisplay: '55  (180 − 90 − 35)' },
        { id: 'an3-6b', label: 'b) A quadrilateral has three equal angles and a fourth of 120°. Each equal angle is ___°', marks: 1, type: 'number', answer: 80, answerDisplay: '80  ((360 − 120) ÷ 3)' },
        { id: 'an3-6c', label: 'c) Around a point: two angles are 100° and the other two are equal. Each equal one is ___°', marks: 1, type: 'number', answer: 80, answerDisplay: '80  ((360 − 200) ÷ 2)' },
        { id: 'an3-6d', label: 'd) A straight line is split into three equal angles. Each is ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (180 ÷ 3)' },
        { id: 'an3-6e', label: 'e) A triangle’s angles are x, x and 2x. What is x, in °?', marks: 1, type: 'number', answer: 45, answerDisplay: '45  (4x = 180)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Outstanding — you have mastered angles! 🌟' },
    { min: 18, label: 'Excellent — these were the hard ones. Review any slips.' },
    { min: 13, label: 'Good effort — revisit Lessons 3 & 4, then retry.' },
    { min: 0, label: 'These are tough — go back over the lessons, then try again.' },
  ],
};
