import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/types';

interface CartStore {
  cartProducts: Product[];
  isCartVisible: boolean; //видимість корзини
  addToCart: (product: Product) => void; //додати в корзину
  removeFromCart: (productId: string) => void; //видалення з корзини
  toggleCartVisibility: () => void; //змінити видимість корзини
  plusProductCount: (productId: string) => void; //збільш
  minusProductCount: (productId: string) => void; //зменшення
  calcTotalPrice: (data: Product[], totalValue:string) => string;
}

const useCartStore = create<CartStore>()(
  persist(
    set => ({
      cartProducts: [],
      isCartVisible: false,
      //дадати товар в корзину
      addToCart: product => {
        set(state => {
          const existingProduct = state.cartProducts.find(p => p.id === product.id);

          if (existingProduct) {
            // Якщо товар вже є в корзині, збільшити кількість
            const newCartProducts = state.cartProducts.map(p =>
              p.id === product.id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
            );
            return { cartProducts: newCartProducts };
          } else {
            // Якщо товару немає в корзині, додати його з кількістю 1
            const newCartProducts: Product[] = [...state.cartProducts, { ...product, quantity: 1 }];
            return { cartProducts: newCartProducts };
          }
        });
      },
      //видалення товару з корзини
      removeFromCart: productId => {
        set(state => {
          const newCartProducts = state.cartProducts.filter(product => product.id !== productId);
          return { cartProducts: newCartProducts };
        });
      },
      //змінити видимість корзини
      toggleCartVisibility: () => {
        set(state => ({ isCartVisible: !state.isCartVisible }));
      },
      //збільшити count
      plusProductCount: productId => {
        set(state => {
          const newCartProducts = state.cartProducts.map(product =>
            product.id === productId && product.quantity && product.quantity < 100
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
          return { cartProducts: newCartProducts };
        });
      },
      minusProductCount: productId => {
        set(state => {
          const newCartProducts = state.cartProducts.map(product =>
            product.id === productId && product.quantity && product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
          return { cartProducts: newCartProducts };
        });
      },
       calcTotalPrice : (data, totalValue) => {
        if (data && data.length > 0) {
          totalValue = data
            .map(product => product.price * product.quantity)
            .reduce((a, b) => a + b)
            .toFixed();
        }
        return totalValue;
      },
    }),
    {
      name: 'cart',
      partialize: (state) => ({ cartProducts: state.cartProducts }), //тільки ті ключі, які потрібно зберігати
    }
  )
);

export default useCartStore;
