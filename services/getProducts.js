import http from "../utils/instance";

export const getProducts = async () => {
  const data = await http.get("products");
  return data.data ;
};
