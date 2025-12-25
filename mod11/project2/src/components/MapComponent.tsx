import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useRef } from 'react';

interface MapViewProps {
  position: [number, number];
  ip: string;
}

export const MapView: React.FC<MapViewProps> = ({ position, ip }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY as string,
    libraries: ['marker'],
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = w.google as any;

    if (!google?.maps?.marker?.AdvancedMarkerElement) return;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: mapRef.current,
      position: { lat: position[0], lng: position[1] },
      title: ip,
    });

    return () => {
      marker.map = null;
    };
  }, [isLoaded, position, ip]);

  if (!isLoaded) {
    return (
      <div className='h-[400px] grid place-items-center text-gray-400'>
        Loading map…
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={13}
      center={{ lat: position[0], lng: position[1] }}
      mapContainerClassName='w-full h-[500px]'
      options={{
        mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
      }}
      onLoad={map => {
        mapRef.current = map;
      }}
    />
  );
};
