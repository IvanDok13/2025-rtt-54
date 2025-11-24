import { useSearchParams } from 'react-router-dom';
import { RecipeCard } from '../components/RecipeCard';
import EmptyState from '../components/ui/EmptyState';
import ErrorMessage from '../components/ui/ErrorMessages';
import Spinner from '../components/ui/Spinner';
import { useFetch } from '../hooks/useFetch';
import { fetchRecipesByName } from '../services/recipeApi';
import type { Recipe } from '../types';

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('query') || '';

  const { data, loading, error } = useFetch<Recipe[]>(
    () => fetchRecipesByName(query),
    [query]
  );

  if (!query) return <EmptyState text='Enter a search term to begin.' />;
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const recipes: Recipe[] = Array.isArray(data) ? data : [];

  if (!recipes.length) {
    return <EmptyState text={`No recipes found for "${query}"`} />;
  }

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        Search results for: <span className='font-bold'>{query}</span>
      </h2>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6'>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
