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
import { useContext } from 'react';
import { MyContext } from '../../App';
import { postData } from '../../utils/api';
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';




const Login = () => {

    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [loadingFb, setLoadingFb] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    function handleClickGoogle() {
        setLoadingGoogle(true);
    }

    function handleClickFb() {
        setLoadingFb(true);
    }

    const [isLoading, setIsLoading] = useState(false);

    const context = useContext(MyContext);
    const history = useNavigate()

    const forgotPassword = () => {

        if (formFields.email === "") {
            context.alertBox("error", "Please enter email id")
            return false
        }
        else {
            context.alertBox("success", `OTP Send to your ${formFields.email}`)
            localStorage.setItem("userEmail", formFields.email)
            localStorage.setItem("actionType", "forgot-password")

            postData("/api/user/forgot-password", {
                email: formFields.email,
            }).then((res) => {
                //console.log(res)
                if (res?.error === false) {
                    // Show success message from API
                    context.alertBox("success", res?.message)
                    history("/verify")
                } else {
                    // Show error message from API
                    context.alertBox("error", res?.message)
                }
            })
        }


    }

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
        if (formFields.email === "") {
            context.alertBox("error", "Please enter email id")
            return false
        }

        if (formFields.password === "") {
            context.alertBox("error", "Please enter password")
            return false
        }
        postData("/api/user/login", formFields, { withCredentials: true }).then((res) => {
            //console.log(res)
            if (res?.error === false) {
                setIsLoading(false)
                context.alertBox("success", res?.message)
                setFormFields({
                    email: "",
                    password: ""
                })


                localStorage.setItem("accesstoken", res?.data?.accesstoken)
                localStorage.setItem("refreshToken", res?.data?.refreshToken)


                context.setIsLogin(true)

                history("/")
            } else {
                context.alertBox("error", res?.message)
                setIsLoading(false)
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
                    Welcome Back!<br />
                    Sign in with your credentials
                </h1>


                <div className='flex items-center justify-center w-full !mt-5 gap-4'>

                    <LoadingButton
                        size="small"
                        onClick={handleClickGoogle}
                        endIcon={<FcGoogle />}
                        loading={loadingGoogle}
                        loadingPosition="end"
                        variant="outlined"
                        className='!bg-none !py-2  !text-[16px] !capitalize !px-5 !text-[rgba(0,0,0,0.8)]'

                    >
                        Signin with Google
                    </LoadingButton>

                    <LoadingButton
                        size="small"
                        onClick={handleClickFb}
                        endIcon={<FaFacebook />}
                        loading={loadingFb}
                        loadingPosition="end"
                        variant="outlined"
                        className='!bg-none !py-2 !text-[16px] !capitalize !px-5 !text-[rgba(0,0,0,0.8)]'

                    >
                        Signin with Facebook
                    </LoadingButton>
                </div>

                <br />

                <div className='w-full flex items-center justify-center gap-3'>
                    <span className='flex items-center w-[100px] h-[1px] !bg-[rgba(0,0,0,0.2)]'></span>
                    <span className='text-[15px] font-[500]'>Or, Sign in with your email</span>
                    <span className='flex items-center w-[100px] h-[1px] !bg-[rgba(0,0,0,0.2)]'></span>
                </div>
                <br />

                <form className="w-full !px-8 !mt-3" onSubmit={handleSubmit}>
                    <div className='form-group !mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] !mb-1'>Email</h4>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formFields.email}
                            disabled={isLoading === true ? true : false}
                            onChange={onChangeInput}
                            className='w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] !rounded-md 
                        focus:!border-[rgba(0,0,0,0.7)] focus:!outline-none !px-3' />
                    </div>

                    <div className='form-group !mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] !mb-1'>Password</h4>
                        <div className='relative w-full'>
                            <input
                                id="password"
                                type={isPasswordShow === false ? 'password' : 'text'}
                                value={formFields.password}
                                name="password"
                                disabled={isLoading === true ? true : false}
                                onChange={onChangeInput}
                                className='w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] !rounded-md 
                        focus:!border-[rgba(0,0,0,0.7)] focus:!outline-none !px-3' />

                            <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-500'
                                onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                {
                                    isPasswordShow === false ?
                                        (

                                            <FaEye className='text-[18px] ' />
                                        )
                                        :
                                        (

                                            <FaEyeSlash className='text-[18px] ' />
                                        )
                                }
                            </Button>
                        </div>
                    </div>

                    <div className='form-group !mb-4 w-full flex items-center justify-between'>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remember Me"
                        />

                        <Link to="/forgot-password" className='!text-blue-500 text-[15px] font-[700] hover:underline hover:!text-[rgba(0,0,0,0.8)]' onClick={forgotPassword}>

                            Forgot Password?
                        </Link>
                    </div>

                    <div className='flex items-center w-full !mt-3 !mb-3'>
                        <Button type='submit'
                            disabled={!validateValue} className="btn-blue btn-lg w-full !h-[40px] !min-h-[40px] !py-0">
                            {
                                isLoading === true ? <CircularProgress color="inherit" />
                                    :
                                    "Sign In"
                            }
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login