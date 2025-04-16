import { Suspense } from 'react';
import { NewsClient } from './news-client';
import { Loader } from '../components';

export default function ProductPage() {
  return (
    <Suspense fallback={<Loader />}>
      <NewsClient />
    </Suspense>
  );
}
