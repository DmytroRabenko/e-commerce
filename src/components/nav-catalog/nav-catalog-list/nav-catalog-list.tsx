'use client';
import Link from 'next/link';
import s from './nav-catalog-list.module.scss';

const NavCatalogList = () => {
  return (
    <ul className={s.list}>
      <li>
        <Link className={s.instagram} href="/">
          Чоловічі парфуми
        </Link>
      </li>
      <li>
        <Link className={s.viber} href="/">
          Жіночі парфуми
        </Link>
      </li>
      <li>
        <Link className={s.telegram} href="/">
          Парфуми для будинку
        </Link>
      </li>
      <li>
        <Link className={s.phone} href="/">
          Парфуми в авто
        </Link>
      </li>
      <li>
        <Link className={s.phone} href="/">
          Інша парфумерна продукція
        </Link>
      </li>
    </ul>
  );
};

export default NavCatalogList;
