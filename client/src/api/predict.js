import axios from "axios";

export const predictFailure = async (payload) => {
  const response = await axios.post("http://localhost:5000/predict", payload);
  return response.data;
};
