'use client';
import React, { useState, useRef } from 'react';
//import Link from 'next/link';
import { useClickOutside } from '@/hooks/hooks';
//import Button from '@/components/ui/button/button';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';
import s from './search-block.module.scss';

const SearchBlock = () => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [showSerchBlock, setShowSearchBlock] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleChange = event => {
    if (event.target.value.length > 1) {
      setVisible(true);
    } else {
      setVisible(false);
      setData([]);
    }
    setValue(event.target.value);
  };

  useClickOutside(blockRef, () => {
    if (showSerchBlock) {
      setShowSearchBlock(false);
    }
  });

  return (
    <div className={s.searchBlockContainer} ref={blockRef}>
      <ButtonIcon onClick={() => setShowSearchBlock(!showSerchBlock)} size="large" customClass="accent">
        <Icons.search size="medium" />
      </ButtonIcon>

      {showSerchBlock && (
        <div className={s.block}>
          <form autoComplete="off" className={s.search__container}>
            <div className={s.search}>
              <Icons.search />
              <input
                value={value}
                onChange={handleChange}
                name="search"
                className={s.input}
                placeholder="Пошук по каталогу"
              />
            </div>
          </form>
          {visible && (
            <div className={s.search__list}>
              {Array.isArray(data) && data.length > 0 ? (
                <>
                  <div className={s.title}>
                    Знайдено <span>{data.length}</span> співпадінь:
                  </div>
                  <ul>
                    {data.map((item, i) => (
                      <div key={i}>результат пошуку{i}</div>
                    ))}
                  </ul>
                </>
              ) : (
                <div className={s.notFined}>За даним запитом нічого не знайдено</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBlock;
