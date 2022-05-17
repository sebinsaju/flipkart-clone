import http from "../utils/instance";

export const signup = async (values) => {
  let res = await http.post("user/register", { body: JSON.stringify(values) });
  return res;
};
