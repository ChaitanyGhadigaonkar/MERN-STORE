import { useEffect, useRef, useState } from "react"
import { BsThreeDots, BsFilterRight } from "react-icons/bs"
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal"
import UserModal from "../modals/user/UserModal"


const user = {
    "_id": "64a2e63a8271417a2ea2f152",
    "name": "Nikita Ghadigaonkar",
    "email": "nikitaghadigaonkar123@gmail.com",
    "role": "admin"
}

const UserRow = ({ user, selectAllCheckBox, setModalOpen, setModalChildren }) => {
    const [showActions, setShowActions] = useState(false)
    const [checkBox, setCheckBox] = useState(false)


    const handleOnActionClick = () => {
        setShowActions(prev => !prev)
    }

    const handleDeleteClick = () => {
        setModalChildren(<ConfirmDeleteModal message={"Are you sure you want to delete this user ?"} />)
        setModalOpen(true)
    }
    const handleShowClick = () => {
        setModalChildren(<UserModal user={user} update={false} />)
        setModalOpen(true)
    }
    const handleEditClick = () => {
        setModalChildren(<UserModal user={user} update={true} />)
        setModalOpen(true)
    }

    useEffect(() => {
        if (selectAllCheckBox) {
            setCheckBox(true)
        }
    }, [selectAllCheckBox])
    return (
        <tr className="border-b-2 ">
            <th><input type="checkbox" name="allUsers" id="allUsers" checked={checkBox} onChange={(e) => setCheckBox(e.target.value)} /></th>
            <td className="text-sm py-2 text-left pl-2">{user.name}</td>
            <td className="text-sm py-2 text-left pl-2 capitalize">{user.role}</td>
            <td className="relative inline-block" onClick={handleOnActionClick}><BsThreeDots className="cursor-pointer relative inline-block" />
                {/* product options */}
                {showActions && <div className="absolute right-0 w-28 flex flex-col gap-2 text-sm rounded-lg bg-slate-200 z-50">
                    <ul>
                        <li className="list-none w-full font-semibold opacity-80 text-left cursor-pointer hover:bg-slate-300 rounded-md py-2 px-2" onClick={handleShowClick}>Show</li>
                        <li className="list-none w-full font-semibold opacity-80 text-left cursor-pointer hover:bg-slate-300 rounded-md py-2 px-2" onClick={handleEditClick}>Edit</li>
                        <hr className="border-slate-500" />
                        <li className="list-none w-full font-semibold opacity-80 text-left cursor-pointer hover:bg-slate-300 rounded-md py-2 px-2" onClick={handleDeleteClick}>Delete</li>
                    </ul>
                </div>}
            </td>
        </tr>
    )
}

export default UserRow
