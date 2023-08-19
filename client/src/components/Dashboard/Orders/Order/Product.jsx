import React from 'react'
import currencyFormatter from '../../../../utils/currencyFormatter'
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between my-2 px-5'>

            <div className="left flex items-center gap-3">
                <img className='w-32 h-28 rounded-lg border bottom-1 border-slate-400 p-1 cursor-pointer' src={product.imageUrl} alt="productImage" srcset="" onClick={()=>{navigate(`/product/${product.slug}`)}}/>
                
                <div className="flex flex-col">
                    <h3 className='font-semibold'>{product.name}</h3>
                    <p className='text-sm'>Size : <span className='font-semibold'>{product.size}
                    </span></p>
                </div>
            </div>
            <div className="right flex flex-col justify-center">
                <h3 className='font-semibold'>{currencyFormatter.format(product.price)}
                </h3>
                <p className='text-sm'>Qty : <span className='font-semibold'>{product.quantity}
                </span></p>
            </div>
        </div>
    )
}

export default Product
