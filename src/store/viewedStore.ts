import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/types';

interface ViewedStore {
  viewedProducts: Product[];
  showViewed: boolean;
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

          // Якщо товар вже є в переглянутих, видаляємо його і додаємо новий на початок
          if (existingIndex !== -1) {
            const updatedViewedProducts = [
              product,
              ...state.viewedProducts.slice(0, existingIndex),
              ...state.viewedProducts.slice(existingIndex + 1),
            ];
            const limitedViewedProducts = updatedViewedProducts.slice(0, 50);
            return { viewedProducts: limitedViewedProducts, showViewed: true };
          }

          // Якщо товару немає в переглянутих, додаємо його на початок і обмежуємо до 50 товарів
          const newViewedProducts = [product, ...state.viewedProducts];
          const limitedNewViewedProducts = newViewedProducts.slice(0, 50);
          return { viewedProducts: limitedNewViewedProducts, showViewed: true };
        });
      },
    }),
    { name: 'viewed' }
  )
);

export default useViewedStore;
