import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = input.required<string[]>();

  selectedCategory = output<string>();

  onSelectCategory(category: string) {
    this.selectedCategory.emit(category);
  }
}
