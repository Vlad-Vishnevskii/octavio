'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { CatalogCard, NewsCard } from './components';
import { PenIcon, MusicIcon, CpuIcon, HandsIcon, ArrowRight } from './icons';
import Link from 'next/link';
import styles from './main-page.module.scss';

const NEWS_LIST = [
  {
    id: 0,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: '/news/news-1.png',
  },
  {
    id: 1,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: '/news/news-2.png',
  },
  {
    id: 2,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: '/news/news-3.png',
  },
  {
    id: 3,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: '/news/news-4.png',
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <section className={styles.calaog} id="products">
        <h2 className={styles.title}>КАТАЛОГ ТОВАРОВ</h2>
        <div className={styles.catalogList}>
          <div className={styles.cardFull}></div>
          <CatalogCard
            name="Octavio Maestro"
            imgSrc="/Maestro-Light/2.png"
            className={styles.cardFull}
          />
          <CatalogCard name="Octavio Amp" imgSrc="/Amp/8.png" />
          <CatalogCard name="Octavio StreamG2" imgSrc="/Stream/1.png" />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.about_left}>
          <Image src="/main-page/about-bg.png" alt="bg" width={980} height={892} />
        </div>
        <div className={styles.aboutRight}>
          <Image
            src="/main-page/about-ellipse.png"
            className={styles.aboutDecor}
            width={641}
            height={641}
            alt="ellipce"
          />
          <h3 className={styles.aboutTitle}>О нас</h3>
          <p className={styles.aboutDescription}>
            Мы соединили уважение к традициям звуковоспроизведения с инновационными технологиями,
            чтобы вы могли услышать каждую ноту так, как она была задумана. В сердце акустических
            систем Octavio знаменитые динамики Davis Acoustics, что делает их звучание по-настоящему
            безупречным
          </p>
          <ul className={styles.aboutAdvantages}>
            <li className={styles.aboutAdvantagesItem}>
              <PenIcon />
              <span>
                <b>Система Harmony:</b> анализирует и преобразует аудиосигнал любого контента
                (музыки, фильмов, подкастов, видеоигр и т. д.) для иммерсивного пространственного
                воспроизведения
              </span>
            </li>
            <li className={styles.aboutAdvantagesItem}>
              <MusicIcon />
              <span>
                <b>Link Play:</b> Поддержка Spotify, Apple Music, Deezer, Qobuz, Tidal и др. —
                наслаждайтесь музыкой без ограничений
              </span>
            </li>
            <li className={styles.aboutAdvantagesItem}>
              <CpuIcon />
              <span>
                <b>Поддержка мультирум:</b> Hi-Fi звучание и беспрерывная трансляция контента в
                любой точке вашего дома
              </span>
            </li>
            <li className={styles.aboutAdvantagesItem}>
              <HandsIcon />
              <span>
                <b>Совместимость с системой умного дома:</b> голосовое управление и множество других
                функций, делающих вашу жизнь проще
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.news}>
        <div className={styles.newsTop}>
          <h2 className={styles.newsTitle}>НОВОСТИ</h2>
          <Link className={styles.newsAll} href="/blog">
            Все публикации
            <ArrowRight width={18} height={18} stroke="#808080" />
          </Link>
        </div>
        <div className={styles.newsWrapper}>
          <div className={styles.newsList}>
            {NEWS_LIST.map(item => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
