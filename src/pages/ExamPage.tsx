import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPaper } from '../data/registry';
import { markPaper, type PaperResult } from '../services/marking';
import { ProgressService, type RecordResult } from '../services/progress';
import Diagram from '../components/Diagram';
import QuestionInput from '../components/QuestionInput';
import Stars from '../components/Stars';
import Mascot from '../components/Mascot';

export default function ExamPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = id ? getPaper(id) : undefined;

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PaperResult | null>(null);
  const [record, setRecord] = useState<RecordResult | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const [remaining, setRemaining] = useState((paper?.timeLimitMinutes ?? 20) * 60);
  const submitted = useRef(false);

  function submit(auto = false) {
    if (submitted.current || !paper) return;
    submitted.current = true;
    const marked = markPaper(paper, answers);
    setResult(marked);
    setRecord(ProgressService.recordPaper(paper.id, marked.scored, marked.total));
    setTimedOut(auto);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (!paper || result) return;
    if (remaining <= 0) { submit(true); return; }
    const t = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, paper, result]);

  if (!paper) {
    return <div className="page"><p>Paper not found.</p><Link to="/">← Menu</Link></div>;
  }

  /* ---------- results view ---------- */
  if (result) {
    const pct = Math.round((result.scored / result.total) * 100);
    const band = paper.gradeBands.find((b) => result.scored >= b.min);
    const stars = record?.stars ?? 0;
    const byQ: Record<number, PaperResult['results']> = {};
    result.results.forEach((r) => { (byQ[r.questionN] ??= []).push(r); });

    return (
      <div className="page results">
        <header className="app-header"><h1>Your results</h1>
          {timedOut && <p className="tagline">⏰ Time was up — here's how you did so far.</p>}
        </header>

        <motion.div className="score-card" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14 }}>
          <Mascot mood={stars >= 2 ? 'cheer' : stars >= 1 ? 'happy' : 'think'} size={72} />
          <div className="score-big">{result.scored} / {result.total}</div>
          <div className="score-pct">{pct}%</div>
          <Stars count={stars} size={30} />
          {band && <div className="score-band">{band.label}</div>}
          {record?.isBest && <div className="best-flag">🎉 New personal best!</div>}
        </motion.div>

        {record && record.newBadges.length > 0 && (
          <motion.div className="badge-toast" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            New badge{record.newBadges.length > 1 ? 's' : ''}: {record.newBadges.map((b) => `${b.emoji} ${b.label}`).join(', ')}
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
          <button className="btn-primary" onClick={() => navigate(0)}>🔄 Try again</button>
          <button className="btn-ghost" onClick={() => navigate(`/topic/${paper.topicId}`)}>← Back to topic</button>
        </div>
      </div>
    );
  }

  /* ---------- exam view ---------- */
  const mm = Math.floor(remaining / 60);
  const ss = String(remaining % 60).padStart(2, '0');
  return (
    <div className="page exam">
      <header className="app-header exam-header">
        <div className="exam-titles">
          <Link to={`/topic/${paper.topicId}`} className="back-link">← Back</Link>
          <h1>{paper.topicTitle} — {paper.title}</h1>
          <p className="tagline">{paper.intro}</p>
        </div>
        <div className={'timer' + (remaining <= 60 ? ' timer-low' : '')}>{mm}:{ss}</div>
      </header>

      {paper.questions.map((q) => (
        <section className="question" key={q.n}>
          <div className="q-head"><span className="q-num">Question {q.n}</span><span className="q-marks">{q.marks} mark{q.marks > 1 ? 's' : ''}</span></div>
          <p className="q-prompt">{q.prompt}</p>
          {q.diagram && <Diagram spec={q.diagram} />}
          {q.parts.map((part) => (
            <div className="part" key={part.id}>
              <label className="part-label">{part.label}</label>
              <QuestionInput part={part} value={answers[part.id] ?? ''} onChange={(v) => setAnswers((a) => ({ ...a, [part.id]: v }))} />
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
