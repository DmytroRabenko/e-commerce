import Container from '@/components/ui/container/container';
import Link from 'next/link';
import Button from '@/components/ui/button/button';
import { Icons } from '@/components/ui/icons/icons';
import s from './header1.module.scss';

export default function Header1() {
  return (
    <div className={s.header1}>
      <Container>
        <div className={s.content}>
          <div className={s.phones}>
            <Link className={s.phone} href="/">
              +38 (097) 899 9869
            </Link>
            <Link className={s.phone} href="/">
              +38 (098) 899 9869
            </Link>
            <Button>Зворотній дзвінок</Button>
          </div>
          <Button><Icons.person size="medium" />Вхід</Button>
        </div>
      </Container>
    </div>
  );
}
