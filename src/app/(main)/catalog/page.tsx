import React from 'react';
import Container from '@/components/ui/container/container';
import Catalog from '@/components/catalog/catalog';

import s from './catalog-page.module.scss';

export default async function CatalogPage() {
  return (
    <Container>
      <div>breadcrumbs/breadcrumbs</div>
      <div className={s.catalog}>Catalog</div>
      <Catalog/>
    </Container>
  );
}
