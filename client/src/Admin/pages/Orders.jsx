
import { BsFilterRight } from "react-icons/bs"
import { useEffect, useState } from "react"
import OrderRow from "../components/order/OrderRow"
import {useDispatch, useSelector} from "react-redux"
import { getAllOrders } from "../../slices/admin/orderSlice"
import { LIMIT } from "../../config"
import Pagination from "../components/common/Pagination"

const Orders = () => {
  const [showFilter, setShowFilter] = useState(false)
  
  const [pageNo, setPageNo] = useState(1)
  const [status, setStatus] = useState("all")
  const [oldestFirst, setOldestFirst] = useState("no")
  
  const dispatch = useDispatch()


  useEffect(()=>{
    // arguments are in this order isPending , limit, pageNo, oldestFirst
    const input = {
      isPending : status, limit : 2, page : pageNo, oldestFirst : oldestFirst
    }
    dispatch(getAllOrders(input))
  },[pageNo, oldestFirst])

  const { orders, prev, next, total } = useSelector(state=>state.adminOrders)

  const handleFilterClick = () => {
    setShowFilter(prev => !prev)
  }
  
  const handleOnStatusChange =()=>{
    setOldestFirst((prev) => prev === "no" ? "yes" : "no")
  } 


  return (
    <div className='my-10 mx-5 overflow-x-auto' id="admin-products-container">
      <div className="top flex items-center">
        <h3 className="font-[600] ml-2">Orders</h3>
      </div>
      <div className="table w-full px-4 bg-slate-50 rounded-md my-5 relative">
        <div className="top  py-5 flex items-center justify-between ">
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2 mr-5 w-96 outline-none" placeholder="Search" required="" />
          <button className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2" onClick={handleFilterClick}><BsFilterRight /> Filters</button>

          {/* filter list */}
          {showFilter &&
            <div className="absolute right-2 top-16 px-4 py-4 bg-white z-30">
              <p className="text-sm font-semibold ">Choose Category</p>
              <div className="">
                <div className="flex gap-2 items-center px-2 py-1">
                  <input type="checkbox" name="tshirt" id="tshirt" />
                  <p className="text-sm">Tshirt</p>
                </div>
                <div className="flex gap-2 items-center px-2 py-1">
                  <input type="checkbox" name="hoodie" id="hoodie" />
                  <p className="text-sm">Hoodie</p>
                </div>
                <div className="flex gap-2 items-center px-2 py-1">
                  <input type="checkbox" name="cap" id="cap" />
                  <p className="text-sm">Cap</p>
                </div>
              </div>
            </div>}

        </div>


        <table className="w-full my-5 border-collapse border rounded-sm">
          <thead className="bg-slate-100">
            <tr className="">
              <th className="text-sm py-2 text-left pl-2">ORDER NUMBER</th>
              <th className="text-sm py-2 text-left pl-2">USER</th>
              <th className="text-sm py-2 text-left pl-2 cursor-pointer" onClick={handleOnStatusChange} title="Sort By Date">DATE</th>
              <th className="text-sm py-2 text-left pl-2">TOTAL</th>
              <th className="text-sm py-2 text-left pl-2">STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {
              orders && orders.map((order)=>{
                return <OrderRow key={order._id} order={order} />
              })
            }
          </tbody>
        </table>
      </div>
      <Pagination totalPages={total} pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Orders
