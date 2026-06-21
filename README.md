# Maths Quest

11+ maths practice as an installable PWA — **learn it, play it, master it.**
React + Vite + TypeScript. Self-study lessons with instant feedback, timed exam
papers with marking, and gamification (stars, streaks, badges, a mascot).

Topics: **Venn Diagrams** and **Metric Conversions** (4 lessons + 3 papers each).

## Develop

```bash
npm install
npm run dev        # http://localhost:5180  (see .claude/launch.json)
npm run build      # production build to dist/ (also generates the PWA service worker)
npm run preview    # serve the built app locally
```

## Architecture (SOLID, component-based)

```
src/
  types/content.ts        Typed content contract (Part is a discriminated union)
  services/
    marking.ts            Pure marking — strategy map per answer type (open/closed)
    progress.ts           localStorage progress: stars, streaks, badges (+ observable)
  hooks/useProgress.ts    Subscribes React to ProgressService
  components/
    Diagram.tsx           Venn (1/2/3-circle) + conversion-ladder SVGs
    QuestionInput.tsx      One control for number/set/fraction/text/choice
    PracticeBlock.tsx      Lesson practice with instant Check feedback
    Stars.tsx, Mascot.tsx  Gamification visuals
  pages/
    Home.tsx              Hub: stats, badges, topic cards with stars/best
    LessonPage.tsx        Renders notes / examples / practice
    ExamPage.tsx          Timer, submit, animated results, retake
  data/
    registry.ts           Aggregates topics; the place new content plugs in
    venn/, metric/        Typed lesson + paper modules
```

### Adding content
- **New paper/lesson:** add a typed module under `data/<topic>/`, import it in
  `data/registry.ts`. TypeScript enforces the shape — a wrong answer type or a
  missing field fails the build.
- **New answer type:** add a `Part` variant in `types/content.ts` and one entry
  in the `markers` map in `services/marking.ts`. Nothing else changes.

### Answer marking types
`number` (whole or decimal; units/commas ignored) · `set` (numbers, any order) ·
`fraction` (equivalents accepted) · `text` (keyword match) · `choice` (multiple choice).

## Deploy (PWA)
`npm run build` produces a static `dist/` with a service worker and web manifest
(installable, offline). Host `dist/` on any static host:
- **Netlify:** drag-and-drop `dist/`, or connect the repo (build `npm run build`, publish `dist`).
- **GitHub Pages (project site):** set `base: '/<repo-name>/'` in `vite.config.ts`, then deploy `dist/`.

`base` is currently `./` (relative), which works for Netlify, a plain static host,
and local preview.
