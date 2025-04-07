'use client';

import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/2.1/?apikey=3f26b556-b203-412e-aba8-23955b6433f7&lang=ru-RU';
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.76, 37.64], // Москва
            zoom: 10,
          });

          // Пример точек
          const points = [
            { coords: [64.550468, 39.775883], title: 'Йцу' },
            { coords: [55.751244, 37.618423], title: 'Точка вап2' },
          ];

          points.forEach(({ coords, title }) => {
            const placemark = new window.ymaps.Placemark(coords, {
              balloonContent: title,
            });
            map.geoObjects.add(placemark);
          });
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <h1>ГДЕ КУПИТЬ</h1>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden' }}
      />
    </div>
  );
};

export default Map;
