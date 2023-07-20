import React from 'react'
import SavedAddress from './SavedAddress'

const Address = () => {
    const addresses = [{
            address:"andheri east",
            country:"India",
            state:"Maharashatra",
            city:"Mumbai",
            pinCode:456110
    }]
  return (
    <div className='flex w-full flex-[3] flex-col px-10'>
        <h1 className='text-lg font-semibold my-2'>Add Address</h1>
        <hr className='border-[1px] '/>

            {
                addresses.map(address=>{
                    return <SavedAddress address={address}/>
                })
            }

        <form className='flex w-full flex-col gap-3 my-3 mx-2 '>
            <div className="flex w-full flex-col  gap-2">
                <label htmlFor="address" className='text-base'>Address</label>
                <input type="text" name="address" className="outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='Address: Street, House No / Apartment No' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="city" className='text-base'>City</label>
                <input type="text" name="city" className="outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='City' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="State" className='text-base'>State</label>
                <input type="text" name="state" className="outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='State' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="country" className='text-base'>Country</label>
                <input type="text" name="country" className="outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='Country' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="PinCode" className='text-base'>PinCode</label>
                <input type="text" name="PinCode" className="outline-0 border-[2px] px-3 py-1 rounded-md text-base" placeholder='PinCode' />
            </div>
            <button className='text-base font-semibold rounded-lg border-slate-40w-800  outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg mx-auto my-2'>Add Address</button>
        </form>
    </div>
  )
}

export default Address
