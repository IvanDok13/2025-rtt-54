import { Link } from 'react-router-dom';
import type { CategoryCardProps } from '../types';

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${category.strCategory}`}
      className='block bg-white rounded-xl p-3 text-center no-underline text-gray-800 shadow-md hover:-translate-y-1 transition-transform duration-200'
    >
      <h3 className='font-semibold text-lg mb-3 truncate'>
        {category.strCategory}
      </h3>

      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className='w-full rounded-lg mb-3'
        width='200'
      />
    </Link>
  );
}
