'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Container from '@/components/ui/container/container';
import Search from '@/components/header/search/search';
import { useClickOutside } from '@/hooks/hooks';
const SearchBlock = dynamic(() => import('@/components/header/search-block/search-block'), { ssr: false });
const ButtonIcon = dynamic(() => import('@/components/ui/button-icon/button-icon'), { ssr: false });
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import { useScroll } from '@/hooks/hooks';
import useCartStore from '@/store/cartStore';
import useFavoriteStore from '@/store/favoriteStore';
import useStateStore from '@/store/stateStore';
import s from './header2.module.scss';
import ButtonCount from '@/components/ui/button-count/button-count';
import NavCatalog from '@/components/nav-catalog/nav-catalog';
import Logo from '@/components/header/logo/logo';

export default function Header2() {
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const isScrolled = useScroll({ offset: 20 });
  const { cartProducts, toggleCartVisibility } = useCartStore();
  const { toggleMobMenuVisibility, isCatalogVisible, toggleCatalogVisibility } = useStateStore();
  const favoriteCount = useFavoriteStore(state => state.favoriteProducts.length);
  const cartCount = cartProducts.length;
  const catalogButtonRef = useRef(null);
  const catalogBlockRef = useRef(null);

  useClickOutside(isCatalogVisible, [catalogBlockRef, catalogButtonRef], () => {
    toggleCatalogVisibility();
    console.log('каталог');
  });

  return (
    <>
      <div className={`${s.header2} ${isScrolled ? s.fixedHeader : ''}`}>
        <Container>
          <div className={s.content}>
            {isLaptop ? (
              <>
                <Logo />

                <div className={s.catalogButton} ref={catalogButtonRef}>
                  <Button width="full" onClick={toggleCatalogVisibility} color="green">
                    <Icons.menu />
                    Каталог
                  </Button>
                </div>

                <div className={s.search}>
                  <Search />
                </div>
                <div className={s.buttonsIcons}>
                  <ButtonCount count={favoriteCount} text="Обране">
                    <Icons.favoriteOutlined size="medium" />
                  </ButtonCount>
                  <ButtonCount count={cartCount} text="Кошик" onClick={toggleCartVisibility}>
                    <Icons.cartOutlined size="medium" />
                  </ButtonCount>
                </div>
              </>
            ) : (
              <>
                <button className={s.mobMenuButton} onClick={toggleMobMenuVisibility}>
                  <Icons.menu />
                  Меню
                </button>
                <div className={s.mobLogo}>
                  <Logo />
                </div>
                <div className={s.buttonsIcons}>
                  <SearchBlock />
                  <span className={s.border}></span>
                  <ButtonIcon size="large" customClass="accent" count={favoriteCount}>
                    <Icons.favoriteOutlined size="medium" />
                  </ButtonIcon>
                  <span className={s.border}></span>
                  <ButtonIcon size="large" customClass="accent" onClick={toggleCartVisibility} count={cartCount}>
                    <Icons.cartOutlined size="medium" />
                  </ButtonIcon>
                </div>
              </>
            )}
            {isLaptop && (
              <div ref={catalogBlockRef}>
                <NavCatalog />
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
