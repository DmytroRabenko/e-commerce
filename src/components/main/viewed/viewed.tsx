import CatalogSwiper from '@/components/catalog-swiper/catalog-swiper';
import data from '@/data/perfume.json';

export default function Viewed() {
  const products = data.catalog;
  return (
   <CatalogSwiper products={products} title='Переглянуті товари'/>
  );
}
