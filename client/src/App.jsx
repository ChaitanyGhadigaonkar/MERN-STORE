import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Product from './pages/product';
import CheckOut from './pages/CheckOut';
import { useEffect, useState } from 'react';
import { fetchCarts, setInitialTotal } from './slices/cartSlice';
import { fetchProducts} from './slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Toast from './components/Common/Toast';
import SearchProducts from './pages/SearchProducts';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import ForgotPassword from './pages/ForgotPassword';
import {FaFilter} from "react-icons/fa"
import Collections from './pages/Collections';

const collection = {
  tshirt :{
    head : "Explore our Tshirts Collection",
    paragraph : "Welcome to our T-Shirts Collection! Discover effortless style, comfort, and versatility. Choose from a variety of necklines, colors, prints, and graphics. Our t-shirts are crafted from high-quality, breathable fabrics for a perfect fit. From casual to elevated looks, our collection has you covered. Experience durability and timeless style with our T-Shirts Collection today!",
    category : "tshirt"
  },
  hoodie :{
    head : "Explore our Hoodies Collection",
    paragraph : "Welcome to our Hoodies Collection! Discover fashion-forward designs, premium quality materials, and ultimate comfort. Choose from a diverse range of colors, prints, and patterns. Our hoodies are made from soft, breathable fabrics with a plush interior lining. Find your perfect fit with adjustable features and enjoy the attention to detail in every hoodie. Elevate your style and stay cozy with our Hoodies Collection today!",
    category : "hoodie"
  },
  cap :{
    head : "Explore our Caps Collection",
    paragraph : "Welcome to our Caps Collection! Discover fashion-forward designs, premium quality materials, and ultimate comfort. Choose from a diverse range of colors, prints, and patterns. Our Caps are made from soft, breathable fabrics with a plush interior lining. Find your perfect fit with adjustable features and enjoy the attention to detail in every hoodie. Elevate your style and stay cozy with our Caps Collection today!",
    category : "cap"
  },
}


function App() {

  const dispatch = useDispatch()
  const [showFilter, setShowFilter] = useState(false)
  const {cart} = useSelector(state=>state.cart)
  const {userInfo} = useSelector(state=>state.user)
  useEffect(()=>{
    // dispatch(fetchProducts())
    dispatch(fetchCarts())
  },[userInfo])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Toast/>
        <div className="absolute top-28 md:top-20 right-8 cursor-pointer" onClick={()=>setShowFilter(prev=>!prev)}><FaFilter className='text-2xl text-pink-500'/></div>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/shop' element={<Shop showFilter={showFilter} setShowFilter={setShowFilter}/>} />
          
          <Route path='/tshirts' element={<Collections key={collection.tshirt.category} head={collection.tshirt.head} paragraph={collection.tshirt.paragraph} category={collection.tshirt.category}/> }  />

          <Route path='/hoodies' element={<Collections key={collection.hoodie.category} head={collection.hoodie.head} paragraph={collection.hoodie.paragraph} category={collection.hoodie.category} /> } />

          <Route path='/caps' element={<Collections key={collection.cap.category} head={collection.cap.head} paragraph={collection.cap.paragraph} category={collection.cap.category}/> }  />

          <Route path='/product/:slug' element={<Product />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/products' element={<SearchProducts />} />
          <Route path='/dashboard/:field' element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
