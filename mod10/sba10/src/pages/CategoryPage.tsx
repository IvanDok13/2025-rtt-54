import { useParams } from 'react-router-dom';
import { RecipeCard } from '../components/RecipeCard';
import EmptyState from '../components/ui/EmptyState';
import ErrorMessage from '../components/ui/ErrorMessages';
import Spinner from '../components/ui/Spinner';
import { useFetch } from '../hooks/useFetch';
import { fetchRecipesByCategory } from '../services/recipeApi';
import type { Recipe } from '../types';

export function CategoryPage() {
  const { categoryName } = useParams();

  const { data, loading, error } = useFetch<Recipe[]>(() => {
    if (!categoryName) {
      return Promise.reject(new Error('Category name is missing'));
    }
    return fetchRecipesByCategory(categoryName);
  }, [categoryName]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const recipes: Recipe[] = Array.isArray(data) ? data : [];

  if (!recipes.length) {
    return <EmptyState text='No categories found.' />;
  }

  return (
    <>
      <h2 className='flex justify-center text-2xl font-semibold p-5'>
        Categoty Page
      </h2>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5 p-5'>
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
