import s from './payment-block.module.scss';

const PaymentBlock = () => {
  return (
    <ul className={s.list}>
      <li>
        1. Оплата за реквізитами компанії - так ви економите частину коштів за доставку, оскільки не сплачуєте
        додаткову комісію транспортній компанії за перерахунок коштів.
      </li>
      <li>
        2. Післяплата при отриманні замовлення - так ви особисто перевіряєте та оглядаєте товар за місцем доставки,
        і тільки після цього здійснюєте оплату.
      </li>
    </ul>
  );
};

export default PaymentBlock;
