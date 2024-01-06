import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/types';

interface FavoriteStore {
  favoriteProducts: Product[];
  addToFavorites: (product: Product) => void; //додати в обрані
  removeFromFavorites: (productId: string) => void; //видалення з обраних
}

const useFavoriteStore = create<FavoriteStore>()(
  persist(
    set => ({
      favoriteProducts: [],

      //дадати товар в обрані
      addToFavorites: product => {
        set(state => {
          const newFavoriteProducts = [...state.favoriteProducts, product];
          return { favoriteProducts: newFavoriteProducts };
        });
      },
      //видалення товару з обраного
      removeFromFavorites: productId => {
        set(state => {
          const newFavoriteProducts = state.favoriteProducts.filter(product => product.id !== productId);
          return { favoriteProducts: newFavoriteProducts };
        });
      },
    }),
    { name: 'favorites' }
  )
);

export default useFavoriteStore;
