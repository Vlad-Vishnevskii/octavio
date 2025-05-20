'use client';

import { useState, useEffect } from 'react';
import { BlogItemType } from './types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ScrollFadeIn } from '@/app/components';
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
        <ScrollFadeIn>
          <div className={styles.iframeWrapper}>
            <iframe
              src={blog.iframe}
              allow="fullscreen; gyroscope; encrypted-media"
              data-testid="embed-iframe"
              loading="lazy"
              title="Обзор Octavio Maestro от iamhear"
            />
          </div>
        </ScrollFadeIn>
      ) : (
        <div className={styles.frame}>
          <ScrollFadeIn delay={0.2}>
            <Image
              src={blog?.imgSrc ?? '/news/news-1.png'}
              alt="Tidal Live Screenshot"
              width={400}
              height={659}
              className={styles.image}
            />
          </ScrollFadeIn>

          <div className={styles.content}>
            <ScrollFadeIn delay={0.4}>
              <h2 className={styles.title}>{blog?.title}</h2>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.4}>
              <div className={styles.description}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{textContent}</ReactMarkdown>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      )}
    </div>
  );
};
