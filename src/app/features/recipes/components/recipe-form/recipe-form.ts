import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  imports: [FormsModule],
  templateUrl: './recipe-form.html',
  styleUrls: ['./recipe-form.css'],
})
export class RecipeForm {
  recipeCreated = output<Recipe>();

  formData = {
    name: '',
    description: '',
    prepTime: 0,
    servings: 1,
    difficulty: 'Fácil',
    imageUrl: '',
  };


  onSubmit(): void {
    if (!this.formData.name || !this.formData.description) {
      alert('Por favor completa los campos obligatorios');
      return;
    }

    const newRecipe: Recipe = {
      id: Date.now().toString(), // ID temporal
      name: this.formData.name,
      description: this.formData.description,
      prepTime: this.formData.prepTime,
      servings: this.formData.servings,
      difficulty: this.formData.difficulty,
      imageUrl: this.formData.imageUrl || undefined,
      isFavorite: false,
    };

    this.recipeCreated.emit(newRecipe);

    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      description: '',
      prepTime: 0,
      servings: 1,
      difficulty: 'Fácil',
      imageUrl: '',
    };
  }
}
