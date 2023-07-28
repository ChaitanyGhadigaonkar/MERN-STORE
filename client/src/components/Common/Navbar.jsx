import { useEffect, useState } from 'react'
import Cart from "../Cart/Cart"
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link, useNavigate} from "react-router-dom"
import {BsSearch} from "react-icons/bs"
import {AiOutlineShoppingCart,AiOutlineDown} from "react-icons/ai"
import {MdLogout} from "react-icons/md"
import {useDispatch, useSelector} from "react-redux"
import logout from '../../utils/logout'
import { toast } from 'react-hot-toast'
import { removeUserCredential } from '../../slices/userSlice'
import Product from '../Search/Product'
import FetchRequest from "../../utils/fetch"

const product = {
  _id: '64931af21f36ceddda500b34',
  name: 'DUDEME While Alive Eat Sleep Code',
  slug: 'dudeme-while-alive-eat-sleep-code-s',
  imageUrl: [
    'https://m.media-amazon.com/images/I/51R70m41beL._UX522_.jpg',
    'https://m.media-amazon.com/images/I/51jOuuV8oNL._UX522_.jpg',
    'https://m.media-amazon.com/images/I/51R70m41beL._UX522_.jpg',
    'https://m.media-amazon.com/images/I/514FUHi9RqL._UX522_.jpg'
  ],
  description: 'DudeMe\'s combed cotton t-shirts are softer and stronger than regular cotton t-shirts. The cottons we use are made by further treating it after it\'s been picked, then spun into yarn to remove short fibers, which are prone to breakage. This process helps us deliver the best quality t-shirts without impurities or short protruding threads. \n All our t-shirts are tailored to be regular fit for men and women. We always want to make you feel wearing dudeme\'s creations to be an awesome feel & we work towards tailoring the perfect stitch that never let\'s you down.',
  category: 'tshirt',
  quantity: 10,
  size: [
    'S',
    'M',
    'XL'
  ],
  price: 699,
  createdAt: '2023-06-21T15:44:50.352Z',
  updatedAt: '2023-06-21T15:44:50.352Z',
  __v: 0
}


const Navbar = () => {
  const [show,setShow] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchProducts, setShowSearchProducts] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [cartVisibility, setCartVisibility] = useState(false)

  const {cart} = useSelector(state=>state.cart)
  const {userInfo} = useSelector(state=>state.user)

  const search = async()=>{
    const { products } = await FetchRequest(`product/search/${searchQuery}`, "GET", null)
    if(products){
      setShowSearchProducts(true)
    }
    console.log(products);
  }

  const handleHamClick = ()=>{
      setShow((prev)=>!prev)
  }
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
      dispatch(removeUserCredential())
    }else{
      toast.error("Something went's wrong")
    }
  }
 
  // useEffect(()=>{
  //   search();
  // },[searchQuery])


  return (
    <>
    <div className={`cart fixed top-0 right-0 z-50 transition-transform duration-300 text-sm ${!cartVisibility?"translate-x-[1000px]": "translate-x-0"}`} id='cart-div'>
      <Cart setCartVisibility={setCartVisibility}/>
      </div>
    <div className='flex flex-col items-center overflow-x-hidden md:flex-row md:justify-between'>
      <div className="logo w-[100%] flex flex-col items-center py-3 px-3 self-center gap-2 lg:gap-8  justify-center md:flex-row md:w-auto md:flex-1 md:justify-between md:m-0">
          <Link className='text-black-100 font-semibold self-start md:self-baseline text-xl cursor-pointer md:mx-2' to={'/'} >MERN STORE
          </Link>
          
          <form className="search flex items-center gap-1" onSubmit={handleSearch}>
            <input type="text" name="search" className='text-sm lg:text-base  w-64 px-2 py-1 border-theme border-[2px] rounded-md outline-0 md:w-56' value={searchQuery} onChange={handleSearchChange}/>
            <button className='border-none rounded-lg px-3 py-3 text-sm lg:text-base  bg-pink-500 hover:bg-pink-600 ' onClick={handleSearch} ><BsSearch className='text-sm lg:text-base  w-3 h-3 relative'/>
            </button>
          </form>
          <div className="cart cursor-pointer absolute right-14 top-3 md:block md:top-auto md:right-auto md:relative">
            <AiOutlineShoppingCart className='text-3xl text-pink-500  ' onClick={()=>setCartVisibility(true)}/>
            
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-white rounded-full -top-3 -right-2">{cart ? cart.length : 0}
          </div>
          </div>
      </div>
      <div className={`right flex gap-2 relative items-center justify-end py-2 transition-transform duration-300 ${show ? "translate-x-0 flex-col md:flex-row": "translate-x-[1000px] flex-row"} md:translate-x-0 lg:flex-row md:gap-6 md:px-4 md:flex-1`} >
          <Link to={"/shop"} className='text-sm lg:text-base  font-semibold font-playfair' onClick={()=>{setShow(false)}} >Shop</Link>
          <Link to={"/tshirts"} className='text-sm lg:text-base  font-semibold font-playfair' onClick={()=>{setShow(false)}} >T shirts</Link>
          <Link to={"/hoodies"} className='text-sm lg:text-base  font-semibold font-playfair' onClick={()=>{setShow(false)}} >Hoodies</Link>
          <Link to={"/caps"} className='text-sm lg:text-base  font-semibold font-playfair' onClick={()=>{setShow(false)}} >Caps</Link>
          
            {localStorage.getItem("userInfo") ?
              <div className='flex flex-col gap-2 md:flex-row items-center'>
                <Link to={"/dashboard/account"} className='text-sm lg:text-base  px-2 font-semibold font-playfair' onClick={()=>{setShow(false)}} >Dashboard</Link>
                <Link to={"/"} className='flex items-center gap-2 text-sm lg:text-base  px-2 font-semibold font-playfair' onClick={handleLogout} >Logout <MdLogout/></Link>
                </div> : 
                <>
                  <Link to={"/login"} className='text-sm lg:text-base  font-semibold font-playfair' onClick={()=>{setShow(false)}} >Login</Link>
                  <Link to={"/signup"} className='text-sm lg:text-base  font-semibold font-playfair' onClick={()=>{setShow(false)}} >Sign Up</Link>
                </>
            }
      </div>
      <div className="absolute flex flex-col items-center justify-center w-full md:mx-auto top-[90px] md:top-[65px] right-0 px-40 z-50">
        {
          showSearchProducts && <Product product={product}/>
        }
      </div>
      <div className="hamburger absolute right-3 top-3 md:hidden">
        <GiHamburgerMenu className='w-7 h-7 cursor-pointer' onClick={handleHamClick}/>
      </div>
    </div>
    
    </>
    
  )
}

export default Navbar
