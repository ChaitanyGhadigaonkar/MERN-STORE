import { useState } from "react";
import currencyFormatter from "../../utils/currencyFormatter";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);


  const handleProductClick = () => {
    navigate(`/product/${product.slug}`);
  };
  // wishlist 
  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <div
      className="w-64 flex flex-col items-center gap-2 rounded-md shadow-lg relative"
    >
      <div className="top cursor-pointer" onClick={handleProductClick} >
        <img src={product.imageUrl} alt="Hoodie image" srcSet="" />
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
  );
};

export default Product;
