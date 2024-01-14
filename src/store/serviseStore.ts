import { create } from 'zustand';
import axios from '@/store/axios';
import { Product } from '@/types/types';

interface ServicesStore {
  getAllProducts: () => Promise<Product[]>;
  getCategoryProducts: (category: string, page: number, limit: string) => Promise<Product[]>;
  getProductById: (id: string) => Promise<Product>;
}

interface CustomError extends Error {
  message: string;
}

const useServicesStore = create<ServicesStore>(set => ({
  getAllProducts: async () => {
    try {
      const res = await axios.get(`/catalog`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  },
  getCategoryProducts: async (category, page, limit) => {
    try {
      const res = await axios.get(`/catalog?category=${category}&_page=${page}&_limit=${limit}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  },
  getProductById: async id => {
    try {
      const res = await axios.get(`/catalog/${id}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  },
}));

export default useServicesStore;
