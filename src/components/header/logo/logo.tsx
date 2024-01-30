import Link from 'next/link';
import { Cormorant_SC } from 'next/font/google';

import s from './logo.module.scss';


const cormorant = Cormorant_SC({ weight:'400', subsets: ['latin'] });
const Logo = () => {
  return (
    <Link href="/" className={`${cormorant.className} ${s.logo}`}>
      Parfumerie
    </Link>
  );
};
export default Logo;

