'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './product-nav-links.module.scss';

type Props = {
  params: { id: string };
};
const ProductNavLinks = ({ params }: Props) => {
  const productPageLinks = [
    { title: 'Характеристики', url: `/product/${params.id}`}, 
    { title: 'Відгуки', url: `/product/${params.id}/reviews`},
    { title: 'Оплата та доставка', url: `/product/${params.id}/delivery` },
  ];
  const pathName = usePathname();

  return (
    <div className={s.links}>
      {productPageLinks.map((item, i) => (
        <Link href={item.url} className={`${s.linkItem} ${pathName === item.url && s.active}`} key={i}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default ProductNavLinks;
