import Container from '@/components/ui/container/container';
import CallbackDropdown from '@/components/header/callback/callback';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import s from './header1.module.scss';
import { navList } from '@/data/constants';
export default function Header1() {
  return (
    <div className={s.header1}>
      <Container>
        <div className={s.content}>
          <CallbackDropdown/>
          <nav className={s.nav}>
                  {navList.map(item => (
                    <Link key={item.id} href={item.url} className={s.listItem}>
                      {item.title}
                    </Link>
                  ))}
                </nav>
          <Link className={s.user} href="/login">
            <Icons.person size="medium" />
            <span>Вхід до кабінету</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
