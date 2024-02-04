import Container from '@/components/ui/container/container';
import Catalog from '@/components/catalog/catalog';
import BreadCrumbs from '@/components/review/breadcrumbs/breadcrumbs';
import s from './catalog-page.module.scss';

const breadcrumbs = [{ label: 'Каталог', url: '/' }];

export default async function CatalogPage() {
  return (
    <Container>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <h1 className={s.catalog}>Каталог товарів</h1>

      <Catalog />
    </Container>
  );
}
