import { create } from 'zustand';
import { CartProduct } from '@/types/types';

interface CartStore {
  cartProducts: CartProduct[];
  isCartVisible: boolean; //видимість корзини
  addToCart: (product: CartProduct) => void; //додати в корзину
  removeFromCart: (productId: string) => void; //видалення з корзини
  toggleCartVisibility: () => void; //змінити видимість корзини
}

const useCartStore = create<CartStore>((set) => {
  const storedCartProducts = localStorage.getItem('cartProducts');
  const initialCartProducts: CartProduct[] = storedCartProducts ? JSON.parse(storedCartProducts) : [];

  return {
    cartProducts: initialCartProducts,
    isCartVisible: false,

    //дадати товар в корзину
    addToCart: (product) => {
      set((state) => {
        const existingProduct = state.cartProducts.find((p) => p.id === product.id);

        if (existingProduct) {
          // Якщо товар вже є в корзині, збільшити кількість
          const newCartProducts = state.cartProducts.map((p) =>
            p.id === product.id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
          );
          localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
          return { cartProducts: newCartProducts };
        } else {
          // Якщо товару немає в корзині, додати його з кількістю 1
          const newCartProducts: CartProduct[] = [
            ...state.cartProducts,
            { ...product, quantity: 1 },
          ];
          localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
          return { cartProducts: newCartProducts };
        }
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
    //змінити видимість корзини
    toggleCartVisibility: () => {
      set(state => ({ isCartVisible: !state.isCartVisible }));
    },
  };
});

export default useCartStore;
