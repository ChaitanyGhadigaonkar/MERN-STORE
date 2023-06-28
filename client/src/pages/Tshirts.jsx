import Product from "../components/Product/product"
import {useSelector} from "react-redux"
import { filterBasedOnCategory } from "../utils/filterBasedOnCategory"

const Tshirts = () => {
  const {products} = useSelector(state=>state.product)
  const tShirtsProducts = filterBasedOnCategory(products,'tshirt')

  return (
    <div className='flex flex-col items-center gap-5 px-3 my-5' >
        <h1 className='text-xl font-semibold '>Explore our Tshirts Collection</h1> 
        <p className='text-sm text-justify mx-3 md:text-base'>Welcome to our T-Shirts Collection! Discover effortless style, comfort, and versatility. Choose from a variety of necklines, colors, prints, and graphics. Our t-shirts are crafted from high-quality, breathable fabrics for a perfect fit. From casual to elevated looks, our collection has you covered. Experience durability and timeless style with our T-Shirts Collection today!</p>

        <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
            {
              tShirtsProducts &&  tShirtsProducts.map(product =>{
                return <Product key={product._id} product={product}/>
              })
            }
        </div>
    </div>
  )
}

export default Tshirts
