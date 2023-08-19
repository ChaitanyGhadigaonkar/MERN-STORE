import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import changeDateFormat from "../../../../utils/changeDateFormat"
import Product from './Product'
import currencyFormatter from '../../../../utils/currencyFormatter'
import { TAXES } from "../../../../constants"
const OrderDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [order, setOrder] = useState()
    useEffect(() => {
        if (!location.state.order) {
            navigate(-1)
        } else {
            setOrder(location.state.order)
        }
    }, [])
    return (
        <>
            {order &&

                <div className='flex w-full flex-[3] flex-col md:px-10 '>
                    <div className="top flex justify-between items-center">
                        <div className="flex flex-col gap-2 my-2">
                            <h1 className='text-lg font-semibold '>Order Id : {order._id}</h1>
                            <p className='text-sm font-semibold text-slate-700'>Order Date : <span className='font-semibold text-black'>{changeDateFormat(order.createdAt)}
                            </span></p>
                        </div>
                        <div className="mr-5 flex flex-col items-center">
                            <h3 className='font-semibold'>Order Status :</h3>
                            <h3 className="font-semibold text-green-600 uppercase">{order.status}</h3>
                        </div>
                    </div>
                    <hr className='border-[0.5px] border-slate-500' />
                    <div className="products my-2">
                        <h3 className='font-semibold px-5'>Products</h3>
                        {order.products.map((product) => (
                            <Product key={product.slug} product={product} />
                        ))}
                    </div>
                    <hr className='border-[0.5px] border-slate-500' />
                    <div className="products my-2 flex justify-between px-2">
                        <div className="left">
                            <h3 className='font-semibold'>Delivery Address</h3>
                            <p>Address</p>

                            <p>{order.addressDetails.address}, {order.addressDetails.city}, </p>
                            <p>{order.addressDetails.state}, {order.addressDetails.country}, pincode : {order.addressDetails.pinCode}</p>
                        </div>
                        <div className="">
                            <h3 className='font-semibold'>Total</h3>
                            <h2 className='font-semibold my-1'>{currencyFormatter.format(order.total - TAXES)} + {currencyFormatter.format(TAXES)}</h2>
                            <h3 className='font-semibold my-1'> = {currencyFormatter.format(order.total)}</h3>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default OrderDetails
