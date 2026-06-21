import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTopic } from '../data/registry';
import { ProgressService } from '../services/progress';
import { useProgress } from '../hooks/useProgress';
import Stars from '../components/Stars';

export default function TopicPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const progress = useProgress();
  const topic = id ? getTopic(id) : undefined;

  if (!topic) {
    return <div className="page"><p>Topic not found.</p><Link to="/">← Home</Link></div>;
  }

  return (
    <div className="page topic-page">
      <header className="app-header">
        <Link to="/" className="back-link">← Home</Link>
        <h1><span className="topic-icon-inline">{topic.icon}</span> {topic.title}</h1>
        {topic.description && <p className="tagline">{topic.description}</p>}
      </header>

      {topic.lessons.length > 0 && (
        <>
          <h3 className="section-head">📘 Learn</h3>
          <div className="card-grid">
            {topic.lessons.map((l, i) => (
              <motion.button
                key={l.id}
                className="card card-lesson"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/lesson/${l.id}`)}
              >
                <span className="card-title">{l.title.replace(/^Lesson \d+ — /, '')}</span>
                <span className="card-sub">{l.level}</span>
                <span className="card-meta">{l.summary}</span>
                <Stars count={ProgressService.lessonStars(l.id)} />
              </motion.button>
            ))}
          </div>
        </>
      )}

      {topic.papers.length > 0 && (
        <>
          <h3 className="section-head">📝 Test yourself</h3>
          <div className="card-grid">
            {topic.papers.map((p, i) => {
              const best = progress.papers[p.id];
              return (
                <motion.button
                  key={p.id}
                  className="card card-exam"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(`/exam/${p.id}`)}
                >
                  <span className="card-title">{p.title}</span>
                  <span className="card-sub">{p.subtitle}</span>
                  <span className="card-meta">{p.totalMarks} marks · {p.timeLimitMinutes} min</span>
                  {best ? <span className="card-best">Best: {best.bestScore}/{p.totalMarks}</span> : null}
                  <Stars count={ProgressService.paperStars(p.id)} />
                </motion.button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
