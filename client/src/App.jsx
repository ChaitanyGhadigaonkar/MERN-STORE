import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import CheckOut from "./pages/CheckOut";
import { useEffect, useState } from "react";
import { fetchCarts, setInitialTotal } from "./slices/cartSlice";
import { fetchProducts } from "./slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./components/Common/Toast";
import SearchProducts from "./pages/SearchProducts";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./Admin/pages/Dashboard";
import Shop from "./pages/Shop";
import ForgotPassword from "./pages/ForgotPassword";
import { FaFilter } from "react-icons/fa";
import Collections from "./pages/Collections";
import { fetchWishlistItems } from "./slices/wishlistSlice";
import { fetchAddress } from "./slices/addressSlice";
import { collection } from "./constants";
import Header from "./Admin/components/common/Header";
import Sidebar from "./Admin/components/common/Sidebar";
import Products from "./Admin/pages/Products";
import Orders from "./Admin/pages/Orders";
import Users from "./Admin/pages/Users";
import Modal from "./Admin/components/modals/Modal";
import PageNotFound from "./pages/PageNotFound";
import useDarkTheme from "./Hooks/useDarkTheme";

function App() {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(
    <>This is Modal Component</>
  );

  const [theme, setTheme] = useDarkTheme("light");

  const { cart } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchProducts());
    if (localStorage.getItem("userInfo") && userInfo?.role !== "admin") {
      dispatch(fetchCarts());
      dispatch(fetchWishlistItems());
      dispatch(fetchAddress());
    }
  }, [userInfo]);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 768) {
        // small screen
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [window.onresize]);

  return (
    <div className="dark:text-[#EEF5FF] dark:bg-[#222831]">
      <BrowserRouter>
        <Modal
          showModal={modalOpen}
          setModalOpen={setModalOpen}
          children={modalChildren}
        />
        {userInfo && userInfo.role === "admin" ? (
          <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto ">
            <Header
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              setTheme={setTheme}
              theme={theme}
            />
            <div className={`flex-grow flex-1 `}>
              <div className="flex flex-grow w-full">
                <aside className="w-24 md:w-1/5 flex items-center justify-center">
                  <Sidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                  />
                </aside>
                <div className="flex-grow flex-1 w-full">
                  <Routes>
                    <Route
                      index
                      path="/"
                      element={<AdminDashboard />}
                    />
                    <Route
                      path="/products"
                      element={
                        <Products
                          setModalChildren={setModalChildren}
                          setModalOpen={setModalOpen}
                        />
                      }
                    />
                    <Route
                      path="/orders"
                      element={
                        <Orders
                          setModalChildren={setModalChildren}
                          setModalOpen={setModalOpen}
                        />
                      }
                    />
                    <Route
                      path="/users"
                      element={
                        <Users
                          setModalChildren={setModalChildren}
                          setModalOpen={setModalOpen}
                        />
                      }
                    />
                    <Route
                      path="*"
                      element={<PageNotFound />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto ">
            <Navbar />
            <Toast />
            <div
              className="absolute top-28 md:top-20 right-8 cursor-pointer"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <FaFilter className="text-2xl text-pink-500" />
            </div>
            <Routes>
              <Route
                index
                path="/"
                element={<Home />}
              />
              <Route
                path="/shop"
                element={
                  <Shop
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                  />
                }
              />

              <Route
                path="/tshirts"
                element={
                  <Collections
                    key={collection.tshirt.category}
                    head={collection.tshirt.head}
                    paragraph={collection.tshirt.paragraph}
                    category={collection.tshirt.category}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                  />
                }
              />

              <Route
                path="/hoodies"
                element={
                  <Collections
                    key={collection.hoodie.category}
                    head={collection.hoodie.head}
                    paragraph={collection.hoodie.paragraph}
                    category={collection.hoodie.category}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                  />
                }
              />

              <Route
                path="/caps"
                element={
                  <Collections
                    key={collection.cap.category}
                    head={collection.cap.head}
                    paragraph={collection.cap.paragraph}
                    category={collection.cap.category}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                  />
                }
              />

              <Route
                path="/product/:slug"
                element={<Product />}
              />
              <Route
                path="/checkout"
                element={<CheckOut />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<SignUp />}
              />
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/products"
                element={<SearchProducts />}
              />
              <Route
                path="/dashboard/:field"
                element={<Dashboard />}
              />
              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
