import { Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { DUMMY_QUESTIONS } from '../components/questions/dummy-questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions = signal<Question[]>(DUMMY_QUESTIONS);

  getCategories(): string[] {
    const categories = this.questions().map((q) => q.category);

    // converts set back to array. ... is called spread operator
    return [...new Set(categories)];
  }

  getQuestionsByCategory(category: string) {
    return this.questions().filter((q) => q.category === category);
  }

  addSelectedOptionToQuestion(questionId: number, optionId: number) {
    this.questions.update((questions) =>
      questions.map((q) => (q.id === questionId ? { ...q, selectedAnswerIndex: optionId } : q)),
    );
  }

  getScore(category: string) {
    return this.questions().filter(
      (q) => q.category === category && q.correctAnswerIndex === q.selectedAnswerIndex,
    ).length;
  }
}
