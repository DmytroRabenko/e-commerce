import React from 'react';
import dynamic from 'next/dynamic';
import Header1 from '@/components/header/header1/header1';
const Header2 = dynamic(() => import('@/components/header/header2/header2'), { ssr: false });
//import Header2 from '@/components/header/header2/header2';
import s from './header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <Header1 />
      <Header2 />
    </header>
  );
}
