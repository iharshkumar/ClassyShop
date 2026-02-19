import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import ProductDetails from './Pages/ProductDetails';
import { createContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ProductZoom } from "./components/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponents from "./components/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CartPage from "./Pages/Cart";
import Verify from "./Pages/Verify";
import ForgotPassword from "./Pages/ForgotPassWord/index.jsx";
import toast, { Toaster } from 'react-hot-toast';
import Checkout from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount/index.jsx";
import MyList from "./Pages/MyList/index.jsx";
import Orders from "./Pages/Orders";
import { fetchDataFromApi } from "./utils/api.js";

const alertBox = (type, msg) => {
  if (type === "success") {
    toast.success(msg);
  }
  if (type === "error") {
    toast.error(msg);
  }
};

const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = React.useState('lg');
  const [fullWidth] = React.useState(true)
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(() => {
    const token = localStorage.getItem('accesstoken');
    return token !== undefined && token !== null && token !== "";
  })
  const [userData, setUserData] = useState(null)
  const apiUrl = import.meta.env.VITE_API_URL;


  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => {
    setOpenCartPanel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('accesstoken')
    if (token !== undefined && token !== null && token !== "") {
      fetchDataFromApi(`/api/user/user-details`).then((res) => {
        setUserData(res.data)
        if (res?.response?.data?.error === true) {
          if (res?.response?.data?.message === "You have not logged in") {
            localStorage.removeItem("accesstoken")
            localStorage.removeItem("refreshToken")
            alertBox("error", "Your session is closed please login again")
            window.location.href="/login"
            setIsLogin(false)
          }
        }
      })
    }
  }, [])

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    isLogin,
    setIsLogin,
    alertBox,
    userData,
    setUserData
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            {isLogin &&
              <>
                <Route path={'/'} exact={true} element={<Home />} />
                <Route path={'/productListing'} exact={true} element={<ProductListing />} />
                <Route path={'/product/:id'} exact={true} element={<ProductDetails />} />
                <Route path={'/login'} exact={true} element={<Login />} />
                <Route path={'/register'} exact={true} element={<Register />} />
                <Route path={'/cart'} exact={true} element={<CartPage />} />
                <Route path={'/verify'} exact={true} element={<Verify />} />
                <Route path={'/forgot-password'} exact={true} element={<ForgotPassword />} />
                <Route path={'/checkout'} exact={true} element={<Checkout />} />
                <Route path={'/my-account'} exact={true} element={<MyAccount />} />
                <Route path={'/my-list'} exact={true} element={<MyList />} />
                <Route path={'/my-orders'} exact={true} element={<Orders />} />
              </>
            }
            {!isLogin &&
              <>
                <Route path={'/'} exact={true} element={<Home />} />
                <Route path={'/productListing'} exact={true} element={<ProductListing />} />
                <Route path={'/product/:id'} exact={true} element={<ProductDetails />} />
                <Route path={'/login'} exact={true} element={<Login />} />
                <Route path={'/register'} exact={true} element={<Register />} />
                <Route path={'/cart'} exact={true} element={<CartPage />} />
                <Route path={'/verify'} exact={true} element={<Verify />} />
                <Route path={'/forgot-password'} exact={true} element={<ForgotPassword />} />
                <Route path={'/checkout'} exact={true} element={<Checkout />} />
                <Route path={'/my-account'} exact={true} element={<Home />} />
                <Route path={'/my-list'} exact={true} element={<Home />} />
                <Route path={'/my-orders'} exact={true} element={<Home />} />
              </>
            }
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailModal"
      >

        <DialogContent>
          <div className="flex items-center w-full productDetailModalContainer relative">
            <Button className="w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
             !absolute top-[15px] right-[15px] !bg-[#f1f1f1]" onClick={handleCloseProductDetailsModal}>
              <IoCloseSharp className="text-[20px]" /></Button>
            <div className="col1 w-[40%] !pl-3 !pr-2">
              <ProductZoom className='w-full' />
            </div>

            <div className="col2 w-[50%] !py-5 !px-8 !pr-16 productContent">
              <ProductDetailsComponents />
            </div>
          </div>
        </DialogContent>
      </Dialog>




    </>
  )
}

export default App;

export { MyContext };
