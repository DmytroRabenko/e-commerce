import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import s from './nav-catalog-list.module.scss';
//import useServicesStore from '@/store/serviseStore';
//import { useEffect } from 'react';
const NavCatalogList = () => {
  /*
  const { getCategoryList } = useServicesStore();
  
  useEffect(()=>{
    const categories = getCategoryList();

    console.log(categories);
  },[])
  */
  return (
    <ul className={s.list}>
      <li>
        <Link className={s.instagram} href="/">
          Чоловічі парфуми
        </Link>
        <Icons.chevronRight />
      </li>
      <li>
        <Link className={s.viber} href="/">
          Жіночі парфуми
        </Link>
        <Icons.chevronRight />
      </li>
      <li>
        <Link className={s.telegram} href="/">
          Парфуми для будинку
        </Link>
        <Icons.chevronRight />
      </li>
      <li>
        <Link className={s.phone} href="/">
          Парфуми в авто
        </Link>
        <Icons.chevronRight />
      </li>
      <li>
        <Link className={s.phone} href="/">
          Інша парфумерна продукція
        </Link>
        <Icons.chevronRight />
      </li>
    </ul>
  );
};

export default NavCatalogList;
