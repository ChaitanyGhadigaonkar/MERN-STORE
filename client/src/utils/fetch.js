import { VITE_API_URL } from "../config";
import axios from "axios";

//TODO: use axios

const content = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "content-type": "application/json",
    authToken: JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).authToken
      : "",
  },
  withCredentials: true,
});

const FetchRequest = async (url, method, body) => {
  if (method === "GET") {
    try {
      const response = await content.get(`${url}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "POST" || "DELETE" || "PUT") {
    try {
      const res = await content.post(`${url}`, body);
      // console.log(res.data);
      const result = await res.data;
      return result;
    } catch (err) {
      console.log(err);
    }
  }
};

export default FetchRequest;
