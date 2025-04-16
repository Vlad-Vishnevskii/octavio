'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogItemType } from './types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BLOG_ITEMS } from '../blog/constants';
import { Loader } from '../components';
import styles from './news-page.module.scss';

export const NewsClient = () => {
  const searchParams = useSearchParams();
  const [blogItem, setBlogItem] = useState<BlogItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const blogId = Number(searchParams.get('id'));
    const currentItem = BLOG_ITEMS.find(item => item.id === blogId) || null;
    if (!blogId || !currentItem) {
      return router.push('/');
    } else {
      setIsLoading(false);
      setBlogItem(currentItem);
    }
  }, [searchParams, router]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <Image
          src={blogItem?.imgSrc ?? '/news/news-1.png'}
          alt="Tidal Live Screenshot"
          width={400}
          height={659}
          className={styles.image}
        />

        <div className={styles.content}>
          <h2 className={styles.title}>{blogItem?.title}</h2>
          <p className={styles.description}>{blogItem?.title}</p>
        </div>
      </div>
    </div>
  );
};
