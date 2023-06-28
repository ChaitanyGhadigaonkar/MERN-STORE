import { VITE_API_URL } from "../config";

const FetchRequest = async (url, method, body) => {
  if (method === "GET") {
    try {
      const res = await fetch(`${VITE_API_URL}/${url}`, {
        method: "GET",
        credentials: "include",
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "POST" || "DELETE" || "PUT") {
    try {
      const res = await fetch(`${VITE_API_URL}/${url}`, {
        method,
        headers: {
          "content-type": "application/json",
        },
        credentials: "include", // just for cookie
        body: body,
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
};

export default FetchRequest;
