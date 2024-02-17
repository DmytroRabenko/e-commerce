'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Container from '@/components/ui/container/container';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import s from './main-swiper.module.scss';

const swiperData = [
  { id: 1, url: '/main/main-swiper1.jpg' },
  { id: 2, url: '/main/main-swiper2.jpg' },
  { id: 3, url: '/main/main-swiper3.jpg' },
];

export default function MainSwiper() {
  return (
    <Container>
      <div className={s.container}>
        <Swiper
          className={s.slider}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          lazyPreloadPrevNext={5}
          navigation
          loop={true}
        >
          {swiperData.map(item => (
            <SwiperSlide className={s.slideContent} key={item.id}>
              <div className={s.slide}>
                <Image src={item.url} fill={true} className={s.slideImage} alt="Parfumerie - магазин парфумів, фото" priority={true} ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div id={s.containerForBullets}></div>
      </div>
    </Container>
  );
}
