import React from 'react';
import CatalogSwiper from '@/components/catalog-swiper/catalog-swiper';

export default async function Popular() {
  return (
   <CatalogSwiper title='Популярні товари' category='popular'/>
  );
}
