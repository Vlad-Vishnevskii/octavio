import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRight } from '@/app/icons';
import styles from './news-card.module.scss';

type Props = {
  description: string;
  title: string;
  imgSrc: string;
};

export const NewsCard: React.FC<Props> = ({ imgSrc, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <Image src={imgSrc} alt="news" width={398} height={294} />
        <div className={styles.arrowIcon}>
          <ArrowTopRight width={15} height={16} />
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link className={styles.readBtn} href="/">
        Читать
      </Link>
    </div>
  );
};
