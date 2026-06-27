import type { SessionRecord } from '../types/session';

const KEY = 'mathsquest:sessions:v1';
const MAX_PER_PAPER = 3;

function load(): Record<string, SessionRecord[]> {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}'); }
  catch { return {}; }
}

function persist(data: Record<string, SessionRecord[]>): void {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export const SessionService = {
  save(record: SessionRecord): void {
    const data = load();
    data[record.paperId] = [record, ...(data[record.paperId] ?? [])].slice(0, MAX_PER_PAPER);
    persist(data);
  },

  list(paperId: string): SessionRecord[] {
    return load()[paperId] ?? [];
  },

  listForTopic(topicId: string): SessionRecord[] {
    return Object.values(load())
      .flat()
      .filter((s) => s.topicId === topicId)
      .sort((a, b) => b.doneAt - a.doneAt);
  },

  get(sessionId: string): SessionRecord | undefined {
    for (const sessions of Object.values(load())) {
      const found = sessions.find((s) => s.id === sessionId);
      if (found) return found;
    }
    return undefined;
  },
};
