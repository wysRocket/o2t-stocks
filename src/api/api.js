import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

export const stocksAPI = {
  getAllData() {
    return instance.get();
  },
  getLastTen() {
    return instance.get(`?count=10`);
  },
};
