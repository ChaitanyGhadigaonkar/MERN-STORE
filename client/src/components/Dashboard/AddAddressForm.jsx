import {useState} from "react";
import {useDispatch} from "react-redux"
import { addAddress } from '../../slices/addressSlice'


const AddAddressForm = () => {

  const [formData, setFormData] = useState({address: "", city: "", state:"", pinCode: "", country:""})

  const dispatch = useDispatch()
  const handleOnChange = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value })
  }

  const handleOnAddAddress =(e)=>{
    e.preventDefault()
    dispatch(addAddress({address : formData.address, city : formData.city, state : formData.state, pinCode : parseInt(formData.pinCode), country : formData.country}))
    setFormData({address:"",city: "", state:"", pinCode: "", country:""})
  }

  return (
    <form className="flex w-full justify-center items-center flex-col gap-3 mx-2 ">
    <div className="flex w-full flex-col gap-2 md:w-3/4">
      <div className="flex w-full flex-col  gap-2">
        <label htmlFor="address" className="text-base">
          Address
        </label>
        <input
          type="text"
          name="address"
          className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base"
          placeholder="Address: Street, House No / Apartment No" value={formData.address} onChange={handleOnChange}/>
      </div>
      <div className="flex flex-col  gap-2">
        <label htmlFor="city" className="text-base">
          City
        </label>
        <input
          type="text"
          name="city"
          className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base"
          placeholder="City" value={formData.city} onChange={handleOnChange}/>
      </div>
      <div className="flex flex-col  gap-2">
        <label htmlFor="State" className="text-base">
          State
        </label>
        <input
          type="text"
          name="state"
          className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base"
          placeholder="State" value={formData.state} onChange={handleOnChange}/>
      </div>
      <div className="flex flex-col  gap-2">
        <label htmlFor="country" className="text-base">
          Country
        </label>
        <input
          type="text"
          name="country"
          className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base"
          placeholder="Country" value={formData.country} onChange={handleOnChange}/>
      </div>
      <div className="flex flex-col  gap-2">
      <label htmlFor="pinCode" className="text-base">
          PinCode
        </label>
        <input
          type="text"
          name="pinCode"
          className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base"
          placeholder="pinCode" value={formData.pinCode} onChange={handleOnChange}/>
      </div>
      <button
        className="text-base font-medium rounded-lg border-slate-40w-800  outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg mx-auto my-2"
        onClick={handleOnAddAddress}
      >
        Add Address
      </button>
    </div>
  </form>
  );
};

export default AddAddressForm;
