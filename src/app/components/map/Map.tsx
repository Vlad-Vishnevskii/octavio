'use client';
import { useEffect, useRef } from 'react';

export const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (typeof window !== 'undefined' && window.ymaps) {
        window.ymaps.ready(() => {
          // Типизация переменных для карты и маркеров
          const map = new window.ymaps.Map(mapRef.current as HTMLElement, {
            center: [55.7, 37.6], // Москва (центр по умолчанию)
            zoom: 9, // Начальный зум
            controls: ['fullscreenControl'],
          });

          map.behaviors.disable('scrollZoom');
          map.controls.add('zoomControl', {
            float: 'none',
            position: {
              right: 10,
              bottom: 45,
            },
          });

          // Массив с координатами, заголовками и описаниями для маркеров
          const placemarks = [
            {
              coordinates: [55.751574, 37.573856],
              title: 'Красная площадь',
              description: 'Красная площадь — центральная площадь Москвы.',
            },
            {
              coordinates: [55.757, 37.617],
              title: 'Кремль',
              description: 'Московский Кремль — историческая крепость в центре Москвы.',
            },
            {
              coordinates: [55.74, 37.618],
              title: 'Третьяковская галерея',
              description: 'Третьяковская галерея — крупнейшая коллекция русского искусства.',
            },
            {
              coordinates: [55.806757, 37.583805],
              title: '<h2 class="mb-1">«Dr.Head»</h2>',
              description:
                '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74955131043" class="maps__hints--phone">+7 (495) 513-10-43</a></p><h4>Сайт</h4><p><a href="https://www.doctorhead.ru/" class="maps__hints--site" target="_blank">www.doctorhead.ru</a></p></div>',
            },
          ];

          // Добавление маркеров на карту
          placemarks.forEach(placemark => {
            const { coordinates, title, description } = placemark;

            const marker = new window.ymaps.Placemark(
              coordinates,
              {
                balloonContentHeader: title, // Заголовок
                balloonContentBody: description, // Описание
              },
              {
                preset: 'islands#redDotIcon', // Красный маркер
              },
            );

            map.geoObjects.add(marker); // Добавляем маркер на карту
          });
        });
      }
    };

    // Проверка на уже загруженный скрипт
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
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '800px' }} />
    </div>
  );
};
