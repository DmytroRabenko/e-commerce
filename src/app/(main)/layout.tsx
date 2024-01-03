'use client';
import Header from '@/components/header/header';
import useStateStore from '@/store/stateStore';
import Cart from '@/components/cart/cart';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const isCartVisible = useStateStore(state => state.isCartVisible); //   {isCartVisible && <Cart />}

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
      <Cart />
    </>
  );
}
