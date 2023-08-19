import React, { useEffect, useState } from 'react'
import Order from './Order'
import FetchRequest from "../../../utils/fetch"


const Orders = () => {
  const [orders, setOrders] = useState()

  // get all orders of the user
  const getOrders = async()=>{
    const { success, orders } = await FetchRequest("order", "GET", null)
    setOrders(orders)
  }
  useEffect(()=>{
      getOrders()
  },[])

  return (
    <div className='flex w-full flex-[3] flex-col md:px-10'>
      <h1 className='text-xl font-semibold'>My Orders</h1>
        {
          orders && orders.map((order)=>(
            <Order key={order._id} order={order}/>
          ))
        }
    </div>
  )
}

export default Orders
