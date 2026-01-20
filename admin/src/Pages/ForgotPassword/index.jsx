import { Button, FormControlLabel } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";



const ForgotPassword = () => {


    return (
        <section className="w-full">
            <header className='w-full fixed !top-0 !left-0 !px-4 !py-3 flex !items-center !justify-between !z-50'>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/ECOM-logo-RGB.png" className='w-[200px]' />
                </Link>


                <div className='flex items-center'>
                    <NavLink to="/login" exact={true} activeClassname="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <CiLogin className='text-[18px]' />
                            Login
                        </Button>
                    </NavLink>

                    <NavLink to="/sign-up" exact={true} activeClassname="isActive">

                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <CiUser className='text-[18px]' />
                            Sign Up
                        </Button>
                    </NavLink>
                </div>
            </header>




            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/070/103/555/small/textured-white-abstract-surface-with-soft-blue-background-3-d-render-photo.jpg"
                className="fixed inset-0 w-screen h-screen object-cover -z-10 opacity-50"
            />

            <div className='!mt-30 loginBox card w-[600px] !h-[auto] !pb-20 !mx-auto !pt-20 relative z-50'>
                <div className='!text-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/ECOM-logo-RGB.png" className='!m-auto w-[35%]' />
                </div>

                <h1 className='text-center text-[35px] font-[800] !mt-4'>
                    Having trouble to sign in? <br />
                    Reset your password.
                </h1>


                <br />


                <form className="w-full !px-8 !mt-3">
                    <div className='form-group !mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] !mb-1'>Email</h4>
                        <input type="email"
                            placeholder='Enter your email'
                            className='w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] !rounded-md 
                        focus:!border-[rgba(0,0,0,0.7)] focus:!outline-none !px-3' />
                    </div>



                    <Button className='btn-blue btn-lg w-full'>Reset Password</Button>
                    
                    <br />
                    <br />

                    <div className='text-center flex items-center justify-center gap-3'>
                        <span>Don't want to reset?</span>
                        <Link to="/forgot-password" className='!text-blue-500 text-[15px] font-[700] hover:underline hover:!text-[rgba(0,0,0,0.8)]'>
                            Sign in?
                        </Link>
                    </div>
                </form>


            </div>
        </section>
    )
}

export default ForgotPassword