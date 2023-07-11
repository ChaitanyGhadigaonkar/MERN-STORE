import Product from "../components/Product/product"
import ProductLoader from "../components/Loading/Product"
import { useEffect, useState} from "react"
import { LIMIT } from "../config"
import FetchRequest from "../utils/fetch"
import PrevNext from "../components/Common/PrevNext"

const Tshirts = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState()
  const [pageNo, setPageNo] = useState(1)
  const [hasNext, setHasNext] = useState(true)
  const [hasPrev, setHasPrev] = useState(true)
  const limit = LIMIT;

  const getData = async()=>{
    setLoading(true)
    const {products,previous,next} = await FetchRequest(`product/products?page=${pageNo}&limit=${limit}&category=tshirt`, "GET", null)
    setLoading(false)
    setHasPrev(previous !== null)
    setHasNext(next !== null)
    setProducts(products)
    }

    useEffect(()=>{
      getData()
    },[pageNo])

  return (
    <div className='flex flex-col items-center gap-5 px-3 my-5' >
        <h1 className='text-xl font-semibold '>Explore our Tshirts Collection</h1> 
        <p className='text-sm text-justify mx-3 md:text-base'>Welcome to our T-Shirts Collection! Discover effortless style, comfort, and versatility. Choose from a variety of necklines, colors, prints, and graphics. Our t-shirts are crafted from high-quality, breathable fabrics for a perfect fit. From casual to elevated looks, our collection has you covered. Experience durability and timeless style with our T-Shirts Collection today!</p>

        <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
            {
              !loading  ?  products.map(product =>{
                return <Product key={product._id} product={product}/>
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
  )
}

export default Tshirts
