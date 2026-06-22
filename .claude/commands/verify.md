Run the standard Maths Quest pre-commit verification:

1. **TypeScript check** — run `npx tsc --noEmit` in the project root. If there are errors, show them and stop; do not proceed to the preview until they're fixed.

2. **Preview server** — start it if not already running (name: `maths-quest`, port 5173 or next available).

3. **Home screen snapshot** — take a snapshot and confirm:
   - All topic world nodes are present (currently 5: Venn Village, Metric Mountain, Percent Peak, Money Market, Angle Academy)
   - No world node shows a blank name (would mean WORLD_NAMES is missing an entry)
   - Mascot and stat strip render

4. **Report** — list each step with ✅ pass or ❌ fail + detail. If everything passes, say it's safe to commit.
