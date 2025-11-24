import type { Recipe } from '../types';

export function extractIngredients(recipe: Recipe) {
  const ingredients: { ingredient: string; measure: string }[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
    const measure = recipe[`strMeasure${i}` as keyof Recipe];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient,
        measure: measure || '',
      });
    }
  }

  return ingredients;
}
