import Link from 'next/link';
import s from './product-badge.module.scss';

interface ProductBadgeProps {
  title: string | undefined;
}
const ProductBadge: React.FC<ProductBadgeProps> = ({ title }) => {
  const customClass = title ? s[title] : '';
  let badgeText;
  if (title) {
    if (title === 'recomended') {
      badgeText = 'Рекомендуємо';
    } else if (title === 'new') {
      badgeText = 'Новинка';
    } else if(title === 'sale'){
      badgeText = 'Sale';
    }
    else if(title === 'popular'){
      badgeText = 'Популярне';
    }
    else{
      badgeText = title;
    }
  }
//модернізувати href щоб переходило в каталог і відфільтровувало товари за значенням title
  return title && <Link href='/' className={`${s.badge} ${customClass}`}>{badgeText}</Link>;
};

export default ProductBadge;
