import { useMemo, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getLesson, lessonsForTopic } from '../data/registry';
import { ProgressService } from '../services/progress';
import Diagram from '../components/Diagram';
import PracticeBlock from '../components/PracticeBlock';
import Mascot from '../components/Mascot';

function mdToHtml(body: string): string {
  if (!body) return '';
  const isMd = /\*\*/.test(body) || /(?:^|\n)- /.test(body) || /(?:^|\n)\s*\|/.test(body);
  if (!isMd) return body;

  const inline = (s: string) =>
    s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
     .replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');

  const lines = body.split('\n');
  let out = '';
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') { i++; continue; }

    if (/^\s*\|/.test(line)) {
      out += '<table class="md-table"><thead>';
      let first = true;
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        const row = lines[i].trim();
        if (/^[\s|:-]+$/.test(row)) { i++; continue; }
        const cells = row.split('|').slice(1, -1).map(c => inline(c.trim()));
        if (first) {
          out += '<tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
          first = false;
        } else {
          out += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
        }
        i++;
      }
      out += '</tbody></table>';
      continue;
    }

    if (/^- /.test(line.trim())) {
      out += '<ul>';
      while (i < lines.length && /^- /.test(lines[i].trim())) {
        out += '<li>' + inline(lines[i].trim().slice(2)) + '</li>';
        i++;
      }
      out += '</ul>';
      continue;
    }

    let para = '';
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^\s*\|/.test(lines[i]) &&
      !/^- /.test(lines[i].trim())
    ) {
      para += (para ? ' ' : '') + lines[i].trim();
      i++;
    }
    if (para) out += '<p>' + inline(para) + '</p>';
  }

  return out;
}

function piIntroText(level: string): string {
  const stars = (level.match(/⭐/g) ?? []).length;
  if (stars >= 3) return "This one's the toughest yet — but that's exactly how we get smarter! Take your time 💪";
  if (stars === 2) return "You've got the basics sorted! Now let's go a bit deeper. I'm right here with you 🦉";
  return "Let's build the foundations together. Work through each step and you'll get it ⭐";
}

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = id ? getLesson(id) : undefined;

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

      <div className="pi-intro">
        <Mascot mood="happy" size={40} />
        <p className="pi-intro-text">{piIntroText(lesson.level)}</p>
      </div>

      {lesson.sections.map((s, i) => {
        if (s.type === 'note') {
          return (
            <section className="lesson-note" key={i}>
              {s.heading && <h3>{s.heading}</h3>}
              {s.body && <div className="note-body" dangerouslySetInnerHTML={{ __html: mdToHtml(s.body) }} />}
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
