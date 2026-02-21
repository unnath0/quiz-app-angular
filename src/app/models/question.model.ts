export interface Question {
  id: number;
  category: string;
  title: string;
  options: string[];
  correctAnswerIndex: number;
  selectedAnswerIndex?: number;
}
