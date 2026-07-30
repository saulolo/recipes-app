export interface Recipe {
  id: string;
  name: string;
  description: string;
  prepTime: number;
  servings: number;
  difficulty: string;
  imageUrl?: string;
  isFavorite: boolean;
}
