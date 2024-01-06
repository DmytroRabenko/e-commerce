import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { Product } from '@/types/types';

interface CartStore {
  viewedProducts: Product[];
  addToViewed: (product: Product) => void; //додати в корзину
}

const useViewedStore = create<CartStore>()(
  persist(
    (set) =>({
      viewedProducts: [],

    //дадати товар в корзину
    addToViewed: product => {
      set(state => {
        const newViewedProducts = [...state.viewedProducts, product];
        return { viewedProducts: newViewedProducts };
      });
    },
   
  }),
  {name: 'viewed'}
)
);

export default useViewedStore;
