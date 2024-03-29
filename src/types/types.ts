import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode
  className?: string
}
export interface NavItem {
  title: string;
  id: string;
  url: string;
}

export interface CatalogList {
  title: string;
  href: string;
  value: string;
}

export interface ReviewType{
  name: string
  text: string
  rating: number
  date: string
  email: string
  id: string
  productId?: string
  answerName?: string
  answerText?: string
  answerDate?: string
}

export interface Product {
  id: string
  type?: string
  category?: string
  mainCategory?: string
  title: string
  description?: string
  brand: string
  seria?: string
  value?: string
  gender?: string
  price: number
  salePrice? : number, 
  count: number
  country?: string
  madeIn?: string
  openingNote?: string
  heartNote?: string
  finalNote?: string
  code: string
  images: string[] | []
  quantity: number
}

export interface CategoryType{
  title: string
  id: string
  value: string
}


