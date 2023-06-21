import Product from "../components/product"
import {useSelector} from "react-redux"
import { filterBasedOnCategory } from "../utils/filterBasedOnCategory"

const Caps = () => {

  const {products} = useSelector(state=>state.product)
  const capProducts = filterBasedOnCategory(products,'cap')
  return (
    <div className='flex flex-col items-center gap-5 px-3 my-5' >
        <h1 className='text-xl font-semibold '>Explore our Caps Collection</h1> 
        <p className='text-sm text-justify mx-3 md:text-base'>Welcome to our Caps Collection! Discover fashion-forward designs, premium quality materials, and ultimate comfort. Choose from a diverse range of colors, prints, and patterns. Our Caps are made from soft, breathable fabrics with a plush interior lining. Find your perfect fit with adjustable features and enjoy the attention to detail in every hoodie. Elevate your style and stay cozy with our Caps Collection today!</p>

        <div className="Caps-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
          {
            capProducts && capProducts.map(product =>{
              return <Product key={product._id} product={product}/>
            })
          }
        </div>
    </div>

  )
}

export default Caps
