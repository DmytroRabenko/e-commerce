'use client'   // розібратись або не використовувати useQuery, або щось інше 
import Container from '@/components/ui/container/container';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services/services';

import s from './product-page.module.scss';

export default function ProductPage({ params }: { params: { id: string } }) {
  const {
    data: product,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['product', params.id],
    queryFn: () => getProductById(params.id),
  });

  if (isPending) {
    return <div>Завантаження...</div>;
  }

  if (isError) {
    return <div>Помилка при завантаженні даних</div>;
  }

  return (
    <Container>
      <h2>Сторінка продукту</h2>
      <div className={s.full}>{product.id}</div>
      <div className={s.full}>{product.title}</div>
      <div className={s.full}>{product.brand}</div>
      <div className={s.full}>{product.seria}</div>
    </Container>
  );
}


/*
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Container from '@/components/ui/container/container';
//import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services/services';
 import { HIDDEN_PRODUCT_TAG } from '@/lib/constants';
import s from './product-page.module.scss';
//metadata
export async function generateMetadata({ params }: { params: { handle: string } }): Promise<Metadata> {
 
  
 const product = await getProductById(params.handle);
 console.log(product);
  if (!product) return notFound();
  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
  
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Container>
      <h2>Сторінка продукту</h2>
     
    </Container>
  );
}
*/
/*
<div className={s.full}>{product.id}</div>
      <div className={s.full}>{product.title}</div>
      <div className={s.full}>{product.brand}</div>
      <div className={s.full}>{product.seria}</div>
*/
/*
'use client';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/container/container';
import useServicesStore from '@/store/serviseStore';
import useViewedStore from '@/store/viewedStore';
import { Product } from '@/types/types';
import s from './product-page.module.scss';

export default function ProductPage({params}: { params: {id: number} }) {
  const [product, setProduct] = useState<Product>();
  const { addToViewed } = useViewedStore();
  const { getProductById } = useServicesStore();
  const [loading, setLoading] = useState('loading');


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading('loading');
        const result = await getProductById(`${params.id}`);
        setProduct(result);

        setLoading('success');
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading('error');
      }
    };
    fetchData();
  }, [getProductById, params]);

  useEffect(() => {
    if (product) {
        console.log(product.id);
        
      addToViewed(product);
    }
  }, [addToViewed, product]);


  return (
    <Container>
      <h2>Сторінка продукту</h2>
      <div className={s.full}></div>
    </Container>
  );
}

*/
