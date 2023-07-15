import { useEffect, useState } from "react";
import currencyFormatter from "../utils/currencyFormatter";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";
import {toast} from "react-hot-toast"
import { useLocation} from "react-router-dom"
import { VITE_API_URL } from "../config";
import ProductsMoreImage from "../components/Product/ProductsMoreImage";
import addProductToTheCart from "../../../server/controllers/cart/addProductToTheCart";
import ProductsMoreImages from "../components/Loading/ProductsMoreImages";
import ProductDescription from "../components/Product/ProductDescription";
import FetchRequest from "../utils/fetch";


const sizes = ['S', 'M', 'L', 'XL', 'XXL'] 

const Product = () => {
  const [loading, setLoading] = useState(true)
  const [favorite, setFavorite] = useState(false);
  const [product, setProduct] = useState()
  const [productImage, setProductImage] = useState()


  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const slug = pathname.split("/")[2]

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };

  const addFunction = async()=>{
    try {
      const res = await fetch(`${VITE_API_URL}/cart/add`,{
        method:"POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            product :{
              name: product.name,
              slug:product.slug,
              price: product.price,
              imageUrl : product.imageUrl[0],
              quantity:1
            }
        })
      })
      const result = await res.json()
      dispatch(addProductToTheCart(result.product))
    } catch (err) {
      console.log(err)
    }
  }
  const handleAddToCart =()=>{
    addFunction() 
    // add size in the backend and also in frontend inside the cart section product will have name, title, size, price, quantity 🆗
    // search for better solution for refreshing the site
    dispatch(addItemToCart(product))
    
  }

  const handleOnSizeClick =(size)=>{
    const arr = product.slug.split("-")
    arr[arr.length - 1] = size.toLowerCase()
    window.location.href = `/product/${arr.join("-")}`
  }
  
  useEffect(()=>{
    setLoading(true)
      const fetchProduct = async()=>{
        const {product} = await FetchRequest(`product/${slug}`, "GET", null)
        if(product){
          setProduct(JSON.parse(JSON.stringify(product)))
          setProductImage(product.imageUrl[0])
        }else{

        }
        setLoading(false)
      }
      fetchProduct()
  },[])

  return (
    <>
    { product ? 
      <>
      <div className="flex flex-col px-3 py-8 ">
        <div className="flex flex-col items-center ">
          {
            !loading ? <img
            src={productImage}
            className="object-contain my-5 w-[400px] mx-auto md:w-[600px] md:h-[400px]"/>
            : <div className="object-contain my-5 w-[400px] mx-auto md:w-[400px] md:h-[400px] bg-slate-200 rounded-md"></div>
          }
        
          <div className="product-images w-full flex items-center my-5 justify-center gap-1 md:gap-5 md:h-fit ">
        {
          !loading ?
          product.imageUrl.map((image)=>{
            return <ProductsMoreImage key={image} image={image} setProductImage={setProductImage} productImage={productImage}/>
          })
           : 
           <>
           <ProductsMoreImages/>
           <ProductsMoreImages/>
           <ProductsMoreImages/>
           </>
        }
      </div>
        </div>
      
      {
        !loading ? 
        <div className="lg:my-7">
          <div className="">
            <h4 className="text-base text-slate-600 font-semibold lg:text-lg">NIKE</h4>
            <h1 className="text-xl font-semibold my-2 lg:text-3xl">{product.name} / ({product.size})</h1>
            <h4
              className="text-base font-semibold capitalize text-slate-500 lg:text-lg"
            >
              <span className="text-base text-slate-600">Category: </span>
              {product.category}
            </h4>
            {/* reviews remaining */}
          </div>
          <div className="">
            <h4 className="text-base font-semibold text-slate-500 my-1 lg:text-lg">
              Product Description:
            </h4>
            <p className="text-sm text-slate-600 lg:text-base">{product.description}</p>

            <div className="my-4 flex gap-3">
              {/* color remaining */} {/* size remaining */}
              <h3 className="text-lg font-bold ">Size: </h3>
              <div className="flex items-center gap-2">
                {
                  sizes.map(size=>{
                    return <div key={size} className={`border-[1px] border-slate-300 rounded-md px-2 py-1 cursor-pointer ${size === product.size ? "bg-pink-400" : ""}`} onClick={()=>handleOnSizeClick(size)}>
                        <p className="text-base font-semibold items-center justify-center">{size}</p>
                       </div> 
                  })
                }
              </div>
            
            </div>
            <hr className="border-[0.5px] border-slate-300 my-2"/>
            
            <div
              className="price flex flex-col gap-2 my-2 md:flex-row md:justify-between md:my-5"
            >
              <div className="left font-bold text-lg lg:text-xl">
                <h3>{currencyFormatter.format(product.price)}</h3>
              </div>
              <div
                className="right flex items-center justify-between md:justify-evenly md:gap-5 md:mr-4 lg:mr-10"
              >
                <button
                  className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 my-1 lg:text-lg"
                >
                  Buy Now
                </button>
                <button
                  className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg"
                  onClick={handleAddToCart}
                >
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
        :
      <ProductDescription/>
      }
      
    </div>
      </> : <h1 className="font-semibold text-2xl text-center">Sorry this particular size is not available </h1>
    }
    </>
  );
};

export default Product;
