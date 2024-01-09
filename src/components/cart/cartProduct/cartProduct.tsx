'use client';
import React from 'react';
import s from './cartProduct.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';
import { Product } from '@/types/types';
import useCartStore from '@/store/cartStore';

interface CartProductProps {
  product: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const { title, brand, seria, price, quantity, images, id } = product;
  const { removeFromCart, plusProductCount, minusProductCount } = useCartStore();
  return (
    <li className={s.product}>
      <Link href={`/product/${id}`} className={s.img}>
        <Image src={images[0]} alt={title} width={48} height={48}></Image>
      </Link>
      <div className={s.description}>
        <div className={s.row}>
        <Link href={`/product/${id}`} className={s.title}>
          {`${brand} ${seria}`}
           </Link>
          <ButtonIcon customClass="light" size="small" onClick={() => removeFromCart(id)}>
            <Icons.close size="small" />
          </ButtonIcon>
        </div>
        <div className={s.row}>
          <div className={s.count}>
            <ButtonIcon customClass="light" size="small" onClick={() => minusProductCount(id)}>
              <Icons.remove size="small" />
            </ButtonIcon>
            <div className={s.quantity}>{quantity}</div>
            <ButtonIcon customClass="light" size="small" onClick={() => plusProductCount(id)}>
              <Icons.add size="small" />
            </ButtonIcon>
          </div>
          <span>{price * quantity} грн</span>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
