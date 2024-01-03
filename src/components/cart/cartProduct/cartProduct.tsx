import React from 'react';
import { Product } from '@/types/types';
import s from './cartProduct.module.scss';
import Image from 'next/image';

interface CartProductProps {
  product: Product; 
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  return (
    <div className={s.product}>
      <div className={s.img}>
        <Image src={product.url} alt={product.name} width={48} height={48}></Image>
      </div>
      <div><span>{product.name}</span>
      </div>
      
      <span>{product.price} грн</span>
    </div>
  );
};

export default CartProduct;
