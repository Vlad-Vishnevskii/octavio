import styles from './blog-page.module.scss';
import { NewsCard, CatalogCard } from '../components';
import { BLOG_ITEMS, PRODUCTS_LIST } from './constants';

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>БЛОГ</h1>
      <div className={styles.newsList}>
        {BLOG_ITEMS.map(item => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      <section className={styles.productsWrapper}>
        <h2 className={styles.subTitle}>НАШИ ТОВАРЫ</h2>
        <div className={styles.productsList}>
          {PRODUCTS_LIST.map(item => (
            <CatalogCard className={styles.productsList_item} smallArrow key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
