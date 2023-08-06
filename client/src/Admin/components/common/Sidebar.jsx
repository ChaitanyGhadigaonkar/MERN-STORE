import {MdSpaceDashboard} from "react-icons/md"
import {IoMdCart} from "react-icons/io"
import {IoPeopleSharp} from "react-icons/io5"
import {HiShoppingBag} from "react-icons/hi"
import { Link } from "react-router-dom"


const Sidebar = ({showSidebar, setShowSidebar}) => {
  return (
    <div className='h-full w-full border-r-[2px] px-4 py-10'>
        <div className="routes flex flex-col gap-4">
            <Link className="flex items-center px-2 py-2 cursor-pointer" to={"/"}>
              <MdSpaceDashboard className={`text-3xl`}/>
              {
                showSidebar ? <h2 className="ml-6 text-lg font-medium">Dashboard</h2>: <></>
              }
            </Link>
            <Link className="flex items-center px-2 py-2 cursor-pointer" to={"/products"}>
              <HiShoppingBag className={`text-3xl`}/>
              {
                showSidebar ? <h2 className="ml-6 text-lg font-medium" >Products</h2>: <></>
              }
            </Link>
            <Link className="flex items-center px-2 py-2 cursor-pointer" to={"/orders"}>
              
              <IoMdCart className="text-3xl "/>
              {
                showSidebar ? <h2 className="ml-6 text-lg font-medium">Orders</h2>:<></>
              }
              
            </Link>
            <Link className="flex items-center px-2 py-2 cursor-pointer" to={"/users"}>
              <IoPeopleSharp className="text-3xl "/>
              {
                showSidebar ? <h2 className="ml-6 text-lg font-medium">Customers</h2>:<></>
              }
              
            </Link>

        </div>
    </div>  
  )
}

export default Sidebar