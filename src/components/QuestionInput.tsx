/*
 * One controlled input for any answer type. Choice → buttons; everything else
 * → a text field. Shared by lessons (instant feedback) and exams.
 */
import type { Part } from '../types/content';

interface Props {
  part: Part;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  /** 'correct' | 'wrong' | undefined — tints the field after marking. */
  state?: 'correct' | 'wrong';
}

export default function QuestionInput({ part, value, onChange, disabled, state }: Props) {
  if (part.type === 'choice') {
    return (
      <div className="choice-group">
        {part.options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={'choice-btn' + (value === opt ? ' chosen' : '') +
              (state && value === opt ? (state === 'correct' ? ' choice-correct' : ' choice-wrong') : '')}
            disabled={disabled}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }

  const stateClass = state === 'correct' ? ' input-correct' : state === 'wrong' ? ' input-wrong' : '';
  return (
    <input
      className={'answer-input' + stateClass}
      type="text"
      inputMode={part.type === 'number' ? 'decimal' : 'text'}
      autoComplete="off"
      autoCapitalize="off"
      spellCheck={false}
      placeholder={part.placeholder ?? 'Your answer'}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
