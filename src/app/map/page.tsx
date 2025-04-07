import { YandexMap } from '../components';
import styles from './map-page.module.scss';

const Map = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ГДЕ КУПИТЬ</h1>
      <YandexMap />
    </div>
  );
};

export default Map;
