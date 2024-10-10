import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (limit = 10, skip = 0) => {
  const response = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const searchProducts = async (query) => {
  const response = await axios.get(`${API_URL}/search?q=${query}`);
  return response.data;
};
