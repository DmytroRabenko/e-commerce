import { create } from 'zustand';
import axios from '@/store/axios';

const useServicesStore = create((set, get) => ({
  louding: false,
  products: [],
  product: {},


  getAllProducts: async (url, page) => {
    const size = get().pageSize;
    try {
      set(() => {
        return {
          loading: true,
        };
      });
      const response = await axios.get(`/catalog`);
      set(state => ({...state, products:  response.data }));
      set(state => ({ ...state, loading: false}));
    } catch (error) {
      set(state => ({ ...state, loading: false}));
      throw new Error(error);
    }
  },


  
}));

export default useServicesStore;
