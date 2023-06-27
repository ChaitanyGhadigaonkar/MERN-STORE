import React from 'react'

const Address = () => {
  return (
    <div className='flex flex-1 flex-col'>
        <h1 className='text-lg font-semibold my-2'>Add Address</h1>
        <hr className='border-[1px] '/>
        <form className='flex flex-col gap-3 my-3 mx-2'>
            <div className="flex flex-col  gap-2">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" className="w-80 outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='Address: Street, House No / Apartment No' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="city">City</label>
                <input type="text" name="city" className="w-80 outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='City' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="State">State</label>
                <input type="text" name="state" className="w-80 outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='State' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" className="w-80 outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='Country' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="PinCode">PinCode</label>
                <input type="text" name="PinCode" className="w-80 outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='PinCode' />
            </div>
            <button className='text-base font-semibold rounded-lg border-slate-40w-800  outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg mx-auto my-2'>Add Address</button>
        </form>
    </div>
  )
}

export default Address
