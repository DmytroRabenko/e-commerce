import type { Metadata } from 'next';
import Container from '@/components/ui/container/container';
import BreadCrumbs from '@/components/review/breadcrumbs/breadcrumbs';
import DeliveryBlock from '@/components/delivery/delivery-block/delivery-block';
import PaymentBlock from '@/components/delivery/payment-block/payment-block';
import HowToBuyBlock from '@/components/delivery/how-to-buy-block/how-to-buy-block';
import s from './delivery.module.scss';
import initTranslations from '@/i18n';
import TranslationsProvider from '@/services/providers/translation-provider';

export const metadata: Metadata = {
  title: 'Оплата та доставка - магазин парфумерії Parfumerie.ua',
  description: 'Умови оплати та доставки в інтернет магазині Parfumerie.ua',
};



export default async function Delivery({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, ['delivery-page']);
  const breadcrumbs = [{ label: t('bredcrumbs'), url: '/' }];
  return (
    <TranslationsProvider namespaces="delivery-page" locale={locale} resources={resources}>
      <Container>
        <div className={s.wrapper}>
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <h1>
            {t('top-title')} <strong>Parfumerie.ua</strong>
          </h1>

          <h2>{t('process-title')}</h2>
          <HowToBuyBlock locale={locale}/>
          <h2>{t('delivery-title')}</h2>
          <DeliveryBlock locale={locale} />
          <h2>{t('pay-title')}</h2>
          <PaymentBlock locale={locale}/>
        </div>
      </Container>
    </TranslationsProvider>
  );
}
