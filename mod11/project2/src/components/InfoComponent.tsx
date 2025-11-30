import React from 'react';
import type { IpifyResponse } from '../types/index.ts';

interface IpInfoCardProps {
  data: IpifyResponse | null;
  loading: boolean;
}

export const IpInfoCard: React.FC<IpInfoCardProps> = ({ data, loading }) => {
  if (loading && !data) {
    return (
      <section className='bg-white shadow-xl rounded-2xl p-6 text-center'>
        <p>Loading…</p>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const { ip, isp, location } = data;

  const items = [
    { label: 'IP ADDRESS', value: ip },
    {
      label: 'LOCATION',
      value: `${location.city}, ${location.region} ${location.postalCode}`,
    },
    { label: 'TIMEZONE', value: `UTC ${location.timezone}` },
    { label: 'ISP', value: isp },
  ];

  return (
    <section className='bg-white shadow-2xl rounded-2xl p-8 md:p-10 grid md:grid-cols-4 gap-6 text-center md:text-left'>
      {items.map((item, index) => (
        <div key={item.label} className='relative'>
          <h2 className='text-[0.65rem] tracking-[0.2em] text-gray-500 uppercase font-semibold mb-2'>
            {item.label}
          </h2>
          <p className='text-lg md:text-xl font-medium text-gray-900 break-words'>
            {item.value || '-'}
          </p>

          {index !== items.length - 1 && (
            <div className='hidden md:block absolute top-0 right-0 w-px h-full bg-gray-200' />
          )}
        </div>
      ))}
    </section>
  );
};
