import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from './features/recipes/components/recipe-list/recipe-list';
import { RecipeForm } from './features/recipes/components/recipe-form/recipe-form';
import { Recipe } from './features/recipes/models/recipe.model';
import { RECIPES } from './features/recipes/models/recipe-data';
import { UserForm } from './features/recipes/components/user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeListComponent, RecipeForm, UserForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  recipes = signal<Recipe[]>(RECIPES);

  // Método para agregar una nueva receta
  onRecipeCreated(newRecipe: Recipe): void {
    this.recipes.update((list) => [...list, newRecipe]);
    console.log('✅ Receta agregada:', newRecipe);
  }

  // ✅ Método para cambiar favoritos
  onToggleFavorite(id: string): void {
    this.recipes.update((list) =>
      list.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe,
      ),
    );
    console.log('⭐ Favorito cambiado para receta ID:', id);
  }
}
