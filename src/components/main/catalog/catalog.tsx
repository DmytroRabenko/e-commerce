'use client';
import Container from '@/components/ui/container/container';
import ProductCard from '@/components/product-card/productCard';
import data from '@/data/perfume.json';
import s from './catalog.module.scss';

export default function Catalog() {
  const parfumes = data.catalog;

  return (
    <Container>
      <div className={s.catalog}>
        <div className={s.products}>
          {parfumes.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
}



  /*
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
  */