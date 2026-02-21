import { Component, inject, input } from '@angular/core';

import { Question } from '../../../models/question.model';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  question = input.required<Question>();

  private questionService = inject(QuestionService);

  isSubmitted = input<boolean>();

  onSelectOption(id: number) {
    this.questionService.addSelectedOptionToQuestion(this.question().id, id);
    this.questionService.isSubmitted.set(false);
  }
}
