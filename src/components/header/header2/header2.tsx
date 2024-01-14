'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Container from '@/components/ui/container/container';
const CatalogBlock = dynamic(() => import('@/components/header/catalog-block/catalog-block'), { ssr: false });
//import CatalogBlock from '@/components/header/catalog-block/catalog-block';
const SearchBlock = dynamic(() => import('@/components/header/search-block/search-block'), { ssr: false });
//import SearchBlock from '@/components/header/search-block/search-block';
const MobMenu = dynamic(() => import('@/components/header/mob-menu/mob-menu'), { ssr: false });
//import MobMenu from '@/components/header/mob-menu/mob-menu';
import { Icons } from '@/components/ui/icons/icons';
import { useScroll } from '@/hooks/hooks';

const ButtonIcon = dynamic(() => import('@/components/ui/button-icon/button-icon'), { ssr: false });
import { navList } from '@/data/constants';
import useCartStore from '@/store/cartStore';
import useFavoriteStore from '@/store/favoriteStore';
import s from './header2.module.scss';

export default function Header2() {
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const isScrolled = useScroll({ offset: 20 });
  const { cartProducts, toggleCartVisibility } = useCartStore();
  const favoriteCount = useFavoriteStore(state => state.favoriteProducts.length);
  const cartCount = cartProducts.length;
  const [showMobMenu, setShowMobMenu] = useState(false);
  const closeMobMenu = () => {
    setShowMobMenu(false);
  };

  return (
    <>
      <div className={`${s.header2} ${isScrolled ? s.fixedHeader : ''}`}>
        <Container>
          <div className={s.content}>
            {isLaptop ? (
              <>
                <Link href="/" className={`${s.logo} ${isScrolled ? s.hide : ''}`}>
                  Logo
                </Link>
                <CatalogBlock />
                <nav className={s.nav}>
                  {navList.map(item => (
                    <Link key={item.id} href={item.url} className={s.listItem}>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>
              </>
            ) : (
              <>
                <button
                  className={s.mobMenuButton}
                  onClick={() => {
                    setShowMobMenu(true);
                  }}
                >
                  <Icons.menu />
                  Меню
                </button>
                <div>Logo</div>
              </>
            )}

            <div className={s.buttonsIcons}>
              <SearchBlock />
              <span></span>
              <ButtonIcon size="large" customClass="accent" count={favoriteCount}>
                <Icons.favoriteOutlined size="medium" />
              </ButtonIcon>
              <span></span>
              <ButtonIcon size="large" customClass="accent" onClick={toggleCartVisibility} count={cartCount}>
                <Icons.cartOutlined size="medium" />
              </ButtonIcon>
            </div>
          </div>
        </Container>
      </div>
      <MobMenu showMobMenu={showMobMenu} closeMobMenu={closeMobMenu} />
    </>
  );
}
