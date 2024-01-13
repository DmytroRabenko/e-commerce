'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/hooks';
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import s from './catalog-block.module.scss';

export default function CatalogBlock() {
  const catalogBlockRef = useRef<HTMLDivElement>(null);
  const [showBlock, setShowBlock] = useState(false);

  useClickOutside(catalogBlockRef, () => {
    if (showBlock) {
      setShowBlock(false);
    }
  });

  return (
    <div className={s.catalogBlockContainer} ref={catalogBlockRef}>
      <Button onClick={()=>setShowBlock(!showBlock)} color="green">
        <Icons.menu />
        Каталог
      </Button>
      {showBlock && (
        <div className={s.block}>
          <ul>
            <li>
              <Link className={s.instagram} href="/">
                Чоловічі парфуми
              </Link>
            </li>
            <li>
              <Link className={s.viber} href="/">
                Жіночі парфуми
              </Link>
            </li>
            <li>
              <Link className={s.telegram} href="/">
                Парфуми для будинку
              </Link>
            </li>
            <li>
              <Link className={s.phone} href="/">
                Парфуми в авто
              </Link>
            </li>
            <li>
              <Link className={s.phone} href="/">
                Інша парфумерна продукція
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
