export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryCardProps {
  category: Category;
}

export interface EmptyStateProps {
  text?: string;
}

export interface ErrorMessageProps {
  message?: string;
}
