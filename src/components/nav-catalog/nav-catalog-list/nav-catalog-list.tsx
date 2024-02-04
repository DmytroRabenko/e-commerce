import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import s from './nav-catalog-list.module.scss';
import { CategoryType } from '@/types/types';

interface NavCatalogListProps {
  categories: CategoryType[]
  handleClick?: () => void
}

const NavCatalogList: React.FC<NavCatalogListProps> = ({ categories, handleClick }) => {
  return (
    <ul className={s.list}>
      {categories.map(item => (
        <li key={item.id}>
          <Link href={`catalog?category=${item.value}`} onClick={handleClick}>
            {item.title}
          </Link>
          <Icons.chevronRight />
        </li>
      ))}
    </ul>
  );
};

export default NavCatalogList;
/*
import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import s from './nav-catalog-list.module.scss';
import { getCategoryList } from '@/services/services';
import { CategoryType } from '@/types/types';
const NavCatalogList = async () => {
  const categories = await getCategoryList();

  return (
    <ul className={s.list}>
      {categories.map((item: CategoryType) => (
        <li key={item.id}>
          <Link className={s.instagram} href={item.value}>
            {item.title}
          </Link>
          <Icons.chevronRight />
        </li>
      ))}
    </ul>
  );
};

export default NavCatalogList;
*/
