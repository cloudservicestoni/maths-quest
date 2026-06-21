/*
 * Angles in Shapes — Paper 1 (Basics)
 * 20 minutes · 25 marks · short-answer.
 * Naming angle types, key facts, angles on a line / around a point, triangles.
 */
import type { Paper } from '../../types/content';

export const anglesPaper1: Paper = {
  id: 'angles-paper-1',
  topicId: 'angles',
  topicTitle: 'Angles in Shapes',
  title: 'Paper 1',
  subtitle: 'Basics',
  timeLimitMinutes: 20,
  totalMarks: 25,
  intro:
    'Time allowed: 20 minutes. Total marks: 25. Remember: a line is 180°, a point ' +
    'is 360°, and a triangle is 180°.',

  questions: [
    {
      n: 1, marks: 4, prompt: 'Name each type of angle.',
      parts: [
        { id: 'an1-1a', label: 'a) 30° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Acute', answerDisplay: 'Acute' },
        { id: 'an1-1b', label: 'b) 90° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Right', answerDisplay: 'Right' },
        { id: 'an1-1c', label: 'c) 145° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Obtuse', answerDisplay: 'Obtuse' },
        { id: 'an1-1d', label: 'd) 300° is…', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Reflex', answerDisplay: 'Reflex' },
      ],
    },
    {
      n: 2, marks: 2, prompt: 'Key facts.',
      parts: [
        { id: 'an1-2a', label: 'a) A right angle is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90' },
        { id: 'an1-2b', label: 'b) A straight line is ___°', marks: 1, type: 'number', answer: 180, answerDisplay: '180' },
      ],
    },
    {
      n: 3, marks: 3, prompt: 'Angles on a straight line (they add to 180°).',
      parts: [
        { id: 'an1-3a', label: 'a) One angle is 130°. The other is ___°', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (180 − 130)' },
        { id: 'an1-3b', label: 'b) One angle is 40°. The other is ___°', marks: 1, type: 'number', answer: 140, answerDisplay: '140  (180 − 40)' },
        { id: 'an1-3c', label: 'c) One angle is 90°. The other is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (180 − 90)' },
      ],
    },
    {
      n: 4, marks: 3, prompt: 'Find the third angle in each triangle.',
      parts: [
        { id: 'an1-4a', label: 'a) 70° and 60°. Third = ___°', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (180 − 130)' },
        { id: 'an1-4b', label: 'b) 90° and 40°. Third = ___°', marks: 1, type: 'number', answer: 50, answerDisplay: '50  (180 − 130)' },
        { id: 'an1-4c', label: 'c) 100° and 50°. Third = ___°', marks: 1, type: 'number', answer: 30, answerDisplay: '30  (180 − 150)' },
      ],
    },
    {
      n: 5, marks: 3, prompt: 'Angles around a point (they add to 360°).',
      parts: [
        { id: 'an1-5a', label: 'a) Angles around a point add to ___°', marks: 1, type: 'number', answer: 360, answerDisplay: '360' },
        { id: 'an1-5b', label: 'b) Three angles are 120°, 120° and ___°', marks: 1, type: 'number', answer: 120, answerDisplay: '120  (360 − 240)' },
        { id: 'an1-5c', label: 'c) Four angles are 90°, 90°, 90° and ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (360 − 270)' },
      ],
    },
    {
      n: 6, marks: 3, prompt: 'Special shapes.',
      parts: [
        { id: 'an1-6a', label: 'a) Each angle of an equilateral triangle is ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60' },
        { id: 'an1-6b', label: 'b) Each angle of a square is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90' },
        { id: 'an1-6c', label: 'c) An isosceles triangle has two 50° angles. The third is ___°', marks: 1, type: 'number', answer: 80, answerDisplay: '80  (180 − 100)' },
      ],
    },
    {
      n: 7, marks: 3, prompt: 'More lines and triangles.',
      parts: [
        { id: 'an1-7a', label: 'a) Line: one angle is 75°. The other is ___°', marks: 1, type: 'number', answer: 105, answerDisplay: '105  (180 − 75)' },
        { id: 'an1-7b', label: 'b) Triangle 60° and 60°. Third = ___°', marks: 1, type: 'number', answer: 60, answerDisplay: '60  (180 − 120)' },
        { id: 'an1-7c', label: 'c) Line: one angle is 25°. The other is ___°', marks: 1, type: 'number', answer: 155, answerDisplay: '155  (180 − 25)' },
      ],
    },
    {
      n: 8, marks: 4, prompt: 'Mixed questions.',
      parts: [
        { id: 'an1-8a', label: 'a) An angle of 40° is what type?', marks: 1, type: 'choice', options: ['Acute', 'Right', 'Obtuse', 'Reflex'], answer: 'Acute', answerDisplay: 'Acute' },
        { id: 'an1-8b', label: 'b) A triangle has angles 50° and 60°. The third is ___°', marks: 1, type: 'number', answer: 70, answerDisplay: '70  (180 − 110)' },
        { id: 'an1-8c', label: 'c) Around a point, 200° and ___° make a full turn.', marks: 1, type: 'number', answer: 160, answerDisplay: '160  (360 − 200)' },
        { id: 'an1-8d', label: 'd) Two equal angles sit on a straight line. Each is ___°', marks: 1, type: 'number', answer: 90, answerDisplay: '90  (180 ÷ 2)' },
      ],
    },
  ],

  gradeBands: [
    { min: 23, label: 'Excellent — ready for Paper 2! 🌟' },
    { min: 18, label: 'Good — review any slips, then push on.' },
    { min: 13, label: 'Getting there — go back over Lessons 1 & 2.' },
    { min: 0, label: 'Keep practising — revisit the lessons, then try again.' },
  ],
};
