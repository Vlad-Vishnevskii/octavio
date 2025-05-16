import Image from 'next/image';
import styles from './catalog-card.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { ArrowTopRight } from '@/app/icons';
import { ScrollFadeIn } from '../scroll-fade-in';

type Props = {
  className?: string;
  name: string;
  imgSrc: string;
  smallArrow?: boolean;
  href: string;
};

export const CatalogCard: React.FC<Props> = ({
  className,
  name,
  imgSrc,
  smallArrow = false,
  href = '/',
}) => {
  return (
    <ScrollFadeIn className={classNames(styles.wrapper, className)}>
      <Link href={href} className={classNames(styles.wrapper, className)}>
        <div
          className={classNames(styles.linkIcon, {
            [styles.linkIcon_small]: smallArrow,
          })}
        >
          <ArrowTopRight />
        </div>
        <Image className={styles.img} src={imgSrc} alt={name} width={630} height={630} />
        <p className={styles.name}>{name}</p>
      </Link>
    </ScrollFadeIn>
  );
};
