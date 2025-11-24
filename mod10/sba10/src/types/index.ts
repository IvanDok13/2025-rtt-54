export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryCardProps {
  category: Category;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface EmptyStateProps {
  text?: string;
}

export interface ErrorMessageProps {
  message?: string;
}

export interface FavoritesContextValue {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}
