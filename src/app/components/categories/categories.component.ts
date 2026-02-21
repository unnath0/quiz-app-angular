import { Component, inject, input, output, Signal } from '@angular/core';

@Component({
  selector: 'app-categories',
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
