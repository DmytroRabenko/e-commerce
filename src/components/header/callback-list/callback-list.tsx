'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/hooks';
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import s from './callback-list.module.scss';

export default function CallbackList() {
  return (
    <ul className={s.list}>
      <li>
        <Link className={s.instagram} href="/">
          Instagram
        </Link>
      </li>
      <li>
        <Link className={s.viber} href="/">
          Viber
        </Link>
      </li>
      <li>
        <Link className={s.telegram} href="/">
          Telegramm
        </Link>
      </li>
      <li>
        <Link className={s.phone} href="/">
          097 899 9869
        </Link>
      </li>
      <li>
        <Link className={s.phone} href="/">
          098 899 9869
        </Link>
      </li>
    </ul>
  );
}
