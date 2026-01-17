import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import "../../index.css";
import './App.css';
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import { createContext } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const MyContext = createContext();
function App() {
  const[isSidebarOpen,setisSidebarOpen]=useState(true)
  const[isLogin,setIsLogin]=useState(false)
  
  const router = createBrowserRouter([
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


    {
      path: '/login',
      exact: true,
      element: (
        <>
          <Login/>
        </>
      )
    },

    {
      path: '/sign-up',
      exact: true,
      element: (
        <>
          <SignUp/>
        </>
      )
    }
  ])

  const values ={
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin
  };


  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  )
}

export default App;
export {MyContext}
