'use client';
import { useState, useRef } from 'react';
import { Icons } from '@/components/ui/icons/icons';
import { useClickOutside } from '@/hooks/hooks';
import Link from 'next/link';
import s from './search.module.scss';

const Search = () => {
  const searchRef = useRef<HTMLDivElement>(null);
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

  useClickOutside(searchRef, () => {
    if (visible) {
      setVisible(false);
    }
  });
  return (
    <div className={s.searchContainer} ref={searchRef}>
      <form autoComplete="off" className={s.search}>
        <input
          value={value}
          onChange={handleChange}
          name="search"
          className={s.input}
          placeholder="Пошук по каталогу"
        />
        {value === '' ? (
          <Icons.search className={s.search} size="medium" />
        ) : (
          <Icons.close
            className={s.close}
            size="medium"
            onClick={() => {
              setValue('');
              setVisible(false);
            }}
          />
        )}
      </form>

      {visible && (
        <div className={s.searchList}>
          {Array.isArray(data) && data.length > 0 ? (
            <>
              <div className={s.title}>
                Знайдено <span>{data.length}</span> співпадінь:
              </div>
              <ul className={s.list}>
                {data.map((item, i) => (
                  <div key={i}>результат пошуку{i}</div>
                ))}
              </ul>
              <div className={s.footer}><Link href='/'>Всі результати пошуку</Link></div>
            </>
          ) : (
            <>
            <div className={s.notFined}>За даним запитом нічого не знайдено</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
