import {MdDelete} from "react-icons/md"
import currencyFormatter from "../../utils/currencyFormatter"
import { useDispatch } from "react-redux"
import { removeCartProduct } from "../../slices/cartSlice"
import { VITE_API_URL } from "../../config"
import { useNavigate } from "react-router-dom"

const CartProduct = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleRemoveFromCart=()=>{
        dispatch(removeCartProduct(product.name))
    }
  return (
    <>
    <div className='w-full flex items-center flex-col '>
        <div className="top w-full flex items-center py-2 justify-between">
            <div className="flex gap-2 items-center">
                <img src={product.imageUrl} alt="product image" className="w-24 h-24 rounded-md cursor-pointer" onClick={()=>navigate(`/product/${product.slug}`)} />
                <h3 className="text-base font-semibold">{product.name}</h3>
            </div>
            <div className="px-3">
                <MdDelete className="text-xl cursor-pointer" onClick={handleRemoveFromCart}/>
            </div>
        </div>
        <div className="bottom w-full flex flex-col items-center gap-2 ">
            <div className="w-full flex items-center justify-between px-4 ">
                <h3 className="text-base font-semibold">Price</h3>
                <h3 className="text-base font-semibold">{currencyFormatter.format(product.price)}</h3>
            </div>
            <div className="w-full flex items-center justify-between px-4">
                <h3 className="text-base font-semibold">Quantity</h3>
                <h3 className="text-base font-semibold">{1}</h3>
            </div>
        </div>
    </div>
    <hr className="w-full border-[1px] border-black"/>
    </>
    
  )
}

export default CartProduct
