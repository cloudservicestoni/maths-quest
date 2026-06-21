/*
 * Topic presentation metadata — icon, accent colour, and display order.
 * This is where a new topic registers how it looks on the home screen.
 * Keys are topicId. Order in this array = order on the home grid.
 */
export interface TopicMeta { id: string; icon: string; accent: string; }

export const TOPIC_META: TopicMeta[] = [
  { id: 'venn', icon: '🔵', accent: '#6366f1' },
  { id: 'metric', icon: '📏', accent: '#10b981' },
  { id: 'percent', icon: '💯', accent: '#ec4899' },
  { id: 'money', icon: '💷', accent: '#ca8a04' },
];

const fallback: Omit<TopicMeta, 'id'> = { icon: '📚', accent: '#6366f1' };

export function topicMeta(id: string): Omit<TopicMeta, 'id'> {
  return TOPIC_META.find((t) => t.id === id) ?? fallback;
}

/** Position in the configured order; unknown topics sort last. */
export function topicOrder(id: string): number {
  const i = TOPIC_META.findIndex((t) => t.id === id);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
}
