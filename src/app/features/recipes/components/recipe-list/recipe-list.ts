import { Component, input, output } from '@angular/core';
//                      ↑ Importar input (no signal)
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.css'],
})
export class RecipeListComponent {
  recipes = input.required<Recipe[]>();

  favoriteToggled = output<string>();

  toggleFavorite(id: string): void {
    this.favoriteToggled.emit(id);
    console.log('Toggle favorite para receta:', id);
  }
}
