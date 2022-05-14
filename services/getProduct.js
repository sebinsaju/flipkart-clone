import http from "../utils/instance"

export const getProduct = async (id) => {
    const res= await http.get(`products/${id}`);
    return res.data;
}