import { useParams, Link, useNavigate } from 'react-router-dom';
import { SessionService } from '../services/sessions';

export default function SessionReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const session = id ? SessionService.get(id) : undefined;

  if (!session) {
    return (
      <div className="page">
        <p>Session not found.</p>
        <Link to="/">← Home</Link>
      </div>
    );
  }

  const date = new Date(session.doneAt).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  const mins = Math.floor(session.timeTakenSeconds / 60);
  const secs = String(session.timeTakenSeconds % 60).padStart(2, '0');
  const pct = Math.round((session.score / session.totalMarks) * 100);
  const correctCount = session.parts.filter((p) => p.correct).length;

  return (
    <div className="page session-review">
      <header className="app-header">
        <button className="back-link" onClick={() => navigate(`/topic/${session.topicId}`)}>← Back</button>
        <h1>Session Review</h1>
        <p className="tagline">{session.paperTitle} · {session.paperSubtitle}</p>
      </header>

      <div className="review-meta">
        <div className="review-meta-item"><span className="review-meta-label">Date</span><span>📅 {date}</span></div>
        <div className="review-meta-item"><span className="review-meta-label">Time taken</span><span>⏱ {mins}m {secs}s</span></div>
        <div className="review-meta-item"><span className="review-meta-label">Score</span><span><strong>{session.score}/{session.totalMarks}</strong> ({pct}%)</span></div>
        <div className="review-meta-item"><span className="review-meta-label">Parts correct</span><span>✅ {correctCount} / {session.parts.length}</span></div>
      </div>

      <div className="review-parts">
        {session.parts.map((p, i) => (
          <div key={i} className={`result-row ${p.correct ? 'is-correct' : 'is-wrong'}`}>
            <div className="result-label">
              <span className="mark-icon">{p.correct ? '✓' : '✗'}</span>
              <span>{p.label}</span>
            </div>
            <div className="result-given">Your answer: {p.givenAnswer.trim() ? p.givenAnswer : '(blank)'}</div>
            {!p.correct && (
              <div className="result-correct"><strong>Correct answer: </strong>{p.answerDisplay}</div>
            )}
          </div>
        ))}
      </div>

      <div className="actions">
        <button className="btn-primary" onClick={() => navigate(`/topic/${session.topicId}`)}>← Back to topic</button>
      </div>
    </div>
  );
}
