
const Categories = ({category, setCategory}) => {
    
  return (
    <div className="category-filter my-2">
        <h1 className='text-lg font-semibold my-2'>Categories</h1>
        <div className="categories flex flex-col text-base font-semibold gap-1">
            <h3 className={`ml-2 text-base font-medium text-black cursor-pointer opacity-80 ${category === "all" ? "opacity-100" :""}`} onClick={()=>setCategory("all")} >All</h3>
            <h3 className={`ml-2 text-base font-medium text-black cursor-pointer opacity-80 ${category === "tshirt" ? "opacity-100" :""}`} onClick={()=>setCategory("tshirt")} >T Shirts</h3>
            <h3 className={`ml-2 text-base font-medium text-black cursor-pointer opacity-80 ${category === "hoodie" ? "opacity-100" :""}`} onClick={()=>setCategory("hoodie")} >Hoodies</h3>
            <h3 className={`ml-2 text-base font-medium text-black cursor-pointer opacity-80 ${category === "cap" ? "opacity-100" :""}`} onClick={()=>setCategory("cap")} >Caps</h3>
        </div>
    </div>
  )
}

export default Categories
