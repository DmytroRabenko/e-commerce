import React from 'react'; //, { Suspense }
import { getProductById } from '@/services/services';
import s from './product-page.module.scss';

type Props = {
  params: { id: string };
};

const ProductPage = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);
  const {
    brand,
    seria,
    gender,
    country,
    madeIn,
    openingNote,
    heartNote,
    finalNote,
  } = product;
  return (
    
      <ul className={s.characteristic}>
        <li>
          Бренд: <span>{brand}</span>
        </li>
        <li>
          Серія: <span>{seria}</span>
        </li>
        <li>
          Стать: <span>{gender}</span>
        </li>
        <li>
          Початкова нота: <span>{openingNote}</span>
        </li>
        <li>
          Нота серця: <span>{heartNote}</span>
        </li>
        <li>
          Кінцева нота: <span>{finalNote}</span>
        </li>
        <li>
          Виробник ТМ: <span>{country}</span>
        </li>
        <li>
          Вироблено в: <span>{madeIn}</span>
        </li>
      </ul>
  );
};

export default ProductPage;
