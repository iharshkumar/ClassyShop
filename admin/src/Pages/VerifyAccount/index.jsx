import { Button, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import LoadingButton from "@mui/lab/LoadingButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import OtpBox from '../../Components/OtpBox';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { postData } from '../../utils/api';
import { useNavigate } from 'react-router-dom'




const VerifyAccount = () => {

    const [otp, setOtp] = useState("");
    const handleOtpChange = (value) => {
        setOtp(value);
    };
    const history = useNavigate()
    const context = useContext(MyContext)


    const verifyOtp = (e) => {
        e.preventDefault();

        const actionType = localStorage.getItem("actionType")
        if (actionType !== "forgot-password") {

            postData("/api/user/verifyEmail", {
                email: localStorage.getItem("userEmail"),
                otp: otp
            }).then((res) => {
                //console.log(res)
                if (res?.error === false) {
                    // Show success message from API
                    context.alertBox("success", res?.message)
                    localStorage.removeItem("userEmail")
                    history("/login")
                } else {
                    // Show error message from API
                    context.alertBox("error", res?.message)
                }
            })

        } else {

            postData("/api/user/verify-forgot-password-otp", {
                email: localStorage.getItem("userEmail"),
                otp: otp
            }).then((res) => {
                //console.log(res)
                if (res?.error === false) {
                    // Show success message from API
                    context.alertBox("success", res?.message)
                    history("/forgot-password")
                } else {
                    // Show error message from API
                    context.alertBox("error", res?.message)
                }
            })
        }


    }

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
                    <img src="/verify.png" className='w-[100px] !m-auto w-[35%]' />
                </div>

                <h1 className='text-center text-[35px] font-[800] !mt-4'>
                    Welcome Back!<br />
                    Please verify your Email
                </h1>

                <p className='text-center text-[15px]'>
                    Otp send to &nbsp;
                    <span className='!text-blue-500 font-bold'>
                        {localStorage.getItem("userEmail")}
                    </span>
                </p>

                <br />

                <form onSubmit={verifyOtp}>
                    <OtpBox length={6} onChange={handleOtpChange} />

                    <div className='flex items-center justify-center !mt-5'>
                        <Button type="submit" className="btn-blue btn-lg w-[50%]">Verify OTP</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default VerifyAccount