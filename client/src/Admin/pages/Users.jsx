

import { BsFilterRight } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
import UserRow from "../components/user/UserRow"

const user = {
    "_id": "64a2e63a8271417a2ea2f152",
    "name": "Nikita Ghadigaonkar",
    "email": "nikitaghadigaonkar123@gmail.com",
    "role": "admin"
}

const Users = ({ setModalOpen, setModalChildren }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [selectAllCheckBox, setSelectAllCheckBox] = useState(false)

    const handleFilterClick = () => {
        setShowFilter(prev => !prev)
    }

    return (
        <div className='my-10 mx-5 overflow-x-auto' id="admin-products-container">
            <div className="top flex items-center">
                <h3 className="font-[600] ml-2 ">Users</h3>
            </div>
            <div className="table w-full px-4 bg-slate-50 rounded-md my-5 relative">
                <div className="top  py-5 flex items-center justify-between ">
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2 mr-5 w-96 outline-none" placeholder="Search" required="" />
                    {/* <button className="flex items-center w-max gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2 mx-2"><AiOutlinePlus className="" />Add User</button> */}
                    <button className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2" onClick={handleFilterClick}><BsFilterRight /> Filters</button>

                    {/* filter list */}
                    {showFilter &&
                        <div className="absolute right-2 top-16 px-4 py-4 bg-white z-30">
                            <p className="text-sm font-semibold ">Choose Category</p>
                            <div className="">
                                <div className="flex gap-2 items-center px-2 py-1">
                                    <input type="checkbox" name="tshirt" id="tshirt" />
                                    <p className="text-sm">Tshirt</p>
                                </div>
                                <div className="flex gap-2 items-center px-2 py-1">
                                    <input type="checkbox" name="hoodie" id="hoodie" />
                                    <p className="text-sm">Hoodie</p>
                                </div>
                                <div className="flex gap-2 items-center px-2 py-1">
                                    <input type="checkbox" name="cap" id="cap" />
                                    <p className="text-sm">Cap</p>
                                </div>
                            </div>
                        </div>}
                </div>


                <table className="w-full my-5 border-collapse border rounded-sm">
                    <thead className="bg-slate-100">
                        <tr className="">
                            <th><input type="checkbox" name="allUsers" id="allUsers" checked={selectAllCheckBox} onChange={(e) => { setSelectAllCheckBox(e.target.checked) }} /></th>
                            <th className="text-sm py-2 text-left pl-2">USERNAME</th>
                            <th className="text-sm py-2 text-left pl-2">ROLE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        <UserRow user={user} selectAllCheckBox={selectAllCheckBox} setModalChildren={setModalChildren} setModalOpen={setModalOpen} />
                        <UserRow user={user} selectAllCheckBox={selectAllCheckBox} setModalChildren={setModalChildren} setModalOpen={setModalOpen} />
                        <UserRow user={user} selectAllCheckBox={selectAllCheckBox} setModalChildren={setModalChildren} setModalOpen={setModalOpen} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
