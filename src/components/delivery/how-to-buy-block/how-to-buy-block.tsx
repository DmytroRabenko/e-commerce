import s from './how-to-buy-block.module.scss';
import initTranslations from '@/i18n';

const HowToBuyBlock = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['delivery-page']);
  return (
    <ul className={s.list}>
      <li>1. {t('process-item1')}</li>
      <li>2. {t('process-item2')}</li>
      <li>3. {t('process-item3')}</li>
      <li>4. {t('process-item4')}</li>
      <li>5. {t('process-item5')}</li>
      <li>6. {t('process-item6')}</li>
      <li>7. {t('process-item7')}</li>
    </ul>
  );
};

export default HowToBuyBlock;
