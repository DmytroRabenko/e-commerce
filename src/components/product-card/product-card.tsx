//'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductBadge from '@/components/product-card/product-badge/product-badge';
import FavoriteIcon from '@/components/product-card/favorite-icon/favorite-icon';
import ProductBuy from '@/components/product-card/product-buy/product-buy';
import ProductCardRewiews from '@/components/product-card/product-card-reviews/product-card-reviews';
import type { Product } from '@/types/types';
import s from './product-card.module.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {//async
  const { title, category, brand, seria, price, images } = product;

  return (
    <div className={s.productCard}>
      <div className={s.imageContainer}>
        <Image className={s.image} src={images[0]} alt={title} fill={true} />
      </div>
      <Link href={`/product/${product.id}`} className={s.description}>
        <ProductCardRewiews reviewsCount={product?.reviews?.length} ratingValue={4} />
        <h6>
          {title}
          <span className={s.name}>
            {brand} {seria}
          </span>
        </h6>
      </Link>
      <div className={s.priceblock}>
        <p className={s.price}>
          {price}
          <span> грн</span>
        </p>
        <ProductBuy product={product}/>
      </div>
      <div className={s.favorite}>
        <FavoriteIcon product={product} />
      </div>
      <ProductBadge title={category} />
    </div>
  );
};

export default ProductCard;
