
import PrevNext from "../components/Common/PrevNext";
import Product from "../components/Product/Product"
import { LIMIT } from "../config";
import FetchRequest from "../utils/fetch";
import { useEffect, useState } from "react";


const Shop = () => {
  const [products, setProducts] = useState()
  const [pageNo, setPageNo] = useState(1)
  const [hasNext, setHasNext] = useState(true)
  const [hasPrev, setHasPrev] = useState(true)
  const limit = LIMIT;
    const getData = async()=>{
        const {products,previous,next} = await FetchRequest(`product/products?page=${pageNo}&limit=${limit}`, "GET", null)
        setHasPrev(previous !== null)
        setHasNext(next !== null)
        setProducts(products)
    }
    useEffect(()=>{
      getData()
    },[pageNo])
  return (
    <div className='flex flex-col items-center gap-5 px-3 my-5'>
      <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
      {products && products.map((product)=>{
        return <Product key={product._id} product={product} />
      })}
      </div>
      <PrevNext pageNo={pageNo} setPageNo={setPageNo} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  )
}

export default Shop
