import { TAXES } from "../../constants"
import currencyFormatter from "../../utils/currencyFormatter"
import CheckoutProduct from "./CheckoutProduct"
import {useSelector} from "react-redux"


const CheckoutRight = ({products, setProducts}) => {
    let {cart,total} = useSelector(state=>state.cart)

  return (
    <div className='flex flex-col w-[300px] gap-5 my-16'>
        <div className="orderSummary flex flex-col gap-3">
            <h1 className="text-xl font-semibold my-1">ORDER SUMMERY</h1>
            <div className="flex justify-between">
                <h3 className="text-base font-semibold opacity-80">Subtotal ({cart.length } items)</h3>
                <h3 className="text-base font-semibold opacity-80">{currencyFormatter.format(total)}</h3>
            </div>
            <div className="flex justify-between">
                <h3 className="text-base font-semibold opacity-80">Taxes</h3>
                <h3 className="text-base font-semibold opacity-80">{currencyFormatter.format(TAXES)}</h3>
            </div>
            <hr className="border-[1px] border-black"/>
            <div className="flex justify-between">
                <h3 className="text-lg font-semibold ">Total</h3>
                <h3 className="text-lg font-semibold">{currencyFormatter.format(total+ TAXES) }</h3>
            </div>
        </div>
        <div className="cartSummery flex flex-col">
            <h1 className="text-xl font-semibold ">CART SUMMERY</h1>
            {
                products && products.map(product=>{
                    return <CheckoutProduct key={product._id} product={product}  products={products} setProducts={setProducts}/>
                })
            }
        </div>
    </div>
  )
}

export default CheckoutRight
