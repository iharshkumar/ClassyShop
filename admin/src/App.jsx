import { useState } from 'react'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import "../../index.css";
import './App.css';
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import { createContext } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';
import AddProduct from './Pages/Products/addProduct';
import { Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from 'react-icons/io';
import Slide from '@mui/material/Slide';
import HomeSliderBanners from './Pages/HomeSliderBanners';
import AddHomeSlide from './Pages/HomeSliderBanners/addHomeSlide';
import CategoryList from './Pages/Category';
import AddCategory from './Pages/Category/addCategory';
import SubCategoryList from './Pages/Category/subCatList';
import AddSubCategory from './Pages/Category/addSubCategory';
import Users from './Pages/Users';
import Orders from './Pages/Orders';
import ForgotPassword from './Pages/ForgotPassword';
import VerifyAccount from './Pages/VerifyAccount';
import ChangePassword from './Pages/ChangePassword';
import { fetchDataFromApi } from "./utils/api.js";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Profile from './Pages/Profile/index.jsx';
import AddAddress from './Pages/Address/addAddress.jsx';


const alertBox = (type, msg) => {
  if (type === "success") {
    toast.success(msg);
  }
  if (type === "error") {
    toast.error(msg);
  }
};



const Transition = React.forwardRef(function Transition(
  props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();
function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true)
  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState(null)
  const [address, setAddress] = useState([])
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: ''
  })


  useEffect(() => {
    const token = localStorage.getItem('accesstoken')
    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true)


      fetchDataFromApi(`/api/user/user-details`).then((res) => {
        // console.log("===== I am here ---- 1", res.status)
        //console.log(res)
        setUserData(res.data)
        if (res?.status !== 200) {
          localStorage.removeItem("accesstoken")
          localStorage.removeItem("refreshToken")

          alertBox("error", "Your session is closed please login again")
          window.location.href = "/login"
        }
      })
    }
    else {
      setIsLogin(false)
    }

  }, [isLogin])

  const router = createBrowserRouter([

    //home router
    {
      path: '/',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      )
    },


    //login router
    {
      path: '/login',
      exact: true,
      element: (
        <>
          <Login />
        </>
      )
    },


    //sign-up router
    {
      path: '/sign-up',
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      )
    },

    //forgot-password router
    {
      path: '/forgot-password',
      exact: true,
      element: (
        <>
          <ForgotPassword />
        </>
      )
    },


    //verify-account router
    {
      path: '/verify-account',
      exact: true,
      element: (
        <>
          <VerifyAccount />
        </>
      )
    },


    //change password router
    {
      path: '/change-password',
      exact: true,
      element: (
        <>
          <ChangePassword />
        </>
      )
    },

    // products router
    {
      path: '/products',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <Products />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: '/homeSlider/list',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <HomeSliderBanners />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: '/category/list',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <CategoryList />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: '/subCategory/list',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <SubCategoryList />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: '/users',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <Users />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: '/orders',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <Orders />
              </div>
            </div>
          </section>
        </>
      )
    },


    {
      path: '/profile',
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0 transition-all'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <Profile />
              </div>
            </div>
          </section>
        </>
      )
    }







  ])


  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    alertBox,
    userData,
    setUserData,
    setAddress,
    address
  };


  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
        <Toaster />
        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({
            open: false
          })}
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsOpenFullScreenPanel({
                  open: false
                })}
                aria-label="close"
              >
                <IoMdClose className='!text-gray-800' />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className='text-gray-800'>{isOpenFullScreenPanel?.model}</span>
              </Typography>
            </Toolbar>
          </AppBar>


          {
            isOpenFullScreenPanel?.model === "Add Product" && <AddProduct />
          }

          {
            isOpenFullScreenPanel?.model === "Add Home Slide" && <AddHomeSlide />
          }

          {
            isOpenFullScreenPanel?.model === "Add New Category" && <AddCategory />
          }

          {
            isOpenFullScreenPanel?.model === "Add New Sub Category" && <AddSubCategory />
          }

          {
            isOpenFullScreenPanel?.model === "Add New Address" && <AddAddress />
          }



        </Dialog>
      </MyContext.Provider>
    </>
  )
}

export default App;
export { MyContext }
