import { useNavigate, useParams } from "react-router-dom"


const LeftDashboard = () => {
    const navigate = useNavigate();
    const {field} = useParams()

  return (
    <div className="flex flex-1 flex-col items-center justify-center w-64 my-5">
        <div className="border-[1px] text-center py-2 w-full bg-slate-200">
            <h1 className="text-base font-semibold ">Account</h1>
        </div>
        <div className={`border-[1px] text-center py-2 w-full cursor-pointer ${field === "account" ? "font-[600] ": "bg-slate-50"}`} onClick={()=>(navigate("/dashboard/account"))}>
            <h1 className="text-base ">Account Details</h1>
        </div>
        <div className={`border-[1px] text-center py-2 w-full cursor-pointer ${field === "address" ? "font-[600] ": "bg-slate-50"}`} onClick={()=>(navigate("/dashboard/address"))}>
            <h1 className="text-base ">Address</h1>
        </div>
        <div className={`border-[1px] text-center py-2 w-full cursor-pointer ${field === "orders" ? "font-[600] ": "bg-slate-50"}`} onClick={()=>(navigate("/dashboard/orders"))}>
            <h1 className="text-base ">Orders</h1>
        </div>
        <div className={`border-[1px] text-center py-2 w-full cursor-pointer ${field === "wishlist" ? "font-[600] ": "bg-slate-50"}`} onClick={()=>(navigate("/dashboard/wishlist"))}>
            <h1 className="text-base ">WishList</h1>
        </div>
    </div>
  )
}

export default LeftDashboard
