import { useState } from "react"
import currencyFormatter from "../../../utils/currencyFormatter"
import { BsThreeDots, BsFilterRight } from "react-icons/bs"
import ProductModal from "../modals/product/ProductModal"
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal"
import {dashDateFormate} from "../../../utils/changeDateFormat"

const OrderRow = ({ order, setModalChildren, setModalOpen }) => {
    const [showActions, setShowActions] = useState(false)

    const handleOnActionClick = () => {
        setShowActions(prev => !prev)
    }
    const handleDeleteProduct = () => {
        setModalOpen(true)
        setModalChildren(<ConfirmDeleteModal message={"Are you sure you want to delete this product ?"} setModalOpen={setModalOpen} />)

    }
    const handleShowProduct = () => {
        setModalChildren(<ProductModal product={product} />)
        setModalOpen(true)
    }
    return (
        <>
            <tr className="border-b-2 ">
                <td className="text-sm py-2 text-left pl-2">{order._id}</td>
                <td className="text-sm py-2 text-left pl-2 capitalize">{"Nikita Ghadigaonkar"}</td>
                <td className="text-sm py-2 text-left pl-2">{dashDateFormate(order.createdAt)}</td>
                <td className="text-sm py-2 text-left pl-2">{currencyFormatter.format(order.total)}</td>
                <td className={`text-sm py-2 text-left pl-2 }`}> 
                    <p className={`text-white py-1 px-2 rounded-md w-fit ${order.status === "pending" ? "bg-red-500 " : "bg-green-500"}`}>
                        {order.status}
                    </p>
                </td>
                <td className="relative inline-block" onClick={handleOnActionClick}><BsThreeDots className="cursor-pointer relative inline-block" />
                    {/* product options */}
                    {showActions && <div className="absolute right-0 w-28 flex flex-col gap-2 text-sm rounded-lg bg-slate-200 z-50">
                        <ul>
                            <li className="list-none w-full font-semibold opacity-80 text-left cursor-pointer hover:bg-slate-300 rounded-md py-2 px-2" onClick={handleShowProduct}>Show</li>
                            <li className="list-none w-full font-semibold opacity-80 text-left cursor-pointer hover:bg-slate-300 rounded-md py-2 px-2" onClick={handleShowProduct}>Edit</li>
                            <hr className="border-slate-500" />
                            <li className="list-none w-full font-semibold opacity-80 text-left cursor-pointer hover:bg-slate-300 rounded-md py-2 px-2" onClick={handleDeleteProduct}>Delete</li>
                        </ul>
                    </div>}
                </td>
            </tr>
        </>
    )
}

export default OrderRow
