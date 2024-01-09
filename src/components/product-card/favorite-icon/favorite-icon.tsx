'use client';
import React, { useState, useEffect } from 'react';
import useFavoriteStore from '@/store/favoriteStore';
import { Icons } from '@/components/ui/icons/icons';
import type { Product } from '@/types/types';
import s from './favorite-icon.module.scss';

interface FavoriteIconProps {
  product: Product;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ product }) => {
  const { favoriteProducts, addToFavorites, removeFromFavorites } = useFavoriteStore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Перевірка, чи product.id знаходиться в favoriteProducts
    const isProductFavorite = favoriteProducts.some(favoriteProduct => favoriteProduct.id === product.id);
    setIsFavorite(isProductFavorite);
  }, [favoriteProducts, product.id]);

  return isFavorite ? (
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
  );
};

export default FavoriteIcon;
