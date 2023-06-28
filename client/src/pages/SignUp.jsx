import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {VITE_API_URL} from "../config"
import {toast} from "react-hot-toast"



const SignUp = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cPassword:""})

  const handleOnChange =(e)=>{
    // console.log(credentials)
    setCredentials({...credentials , [e.target.name]:e.target.value})
  }

const signUp =async()=>{
  try {
    const res = await fetch(`${VITE_API_URL}/auth/register`,{
      method:"POST",
      body: JSON.stringify({
          name:credentials.name,
          email:credentials.email,
          password:credentials.password
      }
      ),
      headers:{
        "content-type":"application/json"
      }
      })
      const result = await res.json()
      toast.success("success")
      navigate("/login")
  } catch (err) {
    toast.error("Something went's wrong. Please try again.")
  }
  
}

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!credentials.name|| !credentials.email || !credentials.password || !credentials.cPassword) {
        toast.error("All fields are required")
      }
      signUp()
  }
  useEffect(()=>{
    if(localStorage.getItem("userInfo")===null){
      navigate("/tshirts")
    }
  })
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2 ">
      <h1 className="text-xl font-semibold my-2">Sign Up</h1>
      <form>
      <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0"  value={credentials.name} onChange={handleOnChange}  required
          />
        </div>
        <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0"  value={credentials.email} onChange={handleOnChange}  required
          />
        </div>
        <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0"  value={credentials.password} onChange={handleOnChange}  required
          />
        </div>
        <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="password" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name="cPassword"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0" value={credentials.cPassword} onChange={handleOnChange}  required
          />
        </div>
        <div className="">
          <p className="text-pink-400 font-semibold  text-sm my-2 text-right hover:text-pink-600 cursor-pointer" onClick={()=>navigate("/login")}>Already a customer?</p>
        </div>
        <button type="submit" className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 my-3 mx-auto bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
