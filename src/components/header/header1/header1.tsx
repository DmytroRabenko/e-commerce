import Container from '@/components/ui/container/container';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import s from './header1.module.scss';

export default function Header1() {
  return (
    <div className={s.header1}>
      <Container>
        <div className={s.content}>
          <div className={s.phones}>
            <Link className={s.link} href="/">
              +38 (097) 899 9869
            </Link>
            <Link className={s.link} href="/">
              +38 (098) 899 9869
            </Link>
            <button>Зворотній дзвінок</button>
          </div>
          <Link className={s.link} href='/'><Icons.person size="small" />Вхід</Link >
        </div>
      </Container>
    </div>
  );
}
