import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import FetchRequest from "../utils/fetch"


const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")



    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    useEffect(()=>{
        if(localStorage.getItem("userInfo")){
          navigate("/")
        }
    },[])
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2">
      <h1 className="text-xl font-semibold my-2">Forgot password</h1>
      <h1 className="my-1 text-base font-[400]">Enter your email to get email about reset password</h1>
      <form>
        <div className="flex flex-col items-start gap-1 my-1">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            className="border-[2px] w-72 border-pink-300 rounded-md px-2 py-1 text-base outline-0"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 my-3 mx-auto bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
