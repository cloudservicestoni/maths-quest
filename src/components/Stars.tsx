/* Up to 3 stars, filled to `count`. */
export default function Stars({ count, size = 18 }: { count: number; size?: number }) {
  return (
    <span className="stars" aria-label={`${count} of 3 stars`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={i < count ? 'star on' : 'star'} style={{ fontSize: size }}>★</span>
      ))}
    </span>
  );
}
