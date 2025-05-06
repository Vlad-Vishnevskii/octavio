'use client';

import { useState, useEffect } from 'react';
import { BlogItemType } from './types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './news-page.module.scss';

type Props = {
  blog: BlogItemType;
};

export const NewsClient = ({ blog }: Props) => {
  const [textContent, setTextContent] = useState('');
  const router = useRouter();

  console.log(blog);

  useEffect(() => {
    if (blog.textPath) {
      fetch(blog.textPath)
        .then(res => res.text())
        .then(data => setTextContent(data));
    }
  }, [router, blog.textPath]);

  return (
    <div className={styles.wrapper}>
      {blog?.iframe ? (
        <div className={styles.iframeWrapper}>
          <iframe
            src={blog.iframe}
            allow="fullscreen; gyroscope; encrypted-media"
            data-testid="embed-iframe"
            loading="lazy"
            title="Обзор Octavio Maestro от iamhear"
          />
        </div>
      ) : (
        <div className={styles.frame}>
          <Image
            src={blog?.imgSrc ?? '/news/news-1.png'}
            alt="Tidal Live Screenshot"
            width={400}
            height={659}
            className={styles.image}
          />

          <div className={styles.content}>
            <h2 className={styles.title}>{blog?.title}</h2>
            <div className={styles.description}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{textContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
