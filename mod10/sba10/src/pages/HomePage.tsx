import { CategoryCard } from '../components/CategoryCard';
import EmptyState from '../components/ui/EmptyState';
import ErrorMessage from '../components/ui/ErrorMessages';
import Spinner from '../components/ui/Spinner';
import { useFetch } from '../hooks/useFetch';
import { fetchCategories } from '../services/recipeApi';
import type { Category } from '../types';

export function HomePage() {
  const { data, loading, error } = useFetch(() => fetchCategories(), []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const categories: Category[] = Array.isArray(data) ? data : [];

  if (!categories.length) {
    return <EmptyState text='No categories found.' />;
  }

  return (
    <>
      <h1 className='flex justify-center text-2xl font-semibold p-5'>
        Meal Categories:
      </h1>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5 p-5'>
        {categories.map((category: Category) => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </div>
    </>
  );
}
