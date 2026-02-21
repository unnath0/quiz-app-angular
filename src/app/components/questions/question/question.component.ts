import { Component, inject, input, output } from '@angular/core';

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

  optionChanged = output();

  onSelectOption(id: number) {
    this.questionService.addSelectedOptionToQuestion(this.question().id, id);
    this.optionChanged.emit();
  }
}
