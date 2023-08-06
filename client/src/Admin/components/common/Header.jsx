import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {MdLogout} from "react-icons/md"
import {RxHamburgerMenu} from "react-icons/rx"
import {HiChevronLeft} from "react-icons/hi"

const Header = ({showSidebar, setShowSidebar}) => {
    const [show,setShow] = useState(false)

    const {userInfo} = useSelector(state => state.user)

    const handleLogout=async()=>{
        setShow(false)
        const success = await logout();
        if(success){
          toast.success("Logout successfully")
          dispatch(removeUserCredential())
        }else{
          toast.error("Something went's wrong")
        }
    }
  return (
    <>
    <div className='flex h-[55px] items-center overflow-x-hidden md:flex-row md:justify-between'>
      <div className="logo w-[100%] flex items-center py-3 px-3 gap-2 lg:gap-4">
        {
          showSidebar ? 
          <HiChevronLeft className='text-3xl font-extrabold cursor-pointer' onClick={()=>setShowSidebar(false)}/> 
          : 
          <RxHamburgerMenu className='text-3xl font-extrabold cursor-pointer' onClick={()=>setShowSidebar(true)}/> 
        }
           
          <Link className='text-black-100 font-semibold self-start md:self-baseline text-xl cursor-pointer md:mx-2' to={'/'} >MERN STORE
          </Link>
      </div>
      <div className={`right flex gap-2 relative items-center justify-end py-2 transition-transform duration-300 md:translate-x-0 lg:flex-row md:gap-6 md:px-4 md:flex-1`} >
            {userInfo ?
                <div className='flex flex-col gap-2 md:flex-row items-center'>
                    <Link to={"/"} className='flex items-center gap-2 text-sm lg:text-base px-2 font-semibold font-playfair' onClick={handleLogout} >Logout <MdLogout/></Link>
                </div> 
                : 
                <>
                    <Link to={"/login"} className='text-sm lg:text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >Login</Link>
                    <Link to={"/signup"} className='text-sm lg:text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >Sign Up</Link>
                </>
            }
      </div>
    </div>
    </>
  )
}

export default Header
