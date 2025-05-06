import { YandexMap } from '../components';
import type { Metadata } from 'next';
import styles from './map-page.module.scss';

export const metadata: Metadata = {
  title: 'Где купить Hi-Fi оборудование Octavio',
  description: 'Найдите ближайшего дилера Octavio на карте',
};

const Map = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ГДЕ КУПИТЬ</h1>
      <YandexMap />
    </div>
  );
};

export default Map;
