import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionService } from './services/question.service';

import { QuestionsComponent } from './components/questions/questions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CategoriesComponent, QuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  private questionService = inject(QuestionService);

  categories = signal(this.questionService.getCategories());

  selectedCategory = signal<string | null>(null);

  // when questions component displays this, the value is not computed every time
  // only when selected category changes, this changes
  questionsForCategory = computed(() => {
    const category = this.selectedCategory();
    if (!category) return null;

    return this.questionService.getQuestionsByCategory(category);
  });

  onSelectedCategory(category: string) {
    this.selectedCategory.set(category);
    this.questionService.isSubmitted.set(false);
  }
}
