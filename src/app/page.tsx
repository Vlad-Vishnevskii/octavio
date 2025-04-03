import { CatalogCard } from './components';
import Image from 'next/image';
import styles from './main-page.module.scss';

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
        <div>
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
              <span>Разработано и собрано во Франции</span>
            </li>
            <li className={styles.aboutAdvantagesItem}>Гармония технологичности и музыкальности</li>
            <li className={styles.aboutAdvantagesItem}>Чтим наследие и создаём инновации</li>
            <li className={styles.aboutAdvantagesItem}>Сотрудничество с ведущими Hi-Fi брендами</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
