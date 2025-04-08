'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { HEADER_IMG_PATHS } from './Header.constants';
import { ArrowRight, BurgerIcon, CloseIcon } from '@/app/icons';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  if (!isHome) {
    return (
      <header className={classNames(styles.wrapper, styles.wrapper_grey)}>
        <div className={styles.container}>
          <Link href="/">
            <Image src={HEADER_IMG_PATHS.LOGO_BLACK} width={200} height={57} alt="OCTAVIO" />
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Главная</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/map">Где купить</Link>
          </nav>
          <a className={styles.phone} href="tel:88007003334">
            {'8 (800) 700-33-34'}
          </a>
          <button
            className={classNames(styles.burgerBtn, styles.burgerBtn_black)}
            onClick={toggleMenu}
          >
            <BurgerIcon />
          </button>
        </div>

        {menuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          <button onClick={toggleMenu} className={styles.mobileMenu_closeBtn}>
            <CloseIcon />
          </button>
          <Link href="/" onClick={toggleMenu}>
            Главная
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            Блог
          </Link>
          <Link href="/map" onClick={toggleMenu}>
            Где купить
          </Link>
          <a href="tel:88007003334" onClick={toggleMenu}>
            {'8 (800) 700-33-34'}
          </a>
        </div>
      </header>
    );
  }

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
        <a className={styles.phone} href="tel:88007003334">
          {'8 (800) 700-33-34'}
        </a>
        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <BurgerIcon />
        </button>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <button onClick={toggleMenu} className={styles.mobileMenu_closeBtn}>
          <CloseIcon />
        </button>
        <Link href="/" onClick={toggleMenu}>
          Главная
        </Link>
        <Link href="/blog" onClick={toggleMenu}>
          Блог
        </Link>
        <Link href="/map" onClick={toggleMenu}>
          Где купить
        </Link>
        <a href="tel:88007003334" onClick={toggleMenu}>
          {'8 (800) 700-33-34'}
        </a>
      </div>

      <section className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h1 className={styles.title}>
            <b>Octavio</b> – это <span>{'Hi\u2011Fi'}</span> компоненты для современной жизни.
          </h1>
          <p className={styles.description}>
            Бескомпромиссное звучание не требует сложной установки, специальных знаний и грандиозных
            вложений. Наслаждайтесь контентом со всех стриминговых платформ или подарите вторую
            жизнь своей музыкальной коллекции. Hi-Fi c Octavio — это просто!
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
