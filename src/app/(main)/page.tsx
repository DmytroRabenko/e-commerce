'use client'
import React from 'react'; 
import dynamic from 'next/dynamic';
const MainSwiper = dynamic(() => import('@/components/main/main-swiper/main-swiper'), { ssr: false });
const ViewedSwiper = dynamic(() => import('@/components/main/viewed/viewed-swiper'), { ssr: false });
import Recomended from '@/components/main/recomended/recomended';
import Popular from '@/components/main/popular/popular';
import Container from '@/components/ui/container/container';
import '@/styles/globals.scss';
export default function HomePage() {
  return (
    <>
      <MainSwiper />
      <Recomended />
      <Popular />
      <ViewedSwiper />
      <Container>
        <h2>Відгуки наших клієнтів</h2>
        <div className="full"></div>
      </Container>
    </>
  );
}
