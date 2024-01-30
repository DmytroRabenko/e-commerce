import Link from 'next/link';
import { Cormorant_SC } from 'next/font/google';
import s from './leng.module.scss'


const cormorant = Cormorant_SC({ weight: '400', subsets: ['latin'] });
const Leng = () => {
  return (
    <div className={s.leng}>
      <button className={s.ru}>Рос</button>
      <button className={s.ua}>Укр</button>
    </div>
  );
};
export default Leng;

