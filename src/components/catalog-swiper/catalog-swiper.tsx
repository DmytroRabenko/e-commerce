'use client';
import { useRef, useState, useEffect } from 'react';
import Container from '@/components/ui/container/container';
import dynamic from 'next/dynamic';
const ProductCard = dynamic(() => import('@/components/product-card/product-card'), { ssr: false });
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import useServicesStore from '@/store/serviseStore';
import { Product } from '@/types/types';
import { Icons } from '@/components/ui/icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const page = 1;
  const limit = '20';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategoryProducts(category, page, limit);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
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
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          loopAddBlankSlides
          //loop={true}
          breakpoints={{
            380: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
            },
          }}
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

/*
'use client';
import { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '@/components/ui/container/container';
import dynamic from 'next/dynamic';
const ProductCard = dynamic(() => import('@/components/product-card/product-card'), { ssr: false });
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import useServicesStore from '@/store/serviseStore';
import { Product } from '@/types/types';
import { Icons } from '@/components/ui/icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const isLaptop = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1280 });

  const { getCategoryProducts } = useServicesStore();
  const [loadingState, setLoadingState] = useState('loading');
  const [data, setData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const firstFetchPageSize = isLargeScreen ? '5' : isDesktop ? '4' : isLaptop ? '3' : '2';
  const nextFetchPageSize = isLargeScreen ? '5' : isDesktop ? '4' : isLaptop ? '3' : '2';
  const [currentIndex, setCurrentIndex] = useState(1);
  const pageSize = '5';


  //Отримання перших даних при монтуванні компонента
  useEffect(() => {
      const firstFetchData = async () => {
        try {
          setLoadingState('loading');
          const result = await getCategoryProducts(category, 1, firstFetchPageSize);
          console.log(result);
          
          setData(result);
          setLoadingState('success');
        } catch (error) {
          setLoadingState('error');
          console.log(error);
        }
      };
      firstFetchData();

    //eslint-disable-next-line
  }, []);
 //Отримання наступних даних при зміні currentPage
 

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
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          loopAddBlankSlides
          loop={true}
          breakpoints={{
            380: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map(item => (
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

*/
