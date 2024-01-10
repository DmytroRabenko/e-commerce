'use client'
import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/container/container';
import { Icons } from '@/components/ui/icons/icons';
import {useScroll} from '@/hooks/hooks';
import dynamic from 'next/dynamic';
const ButtonIcon = dynamic(() => import('@/components/ui/button-icon/button-icon'), { ssr: false })
import { navList } from '@/data/constants';
import useCartStore from '@/store/cartStore';
import useFavoriteStore from '@/store/favoriteStore';
import s from './header2.module.scss';

export default function Header2 () {
  const isScrolled = useScroll({ offset: 20 });
  const {cartProducts, toggleCartVisibility } = useCartStore();
  const favoriteCount = useFavoriteStore(state=> state.favoriteProducts.length)
  const cartCount = cartProducts.length;

  return (
    <div className={`${s.header2} ${isScrolled ? s.fixedHeader : ''}`}>
      <Container>
        <div className={s.content}>
          <Link href='/' className={`${s.logo} ${isScrolled ? s.hide : ''}`}>Logo</Link>
          <nav className={s.nav}>
            {navList.map(item => (
              <Link key={item.id} href={item.url} className={s.listItem}>
                {item.title}
              </Link>
            ))}
          </nav>
          <div className={s.buttonsIcons}>
            <ButtonIcon size='large' customClass='accent' count={favoriteCount}><Icons.favoriteOutlined size="medium" /></ButtonIcon>
            <ButtonIcon size='large' customClass='accent' onClick={toggleCartVisibility} count={cartCount}><Icons.cartOutlined size="medium" /></ButtonIcon>
          </div>
          
        </div>
      </Container>
    </div>
  );
}
