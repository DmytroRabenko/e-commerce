import { Suspense } from 'react'; //, { Suspense }
import Image from 'next/image';
import ProductNavLinks from '@/components/product-page/description/product-nav-links/product-nav-links';
import { Metadata } from 'next'; //, ResolvingMetadata
import Container from '@/components/ui/container/container';
import BreadCrumbs from '@/components/review/breadcrumbs/breadcrumbs';
import Loading from '@/components/loading/loading';
import ProductCardRewiews from '@/components/product-card/product-card-reviews/product-card-reviews';
import ToBuyBlock from '@/components/product-page/description/to-buy-block';
import FavoriteIcon from '@/components/product-card/favorite-icon/favorite-icon';
import Recomended from '@/components/main/recomended/recomended';
import Popular from '@/components/main/popular/popular';
import { getProductById } from '@/services/services';

import s from './product-page.module.scss';

type Props = {
  params: { id: string };
};
type ProductPageLayoutProps = {
  params: { id: string };
  children: React.ReactNode; // Додали тип для children
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id);
  return {
    title: `${product.brand} ${product.seria} - купити за доступною ціною ${product.title}`,
    description: product.description,
  };
}

const ProductPageLayout = async ({ params, children }: ProductPageLayoutProps) => {
  const product = await getProductById(params.id);
  const { code, brand, seria, title, description, images, id, value } = product;
  const breadcrumbs = [
    { label: 'Каталог', url: '/catalog' },
    { label: `${brand} ${seria}`, url: '/' },
  ];
  return (
    <>
      <Container>
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        <div className={s.productContainer}>
          <div className={s.imagesBlock}>
            <div className={s.activeImage}>
              <Image className={s.image} src={images[0]} alt={title} fill={true}></Image>
            </div>
          </div>

          <div className={s.descriptionBlock}>
            <h1 className={s.title}>
              {brand} {seria}
            </h1>
            <div className={s.codeBlock}>
              <ProductCardRewiews productId={id} />
              <div className={s.code}>Код товару: {code}</div>
            </div>

            <p className={s.description}>
              {title}{' '}
              <strong>
                {brand} {seria}
              </strong>{' '}
              - {description}
            </p>

            <div className={s.value}>{value ? value: ''}</div>
            <ToBuyBlock product={product} />
          </div>
        </div>
      </Container>
      <div className={s.childrenBlock}>
        <Container>
          <ProductNavLinks params={params} />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Container>
      </div>
      <Container>
        <Recomended />
        <Popular />
      </Container>
    </>
  );
};

export default ProductPageLayout;

/**
 *   <FavoriteIcon size="large" product={product} />
 * <div>
              <p>
                <strong>Початкова нота: </strong> {openingNote}
              </p>
              <p>
                <strong>Нота серця: </strong> {heartNote}
              </p>
              <p>
                <strong>Кінцева нота: </strong> {finalNote}
              </p>
            </div>
 * 
 */
