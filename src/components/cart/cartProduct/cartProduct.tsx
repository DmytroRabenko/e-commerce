import React from 'react';
import s from './cartProduct.module.scss';
import Image from 'next/image';
import { Product } from '@/types/types';

interface CartProductProps {
  product: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const { title, brand, seria, price, quantity, images } = product;
  return (
    <div className={s.product}>
      <div className={s.img}>
        <Image src={images[0]} alt={title} width={48} height={48}></Image>
      </div>
      <div>
        <span>{`${brand} ${seria}`}</span>
        <span>{quantity}</span>
      </div>
      
      <span>{price} грн</span>
    </div>
  );
};

export default CartProduct;
