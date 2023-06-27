import { VITE_API_URL } from "../config";

const logout =async()=>{
    try {
        const res = await fetch(`${VITE_API_URL}/auth/logout`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        });
        const result = await res.json();
        return result.success
      } catch (err) {
        return false
      }
}

export default logout