'use client';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Cart from '@/components/cart/cart';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
      <Cart />
    </>
  );
}
