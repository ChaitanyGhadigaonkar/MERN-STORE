import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tshirts from "./pages/Tshirts"
import Hoodies from "./pages/Hoodies"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Product from './pages/product';
import Caps from './pages/Caps';
import CheckOut from './pages/CheckOut';
import { useEffect } from 'react';
import { fetchCarts } from './slices/cartSlice';
import { fetchProducts} from './slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Toast from './components/Toast';
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchCarts())
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Toast/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tshirts' element={<Tshirts/> } />
          <Route path='/hoodies' element={<Hoodies />} />
          <Route path='/caps' element={<Caps />} />
          <Route path='/product/:slug' element={<Product />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
