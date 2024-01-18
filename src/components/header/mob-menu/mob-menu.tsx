'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside, useBodyScrollLockLeft } from '@/hooks/hooks';
import { catalogList } from '@/data/constants';
import Search from '@/components/header/search/search';
import CallbackList from '@/components/header/callback/callback-list/callback-list';
import NavList from '@/components/header/nav-list/nav-list';
import Button from '@/components/ui/button/button';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';

import s from './mob-menu.module.scss';

interface MobMenuProps {
  showMobMenu: boolean;
  closeMobMenu: () => void;
}

const MobMenu: React.FC<MobMenuProps> = ({ showMobMenu, closeMobMenu }) => {
  const mobMenu = useRef<HTMLDivElement>(null);
  useBodyScrollLockLeft(showMobMenu);
  useClickOutside(mobMenu, closeMobMenu);

  return (
    <CSSTransition
      in={showMobMenu}
      nodeRef={mobMenu}
      timeout={500}
      classNames={{
        enter: s.cartEnter,
        enterActive: s.cartEnterActive,
        exit: s.cartExit,
        exitActive: s.cartExitActive,
      }}
      unmountOnExit
    >
      <div className={`${s.wrapper} ${showMobMenu && s.visible}`}>
        <div className={s.mobMenu} ref={mobMenu}>
          <div className={s.title}>
            <Link href="/">Logo</Link>
            <ButtonIcon customClass="light" size="medium" onClick={closeMobMenu}>
              <Icons.close size="medium" />
            </ButtonIcon>
          </div>

          <div className={s.search}>
            <Search />
          </div>

          <div className={s.catalog}>
            <Button width="full" color="green">
              <Icons.menu />
              Каталог
            </Button>
          </div>

          <div className={s.nav}>
            <NavList />
          </div>
          <Link className={s.user} href="/login">
            <Icons.person size="medium" />
            <span>Вхід до кабінету</span>
          </Link>
          <div className={s.callback}>
            <CallbackList />
          </div>

          <div className={s.info}>
            <Button width="full" color="green">
              <Icons.phone />
              Зворотній дзвінок
            </Button>
            <p>Працюємо щоденно з 9:00 до 18:00</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MobMenu;

/*
          <ul className={s.nav}>
            {catalogList.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
          */
