import { useNavigate } from "react-router-dom"
import currencyFormatter from "../../utils/currencyFormatter"

const Product = ({product}) => {
  const navigate = useNavigate()

  return (
    <div className='md:w-2/4 xl:w-1/4 w-[300px] flex my-2 justify-evenly items-center border-[2px] bg-slate-100 rounded-md cursor-pointer' onClick={()=>{
      navigate(`product/${product.slug}`)
    }}>
        <div className="image px-4 py-2">
          <img className='w-20 h-20' src={product.imageUrl[0]} alt="" />
        </div>
        <div className="name px-4 py-2">
          <h3 className='font-semibold'>{product.name}</h3>
          <h3 className='text-sm font-medium '>{product.category}</h3>
          <h3 className="font-bold">{currencyFormatter.format(product.price)}</h3>
        </div>
    </div>
  )
}

export default Product
