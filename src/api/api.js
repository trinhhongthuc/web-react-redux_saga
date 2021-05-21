import axios from "axios";

const url = "http://localhost:5000/";

export const getProducts = async () => {
  const data = await axios.get(url);

  return data;
};
