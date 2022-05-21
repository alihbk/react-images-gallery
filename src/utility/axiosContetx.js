import axios from "axios";
import { mainApiUrl } from "./const";

export const axiosContext = () => {
  return axios.create({
    baseURL: mainApiUrl,
    headers: { "Content-Type": "application/json" },
  });
};
