import Container from '@/components/ui/container/container';
import Catalog from '@/components/catalog/catalog';
import s from './catalog-page.module.scss';

export default async function CatalogPage() {
  return (
    <Container>
      <div>breadcrumbs/breadcrumbs</div>
      <h1 className={s.catalog}>Каталог товарів</h1>

      <Catalog />

    </Container>
  );
}


//тест
//import Catalog from '@/components/catalog/catalog';
// <Catalog/>  <ProductCard key={item.id} product={item} />;

/*import Container from '@/components/ui/container/container';
import { getAllProducts } from '@/services/services';
import ProductCard from '@/components/product-card/product-card';
import { Product } from '@/types/types';
import s from './catalog-page.module.scss';

export default async function CatalogPage() {
  const products = await getAllProducts();

  return (
    <Container>
      <div>breadcrumbs/breadcrumbs</div>
      <h1 className={s.catalog}>Каталог товарів</h1>
        <div className={s.catalogList}>
          {products.map((item: Product) => (
            <ProductCard product={item}/>
          ))}
        </div>
      
    </Container>
  );
}
*/
//import Catalog from '@/components/catalog/catalog';
// <Catalog/>  <ProductCard key={item.id} product={item} />;
