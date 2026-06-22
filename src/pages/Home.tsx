import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { topics } from '../data/registry';
import { ProgressService, BADGES } from '../services/progress';
import { useProgress } from '../hooks/useProgress';
import Mascot from '../components/Mascot';

const WORLD_NAMES: Record<string, string> = {
  venn:    'Venn Village',
  metric:  'Metric Mountain',
  percent: 'Percent Peak',
  money:   'Money Market',
  angles:    'Angle Academy',
  barcharts: 'Chart City',
  areas:     'Shape Station',
};

export default function Home() {
  const navigate = useNavigate();
  const progress = useProgress();
  const totalStars = ProgressService.totalStars();
  const earnedBadges = BADGES.filter((b) => progress.badges.includes(b.id));
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    setFirstVisit(ProgressService.checkIn());
  }, []);

  const topicList = topics();

  return (
    <div className="page home">
      <header className="hero">
        <Mascot mood="cheer" size={84} />
        <div>
          <h1>Maths Quest</h1>
          <p className="tagline">Learn it, play it, master it!</p>
        </div>
      </header>

      {firstVisit && progress.streak.count > 1 && (
        <motion.div
          className="checkin-banner"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>🔥</span>
          <span>Welcome back! <strong>{progress.streak.count}-day streak</strong> — keep it up!</span>
        </motion.div>
      )}

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

      <h2 className="pick-head">🗺️ Your Quest Map</h2>

      <div className="world-map">
        {topicList.map((topic, i) => {
          const { earned, max } = ProgressService.topicStars(
            topic.lessons.map((l) => l.id),
            topic.papers.map((p) => p.id),
          );
          const isConquered = max > 0 && earned === max;
          const hasProgress = earned > 0;
          const pct = max > 0 ? (earned / max) * 100 : 0;

          return (
            <div key={topic.id} className="world-node-wrap">
              {i > 0 && <div className="world-connector" />}
              <motion.button
                className={`world-node${isConquered ? ' world-conquered' : hasProgress ? ' world-active' : ''}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/topic/${topic.id}`)}
              >
                <div className="world-node-icon" style={{ borderColor: topic.accent, background: topic.accent + '22' }}>
                  <span className="world-emoji">{topic.icon}</span>
                  {isConquered && <span className="world-crown">👑</span>}
                </div>
                <div className="world-node-body">
                  <span className="world-node-name">{WORLD_NAMES[topic.id] ?? topic.title}</span>
                  <span className="world-node-meta">{topic.lessons.length} lessons · {topic.papers.length} challenges</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%`, background: topic.accent }} />
                  </div>
                  <span className="progress-label">⭐ {earned}/{max}</span>
                </div>
                <span className="world-node-arrow">›</span>
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
