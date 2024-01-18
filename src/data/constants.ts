interface NavItem {
  title: string;
  id: string;
  url: string;
}

export const navList: NavItem[] = [
  { title: 'Про нас', id: '2', url: '/about-us' },
  { title: 'Відгуки', id: '3', url: '/about-us' },
  { title: 'Оплата та доставка', id: '4', url: '/delivery' },
  { title: 'Контакти', id: '5', url: '/contacts' },
];

export const catalogList = [
  { title: 'Чоловічі парфуми', href: '/', value: 'men' },
  { title: 'Жіночі парфуми', href: '/', value: 'woomen' },
  { title: 'Парфуми в авто', href: '/', value: 'car' },
  { title: 'Парфуми для квартири', href: '/', value: 'house' },
  { title: 'Ліцензійна парфумерія', href: '/', value: 'car' },
  { title: 'Тестери парфумів', href: '/', value: 'house' },
  { title: 'Ефірні олії', href: '/', value: 'oil' },
  { title: 'Інша парфумерна продукція', href: '/', value: 'men' },
];

//  { title: 'Каталог', id: '1', url: '/catalog' },
