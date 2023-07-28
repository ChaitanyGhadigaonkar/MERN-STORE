import React from 'react'
import Order from './Order'

const Orders = () => {
  return (
    <div className='flex w-full flex-[3] flex-col md:px-10'>
      <h1 className='text-xl font-semibold'>My Orders</h1>
      <Order/>
      <Order/>
    </div>
  )
}

export default Orders
