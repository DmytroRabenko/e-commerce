'use client';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Container from '@/components/ui/container/container';
import Search from '@/components/header/search/search';
const CatalogBlock = dynamic(() => import('@/components/header/catalog-block/catalog-block'), { ssr: false });
const SearchBlock = dynamic(() => import('@/components/header/search-block/search-block'), { ssr: false });
const MobMenu = dynamic(() => import('@/components/header/mob-menu/mob-menu'), { ssr: false });
const ButtonIcon = dynamic(() => import('@/components/ui/button-icon/button-icon'), { ssr: false });
import { Icons } from '@/components/ui/icons/icons';
import { useScroll } from '@/hooks/hooks';
import useCartStore from '@/store/cartStore';
import useFavoriteStore from '@/store/favoriteStore';
import s from './header2.module.scss';
import ButtonCount from '@/components/ui/button-count/button-count';

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
                <Link href="/" className={s.logo}>
                  Logo
                </Link>
                <CatalogBlock />
                <div className={s.search}>
                  <Search />
                </div>
                <div className={s.buttonsIcons}>
                  <ButtonCount count={favoriteCount} text='Обране'>
                    <Icons.favoriteOutlined size="medium" />
                  </ButtonCount>
                  <ButtonCount count={cartCount} text='Кошик' onClick={toggleCartVisibility}>
                    <Icons.cartOutlined size="medium" />
                  </ButtonCount>
                </div>
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

/*

<div className={s.buttonsIcons}>
                  <span className={s.border}></span>
                  <ButtonIcon size="large" customClass="accent" count={favoriteCount}>
                    <Icons.favoriteOutlined size="medium" />
                  </ButtonIcon>
                  <span className={s.border}></span>
                  <ButtonIcon size="large" customClass="accent" onClick={toggleCartVisibility} count={cartCount}>
                    <Icons.cartOutlined size="medium" />
                  </ButtonIcon>
                </div>
*/
