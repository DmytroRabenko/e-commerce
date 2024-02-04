import type { Metadata } from 'next';
import Container from '@/components/ui/container/container';
import BreadCrumbs from '@/components/review/breadcrumbs/breadcrumbs';
import DeliveryBlock from '@/components/delivery/delivery-block/delivery-block';
import PaymentBlock from '@/components/delivery/payment-block/payment-block';
import HowToBuyBlock from '@/components/delivery/how-to-buy-block/how-to-buy-block';
import s from './delivery.module.scss';

export const metadata: Metadata = {
  title: 'Оплата та доставка - магазин парфумерії Parfumerie.ua',
  description: 'Умови оплати та доставки в інтернет магазині Parfumerie.ua',
};

const breadcrumbs = [{ label: 'Оплата та доставка', url: '/' }];

export default async function Delivery() {
  return (
    <Container>
      <div className={s.wrapper}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <h1>
          Умови доставки та оплати в інтернет магазині <strong>Parfumerie.ua</strong>
        </h1>
        <h2>Процес замовлення в нашому магазині</h2>
        <HowToBuyBlock />
        <h2>Доставка замовлення</h2>
        <DeliveryBlock />
        <h2>Оплата замовлення</h2>
        <PaymentBlock />
      </div>
    </Container>
  );
}
