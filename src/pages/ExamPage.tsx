import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPaper } from '../data/registry';
import { markPaper, type PaperResult } from '../services/marking';
import { ProgressService, type RecordResult } from '../services/progress';
import { SessionService } from '../services/sessions';
import Diagram from '../components/Diagram';
import QuestionInput from '../components/QuestionInput';
import Stars from '../components/Stars';
import Mascot from '../components/Mascot';

const PI_HINTS = [
  "Take a deep breath — you know this! 🦉",
  "Read each question again carefully. Every word matters!",
  "Try working backwards from what you already know.",
  "Think about the rules you learned in the lessons.",
  "You've got this! Trust your practice. ⭐",
];

export default function ExamPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = id ? getPaper(id) : undefined;
  const isBossBattle = paper?.subtitle === 'Challenging';

  const [started, setStarted] = useState(!isBossBattle);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PaperResult | null>(null);
  const [record, setRecord] = useState<RecordResult | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const [remaining, setRemaining] = useState((paper?.timeLimitMinutes ?? 20) * 60);
  const [timeFreezeUsed, setTimeFreezeUsed] = useState(false);
  const [timeFrozen, setTimeFrozen] = useState(false);
  const [freezeSeconds, setFreezeSeconds] = useState(0);
  const [piHintUsed, setPiHintUsed] = useState(false);
  const [showPiHint, setShowPiHint] = useState(false);
  const [submitTimeLeft, setSubmitTimeLeft] = useState(0);
  const [combo, setCombo] = useState(0);
  const submitted = useRef(false);
  const hintIdx = useRef(ProgressService.get().papers[paper?.id ?? '']?.attempts ?? 0);

  function submit(auto = false) {
    if (submitted.current || !paper) return;
    submitted.current = true;
    const timeLeft = remaining;
    const marked = markPaper(paper, answers);
    let maxCombo = 0, cur = 0;
    for (const r of marked.results) {
      if (r.correct) { cur++; maxCombo = Math.max(maxCombo, cur); } else cur = 0;
    }
    const speedBonus = !auto && timeLeft > 300;
    setSubmitTimeLeft(timeLeft);
    setCombo(maxCombo);
    setResult(marked);
    setRecord(ProgressService.recordPaper(paper.id, marked.scored, marked.total, { combo: maxCombo, speedBonus }));
    SessionService.save({
      id: `${paper.id}-${Date.now()}`,
      paperId: paper.id,
      topicId: paper.topicId,
      paperTitle: `${paper.topicTitle} — ${paper.title}`,
      paperSubtitle: paper.subtitle ?? '',
      doneAt: Date.now(),
      score: marked.scored,
      totalMarks: marked.total,
      timeTakenSeconds: paper.timeLimitMinutes * 60 - timeLeft,
      parts: marked.results.map((r) => ({
        partId: r.part.id,
        label: r.part.label,
        givenAnswer: r.given,
        correct: r.correct,
        answerDisplay: r.part.answerDisplay,
      })),
    });
    setTimedOut(auto);
    window.scrollTo(0, 0);
  }

  /* main timer — pauses when frozen or not yet started */
  useEffect(() => {
    if (!paper || result || !started || timeFrozen) return;
    if (remaining <= 0) { submit(true); return; }
    const t = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, paper, result, started, timeFrozen]);

  /* freeze countdown — 30 seconds then auto-thaws */
  useEffect(() => {
    if (!timeFrozen) return;
    let secs = 30;
    setFreezeSeconds(30);
    const t = setInterval(() => {
      secs -= 1;
      setFreezeSeconds(secs);
      if (secs <= 0) { clearInterval(t); setTimeFrozen(false); }
    }, 1000);
    return () => clearInterval(t);
  }, [timeFrozen]);

  if (!paper) {
    return <div className="page"><p>Paper not found.</p><Link to="/">← Menu</Link></div>;
  }

  /* ---------- Boss Battle intro screen ---------- */
  if (!started) {
    return (
      <div className="page boss-intro-page">
        <motion.div
          className="boss-intro-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        >
          <Mascot mood="nervous" size={96} />
          <h2>⚔️ Boss Battle</h2>
          <h3>{paper.topicTitle}</h3>
          <p className="boss-intro-desc">"This is the hardest challenge in this world! Are you ready?"</p>
          <p className="boss-intro-sub">{paper.intro}</p>
          <motion.button
            className="btn-primary btn-boss"
            whileTap={{ scale: 0.96 }}
            onClick={() => setStarted(true)}
          >
            Let's go! 💪
          </motion.button>
          <button className="btn-ghost" style={{ marginTop: 8 }} onClick={() => navigate(`/topic/${paper.topicId}`)}>
            Not yet ← Back
          </button>
        </motion.div>
      </div>
    );
  }

  /* ---------- results view ---------- */
  if (result) {
    const pct = Math.round((result.scored / result.total) * 100);
    const band = paper.gradeBands.find((b) => result.scored >= b.min);
    const stars = record?.stars ?? 0;
    const byQ: Record<number, PaperResult['results']> = {};
    result.results.forEach((r) => { (byQ[r.questionN] ??= []).push(r); });
    const speedBonus = !timedOut && submitTimeLeft > 300;
    const minsLeft = Math.floor(submitTimeLeft / 60);
    const bossDefeated = isBossBattle && stars >= 2;

    return (
      <div className="page results">
        <header className="app-header">
          <h1>{isBossBattle ? '⚔️ Boss Battle Results' : 'Your results'}</h1>
          {timedOut && <p className="tagline">⏰ Time was up — here's how you did so far.</p>}
        </header>

        <motion.div
          className={`score-card${isBossBattle ? ' score-card-boss' : ''}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        >
          <Mascot mood={stars >= 2 ? 'cheer' : stars >= 1 ? 'happy' : 'think'} size={72} />
          <div className="score-big">{result.scored} / {result.total}</div>
          <div className="score-pct">{pct}%</div>
          <Stars count={stars} size={30} />
          {band && <div className="score-band">{band.label}</div>}
          {record?.isBest && <div className="best-flag">🎉 New personal best!</div>}
          {bossDefeated && (
            <motion.div
              className="boss-conquered-flag"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 12 }}
            >
              👑 Boss Defeated!
            </motion.div>
          )}
        </motion.div>

        {speedBonus && (
          <motion.div className="speed-badge" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            ⚡ Speed bonus! You finished with {minsLeft} minute{minsLeft !== 1 ? 's' : ''} to spare!
          </motion.div>
        )}
        {combo >= 3 && (
          <motion.div className="combo-stat" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            🔥 Best streak: {combo} correct in a row!
          </motion.div>
        )}

        {record && record.newBadges.length > 0 && (
          <motion.div className="badge-toast" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            🏅 New badge{record.newBadges.length > 1 ? 's' : ''}: {record.newBadges.map((b) => `${b.emoji} ${b.label}`).join(', ')}
          </motion.div>
        )}

        {paper.questions.map((q) => {
          const rows = byQ[q.n] ?? [];
          const qScore = rows.reduce((a, r) => a + r.awarded, 0);
          return (
            <section className="result-q" key={q.n}>
              <div className="q-head"><span className="q-num">Question {q.n}</span><span className="q-marks">{qScore} / {q.marks}</span></div>
              {rows.map((r) => (
                <div className={'result-row ' + (r.correct ? 'is-correct' : 'is-wrong')} key={r.part.id}>
                  <div className="result-label"><span className="mark-icon">{r.correct ? '✓' : '✗'}</span><span>{r.part.label}</span></div>
                  <div className="result-given">Your answer: {r.given.trim() ? r.given : '(blank)'}</div>
                  {!r.correct && <div className="result-correct"><strong>Correct answer: </strong>{r.part.answerDisplay}</div>}
                </div>
              ))}
            </section>
          );
        })}

        <div className="actions">
          <button className="btn-primary" onClick={() => navigate(0)}>
            {isBossBattle ? '⚔️ Challenge again' : '🔄 Try again'}
          </button>
          <button className="btn-ghost" onClick={() => navigate(`/topic/${paper.topicId}`)}>← Back to topic</button>
        </div>
      </div>
    );
  }

  /* ---------- exam view ---------- */
  const mm = Math.floor(remaining / 60);
  const ss = String(remaining % 60).padStart(2, '0');
  const timerClass = ['timer', remaining <= 60 ? 'timer-low' : '', timeFrozen ? 'timer-frozen' : ''].filter(Boolean).join(' ');

  return (
    <div className="page exam">
      <header className={`app-header exam-header${isBossBattle ? ' boss-header' : ''}`}>
        <div className="exam-titles">
          <Link to={`/topic/${paper.topicId}`} className="back-link">← Back</Link>
          <h1>{isBossBattle ? '⚔️ ' : ''}{paper.topicTitle} — {paper.title}</h1>
          <p className="tagline">{paper.intro}</p>
        </div>
        <div className={timerClass}>
          {timeFrozen ? `❄️ ${freezeSeconds}s` : `${mm}:${ss}`}
        </div>
      </header>

      <div className="powerup-bar">
        <button
          className={`powerup-btn${timeFreezeUsed ? ' powerup-used' : ''}`}
          disabled={timeFreezeUsed}
          title="Pause the timer for 30 seconds"
          onClick={() => { setTimeFreezeUsed(true); setTimeFrozen(true); }}
        >
          ⏸ Freeze Time
        </button>
        <button
          className={`powerup-btn${piHintUsed ? ' powerup-used' : ''}`}
          disabled={piHintUsed}
          title="Get a hint from Pi"
          onClick={() => { setPiHintUsed(true); setShowPiHint(true); }}
        >
          💡 Pi's Hint
        </button>
      </div>

      {showPiHint && (
        <motion.div
          className="pi-hint-bubble"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Mascot mood="happy" size={40} />
          <p>{PI_HINTS[hintIdx.current % PI_HINTS.length]}</p>
          <button onClick={() => setShowPiHint(false)}>✕</button>
        </motion.div>
      )}

      {paper.questions.map((q) => (
        <section className="question" key={q.n}>
          <div className="q-head">
            <span className="q-num">Question {q.n}</span>
            <span className="q-marks">{q.marks} mark{q.marks > 1 ? 's' : ''}</span>
          </div>
          <p className="q-prompt">{q.prompt}</p>
          {q.diagram && <Diagram spec={q.diagram} />}
          {q.parts.map((part) => (
            <div className="part" key={part.id}>
              <label className="part-label">{part.label}</label>
              <QuestionInput
                part={part}
                value={answers[part.id] ?? ''}
                onChange={(v) => setAnswers((a) => ({ ...a, [part.id]: v }))}
              />
              {part.hint && <p className="hint">💡 {part.hint}</p>}
            </div>
          ))}
        </section>
      ))}

      <div className="actions">
        <button className="btn-primary" onClick={() => submit(false)}>Finish &amp; mark my answers</button>
        <button className="btn-ghost" onClick={() => navigate(`/topic/${paper.topicId}`)}>Back</button>
      </div>
    </div>
  );
}
