import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search recipes...'
        className='border rounded-lg px-3 py-1 text-sm w-full sm:w-60'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button
        type='submit'
        className='bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition'
      >
        Search
      </button>
    </form>
  );
}
