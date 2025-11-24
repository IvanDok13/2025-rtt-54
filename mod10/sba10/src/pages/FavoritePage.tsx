import { RecipeCard } from '../components/RecipeCard';
import EmptyState from '../components/ui/EmptyState';
import { useFavorites } from '../hooks/useFavorites';
import type { Recipe } from '../types';

export function FavoritesPage() {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return (
      <div className='p-10 text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Your Favorites</h2>
        <EmptyState text="You haven't added any favorite recipes yet." />

        <p className='text-gray-600 mt-4'>
          Browse recipes and click “Add to Favorites” to save them here.
        </p>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        Your Favorites
      </h2>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6'>
        {favorites.map((recipe: Recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
