import type { ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Recipe } from '../types';
import { FavoritesContext } from './FavoritesContext';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<Recipe[]>('favorites', []);

  const addFavorite = (recipe: Recipe) => {
    if (!favorites.find(f => f.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(recipe => recipe.idMeal !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(recipe => recipe.idMeal === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
