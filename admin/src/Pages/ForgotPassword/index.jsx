import { Button, FormControlLabel } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';
import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';

const ForgotPassword = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    const [formFields, setFormFields] = useState({
        email: localStorage.getItem("userEmail"),
        newPassword: '',
        confirmPassword: ''
    })

    const context = useContext(MyContext);
    const history = useNavigate()


    const onChangeInput = (e) => {
        const { name, value } = e.target;

        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        });
    };

    
    const validateValue = Object.values(formFields).every(el => el)

    // console.log(formFields)
    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)
        if (formFields.newPassword === "") {
            context.alertBox("error", "Please enter new password ")
            setIsLoading(false)
            return false
        }

        if (formFields.confirmPassword !== formFields.newPassword) {
            context.alertBox("error", "Password and confirm password doesn't match")
            setIsLoading(false)
            return false
        }


        postData(`/api/user/reset-password`, formFields).then((res) => {
            // console.log(res)
            if (res?.error === false) {
                localStorage.removeItem("userEmail")
                localStorage.removeItem("actionType")
                context.alertBox("success", res?.message)
                setIsLoading(false)
                history('/login')
            } else {
                context.alertBox("error", res?.message)
            }

        })
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/ECOM-logo-RGB.png" className='!m-auto w-[35%]' />
                </div>

                <h1 className='text-center text-[35px] font-[800] !mt-4'>
                    Having trouble to sign in? <br />
                    Reset your password.
                </h1>


                <br />


                <form className="w-full !px-8 !mt-3" onSubmit={handleSubmit}>
                    <div className='form-group !mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] !mb-1'>Email</h4>
                        <input type="email"
                            placeholder='Enter your email'
                            className='w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] !rounded-md 
                        focus:!border-[rgba(0,0,0,0.7)] focus:!outline-none !px-3' />
                    </div>



                    <div className='flex items-center w-full !mt-3 !mb-3'>
                            <Button type='submit'
                                disabled={!validateValue} className="btn-blue btn-lg w-full !h-[40px] !min-h-[40px] !py-0">
                                {
                                    isLoading === true ? <CircularProgress color="inherit" />
                                        :
                                        "Reset Password"
                                }
                            </Button>
                        </div>
                    
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