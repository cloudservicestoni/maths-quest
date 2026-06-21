import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { topics } from '../data/registry';
import { ProgressService, BADGES } from '../services/progress';
import { useProgress } from '../hooks/useProgress';
import Mascot from '../components/Mascot';

export default function Home() {
  const navigate = useNavigate();
  const progress = useProgress();
  const totalStars = ProgressService.totalStars();
  const earnedBadges = BADGES.filter((b) => progress.badges.includes(b.id));

  return (
    <div className="page home">
      <header className="hero">
        <Mascot mood="cheer" size={84} />
        <div>
          <h1>Maths Quest</h1>
          <p className="tagline">Learn it, play it, master it!</p>
        </div>
      </header>

      <div className="stat-strip">
        <div className="stat"><span className="stat-num">⭐ {totalStars}</span><span className="stat-label">stars</span></div>
        <div className="stat"><span className="stat-num">🔥 {progress.streak.count}</span><span className="stat-label">day streak</span></div>
        <div className="stat"><span className="stat-num">🏅 {earnedBadges.length}</span><span className="stat-label">badges</span></div>
      </div>

      {earnedBadges.length > 0 && (
        <div className="badge-row">
          {earnedBadges.map((b) => (
            <span key={b.id} className="badge" title={b.label}>{b.emoji} {b.label}</span>
          ))}
        </div>
      )}

      <h2 className="pick-head">Pick a topic</h2>
      <div className="card-grid">
        {topics().map((topic, i) => {
          const { earned, max } = ProgressService.topicStars(
            topic.lessons.map((l) => l.id),
            topic.papers.map((p) => p.id),
          );
          const pct = max > 0 ? (earned / max) * 100 : 0;
          return (
            <motion.button
              key={topic.id}
              className="topic-card"
              style={{ borderColor: topic.accent }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/topic/${topic.id}`)}
            >
              <span className="topic-icon" style={{ background: topic.accent + '22' }}>{topic.icon}</span>
              <span className="topic-card-title">{topic.title}</span>
              <span className="topic-card-desc">{topic.description}</span>
              <span className="topic-card-meta">{topic.lessons.length} lessons · {topic.papers.length} papers</span>
              <span className="progress-track">
                <span className="progress-fill" style={{ width: `${pct}%`, background: topic.accent }} />
              </span>
              <span className="progress-label">⭐ {earned}/{max}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
