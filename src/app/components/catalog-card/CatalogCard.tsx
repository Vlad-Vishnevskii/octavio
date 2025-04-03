import Image from 'next/image';
import styles from './catalog-card.module.scss';
import classNames from 'classnames';
import { ArrowTopRight } from '@/app/icons';

type Props = {
  className?: string;
  name: string;
  imgSrc: string;
};

export const CatalogCard: React.FC<Props> = ({ className, name, imgSrc }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.linkIcon}>
        <ArrowTopRight />
      </div>
      <Image className={styles.img} src={imgSrc} alt={name} width={630} height={630} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};
