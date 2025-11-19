import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { data } from './lib/posts';
import { AdminPage } from './pages/AdminPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const [blogs] = useState(data);
  return (
    <>
      <h1>Lab 10.4</h1>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPostPage blogs={blogs} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPage />} />

        <Route path='/blog/:slug' element={<BlogIndexPage blogs={blogs} />} />
      </Routes>
    </>
  );
}

export default App;
