'use client';

import { useState } from 'react';
import { ProductPageType } from './types';
import { ProductCard, CatalogCard } from '@/app/components';
import { ScrollFadeIn } from '@/app/components';

import classNames from 'classnames';
import { ProductCharacteristics } from './characteristics.component';

import styles from './product-page.module.scss';

type Props = {
  product: ProductPageType;
};

const ProductPageClient = ({ product }: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentColor, setCurrentColor] = useState(product.images[0].color);
  const isColorTabsVisible = product.images.length > 1;

  const description = product.description.map((item, index) => (
    <p className={styles.frame_descriptionItem} key={index}>
      {item}
    </p>
  ));

  const tabHandler = () => {
    setActiveTab(prev => (prev === 1 ? 2 : 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <ScrollFadeIn>
          <div className={styles.frame_left}>
            <ProductCard images={product.images} currentColor={currentColor} />
          </div>
        </ScrollFadeIn>
        <div className={styles.frame_right}>
          <ScrollFadeIn>
            <h1 className={styles.frame_title}>{product.title}</h1>
          </ScrollFadeIn>

          {isColorTabsVisible && (
            <ScrollFadeIn>
              <div className={styles.frame_colorTabs}>
                {product.images.map((item, index) => (
                  <button
                    key={index}
                    className={classNames(styles.frame_colorItem, {
                      [styles.frame_colorItem_white]: item.color === 'white',
                      [styles.frame_colorItem_active]: item.color === currentColor,
                    })}
                    onClick={() => setCurrentColor(item.color)}
                  />
                ))}
              </div>
            </ScrollFadeIn>
          )}

          <ScrollFadeIn>
            <p className={styles.frame_slogan}>{product.slogan}</p>
          </ScrollFadeIn>

          <ScrollFadeIn>
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
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className={styles.frame_info}>
              {activeTab === 1 ? (
                description
              ) : (
                <ProductCharacteristics characteristics={product.characteristics} />
              )}
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      <section className={styles.otherProducts}>
        <ScrollFadeIn>
          <h2 className={styles.otherProducts_title}>ДРУГИЕ ТОВАРЫ</h2>
        </ScrollFadeIn>
        <div className={styles.otherProducts_list}>
          {product.otherProducts.map(item => (
            <CatalogCard smallArrow key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPageClient;
