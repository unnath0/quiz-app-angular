export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  selectedAnswerIndex?: number;
}
