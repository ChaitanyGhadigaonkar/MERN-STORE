import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import LeftDashboard from "../components/Dashboard/LeftDashboard"
import AccountDetails from "../components/Dashboard/AccountDetails"
import Address from "../components/Dashboard/Address"

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
    <div className="flex flex-1 flex-col items-center justify-evenly gap-2 my-5 px-5 ">
        <div className="w-full">
        <h1 className="text-xl">Welcome <span className="font-semibold ">{userInfo.name}</span></h1>
        </div>
        <div className="flex-1 flex items-center justify-center gap-10">
        <LeftDashboard/>
        {field === "account" && <AccountDetails/>}
        {field === "address" && <Address/>}
        
        </div>
        
    </div>
  )
}

export default Dashboard
