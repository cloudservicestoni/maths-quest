import { useMemo, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getLesson, lessonsForTopic } from '../data/registry';
import { ProgressService } from '../services/progress';
import Diagram from '../components/Diagram';
import PracticeBlock from '../components/PracticeBlock';

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = id ? getLesson(id) : undefined;

  // Track correctness of every practice part across the lesson.
  const results = useRef<Record<string, boolean>>({});

  const totalPracticeParts = useMemo(() => {
    if (!lesson) return 0;
    return lesson.sections.reduce((n, s) => n + (s.type === 'practice' ? s.parts.length : 0), 0);
  }, [lesson]);

  if (!lesson) {
    return <div className="page"><p>Lesson not found.</p><Link to="/">← Menu</Link></div>;
  }

  const siblings = lessonsForTopic(lesson.topicId);
  const idx = siblings.findIndex((l) => l.id === lesson.id);
  const next = siblings[idx + 1];

  function finish(goNext: boolean) {
    const correct = Object.values(results.current).filter(Boolean).length;
    ProgressService.recordLesson(lesson!.id, correct, totalPracticeParts);
    if (goNext && next) navigate(`/lesson/${next.id}`);
    else navigate(`/topic/${lesson!.topicId}`);
  }

  return (
    <div className="page lesson">
      <header className="app-header">
        <Link to={`/topic/${lesson.topicId}`} className="back-link">← Back</Link>
        <h1>{lesson.title}</h1>
        <p className="tagline">{lesson.level}  {lesson.summary}</p>
      </header>

      {lesson.sections.map((s, i) => {
        if (s.type === 'note') {
          return (
            <section className="lesson-note" key={i}>
              {s.heading && <h3>{s.heading}</h3>}
              {s.body && <div className="note-body" dangerouslySetInnerHTML={{ __html: s.body }} />}
              {s.diagram && <Diagram spec={s.diagram} />}
            </section>
          );
        }
        if (s.type === 'example') {
          return (
            <section className="lesson-example" key={i}>
              <div className="example-tag">Worked example</div>
              {s.heading && <h3>{s.heading}</h3>}
              {s.intro && <p className="note-body">{s.intro}</p>}
              {s.diagram && <Diagram spec={s.diagram} />}
              {s.steps && (
                <ol className="example-steps">
                  {s.steps.map((st, j) => <li key={j} dangerouslySetInnerHTML={{ __html: st }} />)}
                </ol>
              )}
              {s.result && <div className="example-result" dangerouslySetInnerHTML={{ __html: s.result }} />}
            </section>
          );
        }
        return (
          <PracticeBlock
            key={i}
            section={s}
            onResult={(partId, correct) => { results.current[partId] = correct; }}
          />
        );
      })}

      <div className="actions">
        {next
          ? <button className="btn-primary" onClick={() => finish(true)}>Next: {next.title.replace(/^Lesson \d+ — /, '')}</button>
          : <div className="lesson-done">🎉 That's all the lessons! Try an exam paper when you're ready.</div>}
        <button className="btn-ghost" onClick={() => finish(false)}>← Back to topic</button>
      </div>
    </div>
  );
}
