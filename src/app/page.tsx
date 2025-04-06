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
    imgSrc: './news/news-1.png',
  },
  {
    id: 1,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: './news/news-2.png',
  },
  {
    id: 2,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: './news/news-3.png',
  },
  {
    id: 3,
    title: 'Как мне использовать функцию Tidal Live?',
    description:
      'Tidal — это платформа потокового вещания в высоком разрешении, которая предлагает множество функций.',
    imgSrc: './news/news-4.png',
  },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.calaog}>
        <h2 className={styles.title}>КАТАЛОГ ТОВАРОВ</h2>
        <div className={styles.catalogList}>
          <div className={styles.cardFull}></div>
          <CatalogCard
            name="Octavio Maestro"
            imgSrc="./Maestro-Light/2.png"
            className={styles.cardFull}
          />
          <CatalogCard name="Octavio Amp" imgSrc="./Amp/8.png" />
          <CatalogCard name="Octavio StreamG2" imgSrc="./Stream/1.png" />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.about_left}>
          <Image src="./main-page/about-bg.png" alt="bg" width={980} height={892} />
        </div>
        <div className={styles.aboutRight}>
          <Image
            src="./main-page/about-ellipse.png"
            className={styles.aboutDecor}
            width={641}
            height={641}
            alt="ellipce"
          />
          <h3 className={styles.aboutTitle}>О НАС</h3>
          <p className={styles.aboutDescription}>
            Бренд Octavio был создан молодыми музыкантами и энтузиастами Hi-Fi, которые хотели
            соединить современный образ жизни и наслаждение от качественного звучания.{' '}
          </p>
          <ul className={styles.aboutAdvantages}>
            <li className={styles.aboutAdvantagesItem}>
              <PenIcon />
              <span>Разработано и собрано во Франции</span>
            </li>
            <li className={styles.aboutAdvantagesItem}>
              <MusicIcon />
              <span>Гармония технологичности и музыкальности</span>
            </li>
            <li className={styles.aboutAdvantagesItem}>
              <CpuIcon />
              <span>Чтим наследие и создаём инновации</span>
            </li>
            <li className={styles.aboutAdvantagesItem}>
              <HandsIcon />
              <span>Сотрудничество с ведущими Hi-Fi брендами</span>
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
