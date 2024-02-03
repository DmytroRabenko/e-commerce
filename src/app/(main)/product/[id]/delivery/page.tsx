import Link from 'next/link';
import DeliveryBlock from '@/components/delivery/delivery-block/delivery-block';
import PaymentBlock from '@/components/delivery/payment-block/payment-block';
import HowToBuyBlock from '@/components/delivery/how-to-buy-block/how-to-buy-block';
import s from './delivery.module.scss';

const ProductPageDelivery = async () => {
  return (
    <>
      <h3>Доставка замовлення</h3>
      <DeliveryBlock />
      <h3>Оплата замовлення</h3>
      <PaymentBlock />
    </>
  );
};

export default ProductPageDelivery;
