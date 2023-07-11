import React from 'react'

const ProductLoader = () => {
  return (
    <div className='w-64 flex flex-col items-center gap-2 rounded-md shadow-lg cursor-pointer' >
        <div className="top">
            <div className='w-56 h-56 border-[1px] rounded-md bg-slate-200' />
        </div>
        <div className="bottom py-1 w-full px-6 ">
            <p className='category text-left bg-slate-300 rounded-lg w-20 h-2 my-1'></p>
            <h3 className='text-lg bg-slate-300 rounded-lg w-full h-3 my-2'></h3>
            <h3 className='text-lg bg-slate-300 rounded-lg w-10 h-3 my-2'></h3>
            <div className="price">
                <p className='text-sm bg-slate-300 rounded-lg w-20 h-2 my-2'></p>
            </div>
            <div className="sizes flex items-center gap-1 my-4">
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">S</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">M</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">L</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">XL</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">XXL</div>
            </div>
        </div>
    </div>
  )
}

export default ProductLoader
