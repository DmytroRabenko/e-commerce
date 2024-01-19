'use client';
import Link from 'next/link';
import useStateStore from '@/store/stateStore';
import { useBodyScrollLock } from '@/hooks/hooks';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import s from './nav-catalog.module.scss';
import { Icons } from '../../ui/icons/icons';

const NavCatalog = () => {
  const { isCatalogVisible, toggleCatalogVisibility } = useStateStore();
  // useBodyScrollLock(isCatalogVisible);

  return (
    <div className={`${s.catalog} ${isCatalogVisible ? s.visible : ''}`}>
      <div className={s.title}>
        <h2>Каталог товарів</h2>{' '}
        <ButtonIcon customClass="light" size="medium" onClick={toggleCatalogVisibility}>
          <Icons.close size="medium" />
        </ButtonIcon>
      </div>

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
    </div>
  );
};

export default NavCatalog;
