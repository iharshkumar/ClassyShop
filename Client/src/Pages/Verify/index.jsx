import React, { useContext, useEffect, useState } from 'react'
import OtpBox from '../../components/OtpBox'
import Button from '@mui/material/Button';
import { postData } from '../../utils/api';
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../App';

const Verify = () => {

    const [otp, setOtp] = useState("");
    const handleOtpChange = (value) => {
        setOtp(value);
    };
    const history = useNavigate()
    const context = useContext(MyContext)

    const verifyOtp = (e) => {
        e.preventDefault();
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
            }else{
                // Show error message from API
                context.alertBox("error", res?.message)
            }
        })
    }

    return (
        <section className='section !py-10'>
            <div className='container'>
                <div className='card !shadow-md !w-[400px] !m-auto !rounded-md !bg-white !p-4 !px-12'>
                    <div className='text-center flex items-center justify-center'>
                        <img src="/verify.png" width="80" />
                    </div>
                    <h3 className='text-center text-[20px] text-black !mt-4 !mb-3'> Verify OTP</h3>

                    <p className='text-center !mt-0 !mb-4'>OTP sent to <span className='text-red-500 text-bold'>{localStorage.getItem("userEmail")}</span></p>

                    <form onSubmit={verifyOtp}>
                        <OtpBox length={6} onChange={handleOtpChange} />

                        <div className='flex items-center justify-center !mt-5'>
                            <Button type="submit" className="btn-org btn-lg w-full">Verify OTP</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Verify;