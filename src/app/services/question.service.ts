import { effect, Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { DUMMY_QUESTIONS } from '../components/questions/dummy-questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions = signal<Question[]>(DUMMY_QUESTIONS);

  constructor() {
    const questions = localStorage.getItem('questions');

    if (questions) {
      this.questions.set(JSON.parse(questions));
    }

    effect(() => {
      localStorage.setItem('questions', JSON.stringify(this.questions()));
    });
  }

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
