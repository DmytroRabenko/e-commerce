'use client';
import React, { useState, useEffect } from 'react';
import s from './productCard.module.scss';
import { Icons } from '@/components/ui/icons/icons';
import Button from '@/components/ui/button/button';
import Image from 'next/image';
import useStateStore from '@/store/stateStore';

interface ProductCardProps {
  product: {
    name: string;
    type: string;
    height: string;
    id: string;
    color: string;
    price: string;
    count: string;
    code: string;
    url: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, type, height, id, color, price, count, code, url } = product;
  const [isFavorite, setIsFavorite] = useState(false);

  const {addToCart, addToFavorites} = useStateStore();
  const cartProducts = useStateStore(state => state.cartProducts);
  //console.log(cartProducts);
  
  return (
    <div className={s.productCard}>
      <Image src={url} alt={name} width={200} height={200} />
      <div className={s.cardDescription}>
        <h3>
          <p className={s.name}>{type} <span>{name}</span></p>
          <p className={s.height}>{height}<span>см</span></p>
          <p className={s.color}>{color}</p>
        </h3>
        <div className={s.priceblock}>
          <p className={s.price}>
            {price}
            <span> грн</span>
          </p>
          <Button onClick={()=>{addToCart(product)}}>
            <Icons.buy size="medium" />
            Купити
          </Button>
        </div>
      </div>
      <button className={s.favorite} onClick={()=>{addToFavorites(product)}}>
        {isFavorite ? <Icons.favoriteFilled size="medium" /> : <Icons.favoriteOutlined size="medium" />}
      </button>
    </div>
  );
};

export default ProductCard;
