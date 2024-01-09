'use client';
import React from 'react';
import useCartStore from '@/store/cartStore';
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import type { Product } from '@/types/types';

interface ProductBuyProps {
  product: Product;
}

const ProductBuy: React.FC<ProductBuyProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  
  return (
    <Button
    onClick={() => {
      addToCart(product);
    }}
  >
    <Icons.buy size="medium" />
    Купити
  </Button>
  )
};

export default ProductBuy;
