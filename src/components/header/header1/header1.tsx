import Container from '@/components/ui/container/container';
import CallbackDropdown from '@/components/header/callback/callback';
import NavList from '@/components/header/nav-list/nav-list';
import Leng from '@/components/header/leng/leng';
import s from './header1.module.scss';

const Header1 = () => {
  return (
    <div className={s.header1}>
      <Container>
        <div className={s.content}>
          <CallbackDropdown />
          <NavList/>
          <Leng/>
        </div>
      </Container>
    </div>
  );
}

export default Header1;
