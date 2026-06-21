/*
 * MarkingService — pure, no DOM, fully unit-testable.
 *
 * Open/closed by design: each answer type has its own marker in the `markers`
 * map. To support a new answer type, add a Part variant in types/content.ts and
 * one entry here — nothing else changes.
 */
import type { Part, Paper } from '../types/content';

/* ---------- parsing helpers ---------- */
export function normaliseText(s: unknown): string {
  return String(s ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
}

/** Every integer in a string: "11, 22 and 33" -> [11,22,33] */
export function extractNumbers(s: unknown): number[] {
  const m = String(s ?? '').match(/-?\d+/g);
  return m ? m.map(Number) : [];
}

/** First number, allowing decimals + thousands separators: "1.75 kg" -> 1.75 */
export function parseFirstNumber(s: unknown): number | null {
  const t = String(s ?? '').replace(/[, ]+/g, '');
  // Accepts "1500", "1.75", ".5" (leading-dot decimals), with optional sign.
  const m = t.match(/-?(?:\d+\.?\d*|\.\d+)/);
  return m ? Number(m[0]) : null;
}

function sameNumberSet(a: number[], b: number[]): boolean {
  const norm = (arr: number[]) => [...new Set(arr)].sort((x, y) => x - y);
  const x = norm(a);
  const y = norm(b);
  return x.length === y.length && x.every((v, i) => v === y[i]);
}

/** Fraction value; "8/50", "4/25", "0.16", whole numbers all parse. */
function fractionValue(s: unknown): number | null {
  const txt = normaliseText(s);
  if (!txt) return null;
  const m = txt.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (m) {
    const denom = Number(m[2]);
    return denom === 0 ? null : Number(m[1]) / denom;
  }
  return /^-?\d+(\.\d+)?$/.test(txt) ? Number(txt) : null;
}

function isBlank(raw: unknown): boolean {
  return raw == null || normaliseText(raw) === '';
}

/* ---------- the strategy map ---------- */
type Marker = (part: Part, raw: string) => boolean;

const markers: Record<Part['type'], Marker> = {
  number: (part, raw) => {
    if (part.type !== 'number') return false;
    const got = parseFirstNumber(raw);
    return got !== null && Math.abs(got - part.answer) < 1e-9;
  },
  set: (part, raw) => {
    if (part.type !== 'set') return false;
    return sameNumberSet(extractNumbers(raw), part.answer);
  },
  fraction: (part, raw) => {
    if (part.type !== 'fraction') return false;
    const want = fractionValue(part.answer);
    const got = fractionValue(raw);
    return got !== null && want !== null && Math.abs(got - want) < 1e-9;
  },
  text: (part, raw) => {
    if (part.type !== 'text') return false;
    const txt = normaliseText(raw);
    return part.accept.some((kw) => txt.includes(normaliseText(kw)));
  },
  choice: (part, raw) => {
    if (part.type !== 'choice') return false;
    return normaliseText(raw) === normaliseText(part.answer);
  },
};

export interface PartResult {
  correct: boolean;
  awarded: number;
  given: string;
}

export function markPart(part: Part, raw: string | null | undefined): PartResult {
  const given = raw == null ? '' : String(raw);
  const correct = isBlank(raw) ? false : markers[part.type](part, given);
  return { correct, awarded: correct ? part.marks ?? 0 : 0, given };
}

export interface PaperResult {
  scored: number;
  total: number;
  results: Array<PartResult & { questionN: number; part: Part }>;
}

export function markPaper(paper: Paper, answers: Record<string, string>): PaperResult {
  let scored = 0;
  const results: PaperResult['results'] = [];
  for (const q of paper.questions) {
    for (const part of q.parts) {
      const r = markPart(part, answers[part.id]);
      scored += r.awarded;
      results.push({ ...r, questionN: q.n, part });
    }
  }
  return { scored, total: paper.totalMarks, results };
}
