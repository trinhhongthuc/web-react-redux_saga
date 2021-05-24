import axios from "axios";

const url = "http://localhost:5000";

export const getProducts = async () => {
  const data = await axios.get(url);
  return data;
};

export const getProductsHome = async (sl) => {
  const data = await axios.get(`${url}/limit=${sl}`);
  return data;
};

export const createProducts = async (data) => {
  return await axios.post(url, { payload: data });
};

export const getProductDetail = async (id) => {
  const data = await axios.get(`${url}/product/${id}`);
  return data;
};
