import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'

const ProductDescription = () => {
  return (
    <div className="lg:my-7">
      <div className="">
        <h4 className="text-base bg-slate-300 w-20 h-4 my-3 rounded-md">
        </h4>
        <h1 className="bg-slate-400 w-[90%] h-5 my-2 rounded-md"></h1>
        <h1 className="bg-slate-400 w-96 h-5 my-2 rounded-md"></h1>
        <h4 className="bg-slate-300 w-24 h-5 my-2 rounded-md">
          <span className=""> </span>
        </h4>
        {/* reviews remaining */}
      </div>
      <div className="">
        
        <p className="bg-slate-300 w-[90%] h-4 my-2 rounded-md"></p>
        <p className="bg-slate-300 w-[89%] h-4 my-2 rounded-md"></p>
        <p className="bg-slate-300 w-[87%] h-4 my-2 rounded-md"></p>
        <p className="bg-slate-300 w-[30%] h-4 my-2 rounded-md"></p>

        <div className="">
          {/* color remaining */}
          {/* size remaining */}
        </div>
        <div className="price flex flex-col gap-2 my-2 md:flex-row md:justify-between md:my-5">
          <div className="file:left font-bold text-lg lg:text-xl">
            <h3 className='bg-slate-300 w-20 h-6 my-2 rounded-md'></h3>
          </div>
          <div className="right flex items-center justify-between md:justify-evenly md:gap-5 md:mr-4 lg:mr-10">
            <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 my-1 lg:text-lg">
              Buy Now
            </button>
            <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg" >
              <AiOutlineShoppingCart />
              Add to cart
            </button>
            <div className="favorite">
                <MdFavorite
                  className="text-pink-500 w-6 h-6 cursor-pointer"
                />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ProductDescription
