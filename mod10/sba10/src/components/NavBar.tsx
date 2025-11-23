import { NavLink } from 'react-router-dom';
export function NavBar() {
  return (
    <nav className='flex bg-white px-5 py-3 shadow-md'>
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
    </nav>
  );
}
