import { http } from "./http";

export const predictFailure = async (payload) => {
  const { data } = await http.post("/predict/", payload);
  return data;
};
