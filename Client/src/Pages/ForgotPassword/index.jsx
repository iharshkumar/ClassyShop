import React, { useContext, useState } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';


const ForgotPassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const context = useContext(MyContext);
    const history = useNavigate()

    return (
        <section className='section !py-10'>
            <div className='container'>
                <div className='card !shadow-md !w-[400px] !m-auto !rounded-md !bg-white !p-4 !px-12'>
                    <h3 className='text-center text-[20px] text-black'>
                        Forgot Password
                    </h3>
                    <form className='w-full !mt-5'>
                        <FormControl variant="standard" className='w-full !mt-4 relative !text-black relative'>
                            <InputLabel htmlFor="password">
                                Password
                            </InputLabel>
                            <Input
                                id="password"
                                type={isShowPassword === false ? 'password' : 'text'}
                                name="name"
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
                        <FormControl variant="standard" className='w-full !mt-4 relative !text-black'>
                            <InputLabel htmlFor="confirm_password">
                                Confirm Password
                            </InputLabel>
                            <Input
                                id="confirm_password"
                                type={isShowPassword2 === false ? 'password' : 'text'}
                                name="password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Button className='!absolute !right-[5px] !-top-[5px] !z-[10px] !w-[30px] !h-[30px] !min-w-[35px] !rounded-full 
                                       !text-black' onClick={() => setIsShowPassword2(!isShowPassword2)}>
                                            {
                                                isShowPassword2 === false ? <FaRegEyeSlash className='text-[20px] opacity-75' /> :
                                                    <IoEyeOutline className='text-[20px] opacity-75' />
                                            }
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className='flex items-center w-full !mt-3 !mb-3'>
                            <Button className='btn-org btn-lg w-full '>Change Password</Button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;