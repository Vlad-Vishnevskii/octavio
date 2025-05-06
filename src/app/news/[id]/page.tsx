import { notFound } from 'next/navigation';
import { NewsClient } from './news-client';
import { BLOG_ITEMS } from '@/app/blog/constants';

export async function generateStaticParams() {
  return BLOG_ITEMS.map(blog => ({
    id: `${blog.id}`,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = BLOG_ITEMS.find(blog => blog.id === +id);

  if (!blog) {
    return {
      title: 'Запись не найдена',
      description: '',
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = BLOG_ITEMS.find(blog => blog.id === +id);

  if (!blog) {
    notFound();
  }

  return <NewsClient blog={blog} />;
}
