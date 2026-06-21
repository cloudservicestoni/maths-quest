/*
 * The typed content contract for the whole app.
 * Every lesson and exam paper is authored against these types, so a typo in an
 * answer, a wrong `type`, or a missing field is caught at author time.
 */

export type AnswerType = 'number' | 'set' | 'fraction' | 'text' | 'choice';

interface PartCommon {
  id: string;
  label: string;
  /** Marks for this part (exam papers). Omitted for lesson practice. */
  marks?: number;
  /** Friendly worked answer, shown when the student is wrong. */
  answerDisplay: string;
  placeholder?: string;
  /** Shown under the input (exam hint). */
  hint?: string;
  /** Shown after checking in a lesson (the "why"). */
  explanation?: string;
}

export interface NumberPart extends PartCommon { type: 'number'; answer: number; }
export interface SetPart extends PartCommon { type: 'set'; answer: number[]; }
export interface FractionPart extends PartCommon { type: 'fraction'; answer: string; }
export interface TextPart extends PartCommon { type: 'text'; accept: string[]; }
export interface ChoicePart extends PartCommon { type: 'choice'; options: string[]; answer: string; }

export type Part = NumberPart | SetPart | FractionPart | TextPart | ChoicePart;

/* ---------- diagrams ---------- */
export type DiagramSpec =
  | { type: 'single'; data: { label: string; inside?: number; outside?: number } }
  | { type: 'venn2'; data: { setA: string; setB: string; onlyA: number; both: number; onlyB: number; outside: number } }
  | { type: 'venn2Labelled'; data: { setA: string; setB: string } }
  | { type: 'venn3Labelled'; data: { setA: string; setB: string; setC: string } }
  | { type: 'conversionChain'; data: { units: string[]; factors: number[] } }
  | { type: 'percentBar'; data: { percent: number; label?: string } }
  | { type: 'angle'; data: { degrees: number; label?: string } }
  | { type: 'triangleAngles'; data: { a: string; b: string; c: string } };

/* ---------- exam papers ---------- */
export interface Question {
  n: number;
  marks: number;
  prompt: string;
  diagram?: DiagramSpec;
  parts: Part[];
}

export interface GradeBand { min: number; label: string; }

export interface Paper {
  id: string;
  topicId: string;
  topicTitle: string;
  topicDescription?: string;
  title: string;
  subtitle?: string;
  timeLimitMinutes: number;
  totalMarks: number;
  intro?: string;
  questions: Question[];
  gradeBands: GradeBand[];
}

/* ---------- self-study lessons ---------- */
export type Section =
  | { type: 'note'; heading?: string; body?: string; diagram?: DiagramSpec }
  | { type: 'example'; heading?: string; intro?: string; steps?: string[]; result?: string; diagram?: DiagramSpec }
  | { type: 'practice'; heading?: string; prompt?: string; diagram?: DiagramSpec; parts: Part[] };

export interface Lesson {
  id: string;
  topicId: string;
  topicTitle?: string;
  topicDescription?: string;
  order: number;
  level: string;
  title: string;
  summary: string;
  sections: Section[];
}

/* ---------- grouping ---------- */
export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  lessons: Lesson[];
  papers: Paper[];
}
