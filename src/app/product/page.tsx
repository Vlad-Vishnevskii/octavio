import { Suspense } from 'react';
import ProductPageClient from './product-client';
import { Loader } from '../components';

export default function ProductPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ProductPageClient />
    </Suspense>
  );
}
