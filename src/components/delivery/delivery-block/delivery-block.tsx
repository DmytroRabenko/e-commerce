import Link from 'next/link';
import Image from 'next/image';
import initTranslations from '@/i18n';
import s from './delivery-block.module.scss';

const DeliveryBlock = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['delivery-page']);
  return (
    <ul className={s.list}>
      <li>{t('delivery-item1')}</li>
      <li>{t('delivery-item2')}</li>
      <li>{t('delivery-item3')}</li>
      <li>{t('delivery-item4')}</li>
      <li>{t('delivery-item5')}</li>
      <li>
        {t('delivery-item6')}
        <div className={s.links}>
          <Link href="https://novaposhta.ua/office/list" target="_blank">
            <Image src="/delivery/novaposhta.svg" alt="Нова пошта посилання" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </Link>
          <Link href="https://offices.ukrposhta.ua/" target="_blank">
            <Image src="/delivery/ukrposhta.svg" alt="Укр пошта посилання" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default DeliveryBlock;
