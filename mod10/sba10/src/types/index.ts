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
