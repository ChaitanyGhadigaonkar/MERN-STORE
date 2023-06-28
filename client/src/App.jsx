import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Tshirts from "./pages/Tshirts"
import Hoodies from "./pages/Hoodies"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Product from './pages/product';
import Caps from './pages/Caps';
import CheckOut from './pages/CheckOut';
import { useEffect } from 'react';
import { fetchCarts, setInitialTotal } from './slices/cartSlice';
import { fetchProducts} from './slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Toast from './components/Common/Toast';
import SearchProducts from './pages/SearchProducts';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
function App() {

  const dispatch = useDispatch()
  const {cart} = useSelector(state=>state.cart)
  const {userInfo} = useSelector(state=>state.user)
  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchCarts())
  },[userInfo])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Toast/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/tshirts' element={<Tshirts/> } />
          <Route path='/hoodies' element={<Hoodies />} />
          <Route path='/caps' element={<Caps />} />
          <Route path='/product/:slug' element={<Product />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products' element={<SearchProducts />} />
          <Route path='/dashboard/:field' element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
