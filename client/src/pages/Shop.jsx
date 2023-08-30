
import FilterComponent from "../components/Filters/FilterComponent";
import PrevNext from "../components/Common/PrevNext";
import Product from "../components/Product/Product"
import ProductLoader from "../components/Loading/Product"
import { LIMIT } from "../config";
import FetchRequest from "../utils/fetch";
import { useEffect, useState } from "react";


const Shop = ({showFilter, setShowFilter}) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState()
  const [pageNo, setPageNo] = useState(1)
  const [hasNext, setHasNext] = useState(true)
  const [hasPrev, setHasPrev] = useState(true)
  const [maxPrice, setMaxPrice] = useState(2000)
  const [minPrice, setMinPrice] = useState(200)
  const [category, setCategory] = useState("all")
  
  const limit = LIMIT;

  const getData = async()=>{
    setLoading(true)
    const {products,previous,next} = await FetchRequest(`product/products?page=${pageNo}&limit=${limit}&category=${category}&maxPrice=${maxPrice}&minPrice=${minPrice}`, "GET", null)
    setLoading(false)
    setHasPrev(previous !== null)
    setHasNext(next !== null)
    setProducts(products)
    }

    useEffect(()=>{
      getData()
    },[pageNo,maxPrice,category])
    useEffect(()=>{
      return ()=>{
        setShowFilter(false)
      }
    },[])
  return (
    <>
    <FilterComponent showFilter={showFilter} setShowFilter={setShowFilter} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} category={category} setCategory={setCategory}/>
    <div className='flex flex-col items-center gap-5 px-3 my-5'>
      <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
            {
              !loading  ?  Object.keys(products).map(product =>{
                return <Product key={products[product]._id} product={products[product]}/>
              })
              : 
              <>
              <ProductLoader/>
              <ProductLoader/>
              <ProductLoader/>
              <ProductLoader/>
              </>
              
            }
      </div>
      <PrevNext pageNo={pageNo} setPageNo={setPageNo} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
    </>
  )
}

export default Shop
