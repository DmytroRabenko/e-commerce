'use client';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Container from '@/components/ui/container/container';
const CatalogBlock = dynamic(() => import('@/components/header/catalog-block/catalog-block'), { ssr: false });
const SearchBlock = dynamic(() => import('@/components/header/search-block/search-block'), { ssr: false });
const SearchBlockFull = dynamic(() => import('@/components/header/search-block-full/search-block-full'), {
  ssr: false,
});
const MobMenu = dynamic(() => import('@/components/header/mob-menu/mob-menu'), { ssr: false });
const ButtonIcon = dynamic(() => import('@/components/ui/button-icon/button-icon'), { ssr: false });
import { Icons } from '@/components/ui/icons/icons';
import { useScroll } from '@/hooks/hooks';

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
  const [showSerchBlock, setShowSearchBlock] = useState(false);
  const closeMobMenu = () => {
    setShowMobMenu(false);
  };
  const closeSearchBlock = () => {
    setShowSearchBlock(false);
  };
  return (
    <>
      <div className={`${s.header2} ${isScrolled ? s.fixedHeader : ''}`}>
        <Container>
          <div className={s.content}>
            {isLaptop ? (
              <>
                <CatalogBlock />

                <Link href="/" className={s.logo}>
                  Logo
                </Link>

                <div className={s.buttonsIcons}>
                  <ButtonIcon onClick={() => setShowSearchBlock(!showSerchBlock)} size="large" customClass="accent">
                    <Icons.search size="medium" />
                  </ButtonIcon>
                  <span className={s.border}></span>
                  <ButtonIcon size="large" customClass="accent" count={favoriteCount}>
                    <Icons.favoriteOutlined size="medium" />
                  </ButtonIcon>
                  <span className={s.border}></span>
                  <ButtonIcon size="large" customClass="accent" onClick={toggleCartVisibility} count={cartCount}>
                    <Icons.cartOutlined size="medium" />
                  </ButtonIcon>
                </div>
                <SearchBlockFull showSerchBlock={showSerchBlock} closeSearchBlock={closeSearchBlock} />
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
                <Link href="/" className={s.mobLogo}>
                  MobLogo
                </Link>
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
          </div>
        </Container>
      </div>
      <MobMenu showMobMenu={showMobMenu} closeMobMenu={closeMobMenu} />
    </>
  );
}
