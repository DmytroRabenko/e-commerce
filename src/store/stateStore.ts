import { create } from 'zustand';
import { Product } from '@/types/types';

interface StateStore {
  products: Product[];
  viewProducts: Product[];
  product: {};
}

const useStateStore = create<StateStore>((set, get) => {

    return {
      products: [],
      viewProducts: [],
      product: {},


    }
});

export default useStateStore;
