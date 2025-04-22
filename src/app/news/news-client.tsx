'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogItemType } from './types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BLOG_ITEMS } from '../blog/constants';
import { Loader } from '../components';
import styles from './news-page.module.scss';

export const NewsClient = () => {
  const searchParams = useSearchParams();
  const [blogItem, setBlogItem] = useState<BlogItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [textContent, setTextContent] = useState('');
  const router = useRouter();

  console.log(textContent);

  useEffect(() => {
    const blogId = Number(searchParams.get('id'));
    const currentItem = BLOG_ITEMS.find(item => item.id === blogId) || null;
    if (!blogId || !currentItem) {
      return router.push('/');
    } else {
      setBlogItem(currentItem);
      fetch(currentItem.textPath)
        .then(res => res.text())
        .then(data => setTextContent(data))
        .finally(() => setIsLoading(false));
    }
  }, [searchParams, router]);

  if (isLoading || !blogItem) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      {blogItem?.iframe ? (
        <div className={styles.iframeWrapper}>
          <iframe
            src="https://dzen.ru/embed/onEYh0h0IAAA?from_block=partner&from=zen&mute=0&autoplay=0&tv=0"
            allow="fullscreen; gyroscope; encrypted-media"
            data-testid="embed-iframe"
            loading="lazy"
            title="Обзор Octavio Maestro от iamhear"
          />
        </div>
      ) : (
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
            <div className={styles.description}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{textContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
