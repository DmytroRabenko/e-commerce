import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/types';

interface ViewedStore {
  viewedProducts: Product[];
  showViewed: boolean
  addToViewed: (product: Product) => void; //додати в обрані
}

const useViewedStore = create<ViewedStore>()(
  persist(
    set => ({
      viewedProducts: [],
      showViewed: false,
      addToViewed: product => {
        set(state => {
          const existingIndex = state.viewedProducts.findIndex(viewedProduct => viewedProduct.id === product.id);

          // Якщо товар вже є в переглянутих, видаляємо його і додаємо
          if (existingIndex !== -1) {
            const updatedViewedProducts = [
              product,
              ...state.viewedProducts.slice(0, existingIndex),
              ...state.viewedProducts.slice(existingIndex + 1),
            ];
            return { viewedProducts: updatedViewedProducts, showViewed: true  };
          }

          // Якщо товару немає в переглянутих, додаємо його на початок
          const newViewedProducts = [product, ...state.viewedProducts];
          return { viewedProducts: newViewedProducts, showViewed: true };
        });
      },
    }),
    { name: 'viewed' }
  )
);

export default useViewedStore;
