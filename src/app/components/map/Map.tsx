'use client';
import { useEffect, useRef } from 'react';
import { placemarks } from './Map.constants';

export const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<ymaps.Map | null>(null);

  useEffect(() => {
    const loadMap = () => {
      if (typeof window !== 'undefined' && window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          if (mapRef.current?.firstChild) {
            mapRef.current.innerHTML = '';
          }

          if (mapRef.current) {
            mapInstance.current = new window.ymaps.Map(mapRef.current, {
              center: [55.7, 37.6],
              zoom: 9,
              controls: ['fullscreenControl'],
            });
          }

          if (mapInstance.current) {
            mapInstance.current.behaviors.disable('scrollZoom');
            mapInstance.current.controls.add('zoomControl', {
              float: 'none',
              position: { right: 10, bottom: 45 },
            });
          }

          placemarks.forEach(({ coordinates, title, description }) => {
            const marker = new window.ymaps.Placemark(
              coordinates,
              {
                balloonContentHeader: title,
                balloonContentBody: description,
              },
              {
                preset: 'islands#redDotIcon',
              },
            );
            if (mapInstance.current) mapInstance.current.geoObjects.add(marker);
          });
        });
      }
    };

    if (window.ymaps) {
      loadMap();
    } else {
      const interval = setInterval(() => {
        if (window.ymaps) {
          clearInterval(interval);
          loadMap();
        }
      }, 300);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '800px' }} />
    </div>
  );
};
