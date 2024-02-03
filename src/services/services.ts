
import axios from '@/store/axios';
import { Product, ReviewType } from '@/types/types';


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
      const res = await axios.get(`/catalog?mainCategory=${category}&_page=${page}&_limit=${limit}`);
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
  export async function getAllReviews() {
    try {
      const res = await axios.get(`/reviews`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  }

  export async function getProductReviews(productId: string) {
    try {
      const res = await axios.get(`/reviews?productId=${productId}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message);
    }
  }

  export async function addProductReview(data: ReviewType) {
    try {
      const response = await axios.post(`/reviews`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  

