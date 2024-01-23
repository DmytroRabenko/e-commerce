import { Suspense } from 'react'; //, { Suspense }
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next'; //, ResolvingMetadata
import Container from '@/components/ui/container/container';
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
  //,parent: ResolvingMetadata
  const product = await getProductById(params.id);
  return {
    title: `${product.brand} ${product.seria} - купити за доступною ціною ${product.title}`,
    description: product.description,
  };
}

const ProductPageLayout = async ({ params, children }: ProductPageLayoutProps) => {
  const product = await getProductById(params.id);
  const { code, brand, seria, title, description, openingNote, heartNote, finalNote, images, reviews } = product;
  const productPageLinks = [
    { title: 'Характеристики', url: `/product/${params.id}` },
    { title: 'Відгуки', url: `/product/${params.id}/reviews` },
    { title: 'Оплата та доставка', url: `/product/${params.id}/delivery` },
  ];

  return (
    <>
      <Container>
        <div>Хлібні крихти</div>

        <div className={s.productContainer}>
          <div className={s.imagesBlock}>
            <div className={s.activeImage}>
              <Image className={s.image} src={images[0]} alt={title} fill={true}></Image>
            </div>
          </div>

          <div className={s.descriptionBlock}>
            <div className={s.titleBlock}>
              <h2 className={s.title}>
                {brand} {seria}
              </h2>
              <FavoriteIcon size="large" product={product} />
            </div>

            <ProductCardRewiews reviewsCount={reviews?.length} ratingValue={4} />
            <div className={s.code}>Код товару: {code}</div>
            <p className={s.description}>
              {title}{' '}
              <strong>
                {brand} {seria}
              </strong>{' '}
              - {description}
            </p>
            <div>
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
            <ToBuyBlock product={product} />
          </div>
        </div>
        <div>
          {productPageLinks.map((item, i) => (
            <Link href={item.url} key={i}>
              {item.title}
            </Link>
          ))}
        </div>

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Container>
      <Recomended />
      <Popular/>
    </>
  );
};

export default ProductPageLayout;
