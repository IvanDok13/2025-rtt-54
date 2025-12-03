import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function NavBar() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { isAuth, logout } = authContext;

  return (
    <nav>
      <div>
        <NavLink to='/'>Home</NavLink>
      </div>

      <div>
        {isAuth === false ? (
          <NavLink to='/login'>Login</NavLink>
        ) : (
          <>
            <button onClick={() => logout()}>Log out</button>
            <NavLink to='/admin'>Admin Page</NavLink>
          </>
        )}
      </div>

      <div>
        <NavLink to='/blog'>Blog</NavLink>
      </div>
    </nav>
  );
}
