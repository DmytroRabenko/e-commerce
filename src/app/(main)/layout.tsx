import { Suspense } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Cart from '@/components/cart/cart';
import Loading from '@/components/loading/loading';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
      <Cart />
    </>
  );
}
