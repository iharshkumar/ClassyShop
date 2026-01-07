import React, { useContext, useState } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { MdOutlineMail } from 'react-icons/md';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { MyContext } from '../../App';


const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    const context = useContext(MyContext);
    const history = useNavigate()

    const forgotPassword = () => {
        context.openAlertBox("Success","OTP Send");
        history('/verify');

    }
    return (
        <section className='section !py-10'>
            <div className='container'>
                <div className='card !shadow-md !w-[400px] !m-auto !rounded-md !bg-white !p-4 !px-12'>
                    <h3 className='text-center text-[20px] text-black'> Login to your Account</h3>
                    <form className='w-full !mt-5'>
                        <FormControl variant="standard" className='w-full !mt-4 relative !text-black'>
                            <InputLabel htmlFor="email">
                                Email Id
                            </InputLabel>
                            <Input
                                id="email"
                                type="email"
                                name="name"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <MdOutlineMail className='!absolute !right-[10px] !-top-[5px] !z-[10px] !w-[30px] !h-[20px] !min-w-[20px]  !rounded-full 
                                       !text-black !opacity-75' />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant="standard" className='w-full !mt-4 relative !text-black'>
                            <InputLabel htmlFor="password">
                                Password
                            </InputLabel>
                            <Input
                                id="password"
                                type={isShowPassword === false ? 'password' : 'text'}
                                name="password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Button className='!absolute !right-[5px] !-top-[5px] !z-[10px] !w-[30px] !h-[30px] !min-w-[35px] !rounded-full 
                                       !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === false ? <FaRegEyeSlash className='text-[20px] opacity-75' /> :
                                                    <IoEyeOutline className='text-[20px] opacity-75' />
                                            }
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <a className='link cursor-pointer text-[14px] font-[600]' onClick={forgotPassword}>Forgot Password?</a>

                        <div className='flex items-center w-full !mt-3 !mb-3'>
                            <Button className='btn-org btn-lg w-full '>Login</Button>
                        </div>

                        <p className='text-center'>Not Registered?  <Link className='link text-[14px] font-[5000] !text-[#ff5252]' to="/register">Sign Up</Link></p>

                        <p className='text-center font-[500] !mb-5'> Or continue with social account</p>
                        <Button className='flex w-full gap-3 !bg-[#f1f1f1] btn-lg !text-black !mb-3'> <FcGoogle className='text-[20px]' /> Login With Google</Button>
                        <Button className='flex w-full gap-3 !bg-[#f1f1f1] btn-lg !text-black !mb-3'> <AiFillApple className='text-[20px]' /> Login With Apple Id</Button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;