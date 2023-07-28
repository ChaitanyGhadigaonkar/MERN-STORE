
import { useSelector } from 'react-redux'
import Product from '../../Product/product'


const WishList = () => {

  const {wishlist} = useSelector(state => state.wishlist)

  return (
    <div id='wishlist-container' className='flex w-full flex-[3] flex-col md:px-10 h-[500px] overflow-y-scroll'>
      <h1 className='text-xl font-semibold'>Your Wishlist</h1>
      <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-2 xl:grid-cols-3">
        {
          wishlist && wishlist.map(item=>(
            <Product key={item._id} product={item.product}/>
          ))
        }
      </div>
    </div>
  )
}

export default WishList
