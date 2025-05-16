'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { CatalogCard, NewsCard, ScrollFadeIn } from './components';
import { BLOG_ITEMS } from './blog/constants';
import { PenIcon, MusicIcon, CpuIcon, HandsIcon, ArrowRight } from './icons';
import Link from 'next/link';
import styles from './main-page.module.scss';

export default function Home() {
  const blogItems = BLOG_ITEMS.slice(0, 4);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <section className={styles.calaog} id="products">
        <ScrollFadeIn>
          <h2 className={styles.title}>КАТАЛОГ ТОВАРОВ</h2>
        </ScrollFadeIn>

        <div className={styles.catalogList}>
          <div className={styles.cardFull}></div>
          <CatalogCard
            name="Octavio Maestro"
            imgSrc="/Maestro-Light/2.webp"
            href="/product/maestro"
            className={styles.cardFull}
          />
          <CatalogCard href="/product/amp" name="Octavio Amp" imgSrc="/Amp/8.webp" />

          <CatalogCard href="/product/stream" name="Octavio StreamG2" imgSrc="/Stream/1.png" />
        </div>
      </section>
      <section className={styles.about}>
        <ScrollFadeIn delay={0.4}>
          <div className={styles.about_left}>
            <Image src="/main-page/about-bg.png" alt="bg" width={980} height={892} />
          </div>
        </ScrollFadeIn>
        <div className={styles.aboutRight}>
          <Image
            src="/main-page/about-ellipse.png"
            className={styles.aboutDecor}
            width={641}
            height={641}
            alt="ellipce"
          />
          <ScrollFadeIn delay={0.2}>
            <h3 className={styles.aboutTitle}>О нас</h3>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.4}>
            <p className={styles.aboutDescription}>
              Мы соединили уважение к традициям звуковоспроизведения с инновационными технологиями,
              чтобы вы могли услышать каждую ноту так, как она была задумана. В сердце акустических
              систем Octavio знаменитые динамики Davis Acoustics, что делает их звучание
              по-настоящему безупречным
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.4}>
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
                  <b>Совместимость с системой умного дома:</b> голосовое управление и множество
                  других функций, делающих вашу жизнь проще
                </span>
              </li>
            </ul>
          </ScrollFadeIn>
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
            {blogItems.map(item => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
