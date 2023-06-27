import { useEffect, useState } from 'react'
import Cart from "../components/Cart"
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link, useNavigate} from "react-router-dom"
import {BsSearch} from "react-icons/bs"
import {AiOutlineShoppingCart,AiOutlineDown} from "react-icons/ai"
import {MdLogout} from "react-icons/md"
import {useDispatch, useSelector} from "react-redux"
import logout from '../utils/logout'
import { toast } from 'react-hot-toast'
import { setUserCredentials } from '../slices/userSlice'
const Navbar = () => {
  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [cartVisibility, setCartVisibility] = useState(false)

  const {cart} = useSelector(state=>state.cart)
  const {userInfo} = useSelector(state=>state.user)
  const handleHamClick = ()=>{
      setShow((prev)=>!prev)
  }
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchChange=(e)=>{
    setSearchQuery(e.target.value)
  }
  const handleSearch =(e)=>{
    e.preventDefault()
    navigate(`/products?search=${searchQuery}`)
  }
  const handleLogout=async()=>{
    setShow(false)
    const success = await logout();
    if(success){
      toast.success("Logout successfully")
      dispatch(setUserCredentials(null))
    }else{
      toast.error("Something went's wrong")
    }
  }

  
  return (
    <>
    <div className={`cart fixed top-0 right-0 z-50 transition-transform duration-300 ${!cartVisibility?"translate-x-[1000px]": "translate-x-0"}`} id='cart-div'>
      <Cart setCartVisibility={setCartVisibility}/>
      </div>
    <div className='flex flex-col items-center overflow-x-hidden md:flex-row md:justify-between'>
      <div className="logo w-[100%] flex flex-col items-center py-3 px-3 self-center gap-8  justify-center md:flex-row md:w-auto md:flex-1 md:justify-between md:m-0">
          <Link className='text-black-100 font-semibold text-xl cursor-pointer md:mx-2' to={'/'} >MERN STORE
          </Link>
          
          <form className="search flex items-center gap-1">
            <input type="text" name="search" className='text-base w-64 px-2 py-1 border-theme border-[2px] rounded-md outline-0 md:w-72' value={searchQuery} onChange={handleSearchChange}/>
            <button className='border-none rounded-lg px-3 py-3 text-base bg-pink-500 hover:bg-pink-600 ' onClick={handleSearch} ><BsSearch className='text-base w-3 h-3 relative'/>
            </button>
          </form>
          <div className="cart cursor-pointer relative ">
            <AiOutlineShoppingCart className='text-3xl text-pink-500  ' onClick={()=>setCartVisibility(true)}/>
            
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-white rounded-full -top-3 -right-2">{cart ? cart.length : 0}
          </div>
          </div>
      </div>
      <div className={`right flex gap-2 relative items-center justify-end py-2 transition-transform duration-300 ${show ? "translate-x-0 flex-col md:flex-row": "translate-x-[1000px] flex-row"} md:translate-x-0 lg:flex-row md:gap-6 md:px-4 md:flex-1`} >
          <Link to={"/tshirts"} className='text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >T shirts</Link>
          <Link to={"/hoodies"} className='text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >Hoodies</Link>
          <Link to={"/caps"} className='text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >Caps</Link>
          
            {userInfo !== null ?
              <div className='flex items-center'>
                <Link to={"/dashboard"} className='text-base px-2 font-semibold font-playfair' onClick={()=>{setShow(false)}} >Dashboard</Link>
                <Link to={"/"} className='flex items-center gap-2 text-base px-2 font-semibold font-playfair' onClick={handleLogout} >Logout <MdLogout/></Link>
                </div> : 
                <>
                  <Link to={"/login"} className='text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >Login</Link>
                  <Link to={"/signup"} className='text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >Sign Up</Link>
                </>
            }
      </div>
      <div className="hamburger absolute right-3 top-3 md:hidden">
        <GiHamburgerMenu className='w-7 h-7 cursor-pointer' onClick={handleHamClick}/>
      </div>
    </div>
    
    </>
    
  )
}

/*
    {/* <Link to={"/login"} className='flex items-center gap-1 text-base font-semibold font-playfair' onClick={()=>{setShow(false)}} >
                  {userInfo.name.split(" ")[0]}
                  <AiOutlineDown className='text-[12px] object-contain' onClick={()=>{}}/>
    </Link>  
*/

export default Navbar
