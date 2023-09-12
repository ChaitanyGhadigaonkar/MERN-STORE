import { createPortal } from "react-dom"
import {AiOutlineClose} from "react-icons/ai"

const Modal = ({showModal, setModalOpen, children}) => {
    if(!showModal) return

    return createPortal(
    <div className="fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)]">
        <div className="header w-fit flex flex-col justify-end bg-slate-300 rounded-lg py-5 px-5">
            <div className="self-end"><AiOutlineClose onClick={()=>setModalOpen(false)} className="text-xl cursor-pointer"/></div>
            {children}
        </div>
    </div>, document.getElementById("modal"))
}

export default Modal
