import Link from 'next/link';
import { Icons } from '../../ui/icons/icons';
import s from './breadcrumbs.module.scss';

interface Breadcrumb {
  url: string;
  label: string;
}
interface BreadCrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className={s.breadcrumbs}>
      <Link href="/">
        <Icons.home />
      </Link>
      {breadcrumbs.map((item, index) => (
        <>
          <Icons.chevronRight />
          <Link href={item.url}>{item.label}</Link>
        </>
      ))}
    </div>
  );
};
export default BreadCrumbs;
