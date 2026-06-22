# Maths Quest — Project Guide

Gamified 11+ maths prep PWA. Currently a PoC used by Tee's daughter (age 10) for UK grammar school entrance prep. Live at **gsmq.netlify.app**.

## Stack
- React 18 + Vite + TypeScript (strict)
- Framer Motion for animations
- HashRouter — Netlify static hosting, all routes must be `#/…`
- CSS custom properties only — no Tailwind, no CDN stylesheets or fonts
- Progress stored in localStorage under key `mathsquest:v1`

## File map
```
src/
  types/content.ts        ← TypeScript contract for ALL content (never break this)
  data/
    topics.ts             ← Icon, accent colour, display order per topic
    registry.ts           ← Single import point: every lesson + paper wired here
    {topicId}/
      lessons.ts          ← export `{topicId}Lessons: Lesson[]`
      paper1.ts           ← export `{topicId}Paper1: Paper`
      paper2.ts
      paper3.ts
  services/
    progress.ts           ← ProgressService singleton, badges, streaks, localStorage
    marking.ts            ← Strategy-pattern marker — don't edit without testing all papers
  pages/
    Home.tsx              ← World map; WORLD_NAMES must have an entry for every topic
    TopicPage.tsx
    LessonPage.tsx
    ExamPage.tsx          ← Boss Battle triggered by paper.subtitle === 'Challenging'
  components/
    Mascot.tsx            ← Pi the owl; moods: happy | cheer | think | oops | nervous
    Diagram.tsx           ← SVG renderer for DiagramSpec types
    PracticeBlock.tsx
    QuestionInput.tsx
    Stars.tsx
  index.css               ← All styles; append new sections at the bottom
```

## Adding a topic — checklist
1. Create `src/data/{topicId}/lessons.ts` — export `{topicId}Lessons: Lesson[]`
2. Create `src/data/{topicId}/paper1.ts`, `paper2.ts`, `paper3.ts` — exports `{topicId}Paper{n}: Paper`
3. `src/data/topics.ts` → add `{ id, icon, accent }` to `TOPIC_META`
4. `src/data/registry.ts` → import and add to `allLessons` / `allPapers`
5. `src/pages/Home.tsx` → add `'{topicId}': 'World Name'` to `WORLD_NAMES`
6. Run `/verify` before committing — must be clean

## ID conventions (stable — progress data is keyed on these)
- Lesson: `{topicId}-lesson-{n}` where n starts at 1
- Paper: `{topicId}-paper-{n}` where n = 1, 2, 3
- Question part: `{questionN}{letter}` e.g. `1a`, `2b` — unique within a paper

## Paper subtitles (exact strings — drive UI behaviour)
- Paper 1: `subtitle: 'Exam Ready'`
- Paper 2: `subtitle: 'Moderate'`
- Paper 3: `subtitle: 'Challenging'` ← **required** — triggers Boss Battle intro screen

## Lesson levels
- Lesson 1: `level: '⭐'`
- Lesson 2: `level: '⭐⭐'`
- Lesson 3: `level: '⭐⭐⭐'`
- Lesson 4: `level: '⭐⭐⭐⭐'`

## Key service calls
- `ProgressService.recordLesson(id, correct, total)` — call when a lesson finishes
- `ProgressService.recordPaper(id, scored, total, { combo, speedBonus })` — call on exam submit
- `ProgressService.checkIn()` — call on Home mount for daily streak
- New badges: add to `BADGES` array in `progress.ts`; `earned` must be a pure function of progress state

## Git workflow
- Claude commits to `main`; **Tee pushes** (this machine gets a 403 — repo owned by `cloudservicestoni`, shell account is `osolatunji1`)
- Netlify auto-deploys on push to `main`
- Always run `npx tsc --noEmit` before committing — use `/verify` skill

## Hard rules
- No CDN `<link>` or `<script>` tags — Netlify CSP blocks them at runtime
- Never edit `src/services/marking.ts` without testing all 5 topic papers in the preview
- Never push to `origin` — Tee does that
- Never rename or re-use a part/lesson/paper ID — stored progress would orphan
- Diagrams: only use `DiagramSpec` variants defined in `src/types/content.ts`
