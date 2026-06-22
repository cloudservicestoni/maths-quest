Scaffold a new Maths Quest topic with placeholder content ready for the content-author agent to flesh out.

**Step 1 — gather inputs.** Ask the user for:
- Topic ID (lowercase, no spaces, e.g. `fractions`)
- Topic title (e.g. `Fractions & Decimals`)
- Icon emoji
- Accent colour (hex, e.g. `#8b5cf6`)
- World map name (e.g. `Fraction Forest`)

**Step 2 — create content files.** Using the conventions in `CLAUDE.md`:

Create `src/data/{topicId}/lessons.ts`:
- Export `{topicId}Lessons: Lesson[]` with 4 placeholder lessons
- IDs: `{topicId}-lesson-1` through `{topicId}-lesson-4`
- Levels: ⭐, ⭐⭐, ⭐⭐⭐, ⭐⭐⭐⭐
- Each lesson gets a `note` section with body `'TODO: add lesson content'` and a single placeholder `practice` part
- Set `topicId`, `topicTitle`, `topicDescription` from the gathered inputs

Create `src/data/{topicId}/paper1.ts`, `paper2.ts`, `paper3.ts`:
- Exports `{topicId}Paper1`, `{topicId}Paper2`, `{topicId}Paper3`
- IDs: `{topicId}-paper-1`, `{topicId}-paper-2`, `{topicId}-paper-3`
- Subtitles exactly: `'Exam Ready'`, `'Moderate'`, `'Challenging'`
- `timeLimitMinutes: 20`, `totalMarks: 25`
- Each paper: 1 stub question with a single `number` part (id `'1a'`, marks 1, answer 0, answerDisplay `'TODO'`)
- Include standard `gradeBands` covering 0–25
- Add a comment `// TODO: replace stub with full paper content` at the top

**Step 3 — wire registration.**

In `src/data/topics.ts` → add to `TOPIC_META`:
```ts
{ id: '{topicId}', icon: '{icon}', accent: '{accent}' },
```

In `src/data/registry.ts` → add imports and include in `allLessons` / `allPapers`.

In `src/pages/Home.tsx` → add `'{topicId}': '{worldName}'` to `WORLD_NAMES`.

**Step 4 — verify.** Run `/verify` to confirm TypeScript is clean and the new world node appears on the Home screen.

**Step 5 — report.** Tell the user the scaffold is ready and suggest running the `content-author` agent to replace the placeholder content with real lessons and papers.
