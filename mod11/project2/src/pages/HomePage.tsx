import axios from 'axios';
import { useEffect, useState } from 'react';
import { FooterComponent } from '../components/FooterComponent';
import { IpInfoCard } from '../components/InfoComponent';
import { MapView } from '../components/MapComponent';
import { testOutput } from '../components/model/model';

const API_KEY = import.meta.env.VITE_IPIFY_KEY;
const API_URL = 'https://geo.ipify.org/api/v2/country,city';

export function HomePage() {
  const Mockdata = testOutput;
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(Mockdata);

  const fetchIpData = async (value = '') => {
    try {
      setLoading(true);
      setError('');

      const params: Record<string, string> = { apiKey: API_KEY };

      if (value.trim()) {
        const ipRegex =
          /^(25[0-5]|2[0-4]\d|[01]?\d\d?)(\.(25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/;

        if (ipRegex.test(value.trim())) {
          params.ipAddress = value.trim();
        } else {
          params.domain = value.trim();
        }
      }

      const res = await axios.get(API_URL, { params });
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError('Could not fetch data. Please check IP / domain.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchIpData(query);
  };

  return (
    <>
      <header className='relative bg-gradient-to-br from-[#2b2c53] to-[#3f52ff] text-white p-10 pb-32 text-center'>
        <h1 className='text-3xl font-medium mb-6'>IP Adress Tracker </h1>

        <form
          className='max-w-[540px] mx-auto flex rounded-2xl overflow-hidden bg-white'
          onSubmit={handleSubmit}
        >
          <input
            className='flex-1 px-5 py-4 text-gray-800 outline-none'
            type='text'
            placeholder='Search for any IP address or domain'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            className='bg-black text-white px-6 flex items-center justify-center'
            type='submit'
            aria-label='Search'
            disabled={loading}
          >
            ➤
          </button>
        </form>

        {error && <p className='mt-3 text-sm text-red-200'>{error}</p>}
        <div className='absolute left-1/2 transform -translate-x-1/2 top-[75%] w-full max-w-5xl z-10'>
          <IpInfoCard data={data} loading={loading} />
        </div>
      </header>

      <main className='flex-1 relative'>
        {data && data.location ? (
          <MapView
            position={[data.location.lat, data.location.lng]}
            ip={data.ip}
          />
        ) : (
          <div className='h-[400px] grid place-items-center text-[var(--text-muted)]'>
            Loading map…
          </div>
        )}
      </main>
      <FooterComponent />
    </>
  );
}
