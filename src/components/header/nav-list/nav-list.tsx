import Link from 'next/link';
import { navList } from '@/data/constants';
import s from './nav-list.module.scss';

 const  NavList = () => {
  return (
    <nav className={s.nav}>
      {navList.map(item => (
        <Link key={item.id} href={item.url} className={s.listItem}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
export default NavList;