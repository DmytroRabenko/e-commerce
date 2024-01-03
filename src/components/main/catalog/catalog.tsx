'use client';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/productCard';
import data from '@/data/products.json';
import useServicesStore from '@/store/serviseStore';
import s from './catalog.module.scss';
import { useEffect } from 'react';

export default function Catalog() {
  const { getAllProducts } = useServicesStore();

  const fetchData = async () => {
    try {
      await getAllProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    fetchData();
    //
  },[]); // eslint-disable-line
  return (
    <Container>
      <div className={s.catalog}>
        <div className={s.products}>
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
}
