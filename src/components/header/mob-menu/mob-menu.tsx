'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import { scrollToTop, useClickOutside, useBodyScrollLockLeft } from '@/hooks/hooks';
import MobNavCatalog from '@/components/mob-nav-catalog/mob-nav-catalog';
import useStateStore from '@/store/stateStore';
import Search from '@/components/header/search/search';
import CallbackList from '@/components/header/callback/callback-list/callback-list';
import NavList from '@/components/header/nav-list/nav-list';
import Button from '@/components/ui/button/button';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';

import s from './mob-menu.module.scss';

const MobMenu = () => {
  const { isMobCatalogVisible, toggleMobCatalogVisibility, isMobMenuVisible, toggleMobMenuVisibility } = useStateStore();
  const mobMenu = useRef<HTMLDivElement>(null);
  useBodyScrollLockLeft(isMobMenuVisible);

  useClickOutside(isMobMenuVisible, mobMenu, () => {
    toggleMobMenuVisibility();
  });

  return (
    <CSSTransition
      in={isMobMenuVisible}
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
      <div className={`${s.wrapper} ${isMobMenuVisible && s.visible}`}>
        <div className={s.content} ref={mobMenu}>
          <div className={s.mobMenu}>
            <div className={s.title}>
              <Link href="/">Logo</Link>
              <ButtonIcon customClass="light" size="medium" onClick={toggleMobMenuVisibility}>
                <Icons.close size="medium" />
              </ButtonIcon>
            </div>

            <div className={s.search}>
              <Search />
            </div>

            <div className={s.catalog}>
              <Button
                width="full"
                color="green"
                onClick={toggleMobCatalogVisibility}
              >
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
          {isMobCatalogVisible && <MobNavCatalog />}
        </div>
      </div>
    </CSSTransition>
  );
};

export default MobMenu;
