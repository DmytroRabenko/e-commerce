import { NavItem, CatalogList } from "@/types/types";

export const navList: NavItem[] = [
  { title: 'Про нас', id: '2', url: '/about-us' },
  { title: 'Відгуки', id: '3', url: '/about-us' },
  { title: 'Оплата та доставка', id: '4', url: '/delivery' },
  { title: 'Контакти', id: '5', url: '/contacts' },
  { title: 'Особистий кабінет', id: '6', url: '/login' },
];

export const catalogList: CatalogList[] = [
  { title: 'Чоловічі парфуми', href: '/', value: 'men' },
  { title: 'Жіночі парфуми', href: '/', value: 'woomen' },
  { title: 'Парфуми в авто', href: '/', value: 'car' },
  { title: 'Парфуми для квартири', href: '/', value: 'house' },
  { title: 'Ліцензійна парфумерія', href: '/', value: 'car' },
  { title: 'Тестери парфумів', href: '/', value: 'house' },
  { title: 'Ефірні олії', href: '/', value: 'oil' },
  { title: 'Інша парфумерна продукція', href: '/', value: 'men' },
];





export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];