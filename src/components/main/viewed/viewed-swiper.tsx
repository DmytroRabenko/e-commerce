'use client';
import { useRef } from 'react';
import Container from '@/components/ui/container/container';
import dynamic from 'next/dynamic';
const ProductCard = dynamic(()=> import('@/components/product-card/product-card'), {ssr: false}) ;
//import ProductCard from '@/components/product-card/product-card';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import useViewedStore from '@/store/viewedStore';
import { Icons } from '@/components/ui/icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import s from '@/components/catalog-swiper/catalog-swiper.module.scss';
import '@/styles/globals.scss';

const ViewedSwiper: React.FC = () => {
  const swiperRef = useRef<any>(undefined);
  const { showViewed, viewedProducts } = useViewedStore();

  return (
    showViewed && (
      <Container>
        <div className={s.container}>
          <div className={s.title}>
            <h3>Переглянуті товари</h3>
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
            slidesPerView={1}
            slidesPerGroup={1}
            loopAddBlankSlides
            lazyPreloadPrevNext={1}
            loop={true}
            breakpoints={{
              380: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 5,
              },
              1280: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            }}
          >
            {viewedProducts.map(item => (
              <SwiperSlide className={s.slideContent} key={item.id}>
                <>
                  <div className="swiper-lazy">
                    <ProductCard product={item} />
                  </div>
                  <div className="swiper-lazy-preloader"></div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    )
  );
};

export default ViewedSwiper;
