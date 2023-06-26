import { RxCross2 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import currencyFormatter from "../utils/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { clearCart, fetchCarts } from "../slices/cartSlice";
import { toast } from "react-hot-toast";
import { VITE_API_URL } from "../config";


const Cart = ({setCartVisibility}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const clearAllProductsFromCart = async()=>{
    try {
      const res = await fetch(`${VITE_API_URL}/cart/clearAll`,{
        method:"PUT",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      })
      const result = await res.json()
    } catch (err) {
      console.log(err)
    }
  }

  const goToCheckOut =()=>{
      navigate("/checkout")
  }
  const {cart,total} = useSelector(state=>state.cart)
  const handleClearCart =()=>{
      clearAllProductsFromCart();
      dispatch(clearCart())
      toast.success("cart cleared successfully")
  }

  return (
    <div className="top-0 right-0 h-screen flex flex-col items-center md:w-[400px] bg-slate-200 z-50 text-black px-5 py-8 bottom-0 overflow-y-scroll">
      <div className="w-full">
        <div className="top  flex items-center justify-between px-2">
          <h3 className="text-xl font-semibold">Your Cart</h3>
          <div>
            <RxCross2 className="text-3xl font-bold cursor-pointer " onClick={()=>setCartVisibility(false)} />
          </div>
        </div>
        <hr className="w-full my-2 border-[1px] rounded-lg" />
      </div>

      <div className="flex w-full flex-col gap-4 items-center ">
        {cart !== undefined ? cart.map(item=>{
          return <CartProduct key={item.name} product={item}/>
        }): <h1 className="text-xl font-semibold my-5">No items in the cart.</h1>}
         
      </div>
          <h1 className="text-xl font-semibold my-2 w-full">Total: {currencyFormatter.format(total)}</h1>
      <div className="buttons flex w-full items-center gap-4 my-3">
          <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg" onClick={goToCheckOut}>CheckOut</button>
          <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg" onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
