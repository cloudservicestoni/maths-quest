/*
 * ProgressService — persists the child's journey in localStorage and powers the
 * gamification (stars, streaks, badges). Framework-agnostic; React subscribes
 * via the useProgress hook.
 */

const STORAGE_KEY = 'mathsquest:v1';

export interface PaperProgress {
  bestScore: number;
  bestPct: number;
  attempts: number;
  bestCombo?: number;
  gotSpeedBonus?: boolean;
}
export interface LessonProgress { completed: boolean; bestCorrect: number; totalParts: number; }
export interface Streak { count: number; lastDay: string; }

export interface Progress {
  papers: Record<string, PaperProgress>;
  lessons: Record<string, LessonProgress>;
  streak: Streak;
  badges: string[];
  nightOwl?: boolean;
  lastVisitDay?: string;
}

export interface BadgeDef { id: string; label: string; emoji: string; earned: (p: Progress) => boolean; }

/** Stars from a percentage: 3 (90%+), 2 (70%+), 1 (50%+), else 0. */
export function starsForPct(pct: number): number {
  if (pct >= 90) return 3;
  if (pct >= 70) return 2;
  if (pct >= 50) return 1;
  return 0;
}

function emptyProgress(): Progress {
  return { papers: {}, lessons: {}, streak: { count: 0, lastDay: '' }, badges: [], nightOwl: false, lastVisitDay: '' };
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function dayDiff(a: string, b: string): number {
  if (!a || !b) return Infinity;
  const pa = a.split('-').map(Number);
  const pb = b.split('-').map(Number);
  const da = new Date(pa[0], pa[1] - 1, pa[2]).getTime();
  const db = new Date(pb[0], pb[1] - 1, pb[2]).getTime();
  return Math.round((db - da) / 86400000);
}

/* ---------- badge definitions ---------- */
export const BADGES: BadgeDef[] = [
  /* original */
  { id: 'first-steps',    label: 'First Steps',    emoji: '👣', earned: (p) => Object.values(p.lessons).some((l) => l.completed) },
  { id: 'sharp-shooter',  label: 'Sharp Shooter',  emoji: '🎯', earned: (p) => Object.values(p.papers).some((x) => x.bestPct === 100) },
  { id: 'on-a-roll',      label: 'On a Roll',      emoji: '🔥', earned: (p) => p.streak.count >= 3 },
  { id: 'star-collector', label: 'Star Collector',  emoji: '⭐', earned: (p) => totalStarsOf(p) >= 10 },
  { id: 'all-rounder',    label: 'All-Rounder',    emoji: '🏅', earned: (p) => Object.values(p.papers).filter((x) => x.bestPct >= 70).length >= 3 },
  /* secret badges */
  { id: 'early-bird',     label: 'Early Bird',     emoji: '🌅', earned: (p) => Object.values(p.papers).some((x) => x.gotSpeedBonus) },
  { id: 'perfect-run',    label: 'Perfect Run',    emoji: '💎', earned: (p) => Object.values(p.papers).some((x) => x.bestPct === 100) },
  { id: 'comeback-kid',   label: 'Comeback Kid',   emoji: '💪', earned: (p) => Object.values(p.papers).some((x) => (x.bestCombo ?? 0) >= 4) },
  { id: 'night-owl',      label: 'Night Owl',      emoji: '🌙', earned: (p) => !!p.nightOwl },
  { id: 'boss-defeated',  label: 'Boss Defeated',  emoji: '👑', earned: (p) => Object.keys(p.papers).some((id) => id.endsWith('-paper-3') && (p.papers[id].bestPct ?? 0) >= 70) },
  { id: 'explorer',       label: 'Explorer',       emoji: '🗺️', earned: (p) => {
    const topics = new Set(
      Object.entries(p.lessons)
        .filter(([, l]) => l.completed)
        .map(([id]) => id.split('-lesson-')[0])
    );
    return topics.size >= 3;
  }},
];

function totalStarsOf(p: Progress): number {
  let s = 0;
  for (const x of Object.values(p.papers)) s += starsForPct(x.bestPct);
  for (const l of Object.values(p.lessons)) s += lessonStarsOf(l);
  return s;
}

function lessonStarsOf(l: LessonProgress): number {
  if (!l.completed || l.totalParts === 0) return l.completed ? 1 : 0;
  const pct = (l.bestCorrect / l.totalParts) * 100;
  return Math.max(1, starsForPct(pct));
}

/* ---------- store + observable ---------- */
let state: Progress = load();
let version = 0;
const listeners = new Set<() => void>();

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    return { ...emptyProgress(), ...JSON.parse(raw) };
  } catch {
    return emptyProgress();
  }
}

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
  version += 1;
  listeners.forEach((fn) => fn());
}

