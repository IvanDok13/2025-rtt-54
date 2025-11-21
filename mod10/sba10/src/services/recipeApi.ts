import { BASE_URL } from './api-const';
import { apiClient } from './apiClient';

export async function fetchCategories() {
  const data = await apiClient(`${BASE_URL}/categories.php`);
  return data.categories || [];
}

export async function fetchRecipesByCategory(category: string) {
  const data = await apiClient(`${BASE_URL}/filter.php?c=${category}`);
  return data.meals || [];
}

export async function fetchRecipeDetails(id: string) {
  const data = await apiClient(`${BASE_URL}/lookup.php?i=${id}`);
  return data.meals?.[0] || [];
}
