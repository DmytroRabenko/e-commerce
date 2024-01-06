import { create } from 'zustand';
import { CartProduct } from '@/types/types';

interface FavoriteStore {
  favoriteProducts: CartProduct[];
  addToFavorites: (product: CartProduct) => void; //додати в обрані
  removeFromFavorites: (productId: string) => void; //видалення з обраних
}


const useFavoriteStore = create<FavoriteStore>((set) => {
  const storedFavoriteProducts = localStorage.getItem('favoriteProducts');
  const initialFavoriteProducts: CartProduct[] = storedFavoriteProducts ? JSON.parse(storedFavoriteProducts) : [];

  return {
    favoriteProducts: initialFavoriteProducts,

    //дадати товар в обрані
    addToFavorites: product => {
      set(state => {
        const newFavoriteProducts = [...state.favoriteProducts, product];
        localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteProducts)); // Зберігаємо дані в localStorage
        return { favoriteProducts: newFavoriteProducts };
      });
    },
    //видалення товару з обраного
    removeFromFavorites: productId => {
      set(state => {
        const newFavoriteProducts = state.favoriteProducts.filter(product => product.id !== productId);
        localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteProducts)); // Зберігаємо дані в localStorage
        return { favoriteProducts: newFavoriteProducts };
      });
    },
  };
});

export default useFavoriteStore;
