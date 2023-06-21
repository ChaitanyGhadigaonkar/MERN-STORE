import React from 'react'
import currencyFormatter from '../utils/currencyFormatter'
import {useNavigate} from "react-router-dom"

const Product = ({product}) => {
    const navigate = useNavigate()
    const handleProductClick=()=>{
        navigate(`/product/${product.slug}`)
    }
  return (
    <div className='w-64 flex flex-col items-center gap-2 rounded-md shadow-lg cursor-pointer' onClick={handleProductClick}>
        <div className="top">
            <img src={product.imageUrl} alt="Hoodie image" srcSet="" />
        </div>
        <div className="bottom px-8 py-3 my-2">
            <p className='category text-sm text-slate-600'>{product.category}</p>
            <h3 className='text-lg font-semibold '>{product.name}</h3>
            <div className="price">
                <p className='text-sm font-semibold '>{currencyFormatter.format(product.price)}</p>
            </div>
            <div className="sizes flex items-center gap-1 my-2">
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">S</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">M</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">L</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">XL</div>
                <div className="text-base border-slate-400 border-[1px] py-1 px-1">XXL</div>
            </div>
        </div>
    </div>
  )
}

export default Product
