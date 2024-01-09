'use client';
import React, { useState, useEffect } from 'react';
import s from './productCard.module.scss';
import { Icons } from '@/components/ui/icons/icons';
import Button from '@/components/ui/button/button';
import Image from 'next/image';
import Link from 'next/link';
import ProductBadge from '@/components/product-card/product-badge/productBadge';
import ProductCardRewiews from '@/components/product-card/product-card-reviews/product-card-reviews';
import useFavoriteStore from '@/store/favoriteStore';
import useCartStore from '@/store/cartStore';
import { Product } from '@/types/types';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, category, brand, seria, price, images } = product;
  const { addToCart } = useCartStore();
  const { favoriteProducts, addToFavorites, removeFromFavorites } = useFavoriteStore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Перевірка, чи product.id знаходиться в favoriteProducts
    const isProductFavorite = favoriteProducts.some(favoriteProduct => favoriteProduct.id === product.id);
    setIsFavorite(isProductFavorite);
  }, [favoriteProducts, product.id]);

  return (
    <div className={s.productCard}>
      <div className={s.imageContainer}>
        <Image className={s.image} src={images[0]} alt={title} fill={true} />
      </div>
      <Link href={`/product/${product.id}`} className={s.description}>
        <ProductCardRewiews 
        reviewsCount={product?.reviews?.length}
        ratingValue={4}
        />
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
        <Button
          onClick={() => {
            addToCart(product);
          }}
        >
          <Icons.buy size="medium" />
          Купити
        </Button>
      </div>
      {isFavorite ? (
        <button
          className={s.favorite}
          onClick={() => {
            removeFromFavorites(product.id);
          }}
        >
          <Icons.favoriteFilled size="medium" />
        </button>
      ) : (
        <button
          className={s.favorite}
          onClick={() => {
            addToFavorites(product);
          }}
        >
          <Icons.favoriteOutlined size="medium" />
        </button>
      )}
      <ProductBadge title={category} />
    </div>
  );
};

export default ProductCard;
