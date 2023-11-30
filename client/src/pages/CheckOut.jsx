import { useLocation, useNavigate } from "react-router-dom";
import CheckoutLeft from "../components/Checkout/CheckoutLeft";
import CheckoutRight from "../components/Checkout/CheckoutRight";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const CheckOut = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState();
  // the product should be in this format
  // {
  //   "slug": "dudeme-developer-s",
  //   "name":"DUDEME Developer",
  //   "image":"https://m.media-amazon.com/images/I/519tzhwc9aL._UX522_.jpg",
  //   "size":"S",
  //   "price":599,
  //   "quantity":2
  // }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    } else {
      const { comingForm, products } = location.state;
      setProducts(products);
    }
  }, []);
  return (
    <div className="flex flex-col my-4 px-3 w-full items-center justify-evenly md:flex-row">
      <CheckoutLeft
        products={products}
        setProducts={setProducts}
      />
      <CheckoutRight
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default CheckOut;
