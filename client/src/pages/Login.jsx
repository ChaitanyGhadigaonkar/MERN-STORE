import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { VITE_API_URL } from "../config";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const res = await fetch(`${VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const { userInfo, msg } = await res.json();
      dispatch(setUserCredentials(userInfo));
      toast.success(msg);
      // navigate("/tshirts")
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      toast.error("Email or password required");
      return;
    }
    login();
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2">
      <h1 className="text-xl font-semibold my-2">Login Here</h1>
      <form>
        <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0"
            value={credentials.email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0"
            value={credentials.password}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="">
          <p
            className="text-pink-400 font-semibold  text-sm my-2 text-right hover:text-pink-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            New to MERN Store?
          </p>
        </div>
        <button
          type="submit"
          className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 my-3 mx-auto bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
