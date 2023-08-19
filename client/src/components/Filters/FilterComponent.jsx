
import {FaFilter} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"
import Categories from './Categories'
import Size from "./Size"
import { useState } from "react"

const FilterComponent = ({showFilter ,setShowFilter,setMaxPrice,setMinPrice,category, setCategory}) => {

  const [price, setPrice] = useState(300)
  const handleOnPriceChange =(e)=>{
    setMaxPrice(e.target.value)
    setPrice(e.target.value)
  }
  return (
    <div className={`${showFilter ? "fixed" : "hidden"} left-0 top-0 w-96 h-screen bg-slate-300 py-10 px-8 z-50`}>
      <div className="top flex items-center justify-between">
        <div className="flex items-center justify-between gap-5">
          <FaFilter/>
            <h1 className="font-semibold text-xl">Filters</h1>
        </div>
        <RxCross2 className="text-2xl font-bold cursor-pointer" onClick={()=>setShowFilter(false)}/>
      </div>
      <div className="w-full my-3">
        <h3 className="text-base font-semibold pb-2">Price Range</h3>
        <p className="text-center text-sm font-semibold" >₹0 - ₹{price} </p>
        <input className="price-slider w-full my-2 " type="range" name="price" value={price} min={0} max={5000} step={200} onChange={handleOnPriceChange}/>
      </div>
      <Categories category={category} setCategory={setCategory} />
      <Size/>
    </div>
  )
}

export default FilterComponent


/*
<div className="price-filter">

      </div>
      <div className="category-filter">
        <h1 className='text-lg font-semibold my-2 '>Categories</h1>
        <div className="categories flex flex-col text-base font-semibold gap-1">
            <h3 className={`px-1 cursor-pointer  opacity-70 ${category === "tshirt" ? "opacity-100" :""}`} onClick={()=>setCategory("tshirt")}>T Shirts</h3>
            <h3 className={`px-1 cursor-pointer  opacity-70 ${category === "hoodie" ? "opacity-100" :""}`} onClick={()=>setCategory("hoodie")}>Hoodies</h3>
            <h3 className={`px-1 cursor-pointer  opacity-70 ${category === "cap" ? "opacity-100" :""}`} onClick={()=>setCategory("cap")}>Caps</h3>
            <h3 className={`px-1 cursor-pointer  opacity-70 ${category === null ? "opacity-100" :""}`} onClick={()=>setCategory(null)}>All</h3>
        </div>
      </div>
*/