import currencyFormatter from "../../utils/currencyFormatter"


const CheckoutProduct = ({product}) => {
  return (
    <div className='w-full flex flex-row items-center gap-1 rounded-md shadow-lg'>
        <div className="top mt-2">
            <img className="h-40 w-44 px-2 py-6" src={product.imageUrl} alt="Hoodie image" srcSet="" />
        </div>
        <div className="bottom px-8 my-2">
            <h3 className='text-base font-semibold '>{product.name}</h3>
            {/* <p className='category text-sm text-slate-600'>{product.category}</p> */}
            <div className="price">
                <p className='text-sm font-semibold '>{currencyFormatter.format(product.price)}</p>
            </div>
            <div className="buttons my-2 ">
                <button className="remove text-sm font-semibold rounded-lg border-slate-800 border-[1px] outline-0 px-1 py-1 text-black my-1 lg:text-lg">Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
