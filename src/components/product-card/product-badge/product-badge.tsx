'use client';
import Link from 'next/link';
import s from './product-badge.module.scss';
import { useEffect, useState } from 'react';

export const productBadges = [
  { value: 'recomended', title: 'Рекомендуємо' },
  { value: 'new', title: 'Новинка' },
  { value: 'sale', title: 'Sale' },
  { value: 'popular', title: 'Популярне' },
];

interface ProductBadgeProps {
  category: string | undefined;
}

const ProductBadge: React.FC<ProductBadgeProps> = ({ category }) => {
  const [badgeTitle, setBadgeTitle] = useState('');
  const [url, setUrl] = useState('');
  const [customClass, setCustomClass] = useState('');

  useEffect(() => {
    if (category) {
      productBadges.forEach(item => {
        if (item.value === category) {
          setBadgeTitle(item.title);
          setUrl(`/catalog?mainCategory=${item.value}`);
          setCustomClass(s[item.value]);
        }
      });
    }
  }, []);

  return (
    category && (
      <Link href={url} className={`${s.badge} ${customClass}`}>
        {badgeTitle}
      </Link>
    )
  );
};

export default ProductBadge;
