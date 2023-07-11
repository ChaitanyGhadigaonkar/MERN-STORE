import React from 'react'

const AccountDetails = () => {
  return (
    <div className='flex w-full flex-1 flex-col px-10'>
        <h1 className='text-lg font-semibold my-2'>Account Details</h1>
        <hr className='border-[1px] '/>
        <form className='flex w-full flex-col gap-3 my-3 mx-2 '>
            <div className="flex w-full flex-col  gap-2">
                <div className="flex flex-col gap-2">
                <label htmlFor="first-name"  className='text-sm'>First Name</label>
                <input type="text" name="first-name" className="outline-0 border-[2px] px-3 py-1 rounded-md text-sm " />
                </div>
               <div className='flex flex-col gap-2'>
               <label htmlFor="last-name" className='text-sm'>Last Name</label>
                <input type="text" name="last-name" className="outline-0 border-[2px] px-3 py-1 rounded-md text-sm " />
               </div>
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="phone" className='text-sm'>Phone Number</label>
                <input type="phone" name="phone" className="outline-0 border-[2px] px-3 py-1 rounded-md text-sm" />
            </div>
            <button className='text-sm font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg mx-auto my-2'>Save Changes</button>
        </form>
    </div>
  )
}

export default AccountDetails
