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
import '../../styles/globals.scss';

interface CatalogSwiperProps {
  title?: string;
  category: string;
}

const CatalogSwiper: React.FC<CatalogSwiperProps> = ({ title, category }) => {
  const swiperRef = useRef<any>(undefined);
  const swiperSlide = useSwiperSlide();
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
          lazyPreloadPrevNext={5}
          //додає порожні слайди якщо не вистачає
         // lazyPreloaderClass={'preloader'}
          //onSlideChange={() => console.log('slide change')}//функція при зміні слайда
          loop={true}
        >
          {products.map(item => (
            <SwiperSlide className={s.slideContent} key={item.id}>
              <>
                <div className='swiper-lazy'>
                  <ProductCard product={item} />
                </div>
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
/*
'use client';
import { useRef, useState, useEffect } from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/productCard';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import Loading from '@/components/loading/loading';
import useServicesStore from '@/store/serviseStore';
import { Product } from '@/types/types';
import { Icons } from '@/components/ui/icons/icons';

import { Swiper, SwiperSlide, useSwiper,  } from 'swiper/react';
import { Pagination, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import s from './catalog-swiper.module.scss';
import '../../styles/globals.scss';

interface CatalogSwiperProps {
  title?: string;
  category: string;
}

const CatalogSwiper: React.FC<CatalogSwiperProps> = ({ title, category }) => {
  const swiperRef = useRef<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const { getCategoryProducts } = useServicesStore();
  const [loading, setLoading] = useState<'loading' | 'success' | 'error'>('loading');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState('5');
  const [virtualData, setVirtualData] = useState<Product[]>([]);

  const handleSlideChange = () => {
    // Перевірте, чи потрібно завантажити нові дані при зміні слайда
    const isEnd = swiperRef.current?.isEnd;
    if (isEnd) {
      // Завантажте нові дані або додайте пагінацію тут
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      setLoading('loading');
      const result = await getCategoryProducts(category, page, limit);
      setProducts([...products, ...result]);
      setVirtualData([...virtualData, ...result]);
      setLoading('success');
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading('error');
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={s.slider}
          modules={[Pagination, Virtual]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={5}
          slidesPerGroup={5}
          loopAddBlankSlides
          loop={true}
          virtual={{
            slides: virtualData,
            renderExternal: ({ slides, currentPos }) => {
              setVirtualData(slides);
            },
          }}
          onSlideChange={handleSlideChange}
        >
          {virtualData.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className='swiper-lazy'>
                <ProductCard product={item} />
              </div>
              <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CatalogSwiper;
*/
/*
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
import '../../styles/globals.scss';

interface CatalogSwiperProps {
  title?: string;
  category: string;
}

const CatalogSwiper: React.FC<CatalogSwiperProps> = ({ title, category }) => {
  const swiperRef = useRef<any>(undefined);
  const swiperSlide = useSwiperSlide();
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
        console.log(result);

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
          loopAddBlankSlides//додає порожні слайди якщо не вистачає
         // lazyPreloaderClass={'preloader'}
          //onSlideChange={() => console.log('slide change')}//функція при зміні слайда
          loop={true}
        >
          {products.map(item => (
            <SwiperSlide className={s.slideContent} key={item.id}>
              <>
                <div className='swiper-lazy'>
                  <ProductCard product={item} />
                </div>
                <div className="swiper-lazy-preloader">
                  <Loading/>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CatalogSwiper;
*/
