import type { Metadata } from 'next';
import Container from '@/components/ui/container/container';
import Review from '@/components/review/review/review';
import { ReviewType } from '@/types/types';
import { getAllReviews } from '@/services/services';
import BreadCrumbs from '@/components/review/breadcrumbs/breadcrumbs';

import s from './about-us.module.scss';

export const metadata: Metadata = {
  title: 'Про нас - магазин парфумерії Parfumerie.ua',
  description: 'Інформація про магазин якісної парфумерії за чесними цінами Parfumerie.ua',
};

const breadcrumbs = [{ label: 'Про нас', url: '/' }];

export default async function AboutUs() {
  const reviews = await getAllReviews();
  return (
    <Container>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <h1>
        Інформація про наш магазин парфумерії <strong>Parfumerie.ua</strong>
      </h1>

      <p>Вітаємо в нашому магазині якісної парфумерії за чесними цінами!</p>

      <h2>Відгуки про наш магазин</h2>

      <div className={s.reviews}>
        {reviews.map((item: ReviewType) => (
          <Review review={item} />
        ))}
      </div>
    </Container>
  );
}
