import s from './payment-block.module.scss';
import initTranslations from '@/i18n';

const PaymentBlock = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['delivery-page']);
  return (
    <ul className={s.list}>
      <li>{t('pay-item1')}</li>
      <li>{t('pay-item2')}</li>
    </ul>
  );
};

export default PaymentBlock;
