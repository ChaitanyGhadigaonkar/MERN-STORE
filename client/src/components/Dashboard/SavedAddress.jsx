import { FaAddressCard } from "react-icons/fa"

const SavedAddress = ({address}) => {
  return (
    <div className='flex my-2 items-center justify-between'>
        <div className="w-20 flex items-center justify-center">
        <FaAddressCard className="text-3xl "/>
        </div>
        <div className="flex px-3 flex-col justify-center">
            <h1 className="text-base font-semibold">Delivery Address</h1>
            <p>{address.address}, {address.city}, {address.state}, {address.country}, {address.pinCode}</p>
        </div>
    </div>  
  )
}

export default SavedAddress
 