'use client';
import dynamic from 'next/dynamic';
const ViewedSwiper = dynamic(() => import('@/components/main/viewed/viewed-swiper'), { ssr: false });
import useViewedStore from '@/store/viewedStore';

const Viewed: React.FC = () => {
  const showViewed = useViewedStore(state => state.showViewed);
  return showViewed && <ViewedSwiper />;
};

export default Viewed;
