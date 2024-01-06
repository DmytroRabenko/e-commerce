import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode
  className?: string
}

export interface Rewiew{
  name: string
  text: string
  rating: string
  date: string
}

export interface Product {
  id: string
  type?: string
  category?: string
  title: string
  description?: string
  brand: string
  seria?: string
  gender?: string
  price: string
  count: string
  country?: string
  madeIn?: string
  openingNote?: string
  heartNote?: string
  finalNote?: string
  code: string
  images: string[] | []
  reviews: Rewiew[]
  quantity?: number
}

