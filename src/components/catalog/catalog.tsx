'use client';
import React from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/product-card';
import { Product } from '@/types/types';
import s from './catalog.module.scss';
import useServicesStore from '@/store/serviseStore';
import { useEffect, useState } from 'react';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const { getAllProducts } = useServicesStore();
  const [loading, setLoading] = useState('loading');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading('loading');
        const result = await getAllProducts();
        setProducts(result);
        setLoading('success');
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading('error');
      }
    };

    fetchData();
  }, [getAllProducts]);
  return (
    <Container>
      <div className={s.catalog}>
        <div className={s.products}>
          {loading === 'loading' && <div>Loading...</div>}
          {products &&
            products.length > 0 &&
            loading === 'success' &&
            products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </Container>
  );
}
