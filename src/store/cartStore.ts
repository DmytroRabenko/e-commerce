import { create } from 'zustand';
import { Product } from '@/types/types';


interface StateStore {
  cartProducts: Product[]; //корзина товари
  addToCart: (product: Product) => void; //додати в корзину
  removeFromCart: (productId: string) => void; //видалення з корзини
}

const useCartStore = create<StateStore>((set, get) => ({
  cartProducts: [],
  
  addToCart: product => {
    set(state => {
      const newCartProducts = [...state.cartProducts, product];
      localStorage.setItem('cartProducts', JSON.stringify(newCartProducts)); // Зберігаємо дані в localStorage
      return { cartProducts: newCartProducts };
    });
  },
  //видалення товару з корзини
  removeFromCart: productId => {
    set(state => {
      const newCartProducts = state.cartProducts.filter(product => product.id !== productId);
      localStorage.setItem('cartProducts', JSON.stringify(newCartProducts)); // Зберігаємо дані в localStorage
      return { cartProducts: newCartProducts };
    });
  },
}));

export default useCartStore;
