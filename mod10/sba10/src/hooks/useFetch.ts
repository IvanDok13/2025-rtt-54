import { useEffect, useState, type DependencyList } from 'react';

export function useFetch<T>(
  fetcher: string | (() => Promise<T>),
  dependencies: DependencyList = []
) {
  const [data, setData] = useState<T | null>(null);
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
        if (err instanceof Error) {
          if (!ignore) setError(err.message);
        } else {
          if (!ignore) setError('Unexpected error');
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
      .catch(err =>
        setError(err instanceof Error ? err.message : 'Unexpected error')
      )
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}
