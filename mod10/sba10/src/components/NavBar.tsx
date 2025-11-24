import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';
export function NavBar() {
  return (
    <nav className='p-4 bg-white shadow-md flex justify-between items-center gap-4'>
      <div className='flex gap-5 [&>a]:no-underline [&>a]:text-gray-800 [&>a]:font-medium [&>a]:pb-0.5 [&>a]:transition-colors [&>a]:duration-200 [&>a]:hover:text-green-600 [&>a].active-link:border-b-2 [&>a].active-link:border-green-600 [&>a].active-link:text-green-600'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active-link' : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to='/favorites'
          className={({ isActive }) => (isActive ? 'active-link' : undefined)}
        >
          Favorites
        </NavLink>
      </div>

      <SearchBar />
    </nav>
  );
}
