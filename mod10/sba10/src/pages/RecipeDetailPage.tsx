import { useParams } from 'react-router-dom';
import { RecipeDetailsCard } from '../components/RecipeDetailsCard';
import EmptyState from '../components/ui/EmptyState';
import ErrorMessage from '../components/ui/ErrorMessages';
import Spinner from '../components/ui/Spinner';
import { useFetch } from '../hooks/useFetch';
import { fetchRecipeDetails } from '../services/recipeApi';
import type { Recipe } from '../types';

export function RecipeDetailPage() {
  const { id } = useParams();

  const { data, loading, error } = useFetch<Recipe>(() => {
    if (!id) {
      return Promise.reject(new Error('Recipe id is missing'));
    }
    return fetchRecipeDetails(id);
  }, [id]);

  if (!id) return <ErrorMessage message='Recipe ID is missing.' />;
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const recipe = data;

  if (!recipe) {
    return <EmptyState text='No recipe found.' />;
  }

  return (
    <>
      <h2 className='flex justify-center text-2xl font-semibold p-5'>
        Recipe details for: {recipe.strMeal}
      </h2>

      <div className='flex justify-center p-5 text-center text-gray-800'>
        <RecipeDetailsCard recipe={recipe} />
      </div>
    </>
  );
}
