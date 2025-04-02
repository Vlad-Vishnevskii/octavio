import Link from 'next/link';
import styles from './header.module.scss';
import { HEADER_IMG_PATHS } from './Header.constants';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/">
          <Image src={HEADER_IMG_PATHS.LOGO} width={200} height={57} alt="OCTAVIO" />
        </Link>
        <nav className={styles.header_nav}>
          <Link href="/">Главная</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/map">Где купить</Link>
        </nav>
        <a className={styles.header_phone} href="tel:86734552312">
          {'8 (673) 455 - 23 - 12'}
        </a>
      </div>
      <section className={styles.header_bottom}>
        <div className={styles.header_bottomLeft}>
          <h1 className={styles.header_title}>
            <span>Octavio</span> – это Hi-Fi компоненты
          </h1>
          <p className={styles.header_description}>
            Используя сетевую платформу LinkPlay, они поддерживают основные стриминговые платформы,
            мультирум и могут встраиваться в систему умного дома
          </p>
          <Link href="/">К товарам</Link>
        </div>
        <Image
          className={styles.header_productImg}
          src={HEADER_IMG_PATHS.PRODUCT}
          alt="Maestro"
          width={1008}
          height={985}
        />
      </section>
    </header>
  );
};
