'use client';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/product-card';
import { Product } from '@/types/types';
import s from './catalog.module.scss';
import useServicesStore from '@/store/serviseStore';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Catalog() {
  const { getProducts } = useServicesStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [mainCategory, setMainCategory] = useState(searchParams.get('mainCategory'));
  const [category, setCategory] = useState(searchParams.get('category'));
  const [brand, setBrand] = useState(searchParams.get('brend'));
  const [sort, setSort] = useState(searchParams.get('_sort'));
  const [order, setOrder] = useState(searchParams.get('_order'));
  const [page, setPage] = useState(searchParams.get('_page'));

  const [products, setProducts] = useState<Product[]>([]);

  
  useEffect(() => {
    const queryParams= new URLSearchParams();
    if (mainCategory) queryParams.set('mainCategory', mainCategory);
    if (category) queryParams.set('category', category);
    if (brand) queryParams.set('brand', brand);
    if (sort) queryParams.set('_sort', sort);
    if (order) queryParams.set('_order', order);
    if (page) queryParams.set('_page', page);
    console.log(queryParams);
    
    const fetchData = async () => {
      try {
      
        const result = await getProducts(`catalog?${queryParams.toString()}`);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    //router.push(`${pathname}?${queryParams.toString()}`)
    fetchData();

  }, [getProducts, category]);
  return (
    <Container>
      <div className={s.catalog}>
        <div onClick={() => {
          console.log(category);
          
          setCategory(`${category},men`);
        }}>
        категорія мен</div>
        <div className={s.products}>
          {products &&
            products.length > 0 &&
            products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </Container>
  );
}
/*
'use client';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/product-card';
import { Product } from '@/types/types';
import s from './catalog.module.scss';
import useServicesStore from '@/store/serviseStore';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Catalog() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category_like'));
 
  const brand = searchParams.get('brend_like');
  const sort = searchParams.get('_sort');
  const order = searchParams.get('_order');
  const page = searchParams.get('_page');

  const [products, setProducts] = useState<Product[]>([]);
  const { getProducts } = useServicesStore();

  useEffect(() => {
    const queryParams: string[] = [];
    if (category) queryParams.push(`category_like=${category}`);
    if (brand) queryParams.push(`brand=${brand}`);
    if (sort) queryParams.push(`_sort=${sort}`);
    if (order) queryParams.push(`_order=${order}`);
    if (page) queryParams.push(`_page=${page}`);
    const fetchData = async () => {
      try {
        const result = await getProducts(`${queryParams.toString()}`);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [getProducts, category]);
  return (
    <Container>
      <div className={s.catalog}>
        <div onClick={()=>setCategory('men')}>категорія мен</div>
        <div className={s.products}>
          {products &&
            products.length > 0 &&
            products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </Container>
  );
}
*/
/*
'use client';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/product-card';
import { Product } from '@/types/types';
import s from './catalog.module.scss';
import useServicesStore from '@/store/serviseStore';

import { useParams } from 'next/navigation';

export default function Catalog() {
  const params = useParams();
  console.log(params);
  
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
*/
