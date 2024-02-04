import { create } from 'zustand';
import axios from '@/store/axios';
import { Product, CategoryType } from '@/types/types';
import { UseBoundStore, StoreApi } from 'zustand';

interface ServicesStore {
  getProducts: (queryParams:string) => Promise<Product[]>;
  getCategoryProducts: (category: string, page: number, limit: string) => Promise<Product[]>;
  getProductById: (id: string) => Promise<Product>;
  getCategoryList: () => Promise<{
    productCategory: CategoryType[];
    generalCategory: CategoryType[];
  }>;
}

const useServicesStore: UseBoundStore<StoreApi<ServicesStore>> = create<ServicesStore>(set => ({
  getProducts: async (queryParams) => {
    try {
      const res = await axios.get(`/${queryParams}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  },
  getCategoryProducts: async (categories, page, limit) => {
    try {           //відфільтровую сатегорії по значенню mainCategories
      const res = await axios.get(`/catalog?mainCategory=${categories}&_page=${page}&_limit=${limit}`);
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
  getCategoryList: async () => {
    try {
      const res = await axios.get(`/categories`);
      return res.data.category;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  },
}));

export default useServicesStore;
