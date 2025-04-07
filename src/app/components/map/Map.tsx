'use client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LOCATION } from './variables';

export const MapComponent = () => {
  const [reactifiedApi, setReactifiedApi] = React.useState<any>(null);

  React.useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        // Если скрипт уже загружен
        if (window.ymaps3) return resolve(window.ymaps3);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@yandex/ymaps3-loader'; // URL скрипта
        script.type = 'text/javascript';
        script.onload = () => resolve(window.ymaps3);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadScript().then((ymaps3: any) => {
      Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]).then(
        ([{ reactify }]) => {
          const api = reactify.bindTo(React, ReactDOM).module(ymaps3);
          setReactifiedApi(api);
        },
      );
    });
  }, []);

  if (!reactifiedApi) return null;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = reactifiedApi;

  return (
    <YMap location={LOCATION}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
    </YMap>
  );
};
