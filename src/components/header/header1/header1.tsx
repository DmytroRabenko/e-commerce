import React from 'react'
import Container from '@/components/ui/container/container';
import CallbackDropdown from '@/components/header/callback/callback';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import s from './header1.module.scss';

export default function Header1() {
  return (
    <div className={s.header1}>
      <Container>
        <div className={s.content}>
          <CallbackDropdown/>
          <Link className={s.user} href="/login">
            <Icons.person size="medium" />
            <span>Вхід до кабінету</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
