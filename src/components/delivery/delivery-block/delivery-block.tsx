import Link from 'next/link';
import Image from 'next/image';
import s from './delivery-block.module.scss';
const DeliveryBlock = () => {
  return (
    <ul className={s.list}>
      <li>
        Доставка замовлень здійснюється транспортними компаніями <span>Нова пошта</span> та <span>Укр пошта</span> по
        всій території України, які є безпечними для здійснення доставок.
      </li>
      <li>Доставка здійснюється в відділення транспортної компанії або кур'єром, за вказаною адресою.</li>
      <li>Вартість доставки формується відповідно до тарифів транспортної компанії.</li>
      <li>Замовлення відправляються щоденно за виключенням Неділі.</li>
      <li>Зазвичай, доставка здійснюється протягом 2-5 днів після оформлення замовлення.</li>
      <li>
        Знайти найближче до вас відділення транспортної компанії можна знайти за посиланнями:
        <div className={s.links}>
          <Link href="https://novaposhta.ua/office/list" target="_blank">
            <Image src="/delivery/novaposhta.svg" alt="Нова пошта посилання" fill />
          </Link>
          <Link href="https://offices.ukrposhta.ua/" target="_blank">
            <Image src="/delivery/ukrposhta.svg" alt="Укр пошта посилання" fill />
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default DeliveryBlock;
