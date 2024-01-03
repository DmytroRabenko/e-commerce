'use client';
import React, { useEffect, useRef } from 'react';
import useStateStore from '@/store/stateStore';
import s from './cart.module.scss';
import { Icons } from '@/components/ui/icons/icons';
import CartProduct from './cartProduct/cartProduct';
import { useClickOutside } from '@/hooks/hooks';
import { CSSTransition } from 'react-transition-group';
import ButtonIcon from '@/components/ui/button-icon/button-icon';

const Cart = () => {
  const isCartVisible = useStateStore(state => state.isCartVisible);
  const cartProducts = useStateStore(state => state.cartProducts);
  const { toggleCartVisibility } = useStateStore();
  const cartRef = useRef<HTMLDivElement>(null);

  //відміна скролу при відкритті корзини
  useEffect(() => {
    document.body.classList.add('cart-visible');
    return () => {
      document.body.classList.remove('cart-visible');
    };
  }, []);

  useClickOutside(cartRef, toggleCartVisibility);

  return (
    <CSSTransition
      in={isCartVisible}
      nodeRef={cartRef}
      timeout={500}
      classNames={{
        enter: s.cartEnter,
        enterActive: s.cartEnterActive,
        exit: s.cartExit,
        exitActive: s.cartExitActive,
      }}
      unmountOnExit
    >
      <div className={`${s.wrapper} ${isCartVisible && s.visible}`}>
        <div className={s.cart} ref={cartRef}>
          <div className={s.title}>
            <h2>Корзина</h2>
            <ButtonIcon onClick={toggleCartVisibility}>
              <Icons.close size="medium" />
            </ButtonIcon>
          </div>
          {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
            <div className={s.cartProducts}>
              {cartProducts.map((product, i) => (
                <CartProduct key={i} product={product} />
              ))}
            </div>
          ) : (
            <p>корзина порожня</p>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Cart;
