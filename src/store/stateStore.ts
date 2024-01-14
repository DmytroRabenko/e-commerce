import { create } from 'zustand';
import { Product } from '@/types/types';

interface StateStore {
  products: Product[];
  viewProducts: Product[];
}

const useStateStore = create<StateStore>(() => {

    return {
      products: [],
      viewProducts: [],


    }
});

export default useStateStore;
