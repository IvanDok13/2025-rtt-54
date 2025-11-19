import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function LoginPage() {
  const { login } = useContext(AuthContext);
  // read the context (login)
  const handleLogin = () => {
    // call the login func from AuthContext
    login();
    alert('Logged in!');
  };

  return (
    <main>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}
