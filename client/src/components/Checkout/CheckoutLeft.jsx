import {useNavigate} from "react-router-dom"

const CheckoutLeft = () => {
    const navigate = useNavigate()
    const handlePlaceOrder =(e)=>{
        e.preventDefault()
        navigate("/")
    }
  return (
    <div className="left flex flex-col w-full md:w-fit">
        <h1 className="text-xl font-semibold uppercase my-2">Checkout</h1>
        <div className="shipping flex flex-col gap-5">
          <h1 className="text-base font-semibold uppercase mt-2">Shipping Address</h1>
          <form className="flex  flex-col gap-3">
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <input type="text" name="firstName" className="text-sm w-full  border-[1px] border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="First Name"/>
              <input type="text" name="lastName" className="text-sm  border-[1px] w-full border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="Last Name"/>
            </div>
            <div className="flex flex-col gap-3">
              <input type="text" name="streetAddress" className="w-full text-sm  border-[1px] border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="Street Address"/>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <input type="text" name="city" className="text-sm  border-[1px] w-full border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="City" />
              <input type="text" name="country" className="text-sm  border-[1px] border-gray-400 w-full outline-none rounded-sm px-2 py-1 " placeholder="Country"/>
            </div>
            <div className="flex flex-col gap-3">
              <input type="text" name="postalCode" className="text-sm  border-[1px] border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="Postal Code" />
            </div>
            <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 my-1 lg:text-lg" onClick={handlePlaceOrder}>Place Order</button>
          </form>
        </div>
      </div>
  )
}

export default CheckoutLeft
