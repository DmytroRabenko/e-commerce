'use client';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside, useBodyScrollLock } from '@/hooks/hooks';
import useCartStore from '@/store/cartStore';
import Button from '@/components/ui/button/button';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import CartProduct from './cartProduct/cartProduct';
import s from './cart.module.scss';

const Cart = () => {
  const { isCartVisible, cartProducts, toggleCartVisibility, calcTotalPrice } = useCartStore();
  const cartRef = useRef<HTMLDivElement>(null);
  useBodyScrollLock(isCartVisible);
  useClickOutside(cartRef, toggleCartVisibility);
  let totalValue = '';
  totalValue = calcTotalPrice(cartProducts, totalValue);

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
            <h2>Кошик</h2>
            <ButtonIcon customClass="light" size="medium" onClick={toggleCartVisibility}>
              <Icons.close size="medium" />
            </ButtonIcon>
          </div>

          {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
            <>
              <ul className={s.cartProducts}>
                {cartProducts.map((product, i) => (
                  <CartProduct key={i} product={product} />
                ))}
              </ul>

              <div className={s.cartFooter}>
                <div className={s.totalPrice}>Разом: {totalValue} грн</div>
                <Link href="/checkout">
                  <Button color="green" width="full" onClick={toggleCartVisibility}>
                    Оформити замовлення
                  </Button>
                </Link>
                <Button width="full" onClick={toggleCartVisibility}>
                  Продовжити покупки
                </Button>
              </div>
            </>
          ) : (
            <div className={s.empty}>
              <Icons.cartOutlined size="extraLarge" />
              <p>Кошик порожній</p>
              <Button onClick={toggleCartVisibility}>Перейти до покупок</Button>
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Cart;
