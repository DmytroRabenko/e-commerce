'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/hooks';
import CallbackList from './callback-list/callback-list';
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import s from './callback.module.scss';

export default function CallbackDropdown() {
  const blockRef = useRef<HTMLDivElement>(null);
  const [showBlock, setShowBlock] = useState(false);

  useClickOutside(blockRef, () => {
    if (showBlock) {
      setShowBlock(false);
    }
  });

  return (
    <div className={s.callbackContainer} ref={blockRef}>
      <button onClick={() => setShowBlock(!showBlock)} className={s.trigger}>
        <Icons.phone size="small" />
        Зв`язатися з нами
        <span className={showBlock ? s.rotateIcon : ''}>
          <Icons.chevronDown size="medium" />
        </span>
      </button>

      {showBlock && (
        <div className={s.block}>
          <CallbackList />
          <div className={s.info}>
            <Button color="green">
              <Icons.phone />
              Зворотній дзвінок
            </Button>
            <p>Працюємо щоденно з 9:00 до 18:00</p>
          </div>
        </div>
      )}
    </div>
  );
}
