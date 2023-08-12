import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import {useSelector} from "react-redux"
import {useLocation, useNavigate} from "react-router-dom"

const CheckoutLeft = () => {
    const navigate = useNavigate()
    const location = useLocation()


    const { address } = useSelector((state) => state.address);
    const { userInfo } = useSelector((state)=>state.user)
 
    const [formData, setFormData] = useState({firstname:userInfo.name, address:"", city:"", state:"", country:"", pinCode:""})
    const [selectValue, setSelectValue] = useState();


    const handleOnChange =(e)=>{
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleOnSelectChange =(e)=>{
      setSelectValue(e.target.value)
      if(e.target.value === "Not Selected" ) {
        setFormData({address:"", city:"", state:"", country:"", pinCode:""})
        return
      }
      // TODO: pinCode must be unique [in backend]
      const selectedAddress = address.filter((add)=>{
        return add.address === e.target.value
      })
      setFormData({address: selectedAddress[0].address, city:selectedAddress[0].city, state:selectedAddress[0].state, country : selectedAddress[0].country, pinCode : selectedAddress[0].pinCode})
    }
    
    const handlePlaceOrder =(e)=>{
        e.preventDefault()
        navigate("/")
    }
    
  return (
    <div className="left flex flex-col w-full md:w-fit">
        <h1 className="text-xl font-semibold uppercase my-2">Checkout</h1>
        <div className="shipping flex flex-col gap-5">
            <h3 className="font-semibold opacity-80">Select Saved Address</h3>
              <select type="text" name="addSelect" className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm capitalize" placeholder="Role" defaultValue={"Not Selected"} value={selectValue} onChange={handleOnSelectChange}>
                <option key={"default"} value={"Not Selected"}>Not Selected</option>
                {address.map(add => (
                  <option className="capitalize" key={add.pinCode} value={add.address}>{add.address}</option>
                ))}
              </select>
          <h1 className="text-base font-semibold uppercase mt-2">Shipping Address</h1>
          <form className="flex  flex-col gap-3">
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <input type="text" className="text-sm  border-[1px] w-full border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="firstname"  name="firstname" value={formData.firstname} onChange={handleOnChange}/>
            </div>
            <div className="flex flex-col gap-3">
              <input type="text" className="w-full text-sm  border-[1px] border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="Address" name="address" value={formData.address} onChange={handleOnChange}/>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <input type="text" className="text-sm  border-[1px] w-full border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="City" name="city" value={formData.city} onChange={handleOnChange}/>
              <input type="text" className="text-sm  border-[1px] border-gray-400 w-full outline-none rounded-sm px-2 py-1 " placeholder="State" name ="state" value={formData.state} onChange={handleOnChange}/>
            </div>
            <div className="flex flex-col gap-3">
              <input type="text" className="text-sm  border-[1px] border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="Country"  name="country" value={formData.country} onChange={handleOnChange}/>
            </div>
            <div className="flex flex-col gap-3">
              <input type="text" className="text-sm  border-[1px] border-gray-400 outline-none rounded-sm px-2 py-1 " placeholder="Country"  name="pinCode" value={formData.pinCode} onChange={handleOnChange}/>
            </div>
            <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 my-1 lg:text-lg" onClick={handlePlaceOrder}>Place Order</button>
          </form>
        </div>
      </div>
  )
}

export default CheckoutLeft
