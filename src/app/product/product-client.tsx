'use client';

import { CatalogCard } from '../components';
import { PRODUCTS_PAGE_LIST } from './constants';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ProductPageType } from './types';
import { Loader } from '../components';
import classNames from 'classnames';
import { ProductCharacteristics } from './characteristics.component';
import { ProductCard } from '../components';

import styles from './product-page.module.scss';

const sampleProduct = {
  title: 'Умная колонка',
  description: 'Эта умная колонка обладает отличным звуком и функциями управления.',
  images: ['/Maestro-Light/1.png', '/Maestro-Light/2.png', '/Maestro-Light/3.png'],
  previewImages: ['/Maestro-Light/1.png', '/Maestro-Light/2.png', '/Maestro-Light/3.png'],
  colors: ['#FF0000', '#00FF00', '#0000FF'],
};

const ProductClient = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<ProductPageType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);

  const description = product?.description.map((item, index) => (
    <p className={styles.frame_descriptionItem} key={index}>
      {item}
    </p>
  ));

  const tabHandler = () => {
    if (activeTab === 1) {
      setActiveTab(2);
    } else {
      setActiveTab(1);
    }
  };
  useEffect(() => {
    const productId = searchParams.get('id');
    const currentProduct = PRODUCTS_PAGE_LIST.find(item => item.id === productId) || null;
    if (!productId || !currentProduct) {
      return router.push('/');
    } else {
      setIsLoading(false);
      setProduct(currentProduct);
    }
  }, [searchParams, router]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.frame_left}>
          <ProductCard
            title={sampleProduct.title}
            description={sampleProduct.description}
            images={sampleProduct.images}
            previewImages={sampleProduct.previewImages}
            colors={sampleProduct.colors}
          />
        </div>
        <div className={styles.frame_right}>
          <h1 className={styles.frame_title}>{product?.title}</h1>
          <p className={styles.frame_slogan}>{product?.slogan}</p>
          <div className={styles.tabs}>
            <button
              className={classNames(styles.tabs_item, {
                [styles.tabs_item_active]: activeTab === 1,
              })}
              onClick={tabHandler}
            >
              Описание
            </button>
            <button
              className={classNames(styles.tabs_item, {
                [styles.tabs_item_active]: activeTab === 2,
              })}
              onClick={tabHandler}
            >
              Характеристики
            </button>
          </div>
          <div className={styles.frame_info}>
            {activeTab === 1 ? (
              description
            ) : (
              <ProductCharacteristics characteristics={product?.characteristics ?? []} />
            )}
          </div>
        </div>
      </div>
      <section className={styles.otherProducts}>
        <h2 className={styles.otherProducts_title}>ДРУГИЕ ТОВАРЫ</h2>
        <div className={styles.otherProducts_list}>
          {product?.otherProducts.map(item => (
            <CatalogCard smallArrow key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductClient;
