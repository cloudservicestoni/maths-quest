export interface PartResult {
  partId: string;
  label: string;
  givenAnswer: string;
  correct: boolean;
  answerDisplay: string;
}

export interface SessionRecord {
  id: string;
  paperId: string;
  topicId: string;
  paperTitle: string;
  paperSubtitle: string;
  doneAt: number;
  score: number;
  totalMarks: number;
  timeTakenSeconds: number;
  parts: PartResult[];
}
