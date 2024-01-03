import { create } from 'zustand';
import { Product } from '@/types/types';

interface StateStore {
  products: Product[];
  favoriteProducts: Product[];
  cartProducts: Product[];
  viewProducts: Product[];
  product: {};
  isCartVisible: boolean;
  isFavoriteVisible: boolean;

  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  toggleCartVisibility: () => void;
  toggleFavoritesVisibility: () => void;
}

const useStateStore = create<StateStore>((set, get) => {

    // Зчитуємо дані з localStorage при старті
    const storedCartProducts = localStorage.getItem('cartProducts');
    const initialCartProducts: Product[] = storedCartProducts ? JSON.parse(storedCartProducts) : [];

    return {
      products: [],
      favoriteProducts: [],
      cartProducts: initialCartProducts,
      viewProducts: [],
      product: {},
      isCartVisible: true,
      isFavoriteVisible: false,

      addToCart: (product) => {
        set((state) => {
          const newCartProducts = [...state.cartProducts, product];
          localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
          return { cartProducts: newCartProducts };
        });
      },
      removeFromCart: (productId) => {
        set((state) => {
          const newCartProducts = state.cartProducts.filter((product) => product.id !== productId);
          localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
          return { cartProducts: newCartProducts };
        });
      },
      addToFavorites: (product) => {
        set((state) => {
          const newFavoriteProducts = [...state.favoriteProducts, product];
          localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteProducts));
          return { favoriteProducts: newFavoriteProducts };
        });
      },
      removeFromFavorites: (productId) => {
        set((state) => {
          const newFavoriteProducts = state.favoriteProducts.filter((product) => product.id !== productId);
          localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteProducts));
          return { favoriteProducts: newFavoriteProducts };
        });
      },
      toggleCartVisibility: () => {
        set((state) => ({ isCartVisible: !state.isCartVisible }));
      },
      toggleFavoritesVisibility: () => {
        set((state) => ({ isFavoriteVisible: !state.isFavoriteVisible }));
      }
    };
});

export default useStateStore;
