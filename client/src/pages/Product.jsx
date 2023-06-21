import { useEffect, useState } from "react";
import currencyFormatter from "../utils/currencyFormatter";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";
import {toast} from "react-hot-toast"
import { useLocation} from "react-router-dom"
import { VITE_API_URL } from "../config";



const Product = () => {

  const [favorite, setFavorite] = useState(false);
  const [product, setProduct] = useState()
  const dispatch = useDispatch()

  const {pathname} = useLocation()
  const slug = pathname.split("/")[2]

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };
  const handleAddToCart =()=>{
    dispatch(addItemToCart(product))
    toast.success("Item added successfully")
  }
  useEffect(()=>{
      const fetchProduct = async()=>{
        const res = await fetch(`${VITE_API_URL}/product/${slug}`)
        const {product} = await res.json()
        
        setProduct(JSON.parse(JSON.stringify(product)))
      }
      fetchProduct()
  },[])

  return (
    <>
    {
      product && 
      <>
      <div className="flex flex-col px-3 py-8 lg:flex-row">

      <img
        src={product.imageUrl[0]}
        className="object-contain my-5 w-[400px] mx-auto md:w-[600px] md:h-[400px] "
      />
      <div className="lg:my-7">
      <div className="">
        <h4 className="text-base text-slate-600 font-semibold lg:text-lg">
          NIKE
        </h4>
        <h1 className="text-xl font-semibold my-2 lg:text-3xl">
          {product.name}
        </h1>
        <h4 className="text-base font-semibold capitalize text-slate-500 lg:text-lg">
          <span className="text-base text-slate-600">Category: </span>
          {product.category}
        </h4>
        {/* reviews remaining */}
      </div>
      <div className="">
        <h4 className="text-base font-semibold text-slate-500 my-1 lg:text-lg">
          Product Description:
        </h4>
        <p className="text-sm text-slate-600 lg:text-base">
          {product.description}
        </p>

        <div className="">
          {/* color remaining */}
          {/* size remaining */}
        </div>
        <div className="price flex flex-col gap-2 my-2 md:flex-row md:justify-between md:my-5">
          <div className="left font-bold text-lg lg:text-xl">
            <h3>{currencyFormatter.format(product.price)}</h3>
          </div>
          <div className="right flex items-center justify-between md:justify-evenly md:gap-5 md:mr-4 lg:mr-10">
            <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 my-1 lg:text-lg">
              Buy Now
            </button>
            <button className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg" onClick={handleAddToCart}>
              <AiOutlineShoppingCart />
              Add to cart
            </button>
            <div className="favorite">
              {favorite ? (
                <MdFavorite
                  className="text-pink-500 w-6 h-6 cursor-pointer"
                  onClick={handleFavoriteClick}
                />
              ) : (
                <MdFavoriteBorder
                  className="text-pink-500 w-6 h-6 cursor-pointer"
                  onClick={handleFavoriteClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
      </>
    }
    
    </>
    
  );
};

export default Product;
