import Link from 'next/link';
import styles from './header.module.scss';
import { HEADER_IMG_PATHS } from './Header.constants';
import { ArrowRight } from '@/app/icons';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={HEADER_IMG_PATHS.LOGO} width={200} height={57} alt="OCTAVIO" />
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/map">Где купить</Link>
        </nav>
        <a className={styles.phone} href="tel:86734552312">
          {'8 (673) 455 - 23 - 12'}
        </a>
      </div>
      <section className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h1 className={styles.title}>
            <span>Octavio</span> – это Hi-Fi компоненты
          </h1>
          <p className={styles.description}>
            Используя сетевую платформу LinkPlay, они поддерживают основные стриминговые платформы,
            мультирум и могут встраиваться в систему умного дома
          </p>
          <Link className={styles.btn} href="/">
            К товарам
            <ArrowRight />
          </Link>
        </div>
        <Image
          className={styles.productImg}
          src={HEADER_IMG_PATHS.PRODUCT}
          alt="Maestro"
          width={1008}
          height={985}
        />
      </section>
    </header>
  );
};
