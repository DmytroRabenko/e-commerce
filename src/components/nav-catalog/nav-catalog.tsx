'use client';
import Link from 'next/link';
import useStateStore from '@/store/stateStore';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import NavCatalogList from '@/components/nav-catalog/nav-catalog-list/nav-catalog-list';
import s from './nav-catalog.module.scss';
import { Icons } from '../ui/icons/icons';

const NavCatalog = () => {
  const { isCatalogVisible, toggleCatalogVisibility } = useStateStore();

  return (
    <div className={`${s.catalog} ${isCatalogVisible ? s.visible : ''}`}>
      <div className={s.content}>
        <div className={s.close}>
          <ButtonIcon customClass="light" size="medium" onClick={toggleCatalogVisibility}>
            <Icons.close size="medium" />
          </ButtonIcon>
        </div>
        <NavCatalogList />
      </div>
    </div>
  );
};

export default NavCatalog;
