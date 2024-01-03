import Container from '@/components/ui/container/container';
import Link from 'next/link';
import Image from 'next/image';
import s from './greeting-block.module.scss';

export default function Greeting() {
  return (
    <Container>
      <div className={s.greeting}>
        <div className={s.title}>
          <h1 className={s.text}>
            <p>В нашому магазині ми пропонуємо найм`якших і найгарніших плющевих ведмедиків.</p>
            <p>
              Від дитячих днів народження до романтичних жестів, наші плюшеві ведмедики роблять кожну мить особливою.
            </p>
            <div className={s.link}> <Link href="/"> обрати ведмедика</Link></div>
             
          </h1>
        </div>
        <div className={s.photo}></div>
      </div>
    </Container>
  );
}
