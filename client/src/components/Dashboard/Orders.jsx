import React from 'react'
import Order from './Order'

const Orders = () => {
  return (
    <div className='flex flex-[3] w-full flex-col'>
      <h1 className='text-xl font-semibold'>My Orders</h1>
      <Order/>
      <Order/>
    </div>
  )
}

export default Orders
