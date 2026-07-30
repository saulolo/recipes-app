import { Recipe } from './recipe.model';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Pasta Carbonara',
    description: 'Pasta italiana con salsa cremosa',
    prepTime: 25,
    servings: 4,
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Tacos al Pastor',
    description: 'Tacos mexicanos con piña',
    prepTime: 50,
    servings: 6,
    difficulty: 'Media',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Ensalada César',
    description: 'Ensalada con pollo y aderezo',
    prepTime: 30,
    servings: 4,
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    isFavorite: false,
  },
];
