'use client';
import CatalogSwiper from '@/components/catalog-swiper/catalog-swiper';
import data from '@/data/perfume.json';


export default function Recomended() {
  const products = data.catalog;
  return (
   <CatalogSwiper products={products} title='Рекомендовані товари'/>
  );
}
