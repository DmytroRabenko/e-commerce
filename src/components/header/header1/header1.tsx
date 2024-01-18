import Link from 'next/link';
import Container from '@/components/ui/container/container';
import CallbackDropdown from '@/components/header/callback/callback';
import NavList from '@/components/header/nav-list/nav-list';
import { Icons } from '@/components/ui/icons/icons';
import s from './header1.module.scss';

const Header1 = () => {
  return (
    <div className={s.header1}>
      <Container>
        <div className={s.content}>
          <CallbackDropdown />
          <NavList/>
          <Link className={s.user} href="/login">
            <Icons.person size="medium" />
            <span>Вхід до кабінету</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Header1;