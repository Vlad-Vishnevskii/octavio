import { Suspense } from 'react';
import ProductPageClient from './product-client';

export default function ProductPage() {
  return (
    <Suspense fallback={<p>Загрузка...</p>}>
      <ProductPageClient />
    </Suspense>
  );
}
