import { useEffect, useState } from "react";
import currencyFormatter from "../../utils/currencyFormatter";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
} from "../../slices/wishlistSlice";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const [favorite, setFavorite] = useState(false);

  const handleProductClick = () => {
    navigate(`/product/${product.slug}`);
  };
  // wishlist

  const handleRemoveFromWishlist = () => {
    let wishlistId;
    
    wishlist.forEach((item)=>{
      if(item.product.name === product.name){
        wishlistId =  item._id;
      }
    })

    dispatch(removeItem(wishlistId))
    setFavorite((prev) => !prev);
  };
  const handleAddToWishlist = () => {
    dispatch(addItem(product))
    setFavorite((prev) => !prev);
  };


  useEffect(()=>{
      wishlist.forEach(item=>{
        if(item.product.name === product.name){
          setFavorite(true)
        }
      })
  },[])

  return (
    <div className="w-64 flex flex-col items-center gap-2 rounded-md shadow-lg relative">
      <div className="top cursor-pointer" onClick={handleProductClick}>
        <img src={product.imageUrl[0]} alt="Hoodie image" srcSet="" />
      </div>
      <div className="bottom px-8 py-3 my-2">
        <p className="category text-sm text-slate-600">{product.category}</p>
        <h3 className="text-lg font-semibold ">{product.name}</h3>
        <div className="price">
          <p className="text-sm font-semibold ">
            {currencyFormatter.format(product.price)}
          </p>
        </div>
        <div className="sizes flex items-center gap-1 my-2">
          {product.size.map((size) => {
            return (
              <div
                key={size}
                className="text-base border-slate-400 border-[1px] py-1 px-1"
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
      <div className="favorite absolute right-3 top-2">
        {favorite ? (
          <MdFavorite
            className="text-pink-500 w-6 h-6 cursor-pointer"
            onClick={handleRemoveFromWishlist}
          />
        ) : (
          <MdFavoriteBorder
            className="text-pink-500 w-6 h-6 cursor-pointer"
            onClick={handleAddToWishlist}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
