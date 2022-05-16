import http from "../utils/instance";

export const login = async (values) => {
    const res = await http.post('user/login', { body: values});
    return res;
}