function bumpStreak() {
  const today = todayKey();
  const diff = dayDiff(state.streak.lastDay, today);
  if (diff === 0) return;
  state.streak.count = diff === 1 ? state.streak.count + 1 : 1;
  state.streak.lastDay = today;
  const hour = new Date().getHours();
  if (hour >= 19 && !state.nightOwl) state.nightOwl = true;
}

function refreshBadges(): string[] {
  const newly: string[] = [];
  for (const b of BADGES) {
    if (b.earned(state) && !state.badges.includes(b.id)) {
      state.badges.push(b.id);
      newly.push(b.id);
    }
  }
  return newly;
}

export interface RecordResult { stars: number; isBest: boolean; newBadges: BadgeDef[]; }

export const ProgressService = {
  get(): Progress { return state; },

  /** Monotonic counter for React's useSyncExternalStore snapshot. */
  getVersion(): number { return version; },

  subscribe(fn: () => void): () => void {
    listeners.add(fn);
    return () => { listeners.delete(fn); };
  },

  totalStars(): number { return totalStarsOf(state); },

  paperStars(paperId: string): number {
    const p = state.papers[paperId];
    return p ? starsForPct(p.bestPct) : 0;
  },

  lessonStars(lessonId: string): number {
    const l = state.lessons[lessonId];
    return l ? lessonStarsOf(l) : 0;
  },

  /** Stars earned vs maximum across a topic's lessons + papers (3 each). */
  topicStars(lessonIds: string[], paperIds: string[]): { earned: number; max: number } {
    let earned = 0;
    for (const id of lessonIds) earned += this.lessonStars(id);
    for (const id of paperIds) earned += this.paperStars(id);
    return { earned, max: (lessonIds.length + paperIds.length) * 3 };
  },

  /** Record first visit of the day. Returns true only on the first call today. */
  checkIn(): boolean {
    const today = todayKey();
    if (state.lastVisitDay === today) return false;
    state.lastVisitDay = today;
    const hour = new Date().getHours();
    if (hour >= 19 && !state.nightOwl) {
      state.nightOwl = true;
      refreshBadges();
    }
    persist();
    return true;
  },

  recordPaper(
    paperId: string,
    scored: number,
    total: number,
    opts?: { combo?: number; speedBonus?: boolean },
  ): RecordResult {
    const pct = total > 0 ? Math.round((scored / total) * 100) : 0;
    const prev = state.papers[paperId] ?? { bestScore: 0, bestPct: 0, attempts: 0 };
    const isBest = scored > prev.bestScore;
    state.papers[paperId] = {
      bestScore: Math.max(prev.bestScore, scored),
      bestPct: Math.max(prev.bestPct, pct),
      attempts: prev.attempts + 1,
      bestCombo: Math.max(prev.bestCombo ?? 0, opts?.combo ?? 0),
      gotSpeedBonus: prev.gotSpeedBonus || (opts?.speedBonus ?? false),
    };
    bumpStreak();
    const newBadgeIds = refreshBadges();
    persist();
    return { stars: starsForPct(pct), isBest, newBadges: BADGES.filter((b) => newBadgeIds.includes(b.id)) };
  },

  recordLesson(lessonId: string, correct: number, totalParts: number): RecordResult {
    const prev = state.lessons[lessonId] ?? { completed: false, bestCorrect: 0, totalParts };
    state.lessons[lessonId] = {
      completed: true,
      bestCorrect: Math.max(prev.bestCorrect, correct),
      totalParts,
    };
    bumpStreak();
    const newBadgeIds = refreshBadges();
    persist();
    return { stars: lessonStarsOf(state.lessons[lessonId]), isBest: correct > prev.bestCorrect, newBadges: BADGES.filter((b) => newBadgeIds.includes(b.id)) };
  },
};
