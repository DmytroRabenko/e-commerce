'use client';
import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/hooks';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';
import s from './search-block-full.module.scss';

interface SearchBlockFullProps {
  showSerchBlock: boolean;
  closeSearchBlock: () => void;
}

const SearchBlockFull: React.FC<SearchBlockFullProps>  = ({showSerchBlock, closeSearchBlock}) => {
  const blockRef = useRef<HTMLDivElement>(null);
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

  useClickOutside(blockRef, () => {
    if (showSerchBlock) {
      setValue('');
      setVisible(false);
    }
  });

  return (
    <div className={`${s.searchBlockContainer} ${showSerchBlock ? s.visible : ''}`} >
      <div className={s.block} ref={blockRef}>
        <form autoComplete="off">
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
        <ButtonIcon onClick={closeSearchBlock} size="medium">
          <Icons.close size='large'/>
        </ButtonIcon>
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

export default SearchBlockFull;
