import { notFound } from 'next/navigation';
import { PRODUCTS_PAGE_LIST } from './constants';

import ProductPageClient from './product-client';

export async function generateStaticParams() {
  return PRODUCTS_PAGE_LIST.map(product => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS_PAGE_LIST.find(p => p.id === id);

  if (!product) {
    return {
      title: 'Товар не найден',
      description: 'Данный товар не существует в каталоге.',
    };
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS_PAGE_LIST.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
