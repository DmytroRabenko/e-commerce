import Link from 'next/link';
import s from './productBadge.module.scss';

interface ProductBadgeProps {
  title: string | undefined;
}
const ProductBadge: React.FC<ProductBadgeProps> = ({ title }) => {
  const customClass = title ? s[title] : '';
  let badgeText;
  if (title) {
    if (title === 'recomended') {
      badgeText = 'Рекомендовано';
    } else if (title === 'new') {
      badgeText = 'Новинка';
    } else if(title === 'sale'){
      badgeText = 'Sale';
    }
    else{
      badgeText = title;
    }
  }
//модернізувати href щоб переходило в каталог і відфільтровувало товари за значенням title
  return title && <Link href='/' className={`${s.badge} ${customClass}`}>{badgeText}</Link>;
};

export default ProductBadge;
