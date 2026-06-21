/*
 * A practice block (one prompt + parts) with instant Check feedback.
 * Reports each part's correctness up so the lesson can award stars.
 */
import { useState } from 'react';
import type { Section } from '../types/content';
import { markPart } from '../services/marking';
import Diagram from './Diagram';
import QuestionInput from './QuestionInput';

type PracticeSection = Extract<Section, { type: 'practice' }>;

export default function PracticeBlock({ section, onResult }:
  { section: PracticeSection; onResult: (partId: string, correct: boolean) => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function check() {
    const next: Record<string, boolean> = {};
    for (const part of section.parts) {
      const r = markPart(part, answers[part.id] ?? '');
      next[part.id] = r.correct;
      onResult(part.id, r.correct);
    }
    setChecked(next);
  }

  const hasChecked = Object.keys(checked).length > 0;

  return (
    <section className="lesson-practice">
      <div className="practice-tag">Practice</div>
      {section.heading && <h3>{section.heading}</h3>}
      {section.prompt && <p className="q-prompt">{section.prompt}</p>}
      {section.diagram && <Diagram spec={section.diagram} />}

      {section.parts.map((part) => {
        const isChecked = part.id in checked;
        const correct = checked[part.id];
        return (
          <div className="part" key={part.id}>
            <label className="part-label">{part.label}</label>
            <QuestionInput
              part={part}
              value={answers[part.id] ?? ''}
              onChange={(v) => setAnswers((a) => ({ ...a, [part.id]: v }))}
              state={isChecked ? (correct ? 'correct' : 'wrong') : undefined}
            />
            {isChecked && (
              <div className="feedback">
                <div className={'fb-line ' + (correct ? 'fb-correct' : 'fb-wrong')}>
                  {correct ? '✓ Correct!' : '✗ Not quite'}
                </div>
                {!correct && <div className="fb-answer"><strong>Answer: </strong>{part.answerDisplay}</div>}
                {part.explanation && <div className="fb-why">💡 {part.explanation}</div>}
              </div>
            )}
          </div>
        );
      })}

      <button className="btn-primary check-btn" onClick={check}>
        {hasChecked ? 'Check again' : 'Check my answers'}
      </button>
    </section>
  );
}
