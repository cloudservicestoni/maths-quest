/*
 * Content registry — the single place topics plug in.
 * Adding a topic: create its data files, import them here, add to the arrays.
 */
import type { Lesson, Paper, Topic } from '../types/content';
import { topicMeta, topicOrder } from './topics';

import { vennLessons } from './venn/lessons';
import { vennPaper1 } from './venn/paper1';
import { vennPaper2 } from './venn/paper2';
import { vennPaper3 } from './venn/paper3';

import { metricLessons } from './metric/lessons';
import { metricPaper1 } from './metric/paper1';
import { metricPaper2 } from './metric/paper2';
import { metricPaper3 } from './metric/paper3';

import { percentLessons } from './percent/lessons';
import { percentPaper1 } from './percent/paper1';
import { percentPaper2 } from './percent/paper2';
import { percentPaper3 } from './percent/paper3';

import { moneyLessons } from './money/lessons';
import { moneyPaper1 } from './money/paper1';
import { moneyPaper2 } from './money/paper2';
import { moneyPaper3 } from './money/paper3';

export const allLessons: Lesson[] = [...vennLessons, ...metricLessons, ...percentLessons, ...moneyLessons];
export const allPapers: Paper[] = [
  vennPaper1, vennPaper2, vennPaper3,
  metricPaper1, metricPaper2, metricPaper3,
  percentPaper1, percentPaper2, percentPaper3,
  moneyPaper1, moneyPaper2, moneyPaper3,
];

export function getPaper(id: string): Paper | undefined {
  return allPapers.find((p) => p.id === id);
}

export function getLesson(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function lessonsForTopic(topicId: string): Lesson[] {
  return allLessons.filter((l) => l.topicId === topicId).sort((a, b) => a.order - b.order);
}

/** Topics in configured display order, with lessons sorted by `order`. */
export function topics(): Topic[] {
  const byId: Record<string, Topic> = {};
  const ensure = (topicId: string, title?: string, description?: string): Topic => {
    if (!byId[topicId]) {
      const meta = topicMeta(topicId);
      byId[topicId] = {
        id: topicId,
        title: title ?? 'General',
        description: description ?? '',
        icon: meta.icon,
        accent: meta.accent,
        lessons: [],
        papers: [],
      };
    }
    return byId[topicId];
  };
  for (const l of allLessons) ensure(l.topicId, l.topicTitle, l.topicDescription).lessons.push(l);
  for (const p of allPapers) ensure(p.topicId, p.topicTitle, p.topicDescription).papers.push(p);
  const list = Object.values(byId);
  list.forEach((t) => t.lessons.sort((a, b) => a.order - b.order));
  return list.sort((a, b) => topicOrder(a.id) - topicOrder(b.id));
}

export function getTopic(id: string): Topic | undefined {
  return topics().find((t) => t.id === id);
}
