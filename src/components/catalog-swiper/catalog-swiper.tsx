'use client';
import { useRef } from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/productCard';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import s from './catalog-swiper.module.scss';
import data from '@/data/perfume.json';
import { Product } from '@/types/types';

interface CatalogSwiperProps {
  products: Product[];
  title?: string
}
const CatalogSwiper: React.FC<CatalogSwiperProps> = ({ products, title }) => {
  const swiperRef = useRef<any>(undefined);
  return (
    <Container>
      <div className={s.container}>
        <div className={s.title}>
          <h3>{title}</h3>
          <div className={s.navigations}>
            <ButtonIcon customClass="light" size="small" onClick={() => swiperRef?.current?.slidePrev()}>
              <Icons.arrowLeft size="medium" />
            </ButtonIcon>
            <ButtonIcon customClass="light" size="small" onClick={() => swiperRef?.current?.slideNext()}>
              <Icons.arrowRight size="medium" />
            </ButtonIcon>
          </div>
        </div>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          className={s.slider}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          slidesPerGroup={5}
          pagination
          loop={true}
        >
          {products.map(item => (
            <SwiperSlide className={s.slideContent} key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default CatalogSwiper;