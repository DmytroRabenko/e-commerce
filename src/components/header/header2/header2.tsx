'use client'
import Container from '@/components/ui/container/container';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons/icons';
import {useScroll} from '@/hooks/hooks';
import s from './header2.module.scss';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { navList } from '@/data/constants';
import useStateStore from '@/store/stateStore';

interface Header2Props {
  className?: string;
}
export default function Header2({ className }: Header2Props) {
  const isScrolled = useScroll({ offset: 20 });
  const {toggleCartVisibility} = useStateStore();
  return (
    <div className={`${s.header2} ${isScrolled ? s.fixedHeader : ''}`}>
      <Container>
        <div className={s.content}>
          <Link href='/' className={`${s.logo} ${isScrolled ? s.hide : ''}`}></Link>
          <nav className={s.nav}>
            {navList.map(item => (
              <Link key={item.id} href={item.url} className={s.listItem}>
                {item.title}
              </Link>
            ))}
          </nav>
          <div className={s.buttonsIcons}>
            <ButtonIcon count='0'><Icons.favoriteOutlined size="medium" /></ButtonIcon>
            <ButtonIcon onClick={toggleCartVisibility} count='0'><Icons.cartOutlined size="medium" /></ButtonIcon>
          </div>
        </div>
      </Container>
    </div>
  );
}
