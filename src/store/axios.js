import axios from 'axios';

const instance = axios.create({
  //baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: 'https://fake-data-e-commerce.vercel.app',
});
/*
instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
*/
export default instance;
