'use client';
import { useRef, useState, useEffect } from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/productCard';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import Loading from '@/components/loading/loading';
import useServicesStore from '@/store/serviseStore';
import { Product } from '@/types/types';
import { Icons } from '@/components/ui/icons/icons';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import s from './catalog-swiper.module.scss';
import '@/styles/globals.scss';

interface CatalogSwiperProps {
  title?: string;
  category: string;
}

const CatalogSwiper: React.FC<CatalogSwiperProps> = ({ title, category }) => {
  const swiperRef = useRef<any>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const { getCategoryProducts } = useServicesStore();
  const [loading, setLoading] = useState('loading');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState('20');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading('loading');
        const result = await getCategoryProducts(category, page, limit);
        setProducts(result);
        setLoading('success');
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading('error');
      }
    };

    fetchData();
  }, [getCategoryProducts, category, page, limit]);

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
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={5}
          slidesPerGroup={5}
          loopAddBlankSlides
          //lazyPreloadPrevNext={5}//дозавантаження 
          loop={true}
        >
          {products.map(item => (
            <SwiperSlide className={`swiper-lazy ${s.slideContent}`} key={item.id}>
              <>
                <ProductCard product={item} />
                <div className="swiper-lazy-preloader"></div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CatalogSwiper;
