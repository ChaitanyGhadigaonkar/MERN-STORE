import {useNavigate} from "react-router-dom"
import CheckoutLeft from "../components/Checkout/CheckoutLeft";
import CheckoutRight from "../components/Checkout/CheckoutRight";

const CheckOut = () => {

    const navigate = useNavigate()
    
    const handlePlaceOrder =(e)=>{
        e.preventDefault()
        navigate("/")
    }
  return (
    <div className="flex flex-col my-4 px-3 w-full items-center justify-evenly md:flex-row">
      <CheckoutLeft/>
      <CheckoutRight/>
    </div>
  );
};

export default CheckOut;
