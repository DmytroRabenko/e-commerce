
import axios from '@/store/axios';
import { Product } from '@/types/types';


interface GetCategoryProducts{
  category: string
  page: string
  limit: string
}


export async function getAllProducts() {
  try {
    const res = await axios.get(`/catalog`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
}

export async function getCategoryProducts({category, page, limit}:GetCategoryProducts){
    try {
      const res = await axios.get(`/catalog?category=${category}&_page=${page}&_limit=${limit}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  }
  export async function getProductById(id: string) {
    try {
      const res = await axios.get(`/catalog/${id}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  }
/*
export async function getProductById(id: string) {
  try {
    const res = await axios.get(`/catalog/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
}
*/