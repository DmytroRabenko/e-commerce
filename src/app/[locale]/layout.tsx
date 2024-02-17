import { Suspense } from 'react';
import Providers from '@/services/providers/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parfumerie - магазин парфумів, найкращі ціни, відмінна якість!',
  description: 'Найкращі доступні парфуми, оптом та вроздріб, брендові, копії брендів, сток',
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
