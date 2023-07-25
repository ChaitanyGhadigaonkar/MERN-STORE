import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import LeftDashboard from "../components/Dashboard/LeftDashboard"
import AccountDetails from "../components/Dashboard/AccountDetails"
import Address from "../components/Dashboard/Address"
import Orders from "../components/Dashboard/Orders"
import WishList from "../components/Dashboard/WishList"

const Dashboard = () => {
    const {userInfo} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const {field} = useParams()

    useEffect(()=>{
        if(userInfo === null){
            navigate("/login")
        }
    },[])
  return (
    <div className="flex flex-1 flex-col gap-2 my-5 px-5 ">
        <div className="">
        <h1 className="text-xl mt-10">Welcome<span className="font-semibold "> {userInfo.name}</span></h1>
        </div>
        <div className="flex-1 min-h-[700px] flex flex-col md:flex-row items-center gap-4">
        <LeftDashboard/>
        {field === "account" && <AccountDetails/>}
        {field === "address" && <Address/>}
        {field === "orders" && <Orders/>}
        {field === "wishlist" && <WishList/>}
        </div>
        
    </div>
  )
}

export default Dashboard
