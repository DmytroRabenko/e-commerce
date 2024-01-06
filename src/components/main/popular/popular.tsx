'use client';
import CatalogSwiper from '@/components/catalog-swiper/catalog-swiper';
import data from '@/data/perfume.json';


export default function Popular() {
  const products = data.catalog;
  return (
   <CatalogSwiper products={products} title='Популярні товари'/>
  );
}
