'use client';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside, useBodyScrollLock } from '@/hooks/hooks';
//import Link from 'next/link';
//import Button from '@/components/ui/button/button';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';
import s from './mob-menu.module.scss';

interface MobMenuProps{
  showMobMenu: boolean
  closeMobMenu: ()=> void
}

const MobMenu: React.FC<MobMenuProps> = ({showMobMenu, closeMobMenu})=> {
  const mobMenu = useRef<HTMLDivElement>(null);
  useBodyScrollLock(showMobMenu);
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
            <h2>Меню</h2>
            <ButtonIcon customClass="light" size="medium" onClick={closeMobMenu}>
              <Icons.close size="medium" />
            </ButtonIcon>
          </div>
        </div>
        </div>
      </CSSTransition>
  );
}

export default MobMenu;