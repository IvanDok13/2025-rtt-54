import { useEffect, useState } from 'react';
import type { Category } from '../types';

export function useFetch(
  fetcher: string | (() => Promise<Category>),
  dependencies = []
) {
  const [data, setData] = useState<Category | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFunction =
    typeof fetcher === 'string'
      ? () => fetch(fetcher).then(res => res.json())
      : fetcher;

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFunction();
        if (!ignore) setData(result);
      } catch (err) {
        {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unexpected error occurred');
          }
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, dependencies);

  const refetch = () => {
    setLoading(true);
    setError(null);

    fetchFunction()
      .then(result => setData(result))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}
