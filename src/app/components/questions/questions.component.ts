import { Component, effect, inject, input, signal } from '@angular/core';
import { QuestionComponent } from './question/question.component';

import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  questions = input.required<Question[]>();

  private questionService = inject(QuestionService);

  result = signal<number>(0);

  isSubmitted = signal(false);

  constructor() {
    effect(() => {
      const questions = this.questions();
      if (questions.length) this.isSubmitted.set(false);
    });
  }

  onSubmit() {
    if (!this.questions().length) return;

    this.isSubmitted.set(true);
    this.result.set(this.questionService.getScore(this.questions()[0].category));
  }

  onOptionChange() {
    this.isSubmitted.set(false);
  }
}
