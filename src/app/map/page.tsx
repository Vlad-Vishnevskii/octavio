import Script from 'next/script';
import { YandexMap } from '../components';
const Map = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://api-maps.yandex.ru/2.1/?apikey=3f26b556-b203-412e-aba8-23955b6433f7&lang=ru-RU"
      />

      <div>
        <h1>ГДЕ КУПИТЬ</h1>
        <YandexMap />
      </div>
    </>
  );
};

export default Map;
