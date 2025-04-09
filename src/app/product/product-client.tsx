'use client';

// import { CatalogCard } from '../components';
import { PRODUCTS_PAGE_LIST } from './constants';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ProductPageType } from './types';

import styles from './product-page.module.scss';

const ProductClient = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<ProductPageType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const productId = searchParams.get('id');
    const currentProduct = PRODUCTS_PAGE_LIST.find(item => item.id === productId) || null;
    if (!productId || !currentProduct) {
      return router.push('/');
    } else {
      setProduct(currentProduct);
      setIsLoading(false);
    }
  }, [searchParams, router]);

  if (isLoading) {
    return <p>isLoading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{product?.title}</h1>
      <section className={styles.otherProducts}>
        <h2>ДРУГИЕ ТОВАРЫ</h2>
      </section>
    </div>
  );
};

export default ProductClient;
