'use client';
import { useState, useRef } from 'react';
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 1) {
      setVisible(true);
    } else {
      setVisible(false);
      setData([]);
    }
    setValue(event.target.value);
  };

  useClickOutside(showSerchBlock, blockRef, () => {
    setVisible(false);
    setShowSearchBlock(false);
  });

  return (
    <div className={`${s.searchBlockContainer} ${showSerchBlock ? s.visible : ''}`} ref={blockRef}>
      {!showSerchBlock ? (
        <ButtonIcon onClick={() => setShowSearchBlock(!showSerchBlock)} size="large" customClass="accent">
          <Icons.search size="medium" />
        </ButtonIcon>
      ) : (
        <ButtonIcon
          onClick={() => {
            setVisible(false);
            setShowSearchBlock(false);
          }}
          size="large"
          customClass="accent"
        >
          <Icons.close size="medium" />
        </ButtonIcon>
      )}
      <div className={s.searchBlock}>
        <div className={`${s.block} ${showSerchBlock ? s.visible : ''}`}>
          <form autoComplete="off">
            <div className={s.search}>
              <input
                value={value}
                onChange={handleChange}
                name="search"
                className={s.input}
                placeholder="Пошук по каталогу"
              />
              {value === '' ? (
                <Icons.search size="small" />
              ) : (
                <Icons.close
                  size="small"
                  onClick={() => {
                    setValue('');
                    setVisible(false);
                  }}
                />
              )}
            </div>
          </form>
        </div>
      </div>

      {visible && (
        <div className={s.searchList}>
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
  );
};

export default SearchBlock;
