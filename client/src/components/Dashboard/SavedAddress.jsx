import { FaAddressCard } from "react-icons/fa"

const SavedAddress = ({address, setIsAddForm, setUpdateFormDate}) => {
  const handleOnAddressClick =()=>{
    setIsAddForm(false)
    setUpdateFormDate(address)
  }
  return (
    <div className='flex w-[300px] md:w-[500px] my-2 items-center justify-between py-6 border-slate-400 rounded-lg border-[2px] cursor-pointer' onClick={handleOnAddressClick}>
        <div className="flex-1 flex items-center justify-center">
        <FaAddressCard className="text-3xl "/>
        </div>
        <div className="flex flex-[2] px-3 flex-col justify-center">
            <h1 className="text-base font-semibold">Delivery Address</h1>
            <p>{address.address}, {address.city}, {address.state}, {address.country}, {address.pinCode}</p>
        </div>
    </div>  
  )
}

export default SavedAddress
 