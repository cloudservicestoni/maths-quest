# Maths Quest

11+ maths practice as an installable PWA — **learn it, play it, master it.**
React + Vite + TypeScript. Self-study lessons with instant feedback, timed exam
papers with marking, and gamification (stars, streaks, badges, a mascot).

Live at **[gsmq.netlify.app](https://gsmq.netlify.app)**.

Topics (4 lessons + 3 exam papers each):

| World | Topic |
|---|---|
| Venn Village | Venn Diagrams |
| Metric Mountain | Metric Conversions |
| Percent Peak | Percentages |
| Money Market | Money & Decimals |
| Angle Academy | Angles |
| Chart City | Bar Charts & Data |
| Shape Station | Area & Perimeter |
| Polygon Park | Properties of Shapes |

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
  types/content.ts        Typed content contract (Lesson, Paper, Part, DiagramSpec)
  services/
    marking.ts            Pure marking — strategy map per answer type (open/closed)
    progress.ts           localStorage progress: stars, streaks, badges (+ observable)
  hooks/useProgress.ts    Subscribes React to ProgressService
  components/
    Diagram.tsx           SVG renderer: venn, conversionLadder, triangleAngles, rect
    QuestionInput.tsx     One control for number/set/fraction/text/choice
    PracticeBlock.tsx     Lesson practice with instant Check feedback
    Stars.tsx, Mascot.tsx Gamification visuals
  pages/
    Home.tsx              World map hub: stats, badges, topic nodes with progress
    LessonPage.tsx        Renders notes (Markdown) / worked examples / practice
    ExamPage.tsx          Timer, submit, animated results, Boss Battle on Paper 3
  data/
    topics.ts             Icon, accent colour, display order per topic
    registry.ts           Aggregates topics; the place new content plugs in
    {topicId}/            lessons.ts + paper1.ts + paper2.ts + paper3.ts
```

### Adding content
Use `/new-topic` to scaffold a new topic, then the `content-author` agent to flesh
it out. See `CLAUDE.md` for the full checklist.

- **New paper/lesson:** add a typed module under `data/<topic>/`, import it in
  `data/registry.ts`. TypeScript enforces the shape — a wrong answer type or a
  missing field fails the build.
- **New diagram type:** add a variant to the `DiagramSpec` union in `types/content.ts`
  and a matching render branch in `components/Diagram.tsx`.

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
