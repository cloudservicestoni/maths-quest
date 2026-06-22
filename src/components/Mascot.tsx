/*
 * "Pi" the friendly owl mascot. Moods change its face for encouragement.
 */
type Mood = 'happy' | 'cheer' | 'think' | 'oops' | 'nervous';

export default function Mascot({ mood = 'happy', size = 96 }: { mood?: Mood; size?: number }) {
  const eyeY = mood === 'cheer' ? 70 : 72;
  const pupilR = mood === 'nervous' ? 9 : 6;
  const leftPupilX = mood === 'think' ? 50 : 46;
  const rightPupilX = mood === 'think' ? 78 : 74;

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="Pi the owl">
      {/* body */}
      <ellipse cx="60" cy="74" rx="42" ry="40" fill="#6366f1" />
      <ellipse cx="60" cy="80" rx="30" ry="30" fill="#eef2ff" />
      {/* ears */}
      <path d="M28 44 L34 20 L48 38 Z" fill="#6366f1" />
      <path d="M92 44 L86 20 L72 38 Z" fill="#6366f1" />
      {/* eyes */}
      <circle cx="46" cy={eyeY} r="14" fill="#fff" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="74" cy={eyeY} r="14" fill="#fff" stroke="#4f46e5" strokeWidth="2" />
      {/* pupils */}
      {mood === 'oops' ? (
        <>
          <path d="M40 70 q6 -6 12 0" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
          <path d="M68 70 q6 -6 12 0" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx={leftPupilX} cy={eyeY} r={pupilR} fill="#0f172a" />
          <circle cx={rightPupilX} cy={eyeY} r={pupilR} fill="#0f172a" />
        </>
      )}
      {/* sweat drop for nervous */}
      {mood === 'nervous' && (
        <ellipse cx="89" cy="52" rx="3" ry="5" fill="#93c5fd" opacity="0.85" />
      )}
      {/* beak */}
      <path d="M54 84 L66 84 L60 94 Z" fill="#f59e0b" />
      {/* mouth expressions */}
      {mood === 'cheer' && <path d="M50 98 q10 10 20 0" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />}
      {mood === 'nervous' && <path d="M52 97 q8 -4 16 0" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />}
      {/* sparkle for cheer */}
      {mood === 'cheer' && <text x="98" y="34" fontSize="20">✨</text>}
    </svg>
  );
}
