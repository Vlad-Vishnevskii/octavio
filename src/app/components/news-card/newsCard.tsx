import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRight } from '@/app/icons';
import styles from './news-card.module.scss';

export const NewsCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <Image src="./news/news-1.png" alt="news" width={398} height={294} />
        <div className={styles.arrowIcon}>
          <ArrowTopRight width={15} height={16} />
        </div>
      </div>
      <h3 className={styles.title}>Как мне использовать функцию Tidal Live?</h3>
      <p className={styles.description}>
        Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество
        функций.
      </p>
      <Link className={styles.readBtn} href="/">
        Читать
      </Link>
    </div>
  );
};
