import React from 'react'
import Product from "../components/Product/product"
import  {useLocation, useSearchParams}  from 'react-router-dom'
import { useSelector } from 'react-redux'
const SearchProducts = () => {


    const [searchParams] = useSearchParams();

    const searchParameters = searchParams.get("search")


    const {products} = useSelector(state=>state.product)
    const regex = new RegExp(searchParameters,"i");
    const filteredProducts = products.filter((product)=>{
        return regex.test(product.name)
    })

  return (
    <div className='flex flex-col items-center gap-5 px-3 my-5'>  
    <div className="w-full px-5">
    <h1 className='text-left text-xl'>Search result for :  <span className='font-semibold'>{searchParameters}</span></h1>
    </div>
    <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
          {
              filteredProducts &&  filteredProducts.map(product =>{
                return <Product key={product._id} product={product}/>
              })
            }
        </div>
    </div>
  )
}

export default SearchProducts
